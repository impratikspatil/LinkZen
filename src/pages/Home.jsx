import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import DashboardPreview from "../components/DashboardPreview";
import Dashboard from "./Dashboard";
import RecentLinksTable from "../components/RecentLinksTable";
import RecentLinksTablePreview from "../components/RecentLinksTablePreview";
import Footer from "../components/Footer";

function Home() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <Dashboard />

      {/* <RecentLinksTable /> */}
      <RecentLinksTablePreview />

      <Footer />

    </div>
  );
}

export default Home;