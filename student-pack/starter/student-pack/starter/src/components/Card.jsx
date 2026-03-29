function Card({ job, onTagClick }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <article
      className={`
        group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300
        border-l-4 ${job.featured ? 'border-terra' : 'border-transparent'}
        p-10 flex flex-col lg:flex-row lg:items-center gap-6
      `}
    >
      {/* Logo */}
      <div
        className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center font-bold text-xl shadow-card"
        style={{
          backgroundColor: job.logoColor,
          color: job.logoTextColor,
        }}
      >
        {job.logo}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-body text-sm font-bold text-terra tracking-wide">{job.company}</span>
          {job.isNew && (
            <span className="bg-terra text-white text-[10px] font-bold font-body uppercase tracking-widest px-2 py-0.5 rounded-full">
              New
            </span>
          )}
          {job.featured && (
            <span className="bg-espresso text-white text-[10px] font-bold font-body uppercase tracking-widest px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h2 className="font-display font-bold text-espresso text-base lg:text-lg group-hover:text-terra transition-colors cursor-pointer leading-snug">
          {job.position}
        </h2>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-brown-light font-body text-sm">
          <span>{job.postedAt}</span>
          <span>·</span>
          <span>{job.contract}</span>
          <span>·</span>
          <span>{job.location}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="bg-terra-pale text-terra font-body font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-terra hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Apply button */}
      <a
        href="#"
        className="shrink-0 bg-espresso text-white font-body font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-terra transition-colors duration-200 whitespace-nowrap"
      >
        Apply now
        <span>→</span>
      </a>
    </article>
  )
}

export default Card