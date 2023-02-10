import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
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
