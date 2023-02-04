import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

type PropType = {};

const width = "240";
const height = "240";

const MobileCarousel: React.FC<PropType> = (props) => {
  const [birdPhotos, setBirdPhotos] = useState([
    "/photos/Bird1.jpg",
    "/photos/Bird2.jpg",
    "/photos/Bird3.jpg",
    "/photos/Bird4.jpg",
    "/photos/Bird5.jpg",
    "/photos/Bird6.jpg",
  ]);

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
      className="flex justify-center mt-3 overflow-hidden gap-3"
      {...handlers}
    >
      {birdPhotos.map((src, index) => {
        if (index > 2) {
          return null;
        }
        return (
          <Image
            key={index}
            src={src}
            alt={`Bird#${index + 1}`}
            width={width}
            height={height}
            className={`rounded-2xl mb-3 ${
              index === 1 ? "drop-shadow-middlePhoto" : ""
            }`}
          />
        );
      })}
    </div>
  );
};
export default MobileCarousel;
