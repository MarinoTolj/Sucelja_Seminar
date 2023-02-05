import Image, { ImageProps } from "next/image";
import { photoHeight, photoWidth } from "../helpers/constants";

const Photo: React.FC<
  ImageProps & {
    hidden?: boolean;
    overlayText: string;
    width?: string;
    height?: string;
  }
> = ({ overlayText, ...props }) => {
  return (
    <div className={`relative mb-3 ${props.hidden ? "hidden" : ""}`}>
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
    </div>
  );
};
export default Photo;
