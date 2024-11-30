import React from 'react';

const Terms = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className=" text-white h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-12 text-gray-700">
        {/* Introduction */}
        <p className="text-lg mb-6">
          Welcome to TekProwess LLP! By using our website, you agree to follow these Terms of Use. If you don't agree, please don't use our site.
        </p>

        {/* Using Our Website */}
        <h2 className="text-2xl font-semibold mt-6">Using Our Website</h2>
        <p>
          You can use our website for legal purposes only and must follow these Terms. You agree not to use our website for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Any illegal activity or in ways that break laws.</li>
          <li>Sending unwanted promotional content like "spam" or "junk mail."</li>
          <li>Pretending to be TekProwess LLP, our staff, other users, or anyone else.</li>
          <li>Doing anything that could harm or restrict other users' enjoyment of the website.</li>
        </ul>

        {/* Our Content and Copyright */}
        <h2 className="text-2xl font-semibold mt-6">Our Content and Copyright</h2>
        <p>
          Everything on our website, like text, pictures, logos, and software, is owned by TekProwess LLP or our partners. You can't use any of it without our permission.
        </p>

        {/* Links to Other Websites */}
        <h2 className="text-2xl font-semibold mt-6">Links to Other Websites</h2>
        <p>
          Our website may have links to other sites. These links are for your convenience, but we don't control or endorse the content of these websites. We're not responsible for what you find on them.
        </p>

        {/* No Guarantees */}
        <h2 className="text-2xl font-semibold mt-6">No Guarantees</h2>
        <p>
          We don’t guarantee that our website will always be available or error-free. We’re not responsible for any mistakes or viruses that might appear on our site.
        </p>

        {/* Limiting Our Responsibility */}
        <h2 className="text-2xl font-semibold mt-6">Limiting Our Responsibility</h2>
        <p>
          We aren't responsible for any damages or problems caused by using our website. If you're unhappy with our site, the only solution is to stop using it.
        </p>

        {/* Your Responsibility */}
        <h2 className="text-2xl font-semibold mt-6">Your Responsibility</h2>
        <p>
          You agree to protect TekProwess LLP from any claims or damages that come from your use of our website.
        </p>

        {/* Changes to These Terms */}
        <h2 className="text-2xl font-semibold mt-6">Changes to These Terms</h2>
        <p>
          We may update these Terms of Use at any time. Any updates will be posted on our website and take effect immediately.
        </p>

        {/* Governing Law */}
        <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any legal issues must be handled in the courts of Ahmedabad, Gujarat, India.
        </p>

        {/* Ending Access */}
        <h2 className="text-2xl font-semibold mt-6">Ending Access</h2>
        <p>
          We can stop or limit your access to our website at any time, for any reason, without warning.
        </p>

        {/* General Information */}
        <h2 className="text-2xl font-semibold mt-6">General Information</h2>
        <p>
          If any part of these Terms doesn’t apply, the rest of them will still be valid. Not enforcing any part of these Terms doesn’t mean we waive our rights. These Terms represent the full agreement between you and TekProwess LLP.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>
          If you have any questions, feel free to reach out to us at <a href="mailto:info@tekprowess.com" className="text-primary underline">info@tekprowess.com</a>.
        </p>

        {/* Effective Date */}
        <h2 className="text-2xl font-semibold mt-6">When These Terms Are Effective</h2>
        <p>
          These Terms are effective starting 2024.
        </p>
      </div>
    </div>
  );
};

export default Terms;
