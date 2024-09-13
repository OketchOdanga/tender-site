import React, { useState } from 'react';

const Tender = () => {
  // Sample tender data
  const sampleTenders = [
    {
      id: 1,
      number: 'ADDENDUM - ONT.KDC.073.2023-2024',
      description: 'Supply and Delivery of Laptops and Tablets',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '09/10/2023',
    },
    {
      id: 2,
      number: 'ADDENDUM 1 ONT.KDC.069.2023-2024',
      description: 'Provision of Internet, Hosting Services, and Colocation Facility',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '08/25/2023',
    },
    {
      id: 3,
      number: 'ADDENDUM 1 ONT.KDC.070.2023-2024',
      description: 'Provision of Vulnerability Assessment and Testing (VAPT)',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '07/30/2023',
    },
    {
      id: 4,
      number: 'ONT.KDC.071.2023-2024',
      description: 'Provision of Cleaning Services for Head Office and Regional Branches',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '06/15/2023',
    },
    {
      id: 5,
      number: 'ONT.KDC.072.2023-2024',
      description: 'Digital Marketing Services for Social Media Management, SEO, and Content Creation',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '05/10/2023',
    },
    {
      id: 6,
      number: 'ONT.KDC.073.2023-2024',
      description: 'Supply of IT Equipment for New Office Locations',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '04/10/2023',
    },
    {
      id: 7,
      number: 'ONT.KDC.074.2023-2024',
      description: 'Provision of Security Services for Various Locations',
      documentLink: '#',
      closingDate: '12/06/2024 10:00 am',
      dateAdded: '03/05/2023',
    },
    // More sample tenders can be added here
  ];

  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering tenders
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const tendersPerPage = 3; // Number of tenders to display per page

  // Filter tenders based on the search term
  const filteredTenders = sampleTenders.filter(
    (tender) =>
      tender.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the index range for the current page
  const indexOfLastTender = currentPage * tendersPerPage;
  const indexOfFirstTender = indexOfLastTender - tendersPerPage;
  const currentTenders = filteredTenders.slice(indexOfFirstTender, indexOfLastTender);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredTenders.length / tendersPerPage);

  // Function to handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Header Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Available Tenders</h1>
        <p className="text-lg text-gray-700">
          Browse through the list of available tenders and find opportunities that match your business needs.
        </p>
      </section>

      {/* Search Bar */}
      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          className="w-full border rounded py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:shadow-outline"
          placeholder="Search tenders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tender Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="py-3 px-4 text-left">Tender Number</th>
              <th className="py-3 px-4 text-left">Tender Description</th>
              <th className="py-3 px-4 text-left">Tender Document</th>
              <th className="py-3 px-4 text-left">Tender Closing Date</th>
              <th className="py-3 px-4 text-left">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {currentTenders.map((tender) => (
              <tr key={tender.id} className="border-b hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-4 text-gray-700">{tender.number}</td>
                <td className="py-3 px-4 text-gray-700">{tender.description}</td>
                <td className="py-3 px-4">
                  <a href={tender.documentLink} className="text-blue-500 hover:underline">
                    View Document
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-700">{tender.closingDate}</td>
                <td className="py-3 px-4 text-gray-700">{tender.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tender;
