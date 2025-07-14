import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-6 shadow-md border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright on the left */}
          <div className="text-xs text-black mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
          </div>
          
          {/* Navigation links in the middle */}
          <nav className="hidden md:flex items-center space-x-6 mb-4 md:mb-0">
            <a href="/terms" className="text-xs text-black hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300">Terms</a>
            <a href="/privacy" className="text-xs text-black hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300">Privacy</a>
            <a href="/returns" className="text-xs text-black hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300">Returns</a>
            <a href="/shipping" className="text-xs text-black hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300">Shipping</a>
          </nav>
          
          {/* Social Icons on the right */}
          <div className="flex items-center space-x-4">
            {[{
              href: "https://facebook.com",
              icon: <FaFacebookF size={16} />
            }, {
              href: "https://twitter.com",
              icon: <FaTwitter size={16} />
            }, {
              href: "https://instagram.com",
              icon: <FaInstagram size={16} />
            }].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out text-black flex items-center justify-center"
                aria-label={`Visit our ${href.split('//')[1].split('.')[0]} page`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
