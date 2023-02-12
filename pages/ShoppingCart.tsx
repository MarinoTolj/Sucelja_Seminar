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
        Your Total:
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
              <div className="mt-3 flex justify-between mx-2" key={index}>
                <div className="w-16 h-16">
                  <Photo
                    src={`/photos/${product.name}.jpg`}
                    alt={product.name}
                    clickable
                    height="93"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl">{product.name}</p>
                  <p className="font-semibold">{product.price}€</p>
                  <div className="flex gap-2">
                    Total: <p className="">{product.price * product.amount}€</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() => dispatch(removeProduct(product.name))}
                    className="border-2 border-black h-12 self-center"
                  >
                    <Icon path={mdiMinus} size={1} />
                  </button>
                  <p className="self-center text-center text-2xl border-2 border-gray-500 px-3 h-12 pt-1">
                    {product.amount}
                  </p>
                  <button
                    onClick={() =>
                      dispatch(addProduct({ ...product, amount: 1 }))
                    }
                    className="border-2 border-black h-12 self-center"
                  >
                    <Icon path={mdiPlus} size={1} />
                  </button>
                </div>
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
