import React from 'react';

const FruitCard = ({ fruit }) => {
  return (
    <article className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      {/* Image Container */}
      <div className="flex justify-center items-center h-48 m-5 border">
        <img
          className="max-h-full max-w-full object-contain"
          src={fruit.image || 'https://via.placeholder.com/150'}
          alt={fruit.name || 'Fruit image'}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{fruit.name}</div>
        <p className="text-gray-700 text-base">{fruit.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {fruit.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-200 rounded-full px-2 py-1 text-sm font-semibold text-green-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
        {fruit.tags.length > 3 && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            +{fruit.tags.length - 3} more
          </span>
        )}
      </div>
    </article>
  );
};

export default FruitCard;
