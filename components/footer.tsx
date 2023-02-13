type PropType = {};
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiFacebook,
  mdiInstagram,
  mdiPhone,
  mdiWhatsapp,
} from "@mdi/js";

const Footer: React.FC<PropType> = (props) => {
  return (
    <footer className="bg-main-green-color h-36 mt-auto w-full relative md:justify-between">
      <div className="md:absolute md:ml-0 md:mt-8 ">
        <p className="text-center text-2xl md:mb-3">Contact Us!</p>
        <div className="md:flex md:gap-2">
          <Icon path={mdiPhone} size={1} className="hidden md:block" />
          <p className="text-center text-sm">+385 123 456 789</p>
        </div>
        <div className="md:flex md:gap-2">
          <Icon path={mdiEmail} size={1} className="hidden md:block" />
          <p className="text-center text-sm">contact@buybirds.com</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 md:flex-col md:absolute md:left-1/2 md:mt-8">
        <div className="flex gap-2">
          <Icon path={mdiFacebook} size={1} />
          <p className="hidden md:block">Facebook</p>
        </div>
        <div className="flex gap-2">
          <Icon path={mdiWhatsapp} size={1} />
          <p className="hidden md:block">Whatsapp</p>
        </div>
        <div className="flex gap-2">
          <Icon path={mdiInstagram} size={1} />
          <p className="hidden md:block">Instagram</p>
        </div>
      </div>
      <div className="absolute bottom-0 flex gap-3 bg-dark-green w-full justify-center">
        <p className="text-center text-xs">Copyright @ Screws&Beers 2022</p>
        <p className="text-center text-xs">All rights reserved</p>
      </div>
      <p className="hidden md:block md:absolute md:right-0 md:mt-14">
        BUYBIRDS
      </p>
    </footer>
  );
};
export default Footer;
