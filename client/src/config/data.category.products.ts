import { CategoryProduct } from "@/utils/types/productTypes";

import IconMeat from "@/assets/images/icons/icon-meat.svg";
import IconGuiso from "@/assets/images/icons/icon-cooking-pot.svg";

export const CATEGORIES: CategoryProduct[] = [
  {
    id: 1,
    name: "Carnes",
    slug: "carnes",
    icon: IconMeat,
    active: true,
  },
  {
    id: 2,
    name: "Guisos",
    slug: "guisos",
    icon: IconGuiso,
    active: false,
  },
];
