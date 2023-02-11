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
      <h2 className="text-center mb-3">BIRDS</h2>

      <div className="mb-4">
        <Link href="/AllCategories" className="text-hyperlink-blue font-bold">
          AllCategories
        </Link>
        <span>/Birds</span>
      </div>

      {birdPhotosPaths.map((path, index) => {
        return (
          <>
            <Photo
              src={path}
              alt={`${getBirdNameFromPath(path)}`}
              overlayText={`${getBirdNameFromPath(path)}`}
              clickable
            />
          </>
        );
      })}
    </div>
  );
};
export default Birds;
