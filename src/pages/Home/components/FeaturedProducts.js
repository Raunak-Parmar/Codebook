import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../../components';
import { getFeaturedList } from '../../../services';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList(); 
        setProducts(Array.isArray(data) ? data : []); 
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setProducts([]); 
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
};
