import Photo from "../components/photo";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addProduct, productsSelector, removeProduct } from "../redux/products";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js";

type PropType = {};

const ShoppingCart: React.FC<PropType> = (props) => {
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2 className="text-center mt-4 text-xl">
        Your Total:{" "}
        {products.reduce(
          (acc, product) => product.price * product.amount + acc,
          0
        )}
        €
      </h2>
      <div className="flex flex-col gap-10">
        {products.map((product, index) => {
          return (
            <>
              <div className="mt-3 flex" key={index}>
                <div className="w-16 h-16">
                  <Photo
                    src={`/photos/${product.name}.jpg`}
                    alt={product.name}
                    clickable
                  />
                </div>
                <p>{product.name}</p>
                <button onClick={() => dispatch(removeProduct(product.name))}>
                  <Icon path={mdiMinus} size={1} />
                </button>
                <p>{product.amount}</p>
                <button
                  onClick={() =>
                    dispatch(addProduct({ ...product, amount: 1 }))
                  }
                >
                  <Icon path={mdiPlus} size={1} />
                </button>
              </div>
              <hr className="bg-slate-600" />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ShoppingCart;
