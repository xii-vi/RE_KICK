import { Carousel} from "../../component/carousel/carousel";
import { ProductBody } from "./product-body";
import { useDocumentTitle } from "../../utilities/documentTitle";

export const Homepage = ()=> {
  useDocumentTitle("Home")
  return (
    <div>
      <Carousel />
      <ProductBody />
    </div>
  );
}