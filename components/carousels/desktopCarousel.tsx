import { useEffect, useState } from "react";
import { birdPhotosPaths, getBirdNameFromPath } from "../../helpers/constants";
import Photo from "../photo";

const currentPhotoActiveTime = 3;

type PropType = {};

const DesktopCarousel: React.FC<PropType> = (props) => {
  const [timer, setTimer] = useState(currentPhotoActiveTime);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        setTimer(currentPhotoActiveTime);
        setCurrentPhoto((prev) => {
          if (prev === birdPhotosPaths.length - 1) return 0;
          else return prev + 1;
        });
      } else setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="hidden md:grid md:grid-cols-2Cols md:grid-rows-5 md:mt-3 md:max-w-2xl md:m-auto gap-3">
      {birdPhotosPaths.map((path, index) => {
        if (index === currentPhoto) {
          return (
            <Photo
              src={path}
              alt={`${getBirdNameFromPath(path)}`}
              key={index}
              clickable
              overlayText={`${getBirdNameFromPath(path)}`}
              divClassName="row-span-full max-w-md"
              className="w-full"
              customHeight="100%"
            />
          );
        }
        return (
          <Photo
            src={path}
            alt={`${getBirdNameFromPath(path)}`}
            key={index}
            clickable
            overlayText={`${getBirdNameFromPath(path)}`}
            customHeight="122.5px"
            divClassName="max-w-max"
          />
        );
      })}
    </div>
  );
};
export default DesktopCarousel;
