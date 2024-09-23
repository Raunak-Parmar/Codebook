import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Elements/ProductCard"
import axios from "axios";

export const ProductsList = () => {
  const [products,setProducts] = useState([]);

  const getApiData = async() => {
    const response = await axios.get('http://localhost:8000/products');
    setProducts(response.data);
  };
  useEffect(() => {
    getApiData();
  },[])

  return (
    <main>
        <section className="my-5 mx-auto max-w-screen-xl">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks (15)</span>            
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