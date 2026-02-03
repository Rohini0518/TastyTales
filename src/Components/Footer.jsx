export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🍽️</span>
                FoodHub
              </h3>
              <p className="text-slate-400">
                Your favorite restaurants, delivered to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Contact
                </li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Help & Support
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  📘
                </div>
                <div className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  LinkedIn
                </div>
                <div className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  📷
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            © 2024 FoodHub. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
