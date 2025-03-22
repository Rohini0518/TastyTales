import tastyTales from '../utils/tt.jpeg'
const About = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">About TastyTales</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to TastyTales, your go-to platform for delicious food delivered right to your doorstep. 
            We connect food lovers with local restaurants, offering a seamless experience from order to delivery. 
            Our mission is to make food ordering an enjoyable journey, ensuring that every meal tells a tasty tale of its own.
          </p>
          
          <p className="text-lg text-gray-700">
            At TastyTales, we believe that good food brings people together. Whether you're craving comfort food, exploring exotic cuisines, 
            or looking for healthy options, we've got you covered. Join us on this culinary adventure and let's create memorable food experiences together!
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={tastyTales} 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Meet the Developer</h2>
              <p className="text-gray-600 mb-6">
                Hi there! I'm passionate about creating intuitive and delightful user experiences.
                TastyTales is my project inspired by platforms like Swiggy, aimed at connecting food lovers
                with amazing local restaurants. I built this using modern web technologies including React and Tailwind CSS.
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/Rohini0518" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/rohini0518/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                
                {/* Portfolio link with SVG icon */}
                <a 
                  href="https://rohini0518-portfolio.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;