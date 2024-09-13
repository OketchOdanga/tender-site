import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', rating: 5, comment: 'Great platform! Very user-friendly and efficient.' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Good service, but I wish there were more tender options.' },
    { id: 3, name: 'Michael Johnson', rating: 5, comment: 'Exceptional customer support and easy to use!' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: Number(newReview.rating),
      comment: newReview.comment,
    };
    setReviews([...reviews, review]);
    setNewReview({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
        <p className="text-lg text-gray-700">
          Hear what our satisfied customers have to say about our platform and services.
        </p>
      </section>

      {/* Review Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{review.name}</h3>
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${index < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.428 8.332 1.212-6.001 5.848 1.42 8.303L12 18.898l-7.419 3.88 1.42-8.303-6-5.848 8.332-1.212L12 .587z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </section>

      {/* Add Review Section */}
      <section className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Review</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
              Rating
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              name="comment"
              placeholder="Your comment"
              value={newReview.comment}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </section>

      {/* Testimonials Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          "Tender Site has revolutionized the way we manage tenders. The user-friendly platform and excellent customer support have made the process seamless and efficient."
        </p>
        <p className="text-lg font-bold text-blue-500">- Alex Williams, CEO of Construction Corp</p>
      </section>
    </div>
  );
};

export default Reviews;
