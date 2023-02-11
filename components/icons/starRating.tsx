import Icon from "@mdi/react";
import { mdiStar, mdiStarOutline } from "@mdi/js";

const numberOfStars = 5;

type PropType = {
  rating: number;
};

const StarRating: React.FC<PropType> = (props) => {
  return (
    <p className="flex">
      {Array.from({ length: numberOfStars }).map((_, index) => {
        if (index < props.rating) {
          return (
            <Icon
              key={index}
              path={mdiStar}
              size={1}
              className="text-yellow-600"
            />
          );
        } else {
          return (
            <Icon
              key={index}
              path={mdiStarOutline}
              size={1}
              className="text-yellow-600"
            />
          );
        }
      })}
    </p>
  );
};
export default StarRating;
