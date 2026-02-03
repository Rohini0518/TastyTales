import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block animate-bounce">
            <span className="text-8xl md:text-9xl">🍽️</span>
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 mb-6">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Sorry, 
          <br className="hidden sm:block" />
          The page you're looking for seems to have gone for a food break!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Back to Home
            </button>
          </Link>
          
          
        </div>

        <div className="mt-12 pt-8 border-t-2 border-orange-100">
          <p className="text-sm text-gray-500">
            Need help? <Link to="/contact" className="text-orange-600 hover:text-orange-700 font-semibold underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}