import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getBirdNameFromPath,
  photoHeight,
  photoWidth,
} from "../helpers/constants";

const Photo: React.FC<
  ImageProps & {
    clickable?: boolean;
    hidden?: boolean;
    overlayText: string;
    width?: string;
    height?: string;
  }
> = ({ overlayText, clickable, ...props }) => {
  const getPath = () => {
    return getBirdNameFromPath(props.src as string);
  };

  return (
    <div className={`relative mb-3 ${props.hidden ? "hidden" : ""}`}>
      {clickable ? (
        <Link href={`AllCategories/Birds/${getPath()}`}>
          <Image
            {...props}
            width={photoWidth}
            height={photoHeight}
            className={`${props.className} rounded-2xl cursor-pointer`}
            alt={props.alt}
          />
          <div className="absolute bottom-0 z-10 text-white text-center bg-text-overlay min-w-full w-fit rounded-br-2xl rounded-bl-2xl">
            {overlayText}
          </div>
        </Link>
      ) : (
        <>
          <Image
            {...props}
            width={photoWidth}
            height={photoHeight}
            className={`${props.className} rounded-2xl`}
            alt={props.alt}
          />
          <div className="absolute bottom-0 z-10 text-white text-center bg-text-overlay min-w-full w-fit rounded-br-2xl rounded-bl-2xl">
            {overlayText}
          </div>
        </>
      )}
    </div>
  );
};
export default Photo;
