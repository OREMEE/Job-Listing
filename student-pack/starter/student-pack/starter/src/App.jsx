import { useState, useEffect } from "react";
import LoadCard from "./components/LoadingCard";
import Card from "./components/Card";

// TODO: Replace this with your hosted API URL when ready
const API_URL = "https://jobs-api-l3e2.onrender.com/api/jobs";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // TODO: Write your filter logic here
  // Hint: Only show a job if ALL active filters appear in its tags
  // A job's tags = [...job.languages, ...job.tools, job.role, job.level]
  const visibleJobs = jobs.filter((job) => {
    // If no filters are active, show all jobs
    if (filters.length === 0) return true;

    // Check if job matches ALL active filters
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter));
  });

  // TODO: Write handlers for adding and removing filter tags
  function handleTagClick(tag) {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  }

  function handleRemoveFilter(tag) {
    setFilters(filters.filter((f) => f !== tag));
  }

  function handleClearFilters() {
    setFilters([]);
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center p-8 bg-white rounded-card shadow-card border-t-4 border-terra">
          <p className="text-xl font-display font-bold text-espresso">
            Connection Error
          </p>
          <p className="text-brown-mid font-body mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-terra text-white font-body font-bold rounded-lg hover:bg-terra-light transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* HERO  */}
      <header
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, #3D2B1F 0%, #1C1008 55%, #0d0804 100%)",
          minHeight: "400px",
        }}
      >
     
        <div
          className="absolute top-10 left-1/3 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "#C4622D", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full opacity-10 pointer-events-none"
          style={{ background: "#D4922A", filter: "blur(60px)" }}
        />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div className="lg:max-w-xl p-10">
            <p className="text-amber-light text-xs font-body font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="inline-block w-1 h-4 bg-terra rounded-full" />
              247 new roles this week
            </p>
            <h1 className="text-white leading-tight mb-5 text-5xl lg:text-7xl font-display font-bold">
              Find your next
              <br />
              <em className="text-terra" style={{ fontStyle: "italic" }}>
                great role.
              </em>
            </h1>
            <p className="text-sand font-body text-base sm:text-lg leading-relaxed max-w-md">
              Curated listings for developers. Filter by stack, seniority, and
              location — then send that application.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-row lg:flex-col gap-8 lg:gap-4 lg:text-left">
            <div>
              <p className="text-bro
              
              
              wn-mid font-body text-xs font-bold uppercase tracking-widest mb-1">
                Open Roles
              </p>
              <p className="text-white font-display font-bold text-4xl">
                {isLoading ? "—" : jobs.length}
              </p>
            </div>
            <div>
              <p className="text-brown-mid font-body text-xs font-bold uppercase tracking-widest mb-1">
                Companies Hiring
              </p>
              <p className="text-amber-light font-display font-bold text-4xl">
                {isLoading
                  ? "—"
                  : [...new Set(jobs.map((j) => j.company))].length}
              </p>
            </div>
            <div>
              <p className="text-brown-mid font-body text-xs font-bold uppercase tracking-widest mb-1">
                Remote-Friendly
              </p>
              <p className="text-terra font-display font-bold text-4xl">60%</p>
            </div>
          </div>
        </div>
        {/* svg wave  */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-26"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#FAF7F2"
            />
          </svg>
        </div>
      </header>

      <main className="max-w-[1110px] mx-auto px-6 py-10">
        {filters.length > 0 && (
          <div className="bg-white p-6 rounded-card shadow-filter -mt-20 mb-10 relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter icon */}
              <svg
                className="text-terra shrink-0"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M0 1h18M3 7h12M6 13h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
                            <div className="w-px h-lg-6 bg-sand-light" />
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="flex overflow-hidden rounded-lg bg-terra-pale"
                >
                  <span className="px-3 py-1.5 text-terra font-body font-bold text-sm">
                    {filter}
                  </span>
                  <button
                    onClick={() => handleRemoveFilter(filter)}
                    className="bg-terra hover:bg-espresso px-3 text-white transition-colors font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleClearFilters}
              className="text-terra font-body font-bold hover:text-espresso hover:underline transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
        {/* open position  */}
        <div className="flex items-center gap-4 mb-10 mt-4">
          <h4 className="text-espresso font-display font-bold text-2xl sm:text-3xl whitespace-nowrap">
            Open positions
          </h4>
          <div className="flex-1 h-px bg-gradient-to-r from-terra/40 to-transparent" />
          {!isLoading && (
            <span className="text-terra font-body text-sm font-semibold">
              {visibleJobs.length} role{visibleJobs.length !== 1 ? "s" : ""}{" "}
              found
            </span>
          )}
        </div>
        <div className="bg-gradient-to-r from-terra/40 to-transparent mb-8" />

        {isLoading ? (
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((n) => (
              <LoadCard key={n} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-10 lg:gap-6">
            {visibleJobs.map((job) => (
              <Card key={job.id} job={job} onTagClick={handleTagClick} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
