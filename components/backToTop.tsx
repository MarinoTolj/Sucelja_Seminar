type PropType = {};
import Icon from "@mdi/react";
import { mdiArrowUpThin } from "@mdi/js";
import { useState } from "react";

const BackToTop: React.FC<PropType> = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  if (typeof window !== "undefined")
    window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className="fixed flex justify-center items-center w-14 h-14 right-5 bottom-20 text-5xl z-10 cursor-pointer bg-main-green-color rounded-full border-2 border-gray-500"
    >
      <Icon path={mdiArrowUpThin} size={4} />
    </button>
  );
};
export default BackToTop;
