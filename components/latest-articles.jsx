"use client";  
import React, { useState } from 'react';
import Image from 'next/image';

const articles = [
  { id: 1, title: "Grilled Tomatoes at Home", image: "/images/grilled-tomatoes.jpg", description: "Lorem Ipsum is simply dummy text." },
  { id: 2, title: "Snacks for Travel", image: "/images/snacks.jpg", description: "Lorem Ipsum is simply dummy text." },
  { id: 3, title: "Post-workout Recipes", image: "/images/workout.jpg", description: "Lorem Ipsum is simply dummy text." },
  { id: 4, title: "How To Grill Corn", image: "/images/grilled-corn.jpg", description: "Lorem Ipsum is simply dummy text." },
  { id: 5, title: "Crunchwrap Supreme", image: "/images/crunchwrap-supreme.jpg", description: "Lorem Ipsum is simply dummy text." },
  { id: 6, title: "Broccoli Cheese Soup", image: "/images/broccoli-cheese-soup.jpg", description: "Lorem Ipsum is simply dummy text." }
];

export function LatestArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1225px] px-4">
        <h2 className="mb-10 text-4xl font-semibold text-[#0E2368]">Latest Articles</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <div key={article.id} className="rounded-lg border border-gray-300 p-6 shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={article.image}
                alt={article.title}
                width={400} // Adjusted image width
                height={300} // Adjusted image height
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-[#0E2368]">{article.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{article.description}</p>
              <button className="mt-4 h-10 w-32 rounded-full border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            className={`h-[29px] w-[29px] flex justify-center items-center rounded-md border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'border-gray-400 hover:bg-gray-100'}`}
            disabled={currentPage === 1}
          >
            {/* Left Arrow SVG */}
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z" fill="#AFAFAF"/>
              <rect x="0.5" y="0.5" width="27" height="28" rx="4.5" stroke="#AFAFAF"/>
            </svg>
          </button>

          {/* Page Info */}
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          {/* Next Button */}
          <button
            onClick={nextPage}
            className={`h-[29px] w-[29px] flex justify-center items-center rounded-md border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'border-gray-400 hover:bg-gray-100'}`}
            disabled={currentPage === totalPages}
          >
            {/* Right Arrow SVG */}
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z" fill="#424961"/>
              <rect x="0.5" y="0.5" width="27" height="28" rx="4.5" stroke="#424961"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
