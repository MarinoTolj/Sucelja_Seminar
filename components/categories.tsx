import Link from "next/link";
import Photo from "./photo";

type PropType = {};

const Categories: React.FC<PropType> = (props) => {
  return (
    <>
      <p className="hidden md:block md:text-center text-3xl md:mt-10">
        CATEGORIES
      </p>
      <div className="hidden md:flex md:justify-evenly md:mt-9 md:max-w-2xl md:gap-3 md:m-auto">
        <div className="relative">
          <Link href="/Birds">
            <Photo
              className="bg-center"
              src="/photos/birds/Green Parrot.jpg"
              alt="Green Parrot"
              overlayText="VIEW BIRDS"
              productType="Birds"
            />
          </Link>
        </div>
        <div>
          <Link href="/Cages">
            <Photo
              src="/photos/BirdCage.jpg"
              alt="BirdCage"
              overlayText="VIEW BIRD ACCESSORIES"
              productType="Cages"
            />
          </Link>
        </div>
        <div>
          <Link href="/Food">
            <Photo
              src="/photos/BirdFood.jpg"
              alt="BirdFood"
              overlayText="VIEW BIRD FOOD"
              productType="Food"
            />
          </Link>
        </div>
        {/* <Photo src="/photos/Bird1.jpg" alt="Bird1" overlayText="VIEW BIRDS" /> */}
      </div>
    </>
  );
};
export default Categories;
