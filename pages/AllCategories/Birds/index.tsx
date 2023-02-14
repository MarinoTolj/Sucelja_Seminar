import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Index from "..";
import Photo from "../../../components/photo";
import {
  birdPhotosPaths,
  getBirdNameFromPath,
} from "../../../helpers/constants";

type PropType = {};

const Birds: React.FC<PropType> = (props) => {
  return (
    <div className="flex items-center flex-col">
      <div className="sm:w-full sm:relative mt-2">
        <h2 className="text-center mb-3 text-lg">BIRDS</h2>
        <div className="mb-4 sm:absolute sm:left-0 sm:bottom-0 sm:ml-2">
          <Link href="/AllCategories" className="text-dark-green font-bold">
            AllCategories
          </Link>
          <span>/Birds</span>
        </div>
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default Birds;
