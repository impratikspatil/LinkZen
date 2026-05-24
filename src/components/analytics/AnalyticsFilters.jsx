function AnalyticsFilters({

  searchTerm,
  setSearchTerm,

  statusFilter,
  setStatusFilter

}) {

  return (

    <div className="flex flex-col md:flex-row gap-4 mb-8">

      <input
        type="text"
        placeholder="Search short URL..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
      >

        <option value="ALL">
          All Links
        </option>

        <option value="ACTIVE">
          Active
        </option>

        <option value="EXPIRED">
          Expired
        </option>

      </select>

    </div>
  );
}

export default AnalyticsFilters;