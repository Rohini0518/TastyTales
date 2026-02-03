import tastyTales from "../utils/tt.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            About TastyTales
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-10 border border-orange-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-3xl">🍽️</span>
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to TastyTales, your go-to platform for delicious food
            delivered right to your doorstep. We connect food lovers with local
            restaurants, offering a seamless experience from order to delivery.
            Our mission is to make food ordering an enjoyable journey, ensuring
            that every meal tells a tasty tale of its own.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            At TastyTales, we believe that good food brings people together.
            Whether you're craving comfort food, exploring exotic cuisines, or
            looking for healthy options, we've got you covered. Join us on this
            culinary adventure and let's create memorable food experiences
            together!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img
                src={tastyTales}
                alt="Developer"
                className="w-full h-full object-cover min-h-[300px] md:min-h-full"
              />
            </div>

            <div className="md:w-3/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-3xl">👨‍💻</span>
                Meet the Developer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hi there! I'm passionate about creating intuitive and delightful
                user experiences. TastyTales is my project inspired by platforms
                like Swiggy, aimed at connecting food lovers with amazing local
                restaurants. I built this using modern web technologies
                including React and Tailwind CSS.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Built With
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    React
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    React Router
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    REST API
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Rohini0518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/rohini0518/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  {/* Portfolio */}
                  <a
                    href="https://rohini0518-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span className="font-medium">Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
