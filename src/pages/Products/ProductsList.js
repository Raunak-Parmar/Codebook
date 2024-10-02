import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../components"
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { getList } from "../../services";

export const ProductsList = () => {
  const [products,setProducts] = useState([]);

  const search = useLocation ().search;
  const  searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore E-Book Colletction")

  useEffect(() => {
    async function fetchProducts() {
      try{
        const data = await getList(searchTerm);
        setProducts(data);
        
      }catch(error){
        toast.error(error.message);
      }
      
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