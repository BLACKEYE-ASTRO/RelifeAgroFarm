import React from 'react';
import FruitCard from './FruitCard';
import { fruits } from '../constants';
import { motion } from 'framer-motion';

const Products = () => {
  const [loading, setLoading] = React.useState(true);

  // Simulate data fetching (remove or replace with actual fetch in production)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading time
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen p-8 bg-gray-100">
      <div className="w-full max-w-screen-lg">
        <header>
          <h1 className="text-center p-5 mb-10 text-5xl font-semibold tracking-widest uppercase">
            Products
          </h1>
        </header>
        <motion.div
          role="grid"
          aria-label="Product grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : fruits.length > 0 ? (
            fruits.map((fruit) => <FruitCard key={fruit.id} fruit={fruit} />)
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
