import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/button";
import StarRating from "../../components/icons/starRating";
import Photo from "../../components/photo";
import { cageNames } from "../../helpers/constants";

import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/products";

type PropType = {
  cageName: string;
};

const CageName: React.FC<PropType> = (props) => {
  const dispatch = useAppDispatch();
  const [productAmount, setProductAmount] = useState(1);
  const title = `${props.cageName} | BuyBirds`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="text-center py-1 border-2 border-beige rounded-2xl m-auto text-lg bg-beige w-fit px-2">
        <Link href="/Birds" className="text-dark-green font-bold underline">
          Birds
        </Link>
        <span>/{props.cageName}</span>
      </div>
      <div className="flex gap-3 items-center flex-col mt-3 md:flex-row md:m-auto md:gap-10">
        <Photo
          src={`/photos/Cages/${props.cageName}.jpg`}
          alt={props.cageName}
          overlayText={props.cageName}
          productType="Cages"
        />
        <div className="flex items-center flex-col w-60 md:w-auto">
          <div className="self-start md:mb-10">
            <p className="hidden md:block mb-5 text-5xl font-extrabold">
              {props.cageName}
            </p>
            <p className="mb-5 text-lg">Price: 300€</p>
            <div className="flex gap-1 text-lg">
              Rating:
              <StarRating rating={3} />
            </div>
          </div>
          <div className="items-center md:items-start md:flex md:flex-row-reverse md:gap-10">
            <Button
              className="w-1/3 h-12 px-4 md:mt-0"
              onClick={() =>
                dispatch(
                  addProduct({
                    name: props.cageName,
                    price: 300,
                    amount: productAmount,
                    productType: "Cages",
                  })
                )
              }
            >
              ADD TO CART
            </Button>
            <div className="flex gap-1 mb-16 justify-center">
              <button
                onClick={() => setProductAmount((prev) => prev - 1)}
                className={`border-2 rounded-bl-2xl  text-white rounded-tl-2xl ${
                  productAmount === 1
                    ? "bg-slate-500 border-slate-500"
                    : "bg-dark-green border-dark-green"
                } h-12 self-center`}
                disabled={productAmount === 1}
                aria-label="reduce-product-amount-by-one"
              >
                <Icon path={mdiMinus} size={1} />
              </button>
              <p className="self-center text-center text-2xl border-2 border-main-green-color px-3 h-12 pt-1">
                {productAmount}
              </p>
              <button
                onClick={() => setProductAmount((prev) => prev + 1)}
                className="border-2 bg-dark-green text-white border-dark-green h-12 self-center rounded-br-2xl rounded-tr-2xl"
                aria-label="add-product-amount-by-one"
              >
                <Icon path={mdiPlus} size={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CageName;

export async function getStaticPaths() {
  const paths = cageNames.map((name) => {
    return {
      params: {
        cageName: name,
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params !== undefined) {
    return {
      // Passed to the page component as props
      props: { cageName: context.params.cageName },
    };
  }
  return {
    // Passed to the page component as props
    props: { cageName: "" },
  };
};
