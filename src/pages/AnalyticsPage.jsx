import { useEffect, useState } from "react";

import {
  MousePointerClick,
  Globe,
  Monitor,
  Smartphone,
  BarChart3,
} from "lucide-react";

import Navbar from "../components/Navbar";

import {
  getAllUrls,
  getAnalytics
} from "../services/urlService";

import AnalyticsFilters from "../components/analytics/AnalyticsFilters";
import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import UrlPerformanceTable from "../components/analytics/UrlPerformanceTable";
import BrowserChart from "../components/analytics/BrowserChart";
import DeviceChart from "../components/analytics/DeviceChart";
import CountryChart from "../components/analytics/CountryChart";
import ClickChart from "../components/analytics/ClickChart";
import RecentActivityTable from "../components/analytics/RecentActivityTable";
import AnalyticsCard from "../components/analytics/AnalyticsCards";

function AnalyticsPage() {

  const [recentLinks, setRecentLinks] = useState([]);

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  useEffect(() => {

    const fetchUrls = async () => {

      try {

        const urls =
          await getAllUrls();

        const analyticsData =
          await getAnalytics();

        setRecentLinks(urls);

        setAnalytics(
          analyticsData
        );

        setRecentLinks(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchUrls();

  }, []);

  if ( loading || !analytics) {

    return (

      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">

        Loading Analytics...

      </div>
    );
  }

  const totalClicks =
    recentLinks.reduce(
      (total, link) =>
        total + (link.clickCount || 0),
      0
    );

  const activeLinks =
    recentLinks.filter(
      (link) => !link.expired
    ).length;

  const expiredLinks =
    recentLinks.filter(
      (link) => link.expired
    ).length;

  const filteredUrls = recentLinks.filter(
    (link) => {

      const matchesSearch =

        link.shortCode
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesStatus =

        statusFilter === "ALL"

          ? true

          : statusFilter === "ACTIVE"

          ? !link.expired

          : link.expired;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <Navbar />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <AnalyticsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <AnalyticsCard
            title="Total URLs"
            value={recentLinks.length}
            icon={<Globe size={24} />}
          />

          <AnalyticsCard
            title="Total Clicks"
            value={totalClicks}
            icon={<MousePointerClick size={24} />}
          />

          <AnalyticsCard
            title="Active Links"
            value={activeLinks}
            icon={<Monitor size={24} />}
          />

          <AnalyticsCard
            title="Expired Links"
            value={expiredLinks}
            icon={<Smartphone size={24} />}
          />

        </div>

        <AnalyticsFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <UrlPerformanceTable
          filteredUrls={filteredUrls}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

          <BrowserChart
            data={
              analytics.browserStats
            }
          />

          <DeviceChart
            data={
              analytics.deviceStats
            }
          />

          <CountryChart />

          <ClickChart
            data={
              analytics.weeklyClicks
            }
          />

        </div>

        <div className="mt-10">

          <RecentActivityTable
              data={ analytics.recentActivities}

          />

        </div>

      </section>

    </div>
  );
}

export default AnalyticsPage;