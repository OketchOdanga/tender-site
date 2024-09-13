// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Tender Site</h1>
          <p className="text-lg mb-6">Connecting clients and suppliers with ease and transparency.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mx-auto max-w-3xl">
          We are a dedicated team committed to bridging the gap between clients and suppliers through a transparent and efficient tendering process. Our mission is to provide a reliable platform for discovering, uploading, and managing tenders to foster mutual growth and success.
        </p>
      </section>

      {/* Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Tender Management</h3>
            <p className="text-gray-600">Effortlessly manage and upload tenders, ensuring all necessary documents are in place.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Client-Supplier Connection</h3>
            <p className="text-gray-600">Connect with the right suppliers and clients through our tailored platform.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Transparent Bidding</h3>
            <p className="text-gray-600">Our platform ensures a transparent bidding process for fair opportunities.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-12 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Point 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">We are trusted by some of the top companies for their tendering needs.</p>
          </div>
          {/* Point 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Easy to Use</h3>
            <p className="text-gray-600">Our platform is user-friendly, making tender management a breeze.</p>
          </div>
          {/* Point 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Secure and Reliable</h3>
            <p className="text-gray-600">We prioritize security and reliability, ensuring your data is safe.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Find or Submit a Tender?</h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          Explore Tenders
        </button>
      </section>
    </div>
  );
};

export default Home;
