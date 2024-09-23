import {Hero} from "./components/Hero";
import {FeaturedProducts} from "./components/FeaturedProducts";
import {Testimonials} from "./components/Testimonial";
import {Faq} from "./components/Faq";
export const HomePage = () => {
    return (
      <main>
          <Hero/>
          <FeaturedProducts/>
          <Testimonials/>
          <Faq/>
      </main>
    )
}