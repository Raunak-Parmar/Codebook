import { ProductCard } from "../../components/Elements/ProductCard"

export const ProductsList = () => {
  return (
    <main>
        <section className="my-5 mx-auto max-w-screen-xl">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks (15)</span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>  
        </section>
      </main> 
  )
}