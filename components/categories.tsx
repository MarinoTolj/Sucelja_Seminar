import Link from "next/link";
import Photo from "./photo";

type PropType = {};

const Categories: React.FC<PropType> = (props) => {
  return (
    <div className="hidden md:flex md:justify-evenly md:mt-9 md:max-w-2xl md:gap-3 md:m-auto">
      <Photo
        src="/photos/Bird1.jpg"
        alt="Bird1"
        overlayText="VIEW BIRDS"
        clickable
      />
      <Link href="/AllCategories/Accessories">
        <Photo
          src="/photos/BirdCage.jpg"
          alt="BirdCage"
          overlayText="VIEW BIRD ACCESSORIES"
        />
      </Link>
      <Link href="/AllCategories/Food">
        <Photo
          src="/photos/BirdFood.jpg"
          alt="BirdFood"
          overlayText="VIEW BIRD FOOD"
        />
      </Link>
      {/* <Photo src="/photos/Bird1.jpg" alt="Bird1" overlayText="VIEW BIRDS" /> */}
    </div>
  );
};
export default Categories;