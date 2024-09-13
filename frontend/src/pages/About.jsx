import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Introduction Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At Tender Site, we bridge the gap between clients and suppliers by providing a transparent and efficient tendering platform.
          Since our inception, we have been committed to transforming the tendering process for businesses worldwide.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Founded in 2010, Tender Site began as a small startup with a big vision — to revolutionize the way tenders are managed.
          Over the past decade, we have grown into a trusted platform used by thousands of businesses to connect, collaborate, and succeed in their tendering endeavors.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="my-12 bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
            <strong>Mission:</strong> To empower businesses by providing a reliable, secure, and user-friendly platform for discovering, submitting, and managing tenders globally.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>Vision:</strong> To be the world's most trusted tendering platform, fostering growth and collaboration for companies of all sizes.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Core Values</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Value 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p className="text-gray-600">We uphold the highest standards of integrity in all of our actions.</p>
          </div>
          {/* Value 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-600">We continuously seek innovative ways to simplify the tendering process.</p>
          </div>
          {/* Value 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of working together to achieve shared success.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Our Journey</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to experience a seamless tendering process? Connect with us today and discover opportunities to grow your business.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
