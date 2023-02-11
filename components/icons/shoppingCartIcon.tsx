import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";
import Link from "next/link";

import { useAppSelector } from "../../redux/hooks";
import { productsSelector } from "../../redux/products";

const ShoppingCartIcon = () => {
  const products = useAppSelector(productsSelector);
  return (
    <Link href="/ShoppingCart" className="relative">
      <Icon path={mdiCart} size={2} />

      {products.length > 0 && (
        <div className="absolute -top-2 -left-6 border-2 rounded-full w-7 h-7 text-center">
          {products.length}
        </div>
      )}
    </Link>
  );
};
export default ShoppingCartIcon;
