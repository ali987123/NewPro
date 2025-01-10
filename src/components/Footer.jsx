import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center">
     
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-black">SoundDZign</h2>
          </div>

   
          <div className="flex space-x-6 object-left">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 transition-colors text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-400 transition-colors text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-red-800 transition-colors text-xl"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="font-bold text-sm text-black">
              © {new Date().getFullYear()} SoundDZign. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
