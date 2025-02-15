"use client";

// STYLES
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/series" },
    { name: "About Us", path: "#" },
    { name: "Contact", path: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", name: "Facebook" },
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaYoutube />, url: "#", name: "YouTube" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
  ];

  return (
    <footer className="bg-[#2A2E3F] text-white py-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#F76641] to-[#FF9F59] text-transparent bg-clip-text">
                CineQuest
              </span>
            </h3>

            <p className="text-gray-300">
              Your ultimate source for movie information and reviews.
            </p>

            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for updates and exclusive content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-[#F76641] transition-colors duration-300 flex items-center"
                  >
                    <span className="hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="bg-gray-700 p-3 rounded-full hover:bg-[#F76641] transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-sm text-gray-400">
              Follow us for the latest updates and news
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CineQuest. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              {policies.map(policy => (
                <a
                  key={policy.name}
                  href={policy.path}
                  className="text-sm text-gray-400 hover:text-[#F76641]"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
