import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { birdPhotosPaths, getBirdNameFromPath } from "../../helpers/constants";
import Photo from "../photo";

const MobileCarousel = () => {
  const [birdPhotos, setBirdPhotos] = useState(birdPhotosPaths);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        setBirdPhotos((prev) => {
          const foo = prev.slice(1);
          foo.push(prev[0]);
          return foo;
        });
      } else if ((eventData.dir = "Right")) {
        setBirdPhotos((prev) => {
          const foo = prev.slice(0, prev.length - 1);
          foo.unshift(prev[prev.length - 1]);
          return foo;
        });
      }
    },
  });

  return (
    <div
      className="flex justify-center mt-3 overflow-hidden gap-3 md:hidden"
      {...handlers}
    >
      {birdPhotos.map((src, index) => {
        if (index > 2) {
          return (
            <Photo
              key={index}
              src={src}
              alt={`Bird#${index + 1}`}
              className="hidden"
              loading="eager"
              hidden
              overlayText="hidden"
            />
          );
        }
        return (
          <Photo
            src={src}
            key={index}
            alt={`${getBirdNameFromPath(src)}`}
            className={`max-w-none h-80 ${
              index === 1 ? "drop-shadow-middlePhoto" : ""
            }`}
            loading="eager"
            overlayText={`${getBirdNameFromPath(src)}`}
            clickable={index === 1}
          />
        );
      })}
    </div>
  );
};
export default MobileCarousel;
