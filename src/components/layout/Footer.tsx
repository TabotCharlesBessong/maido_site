import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../common/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white bg-[#08083b]">
      <div className="max-w-6xl px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* About Section */}
          <div className="md:col-span-12 lg:col-span-4">
            <Logo />
            <p className="mt-4 text-text-light">
              Trust us to handle your digital health needs with expertise and
              care, giving you peace of mind and access to quality healthcare.
            </p>
            <h4 className="mt-8 mb-4 text-lg font-semibold">
              Connect Via Social Media
            </h4>
            <div className="flex space-x-3">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold">Menu</h4>
            <ul className="space-y-3 text-text-light">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold">Departments</h4>
            <ul className="space-y-3 text-text-light">
              <li>
                <a href="#" className="footer-link">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Neurology
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Orthopedic
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  More...
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold">About Us</h4>
            <ul className="space-y-3 text-text-light">
              <li>
                <a href="#" className="footer-link">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Team Members
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <p className="mb-4 text-sm text-text-light">
              Contact us anytime for information.
            </p>
            <div className="flex items-center p-3 mb-3 space-x-3 bg-white/5 rounded-lg border border-white/10">
              <FaPhone className="text-primary-blue" />
              <span className="text-sm text-text-light">+991 123456789</span>
            </div>
            <div className="flex items-center p-3 space-x-3 bg-white/5 rounded-lg border border-white/10">
              <FaEnvelope className="text-primary-blue" />
              <span className="text-sm text-text-light">
                liva_telehealth@info.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
