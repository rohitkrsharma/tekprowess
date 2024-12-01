import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    country: '',
    customCountry: '',
    service: '',
    customService: '',
    message: ''
  });

  const [showCustomService, setShowCustomService] = useState(false);
  const [showCustomCountry, setShowCustomCountry] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const countries = ["Afghanistan", "India", "United States", "United Kingdom", "Canada", "Germany", "Australia", "Other"]; // Example country list

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Toggle custom service input field
    if (name === 'service') {
      setShowCustomService(value === 'other');
    }

    // Toggle custom country input field
    if (name === 'country') {
      setShowCustomCountry(value === 'Other');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      company_size: formData.companySize,
      country: formData.country === 'Other' ? formData.customCountry : formData.country,
      service: formData.service,
      custom_service: formData.customService,
      message: formData.message,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailParams),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          companySize: '',
          country: '',
          customCountry: '',
          service: '',
          customService: '',
          message: ''
        });
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div className="px-4 md:px-8 md:py-12 bg-gray-100 flex flex-wrap justify-between" ref={formRef}>
      {/* Contact Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg mx-auto w-full lg:w-1/2 mt-12 lg:mt-0">
        {
          isSubmitted ? (
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-500">Thank you for your message!</h4>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-bold mb-6 text-center font-custom">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="yourname@yourcompany.com"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Company"
                    required
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company Size *</label>
                  <div className="space-y-2">
                    {['<10 employees', '10-50 employees', '50-250 employees', '250+ employees'].map((size, index) => (
                      <label key={index} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="companySize"
                          value={size}
                          onChange={handleChange}
                          checked={formData.companySize === size}
                          className="form-radio"
                          required
                        />
                        <span className="text-gray-700">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Custom Country Input */}
                {showCustomCountry && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Please specify your country *</label>
                    <input
                      type="text"
                      name="customCountry"
                      value={formData.customCountry}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                )}

                {/* Service Dropdown */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Which service are you looking for? *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="odoo">Odoo Services</option>
                    <option value="software">Software Development</option>
                    <option value="mobile">Mobile Application Development</option>
                    <option value="quality">Quality Assurance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Custom Service Input - Show only if "Other" is selected */}
                {showCustomService && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Please specify the service *</label>
                    <input
                      type="text"
                      name="customService"
                      value={formData.customService}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your custom service"
                      required
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="5"
                    placeholder="Tell us more about what you are looking for"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300">
                  Submit
                </button>
              </form>
            </>
          )
        }
      </div>

      {/* Contact Details */}
      <div className="text-gray-700 space-y-4 mt-4 md:mt-0 w-full md:w-[40%]">
        <h2 className="text-3xl font-bold text-primary font-custom">TekProwess LLP</h2>
        <div className="md:flex  space-x-4">
          <div>
            <h4 className="text-xl font-bold">ADDRESS</h4>
            <div className="flex items-start mt-2">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p className="ml-3">
                <span className='font-semibold'>Registered Office:</span>
                305 University Plaza,
                Vijay Cross Road,<br />
                Ahmedabad 380009,
                Gujarat, India
              </p>
            </div>
            <div className="flex items-start mt-2">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p className="ml-3">
                <span className='font-semibold'>Corporate Office:</span>
                D-202, Kasturi Epitome,
                Munjoba Nagar,Wakad,<br />
                Pune 411057,
                Maharashtra, India
              </p>
            </div>

            <div className="flex gap-1 items-center mt-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <p>
                <a href="tel:+919711149581" className="hover:underline hover:text-primary">+91-9711149581</a>
              </p>
            </div>

            <div className="flex items-center mt-4">
              <FaEnvelope className="text-primary text-xl" />
              <p className="ml-3">
                <a href="mailto:info@tekprowess.com" className="hover:underline hover:text-primary">info@tekprowess.com</a>
              </p>
            </div>
          </div>

        </div>
        <div className="mt-8">
          <h4 className="text-2xl font-bold font-custom mb-4">Location</h4>
          <iframe
            title="Mumbai Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.822689481352!2d73.7663473!3d18.5959816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38591b33261%3A0x957ed6c67da9c457!2sD-202%2C%20Kasturi%20Epitome%2C%20Munjoba%20Nagar%2C%20Shankar%20Kalat%20Nagar%2C%20Wakad%2C%20Pune%20411057%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1631111153649!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
