import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Photo from "../../components/photo";
import { birdPhotosPaths, getBirdNameFromPath } from "../../helpers/constants";

type PropType = {};

const Birds: React.FC<PropType> = (props) => {
  return (
    <>
      <Head>
        <title>Birds | BuyBirds</title>
      </Head>
      <div className="flex items-center flex-col">
        <div className="sm:w-full sm:relative mt-2">
          <h2 className="text-center mt-5 mb-5 text-lg font-semibold">
            Take a look at our selection of birds!
          </h2>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {birdPhotosPaths.map((path, index) => {
            return (
              <Photo
                src={path}
                alt={`${getBirdNameFromPath(path)}`}
                overlayText={`${getBirdNameFromPath(path)}`}
                clickable
                key={index}
                productType="birds"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Birds;
