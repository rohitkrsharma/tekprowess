import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-background py-8 font-roboto">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">
        {/* Company Information */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 font-custom">Company</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li><Link to="/" className="hover:underline hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-primary">About Us</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 font-custom">Our Services</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li><Link to="/services/odoo-services" className="hover:underline hover:text-primary">Odoo Services</Link></li>
            <li><Link to="/services/software-development" className="hover:underline hover:text-primary">Software Development</Link></li>
            <li><Link to="/services/mobile-application" className="hover:underline hover:text-primary">Mobile App Development</Link></li>
            <li><Link to="/services/quality-assurance" className="hover:underline hover:text-primary">Quality Assurance</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 font-custom">Get In Touch</h3>
          <div className='text-sm md:text-lg'>
            <div className="flex gap-1 items-center  md:justify-start">
              <FaPhoneAlt className="text-gray-300 text-xl" />
              <p className="ml-2">
                <a href="tel:+918788998085" className="hover:underline hover:text-primary">+91-878-899-8085</a>
              </p>
            </div>
            <div className="flex items-center  md:justify-start mt-2">
              <FaEnvelope className="text-gray-300 text-xl" />
              <p className="ml-2">
                <a href="mailto:info@tekprowess.com" className="hover:underline hover:text-primary">info@tekprowess.com</a>
              </p>
            </div>
          </div>
          <div className="text-sm mt-1 md:text-lg text-gray-400">
            <div className="flex items-start mt-2">
              <FaMapMarkerAlt className="text-gray-300 mt-1 text-xl" />
              <p className="ml-3">
                <span className='font-semibold'>Registered Office:</span><br />
                305 University Plaza,
                Vijay Cross Road,<br />
                Ahmedabad 380009,
                Gujarat, India
              </p>
            </div>
            {/* <p className="mt-2">
              <span className='font-semibold'>Corporate Office:</span><br />
              D-202, Kasturi Epitome,<br /> Munjoba Nagar, Wakad,<br /> Pune 411057,<br /> Maharashtra, India
            </p> */}
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 font-custom">Social</h3>
          <div className="flex md:justify-start space-x-6 mb-4">
            <a href="https://www.facebook.com/tekprowess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
              <FaFacebook size={25} />
            </a>
            <a href="https://x.com/tekprowess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
              <FaXTwitter size={25} />
            </a>
            <a href="https://www.instagram.com/tekprowess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.linkedin.com/company/tekprowess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className='text-center text-sm md:text-lg'>
          &copy; {new Date().getFullYear()} Tekprowess. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
