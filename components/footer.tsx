type PropType = {};
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiWhatsapp } from "@mdi/js";

const Footer: React.FC<PropType> = (props) => {
  return (
    <footer className="bg-main-green-color h-36 mt-auto w-full">
      <p className="text-center text-2xl ">Contact Us!</p>
      <p className="text-center text-xs">+385 123 456 789</p>
      <p className="text-center text-xs">contact@buybirds.com</p>
      <div className="flex justify-center gap-2">
        <Icon path={mdiFacebook} size={1} />
        <Icon path={mdiWhatsapp} size={1} />
        <Icon path={mdiInstagram} size={1} />
      </div>
      <p className="text-center text-xs">Copyright @ Screws&Beers 2022</p>
      <p className="text-center text-xs">All rights reserved</p>
    </footer>
  );
};
export default Footer;
