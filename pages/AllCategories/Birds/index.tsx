import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

type PropType = {};

const Birds: React.FC<PropType> = (props) => {
  return (
    <div className="flex items-center flex-col">
      <h2 className="text-center mb-3">BIRDS</h2>

      <div>
        <Link href="/AllCategories" className="text-hyperlink-blue font-bold">
          AllCategories
        </Link>
        <span>/Birds</span>
      </div>
    </div>
  );
};
export default Birds;
