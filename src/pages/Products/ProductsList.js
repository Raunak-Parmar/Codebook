import { useEffect, useState } from "react";
import { ProductCard } from "../../components"
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export const ProductsList = () => {
  const [products,setProducts] = useState([]);
  const search = useLocation ().search;
  const  searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore E-Book Colletction")

  useEffect(() => {
    async function fetchProducts() {
      const query = searchTerm ? `name_like=${searchTerm}` : '';
      const response = await fetch(`http://localhost:8000/products?${query}`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [searchTerm]);

  return (
    <main>
        <section className="my-5 mx-auto max-w-screen-xl">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            {
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>  
        </section>
      </main> 
  )
}