import { CategoryProduct } from "@/utils/types/productTypes";

import IconMeat from "@/assets/images/icons/icon-meat.svg";
import IconGuiso from "@/assets/images/icons/icon-cooking-pot.svg";
import IconCarnesBlancas from "@/assets/images/icons/icon-chicken.svg";
import IconMasas from "@/assets/images/icons/icon-masas.svg";
import IconFish from "@/assets/images/icons/icon-fish.svg";
import IconCremas from "@/assets/images/icons/icon-cremas.svg";
import IconArroz from "@/assets/images/icons/icon-arroces.svg";

export const CATEGORIES: CategoryProduct[] = [
  {
    id: 1,
    name: "Carnes",
    slug: "carnes",
    icon: IconMeat,
    active: false,
  },
  {
    id: 2,
    name: "Guisos",
    slug: "guisos",
    icon: IconGuiso,
    active: false,
  },
  {
    id: 3,
    name: "Carnes Blancas",
    slug: "carnes-blancas",
    icon: IconCarnesBlancas,
    active: false,
  },
  {
    id: 4,
    name: "Masas",
    slug: "masas",
    icon: IconMasas,
    active: false,
  },
  {
    id: 5,
    name: "Pescados y mariscos",
    slug: "pescados-y-mariscos",
    icon: IconFish,
    active: false,
  },
  {
    id: 6,
    name: "Cremas",
    slug: "cremas",
    icon: IconCremas,
    active: false,
  },
  {
    id: 7,
    name: "Arroces",
    slug: "arroces",
    icon: IconArroz,
    active: false,
  },
];
