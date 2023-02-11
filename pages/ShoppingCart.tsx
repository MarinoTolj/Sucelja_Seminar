import Photo from "../components/photo";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { productsSelector, removeProduct } from "../redux/products";
import Icon from "@mdi/react";
import { mdiMinus } from "@mdi/js";

type PropType = {};

const ShoppingCart: React.FC<PropType> = (props) => {
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div className="flex flex-col items-center mt-3" key={index}>
            <Photo
              src={`/photos/${product.name}.jpg`}
              alt={product.name}
              overlayText={product.name}
              clickable
            />
            <button onClick={() => dispatch(removeProduct(product.name))}>
              <Icon path={mdiMinus} size={1} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ShoppingCart;
