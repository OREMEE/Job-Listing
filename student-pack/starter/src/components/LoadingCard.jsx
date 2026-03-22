function Hero() {
  return (
    <div className="bg-white rounded-card shadow-card animate-pulse p-6 flex flex-col lg:flex-row lg:items-center gap-6">
      {/* Logo placeholder */}
      <div className="w-14 h-14 rounded-xl bg-sand-light shrink-0" />
 
  
      <div className="flex-1 space-y-3">
        <div className="h-3 bg-sand-light rounded w-1/4" />
        <div className="h-5 bg-sand rounded w-1/2" />
        <div className="h-3 bg-sand-light rounded w-1/3" />
      </div>
 
 
       <div className="flex gap-2 flex-wrap">
        {[1, 2, 3].map(n => (
          <div key={n} className="h-8 w-20 bg-parchment rounded-lg" />
        ))}
      </div>
    </div>
  )
}
 
export default Hero