import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/button";
import StarRating from "../../components/icons/starRating";
import Photo from "../../components/photo";
import { birdNames } from "../../helpers/constants";

import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/products";

type PropType = {
  birdName: string;
};

const BirdName: React.FC<PropType> = (props) => {
  const dispatch = useAppDispatch();
  const [productAmount, setProductAmount] = useState(1);
  const title = `${props.birdName}} | BuyBirds`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="text-center">
        <Link href="/Birds" className="text-dark-green font-bold underline">
          Birds
        </Link>
        <span>/{props.birdName}</span>
      </div>
      <div className="flex gap-3 items-center flex-col mt-3 md:flex-row md:m-auto md:gap-10">
        <Photo
          src={`/photos/${props.birdName}.jpg`}
          alt={props.birdName}
          overlayText={props.birdName}
        />
        <div className="flex items-center flex-col w-60 md:w-auto">
          <div className="self-start md:mb-10">
            <p>PRICE: 300€</p>
            <div className="flex gap-1">
              RATING:
              <StarRating rating={3} />
            </div>
          </div>
          <div className="items-center md:items-start md:flex md:flex-row-reverse md:gap-10">
            <Button
              className="w-1/3 h-12 px-4 md:mt-0"
              onClick={() =>
                dispatch(
                  addProduct({
                    name: props.birdName,
                    price: 300,
                    amount: productAmount,
                  })
                )
              }
            >
              ADD TO CART
            </Button>
            <div className="flex gap-1 mb-16 justify-center">
              <button
                onClick={() => setProductAmount((prev) => prev - 1)}
                className={`border-2 ${
                  productAmount === 1
                    ? "border-slate-500 text-slate-border-slate-500"
                    : "border-dark-green"
                } h-12 self-center`}
                disabled={productAmount === 1}
              >
                <Icon path={mdiMinus} size={1} />
              </button>
              <p className="self-center text-center text-2xl border-2 border-main-green-color px-3 h-12 pt-1">
                {productAmount}
              </p>
              <button
                onClick={() => setProductAmount((prev) => prev + 1)}
                className="border-2 border-dark-green h-12 self-center"
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
export default BirdName;

export async function getStaticPaths() {
  const paths = birdNames.map((name) => {
    return {
      params: {
        birdName: name,
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
      props: { birdName: context.params.birdName },
    };
  }
  return {
    // Passed to the page component as props
    props: { birdName: "" },
  };
};
