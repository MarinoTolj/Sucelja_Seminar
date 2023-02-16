import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Photo from "../../components/photo";
import { cagePhotosPaths, getCageNameFromPath } from "../../helpers/constants";

type PropType = {};

const Cages: React.FC<PropType> = (props) => {
  return (
    <>
      <Head>
        <title>Cages | BuyBirds</title>
      </Head>
      <div className="flex items-center flex-col">
        <div className="sm:w-full sm:relative mt-2">
          <h2 className="text-center mt-5 mb-5 text-lg font-semibold">
            Take a look at our selection of birdcages!
          </h2>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {cagePhotosPaths.map((path, index) => {
            return (
              <Photo
                src={path}
                alt={`${getCageNameFromPath(path)}`}
                overlayText={`${getCageNameFromPath(path)}`}
                clickable
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cages;
