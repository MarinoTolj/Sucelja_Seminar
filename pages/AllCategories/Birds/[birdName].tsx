import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../components/button";
import StarRating from "../../../components/icons/starRating";
import Photo from "../../../components/photo";
import { birdNames } from "../../../helpers/constants";

type PropType = {
  birdName: string;
};

const BirdName: React.FC<PropType> = (props) => {
  const router = useRouter();

  return (
    <div className="flex gap-3 items-center flex-col mt-3">
      <div className="">
        <Link href="/AllCategories" className="text-hyperlink-blue font-bold">
          AllCategories
        </Link>
        <Link href="/AllCategories/Birds" className="text-hyperlink-blue">
          /Birds
        </Link>
        <span>/{props.birdName}</span>
      </div>
      <Photo
        src={`/photos/${props.birdName}.jpg`}
        alt={props.birdName}
        overlayText={props.birdName}
      />
      <div className="self-start ml-3">
        <p>PRICE: 300€</p>
        <p>
          RATTING:
          <span>
            <StarRating rating={2} />
          </span>
        </p>
      </div>
      <Button className="w-1/3 h-11">ADD TO CART</Button>
    </div>
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
