import React from 'react';

const Privacy = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className="text-white h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Our Privacy Policy</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-12 text-gray-700">
        {/* Introduction */}
        <p className="text-lg mb-6">
          At TekProwess, we are dedicated to safeguarding the privacy of our website visitors. This Privacy Policy outlines the types of information we gather and how we utilize it. If you have any questions or need more details, please feel free to contact us.
        </p>

        {/* User Agreement */}
        <h2 className="text-2xl font-semibold mt-6">User Agreement</h2>
        <p>
          By accessing and using our website, <a href="https://tekprowess.com" className="text-primary underline">https://tekprowess.com</a>, you acknowledge and agree to this Privacy Policy.
        </p>

        {/* Data We Collect */}
        <h2 className="text-2xl font-semibold mt-6">Data We Collect</h2>
        <p>
          We may collect personal details such as your name, email address, and phone number. This information is used exclusively to respond to your inquiries and deliver quality service.
        </p>

        {/* How We Utilize Your Data */}
        <h2 className="text-2xl font-semibold mt-6">How We Utilize Your Data</h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Managing and operating our website</li>
          <li>Improving and customizing your user experience</li>
          <li>Developing new products, services, and features</li>
          <li>Offering customer support and updates</li>
          <li>Enhancing security and preventing fraud</li>
        </ul>

        {/* Use of Cookies */}
        <h2 className="text-2xl font-semibold mt-6">Use of Cookies</h2>
        <p>
          We employ cookies to enhance your browsing experience and analyze site usage. You can adjust your cookie preferences through your browser settings.
        </p>

        {/* Protection of Minors */}
        <h2 className="text-2xl font-semibold mt-6">Protection of Minors</h2>
        <p>
          We do not knowingly collect personal data from children under 13. If you believe your child has provided information to us, please contact us immediately, and we will take appropriate steps to remove it.
        </p>

        {/* Policy Updates */}
        <h2 className="text-2xl font-semibold mt-6">Policy Updates</h2>
        <p>
          We may revise this Privacy Policy from time to time. Please revisit this page regularly for any changes.
        </p>

        {/* Get in Touch */}
        <h2 className="text-2xl font-semibold mt-6">Get in Touch</h2>
        <p>
          For any questions or feedback regarding this Privacy Policy, please reach out to us at <a href="mailto:info@tekprowess.com" className="text-primary underline">info@tekprowess.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
