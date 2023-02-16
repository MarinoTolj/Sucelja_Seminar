import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { LegacyRef } from "react";
import {
  getBirdNameFromPath,
  photoHeight,
  photoWidth,
} from "../helpers/constants";

const Photo: React.FC<
  ImageProps & {
    clickable?: boolean;
    hidden?: boolean;
    overlayText?: string;
    width?: string;
    customHeight?: string;
    divClassName?: string;
    productType: "Birds" | "Cages" | "Food" | "Other";
  }
> = ({
  overlayText,
  clickable,
  divClassName,
  customHeight,
  productType,
  ...props
}) => {
  const getPath = () => {
    return getBirdNameFromPath(props.src as string);
  };

  return (
    <div
      className={` ${divClassName} relative mb-3 ${
        props.hidden ? "hidden" : ""
      }`}
    >
      {clickable ? (
        <Link href={`/${productType}/${props.alt}`}>
          <Image
            {...props}
            width={photoWidth}
            height={photoHeight}
            className={`${props.className} rounded-2xl cursor-pointer`}
            alt={props.alt}
            style={{
              height: `${
                customHeight === undefined ? "320px" : `${customHeight}`
              }`,
            }}
          />
          {overlayText && (
            <div className="absolute bottom-0 z-10 text-white text-center bg-text-overlay min-w-full w-fit rounded-br-2xl rounded-bl-2xl text-lg">
              {overlayText}
            </div>
          )}
        </Link>
      ) : (
        <>
          <Image
            {...props}
            width={photoWidth}
            height={photoHeight}
            className={`${props.className} rounded-2xl`}
            alt={props.alt}
            style={{
              height: `${
                props.height === undefined ? "320px" : `${props.height}px`
              }`,
            }}
          />
          <div className="absolute bottom-0 z-10 text-white text-center bg-text-overlay min-w-full w-fit rounded-br-2xl rounded-bl-2xl text-2xl">
            {overlayText}
          </div>
        </>
      )}
    </div>
  );
};
export default Photo;
