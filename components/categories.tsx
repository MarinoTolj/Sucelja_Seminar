import Link from "next/link";
import Photo from "./photo";

type PropType = {};

const Categories: React.FC<PropType> = (props) => {
  return (
    <>
      <p className="hidden md:block md:text-center text-3xl md:mt-10 bg-beige rounded-2xl w-fit m-auto p-3">
        Categories
      </p>
      <div className="hidden md:flex md:justify-evenly md:mt-9 md:max-w-2xl md:gap-3 md:m-auto">
        <div className="relative">
          <Link href="/Birds">
            <Photo
              className="bg-center"
              src="/photos/birds/Green Parrot.jpg"
              alt="Green Parrot"
              overlayText="View Birds"
              productType="birds"
            />
          </Link>
        </div>
        <div>
          <Link href="/Cages">
            <Photo
              src="/photos/BirdCage.jpg"
              alt="BirdCage"
              overlayText="View Bird Cages"
              productType="cages"
            />
          </Link>
        </div>
        <div>
          <Link href="/Food">
            <Photo
              src="/photos/food/Berries.jpg"
              alt="BirdFood"
              overlayText="View Bird Food"
              productType="food"
            />
          </Link>
        </div>
        {/* <Photo src="/photos/Bird1.jpg" alt="Bird1" overlayText="VIEW BIRDS" /> */}
      </div>
    </>
  );
};
export default Categories;
