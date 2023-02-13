import Photo from "../components/photo";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addProduct, productsSelector, removeProduct } from "../redux/products";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js";
import Button from "../components/button";

type PropType = {};

const ShoppingCart: React.FC<PropType> = (props) => {
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2 className="text-center mt-4 text-xl">
        Your Total:
        {products.reduce(
          (acc, product) => product.price * product.amount + acc,
          0
        )}
        €
      </h2>
      <div className="sm:m-auto sm:flex sm:justify-evenly sm:gap-2 sm:max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-grow lg:flex-grow-0">
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
                      Total:{" "}
                      <p className="">{product.price * product.amount}€</p>
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
        <div className="hidden mb-3  sm:block sm:border-l-2 sm:border-solid sm:border-main-green-color"></div>
        <form className="flex flex-col w-3/4 mt-3 gap-3 max-w-xl m-auto sm:m-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:max-h-80">
          <div className="flex flex-col">
            <label htmlFor="country" className="cursor-pointer">
              Country
            </label>
            <input
              id="country"
              type="text"
              className="border-2 border-slate-200 p-1 rounded-sm"
              placeholder="Country"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="street-address" className="cursor-pointer">
              Street Address
            </label>
            <input
              id="street-address"
              type="text"
              className="border-2 border-slate-200 p-1 rounded-sm"
              placeholder="Street Address"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="app-unit-suite" className="cursor-pointer">
              App, Unit, Suite
            </label>
            <input
              id="app-unit-suite"
              type="text"
              className="border-2 border-slate-200 p-1 rounded-sm"
              placeholder="App, Unit, Suite"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="postal-zip" className="cursor-pointer">
              Postal/Zip
            </label>
            <input
              id="postal-zip"
              type="text"
              className="border-2 border-slate-200 p-1 rounded-sm"
              placeholder="Postal/Zip"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="city" className="cursor-pointer">
              City
            </label>
            <input
              id="city"
              type="text"
              className="border-2 border-slate-200 p-1 rounded-sm"
              placeholder="City"
            />
          </div>
          <Button
            type="submit"
            className="w-1/3 h-11 px-4 m-auto sm:col-span-2"
          >
            Continue
          </Button>
        </form>
      </div>
    </>
  );
};
export default ShoppingCart;
