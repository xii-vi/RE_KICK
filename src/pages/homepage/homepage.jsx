import { Navbar } from "../../component/navbar/navbar";
import { Footer } from "../../component/footer/footer";
import { Carousel} from "../../component/carousel/carousel";
import { ProductBody } from "./product-body";

export const Homepage = ()=> {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProductBody />
      <Footer />
    </div>
  );
}