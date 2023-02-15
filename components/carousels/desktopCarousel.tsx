import { useEffect, useRef, useState } from "react";
import { birdPhotosPaths, getBirdNameFromPath } from "../../helpers/constants";
import useHover from "../../helpers/useHover";
import Photo from "../photo";

const currentPhotoActiveTime = 3;

type PropType = {};

const DesktopCarousel: React.FC<PropType> = (props) => {
  const [timer, setTimer] = useState(currentPhotoActiveTime);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [ref1, isHovered1] = useHover<HTMLDivElement>();
  const [ref2, isHovered2] = useHover<HTMLDivElement>();
  const [ref3, isHovered3] = useHover<HTMLDivElement>();
  const [ref4, isHovered4] = useHover<HTMLDivElement>();
  const [ref5, isHovered5] = useHover<HTMLDivElement>();
  const [ref6, isHovered6] = useHover<HTMLDivElement>();

  useEffect(() => {
    if (isHovered1) console.log("Ode");
  }, [ref1, isHovered1]);

  return (
    <div className="hidden md:grid md:grid-cols-2Cols md:grid-rows-3 md:mt-20 md:w-3/5 md:m-auto gap-3">
      {isHovered1 ? (
        <Photo
          src={birdPhotosPaths[0]}
          alt={`GreenParrot`}
          clickable
          overlayText={`Green Parrot`}
          divClassName="row-span-full max-w-md"
          className="w-full min-w-full"
          customHeight="100%"
        />
      ) : isHovered2 ? (
        <Photo
          src={birdPhotosPaths[1]}
          alt={`WhiteParrot`}
          clickable
          overlayText={`White Parrot`}
          divClassName="row-span-full max-w-md"
          className="w-full min-w-full"
          customHeight="100%"
        />
      ) : isHovered3 ? (
        <Photo
          src={birdPhotosPaths[2]}
          alt={`Crow`}
          clickable
          overlayText={`Crow`}
          divClassName="row-span-full max-w-md"
          className="w-full"
          customHeight="100%"
        />
      ) : isHovered4 ? (
        <Photo
          src={birdPhotosPaths[3]}
          alt={`Robin`}
          clickable
          overlayText={`Robin`}
          divClassName="row-span-full max-w-md"
          className="w-full"
          customHeight="100%"
        />
      ) : isHovered5 ? (
        <Photo
          src={birdPhotosPaths[4]}
          alt={`Canary`}
          clickable
          overlayText={`Canary`}
          divClassName="row-span-full max-w-md"
          className="w-full"
          customHeight="100%"
        />
      ) : isHovered6 ? (
        <Photo
          src={birdPhotosPaths[5]}
          alt={`Eagle`}
          clickable
          overlayText={`Eagle`}
          divClassName="row-span-full max-w-md"
          className="w-full"
          customHeight="100%"
        />
      ) : (
        <Photo
          src={birdPhotosPaths[0]}
          alt={`GreenParrot`}
          clickable
          overlayText={`Green Parrot`}
          divClassName="row-span-full max-w-md"
          className="w-full min-w-full"
          customHeight="100%"
        />
      )}

      <div ref={ref1}>
        <Photo
          src={birdPhotosPaths[0]}
          alt={`Green Parrot`}
          clickable
          overlayText={`Green Parrot`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
      <div ref={ref2}>
        <Photo
          src={birdPhotosPaths[1]}
          alt={`White Parrot`}
          clickable
          overlayText={`White Parrot`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
      <div ref={ref3}>
        <Photo
          src={birdPhotosPaths[2]}
          alt={`Crow`}
          clickable
          overlayText={`Crow`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
      <div ref={ref4}>
        <Photo
          src={birdPhotosPaths[3]}
          alt={`Robin`}
          clickable
          overlayText={`Robin`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
      <div ref={ref5}>
        <Photo
          src={birdPhotosPaths[4]}
          alt={`Canary`}
          clickable
          overlayText={`Canary`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
      <div ref={ref6}>
        <Photo
          src={birdPhotosPaths[5]}
          alt={`Eagle`}
          clickable
          overlayText={`Eagle`}
          customHeight="213px"
          divClassName="max-w-max"
        />
      </div>
    </div>
  );
};
export default DesktopCarousel;
