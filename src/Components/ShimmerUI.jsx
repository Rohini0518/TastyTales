
const ShimmerUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Shimmer */}
      <div className="bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="h-8 bg-slate-300 rounded-lg w-48 mb-4"></div>
          <div className="h-12 bg-slate-300 rounded-lg w-96 mb-3"></div>
          <div className="h-6 bg-slate-300 rounded-lg w-64"></div>
        </div>
      </div>

      {/* Filters Shimmer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 animate-pulse">
          <div className="h-12 bg-slate-200 rounded-xl mb-6"></div>
          <div className="flex gap-4 justify-center">
            <div className="h-12 bg-slate-200 rounded-xl w-40"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-40"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-32"></div>
          </div>
        </div>
      </div>

      {/* Cards Grid Shimmer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 animate-pulse"
            >
              {/* Image Shimmer */}
              <div className="h-48 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 shimmer-animation"></div>

              {/* Content Shimmer */}
              <div className="p-5 space-y-3">
                <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-8 bg-slate-200 rounded-lg w-16"></div>
                  <div className="h-6 bg-slate-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shimmer-animation {
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerUI;