type PropType = {};
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiFacebook,
  mdiInstagram,
  mdiPhone,
  mdiWhatsapp,
} from "@mdi/js";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC<PropType> = (props) => {
  return (
    <footer className="bg-main-green-color h-36 mt-auto w-full relative md:justify-between">
      <div className="md:absolute md:ml-0 md:mt-8">
        <p className="text-center text-2xl md:mb-3 text-dark-green">
          Contact Us!
        </p>
        <div className="md:flex md:gap-2">
          <Icon path={mdiPhone} size={1} className="hidden md:block" />
          <p className="text-center text-sm text-dark-green">
            +385 123 456 789
          </p>
        </div>
        <div className="md:flex md:gap-2">
          <Icon path={mdiEmail} size={1} className="hidden md:block" />
          <p className="text-center text-sm text-dark-green">
            contact@buybirds.com
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-2 md:flex-col md:absolute md:left-1/2 md:mt-8">
        <div className="flex gap-2">
          <Icon path={mdiFacebook} size={1} />
          <p className="hidden md:block text-dark-green">Facebook</p>
        </div>
        <div className="flex gap-2">
          <Icon path={mdiWhatsapp} size={1} />
          <p className="hidden md:block text-dark-green">Whatsapp</p>
        </div>
        <div className="flex gap-2">
          <Icon path={mdiInstagram} size={1} />
          <p className="hidden md:block text-dark-green">Instagram</p>
        </div>
      </div>
      <div className="absolute bottom-0 flex gap-3 bg-dark-green w-full justify-center">
        <p className="text-center text-xs text-light-green">
          Copyright @ Screws&Beers 2022
        </p>
        <p className="text-center text-xs text-light-green">
          All rights reserved
        </p>
      </div>
      <div className="hidden md:block md:absolute md:right-0 max-w-xl md:w-40 md:h-10">
        <Link
          href="/"
          className="absolute text-center left-1/3 md:order-0 md:static"
        >
          <Image
            src="/photos/Logo.png"
            alt="Logo"
            className="w-1 md:w-36 bg-cover"
            width={200}
            height={100}
          />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
