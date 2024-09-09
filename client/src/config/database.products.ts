import { Product } from "@/utils/types/productTypes";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "asado-aleman-salsa-mostaza",
    title: "Asado alemán con salsa mostaza",
    description:
      "Asado  jugoso y con carne de altísima calidad, salsa de mostaza liviana, le da un sabor especial, nos encanta",
    descriptionLarge:
      "El Asado Alemán con Salsa de Mostaza es una combinación de sabores clásicos. La carne de cerdo picada se mezcla con cebolla y condimentos, formando una base que se hornea hasta dorar. La salsa de mostaza, suave y ligeramente picante, realza los sabores. El resultado es un plato reconfortante donde la jugosidad de la carne se une con el toque distintivo de la salsa, creando una experiencia gastronómica equilibrada y deliciosa.",
    metaDescription:
      "Deléitate con nuestro exquisito Asado Alemán con salsa de mostaza. Placer casero congelado que llega directo a tu hogar. ¡Sabor que te sorprenderá!",
    category: "Carnes Rojas",
    price: 4895,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/asadoalemanmostaza.webp`,
    alt: "Asado alemán con salsa mostaza - platos congelados",
  },
  {
    id: 2,
    slug: "lomo-cerdo-cebolla-caramelizada",
    title: "Lomo de cerdo con cebolla caramelizada",
    description:
      "Es de nuestros platos favoritos, tratamos a la cebolla con tanto cariño dejando solo ese sabor dulce y suave para acompañarlo en su perfecta cocción",
    descriptionLarge:
      "El Lomo de Cerdo con Cebolla Caramelizada es un exquisito plato que combina tiernos filetes de cerdo dorados a la perfección con cebollas caramelizadas de tonos dorados oscuros. La carne jugosa se complementa con el sabor dulce y suave de las cebollas, creando una combinación equilibrada y deliciosa. Un plato elegante que cautiva con su contraste de texturas y sabores.",
    metaDescription:
      "Descubre el sabor único del Lomo de Cerdo con Cebolla Caramelizada. Placer congelado, directo a tu puerta. Comida casera que deleitará tus sentidos",
    category: "Carnes Blancas",
    price: 4895,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/lomodecerdo.webp`,
    alt: "Lomo de cerdo con cebolla caramelizada - platos congelados",
  },
  {
    id: 3,
    slug: "albondigas-de-carne",
    title: "Albóndigas de carne",
    description: "Receta familiar jugosa",
    descriptionLarge:
      "Las Albóndigas de Carne con Salsa de Tomate presentan pequeñas y jugosas esferas de carne sazonada, cocidas a la perfección. Se sirven nadando en una irresistible salsa de tomate casera, que aporta un equilibrado sabor agridulce y realza la textura suave de las albóndigas. Esta combinación clásica es un placer reconfortante para el paladar, ofreciendo un festín de sabores reconociendo y satisfaciendo a partes iguales.",
    metaDescription:
      "Prueba nuestras irresistibles Albóndigas de Carne congeladas. Deliciosas, caseras y listas para saborear. Disfruta de la comodidad en cada bocado.",
    category: "Carnes Rojas",
    price: 4895,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/albondigasdecarne.webp`,
    alt: "Albóndigas de carne - platos congelados",
  },
  {
    id: 4,
    slug: "strogonoff-de-carne",
    title: "Strogonoff de carne",
    description:
      "Carne sin grasa y el corte es perfecto, la salsa lo acompaña muy bien, acompañalo con arroz blanco",
    descriptionLarge:
      "El Strogonoff de carne es un plato reconfortante que combina tiernos trozos de carne, tradicionalmente res, en una rica y cremosa salsa a base de crema agria y caldo. Su textura suave y su sabor profundo se complementan con cebollas y champiñones salteados, añadiendo un toque terroso. Servido sobre arroz o fideos, este plato es un equilibrio perfecto entre lo indulgente y lo reconfortante, creando una experiencia culinaria satisfactoria y deliciosa.",
    metaDescription:
      "Sumérgete en el placer de nuestro Strogonoff de Carne congelado. Exquisita fusión de sabores, ahora en tu hogar. Comida casera, comodidad asegurada",
    category: "Carnes Rojas",
    price: 4895,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/strogonoffcarne.webp`,
    alt: "Strogonoff de carne - platos congelados",
  },
  {
    id: 5,
    slug: "pastel-choclo-carne",
    title: "Pastel de choclo carne",
    description:
      "La receta es exacta a la de nuestra mamá, el choclo molido a la perfección y con un pino suave, la mezcla es mágica",
    descriptionLarge:
      "El Pastel de Choclo es un plato chileno que combina sabores y texturas en armonía. Con una base de carne de res sazonada y aceitunas, está cubierto por una capa de puré de choclo (maíz tierno) mezclado con ají y especias. Al hornearse, el pastel desarrolla una costra dorada y crujiente en la parte superior, mientras que su interior se mantiene suave y jugoso. Esta fusión de ingredientes locales crea una experiencia culinaria única, resaltando la riqueza de los sabores tradicionales chilenos.",
    metaDescription:
      "Disfruta del sabor casero en cada bocado con nuestro Pastel de Choclo con Carne. Platos Congelados Cheffify: Delicia y comodidad en un solo lugar.",
    category: "Guisos",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/pasteldechoclocarnepicada.webp`,
    alt: "Pastel de choclo carne - platos congelados",
  },
  {
    id: 6,
    slug: "lasana-bolonesa",
    title: "Lasaña boloñesa",
    description:
      "Dirán esta lasaña la hace todo el mundo y es cierto, pero la nuestra es la más similar a la verdadera lasaña italiana",
    descriptionLarge:
      "La Lasaña Boloñesa es un deleite gastronómico que combina capas de láminas de pasta con una exquisita mezcla de carne de res sazonada, salsa de tomate y queso. Cada mordisco revela la profundidad de sabores: la carne boloñesa, cocida a fuego lento con tomate y hierbas, se entrelaza con la suavidad de la pasta, mientras el queso gratinado en la parte superior agrega un toque reconfortante. Esta creación culinaria es una celebración de texturas y sabores, un clásico reconfortante que deleita los sentidos.",
    metaDescription:
      "Sumérgete en el placer de nuestra Lasaña Boloñesa congelada. Deliciosos sabores caseros, directo a tu puerta. Platos Congelados Cheffify: Sabor y comodidad en uno.",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/lasanabolognesapastapicada.webp`,
    alt: "Lasaña boloñesa - platos congelados",
  },
  {
    id: 7,
    slug: "tomatican",
    title: "Tomaticán",
    description:
      "Carne mechada con tomate fresco y choclo,  por supuesto que añadimos un toque de nuestro recetario familiar, maravilloso",
    descriptionLarge:
      "El Tomaticán es un plato chileno que encarna la simplicidad y el sabor reconfortante. Combina tomates maduros, cebolla y choclo (maíz tierno) en un guiso suave y fragante. La textura de los granos de choclo contrasta con la suavidad de los tomates, creando una armonía de sabores. Es un tributo a la cocina tradicional chilena, resaltando ingredientes frescos y creando una experiencia gustativa auténtica y satisfactoria.",
    metaDescription:
      "Descubre el auténtico sabor del Tomaticán congelado. Placer casero en cada cucharada, ahora en tu hogar. Platos Congelados Cheffify: Delicia y comodidad en uno",
    category: "Guisos",
    price: 4345,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/tomatican.webp`,
    alt: "Tomaticán - platos congelados",
  },
  {
    id: 8,
    slug: "porotos-granados",
    title: "Porotos granados",
    description:
      "Tienen una cocción particular de nuestro recetario familiar que dan ese sabor que te lleva a nuestro campo chileno, pruébalos  verás que sólo el olor te transporta",
    descriptionLarge:
      "El Porotos Granados es un plato chileno que combina sabores y tradiciones. Este guiso rústico presenta porotos (judías) frescos, choclo (maíz tierno), calabaza y cebolla en una mezcla suave y aromática. La cremosidad de los porotos se equilibra con la dulzura del choclo y la calabaza, creando una sinfonía de texturas y sabores auténticos. Es un homenaje a la cocina chilena, conectando con ingredientes locales y brindando una experiencia culinaria satisfactoria y entrañable.",
    metaDescription:
      "Prueba la tradición en cada cucharada con nuestros Porotos Granados congelados. Sabor casero y reconfortante, entregado directamente a tu hogar.",
    category: "Guisos",
    price: 3630,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/porotosgranados.webp`,
    alt: "Porotos granados - platos congelados",
  },
  {
    id: 9,
    slug: "pie-de-pollo",
    title: "Pie de pollo",
    description:
      "La masa que hacemos en este pie es tan suave y delgada que puedes tener esa mezcla de sabores en tu boca del pollo jugoso y salteado",
    descriptionLarge:
      "El Pie de Pollo fusiona trozos de pollo suculentos con verduras en una salsa cremosa, envuelto en masa hojaldrada dorada. Cada bocado mezcla la ternura del pollo con la riqueza de la salsa, mientras la masa añade una textura sorprendente. Un clásico que combina simplicidad y sabor, creando una experiencia culinaria que abraza el paladar con calidez y satisfacción.",
    metaDescription:
      "Deléitate con nuestro irresistible Pie de Pollo congelado. Sabor casero que llega a tu puerta. Platos Congelados Cheffify: Comida de calidad, comodidad insuperable",
    category: "Masas",
    price: 4345,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/piedepollo.webp`,
    alt: "Pie de pollo - platos congelados",
  },
  {
    id: 10,
    slug: "lasana-pollo-espinaca",
    title: "Lasaña pollo espinaca",
    description:
      "A nuestra espectacular lasaña de pollo le agregamos espinaca fresca, elegimos muy bien nuestras verduras, para que no se occiden en su cocción",
    descriptionLarge:
      "La Lasaña de Pollo y Espinaca combina delicados trozos de pollo cocido con espinacas frescas en capas de pasta, todo intercalado con una mezcla suave de ricotta y queso mozzarella. Bañada en salsa marinara y horneada hasta dorar, esta lasaña ofrece una fusión de sabores: la ternura del pollo, el carácter terroso de las espinacas y la riqueza de los quesos, todo en armonía entre láminas de pasta. Una creación gastronómica que catapulta a los sentidos en un viaje de delicias.",
    metaDescription:
      "Explora una combinación deliciosa con nuestra Lasaña de Pollo y Espinaca congelada. Placer casero en cada capa, directo a tu hogar. Platos Congelados Cheffify",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/lasanapolloespinaca.webp`,
    alt: "Lasaña pollo espinaca - platos congelados",
  },
  {
    id: 11,
    slug: "quiche-pollo-pimenton",
    title: "Quiche pollo pimentón",
    description:
      "A nuestra deliciosa quiche de pollo le quisimos agregar un poco de color y sabor con un toque de pimenton fresco",
    descriptionLarge:
      "El Quiche de Pollo y Pimentón es un deleite culinario que combina trozos tiernos de pollo con pimentones salteados en una mezcla suave de huevos y crema. Todo reposa sobre una base de masa quebrada dorada. Cada bocado revela la armonía entre el sabor suave del pollo, la dulzura de los pimentones y la textura delicada de la masa. Una fusión irresistible de ingredientes que ofrece una experiencia culinaria equilibrada y deliciosa.",
    metaDescription:
      "Disfruta de la fusión perfecta en nuestro Quiche de Pollo y Pimentón congelado. Delicioso sabor casero, entregado a tu puerta. Comodidad y placer en cada bocado",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/quichepollopimenton.webp`,
    alt: "Quiche pollo pimentón - platos congelados",
  },
  {
    id: 12,
    slug: "tallarines-panqueques-salsa-pollo",
    title: "Tallarines panqueques con salsa pollo",
    description:
      "Cortamos y hacemos estos maravillosos tallarines con nuestros panqueques, nuestra salsa es de pollo natural",
    descriptionLarge:
      "Los Tallarines de Panqueques con Salsa de Pollo presentan finas tiras de panqueques acompañadas de una deliciosa salsa de pollo. Los panqueques se doblan en tiras similares a tallarines y se mezclan con la suculenta salsa, que combina trozos tiernos de pollo en una base de crema o tomate. Esta fusión crea una experiencia única, donde la textura esponjosa de los panqueques se encuentra con la riqueza de la salsa de pollo. Un plato que combina la nostalgia de la comida casera con sabores reconfortantes.",
    metaDescription:
      "Conoce nuestros deliciosos Tallarines Panqueques con Salsa de Pollo. Sabor casero, listo para saborear. Congelados Cheffify: Comida de calidad, comodidad insuperable",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/tallarinesdepanquequesalsapollo.webp`,
    alt: "Tallarines panqueques con salsa pollo - platos congelados",
  },
  {
    id: 13,
    slug: "tallarines-panqueques-salsa-salmon",
    title: "Tallarines panqueques con salsa salmón",
    description:
      "Salmón que compramos para esta salsa es elegido personalmente, le damos el corte perfecto y la sazón para hacer una experiencia en tu boca",
    descriptionLarge:
      "Los Tallarines de Panqueques con Salsa de Salmón ofrecen finas tiras de panqueques acompañadas de una exquisita salsa de salmón. Los panqueques se doblan en tiras similares a tallarines y se entremezclan con la delicada salsa, que presenta trozos de salmón en una base cremosa. Esta fusión crea una experiencia culinaria única, donde la textura suave de los panqueques se encuentra con la intensidad de sabor del salmón. Un plato que combina innovación con sabores frescos y sofisticados.",
    metaDescription:
      "Descubre una combinación exquisita en nuestros Tallarines Panqueques con Salsa de Salmón. Sabor casero congelado que deleitará tus sentidos. ",
    category: "Masas",
    price: 7095,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/tallarinespanquequessalmon.webp`,
    alt: "Tallarines panqueques con salsa salmón - platos congelados",
  },
  {
    id: 14,
    slug: "pollo-con-tocino",
    title: "Pollo con tocino",
    description:
      "Nos destacamos especialmente por la cocción de nuestros pollos, nuestro corte de pechuga deshuesada envuelta en fino tocino, quedando dorado por fuera y muy jugoso",
    descriptionLarge:
      "El Pollo con Tocino es un plato que combina la jugosidad del pollo con la intensidad del tocino. Trozos de pollo se envuelven en tiras de tocino que se doran hasta la perfección, creando una combinación de sabores y texturas. El pollo aporta su suavidad y el tocino agrega un sabor ahumado y crujiente. Es un dúo clásico que resalta el contraste entre lo tierno y lo crujiente, creando una experiencia culinaria satisfactoria y deliciosa.",
    metaDescription:
      "Explora una explosión de sabores en nuestro Pollo con Tocino congelado. Placer casero en cada bocado, directo a tu hogar. Platos Congelados Cheffify: Comida de calidad",
    category: "Carnes Blancas",
    price: 4895,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/pollotocino.webp`,
    alt: "Pollo con tocino - platos congelados",
  },
  {
    id: 15,
    slug: "pollo-arvejado",
    title: "Pollo arvejado",
    description:
      "Pollo con ese sabor tan particular de nuestras abuelas, la arveja tierna, con el corte de la zanahoria fina, y muy jugoso",
    descriptionLarge:
      "El Pollo Arvejado es un plato que une tiernos trozos de pollo con arvejas en una base de salsa. El pollo se cocina hasta estar jugoso y se combina con arvejas tiernas, creando una mezcla sabrosa y reconfortante. La salsa, a menudo a base de caldo y especias, realza los sabores naturales. Es una combinación clásica que destaca la simplicidad y el sabor, creando una experiencia culinaria familiar y satisfactoria.",
    metaDescription:
      "Saborea la tradición en nuestro Pollo Arvejado congelado. Auténtico sabor casero, entregado directamente a tu puerta. Delicia y comodidad en un solo lugar.",
    category: "Carnes Blancas",
    price: 4895,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/polloarvejado.webp`,
    alt: "Pollo arvejado - platos congelados",
  },
  {
    id: 16,
    slug: "strogonoff-de-pollo",
    title: "Strogonoff de pollo",
    description:
      "Este strogonoff  es muy liviano, la salsa y el corte del pollo lo hace un plato suave y muy delicioso, con una sazón delicada que le da un gusto especial a la boca",
    descriptionLarge:
      "El Strogonoff de Pollo es un plato que fusiona trozos tiernos de pollo con una cremosa salsa a base de crema agria. Los trozos de pollo se doran y luego se mezclan con la salsa, que suele llevar cebolla, champiñones y a veces tomate. La combinación de sabores es rica y reconfortante, con la suavidad del pollo contrastando con la textura cremosa de la salsa. Es una delicia que combina lo indulgente y lo familiar, creando una experiencia culinaria satisfactoria y agradable.",
    metaDescription:
      "Disfruta del exquisito Strogonoff de Pollo congelado. Deliciosos sabores caseros que llegan a tu hogar. Experimenta la comodidad y autenticidad en cada bocado.",
    category: "Carnes Blancas",
    price: 4895,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/strogonoffpollo.webp`,
    alt: "Strogonoff de pollo - platos congelados",
  },
  {
    id: 17,
    slug: "picante-de-camaron",
    title: "Picante de camarón",
    description:
      "Es una receta exclusiva nuestra, de los platos más vendidos, son camarones ecuatorianos  de 36/40, con una salsa inigualable,  acompañalo con arroz blanco",
    descriptionLarge:
      "El Picante de Camarón es un plato que resalta la fusión de sabores intensos. Los camarones se cocinan en una salsa picante, que puede llevar tomate, ajíes y especias diversas. La combinación de los camarones tiernos con la audacia de la salsa crea una experiencia gustativa llena de matices. El picante realza el sabor marino de los camarones, mientras que los elementos aromáticos y especiados agregan profundidad. Es una creación culinaria que combina audacia y sabor, brindando una experiencia excitante y deliciosa.",
    metaDescription:
      "Prueba la intensidad de nuestro Picante de Camarón congelado. Sabor casero y auténtico, directo a tu hogar. Experimenta una nueva dimensión de placer culinario",
    category: "Pescados y mariscos",
    price: 8635,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/picantecamaron.webp`,
    alt: "Picante de camarón - platos congelados",
  },
  {
    id: 18,
    slug: "croquetas-de-atun",
    title: "Croquetas de atún",
    description:
      "Suave atún con aliños en su medida, quedan doradas por fuera y al partirlas veras el misterio de como quedan por dentro, atrévete",
    descriptionLarge:
      "Las Croquetas de Atún son pequeñas delicias que combinan atún enlatado con otros ingredientes como pan rallado, huevo y condimentos. La mezcla se moldea en formas y se fríe hasta obtener una costra dorada y crujiente por fuera, mientras el interior permanece suave y sabroso. Estas croquetas ofrecen un equilibrio entre el sabor suave del atún y la textura crujiente, creando una experiencia culinaria satisfactoria y versátil. Pueden ser un aperitivo, un plato principal o incluso parte de un almuerzo ligero.",
    metaDescription:
      "Deléitate con nuestras irresistibles Croquetas de Atún congeladas. Sabor casero en cada bocado, listas para disfrutar. Una delicia que llega directo a tu hogar.",
    category: "Pescados y mariscos",
    price: 4895,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/croquetasatun.webp`,
    alt: "Croquetas de atún - platos congelados",
  },
  {
    id: 20,
    slug: "panqueques-de-pollo",
    title: "Panqueques de pollo",
    description:
      "Nuestros exquisitos y únicos panqueques rellenos con pollo y con una suave salsa bechamel, te sirve para diferentes ocasiones y son muy livianos",
    descriptionLarge:
      "Los Panqueques de Pollo son una deliciosa creación que combina panqueques suaves con relleno de pollo. El pollo cocido y desmenuzado se mezcla con una variedad de ingredientes, como verduras y salsas, para crear un relleno sabroso. Luego, se envuelve el relleno en los panqueques y se sirven, creando una fusión de sabores y texturas. La suavidad de los panqueques contrasta con la textura del relleno, y cada bocado es una combinación de sabores reconfortantes. Estos panqueques son un platillo versátil y creativo, perfectos como plato principal o incluso como opción para el brunch.",
    metaDescription:
      "Descubre la originalidad en nuestros Panqueques de Pollo congelados. Sabor casero en cada porción, entregado a tu puerta. Una experiencia que no querrás perderte.",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/panquequesdepollo.webp`,
    alt: "Panqueques de pollo - platos congelados",
  },
  {
    id: 21,
    slug: "pastel-choclo-pollo",
    title: "Pastel de choclo pollo",
    description:
      "Al igual que el pastel de choclo carne, le hicimos esta variación en vez de carne le pusimos pollo, es muy suave y la combinación es perfecta, muy jugosa",
    descriptionLarge:
      "El Pastel de Choclo con Pollo es una creación culinaria que combina el sabor suave del choclo (maíz tierno) con trozos de pollo en un platillo gratinado. La base se compone de una mezcla de choclo molido y otros ingredientes, mientras que el pollo se cocina y se mezcla con una variedad de condimentos y salsas para crear un relleno sabroso. La mezcla de choclo se coloca sobre el pollo en un molde y se hornea hasta que se dora y gratina en la parte superior. Cada bocado es una combinación de texturas y sabores, desde la suavidad del choclo hasta la profundidad del pollo sazonado. Es un plato tradicional y satisfactorio que resalta la versatilidad de los ingredientes locales.",
    metaDescription:
      "Sumérgete en el placer de nuestro Pastel de Choclo con Pollo congelado. Comida casera en cada bocado, entregado directamente a tu hogar. Una delicia que te sorprenderá.",
    category: "Guisos",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/pasteldechoclopollo.webp`,
    alt: "Pastel de choclo pollo - platos congelados",
  },
  {
    id: 22,
    slug: "quiche-jamon-queso",
    title: "Quiche jamón queso",
    description:
      "Acompañala con un buen vino , la masa muy delgada, usamos queso muy suave, puedes trocearla para aperitivo o plato único",
    descriptionLarge:
      "El Quiche de Jamón y Queso es una deliciosa preparación que combina trozos de jamón con una mezcla suave de huevos, crema y queso. Esta mezcla se vierte sobre una base de masa quebrada y se hornea hasta que adquiere una textura dorada y un relleno esponjoso. El jamón aporta su sabor ahumado y salado, mientras que el queso agrega su riqueza y la masa proporciona un contraste crujiente. Cada bocado es una armonía de sabores y texturas, creando una experiencia culinaria que abraza tanto lo decadente como lo reconfortante.",
    metaDescription:
      "Experimenta la fusión perfecta en nuestro Quiche de Jamón y Queso congelado. Sabor casero y reconfortante, listo para disfrutar y directamente a tu hogar",
    category: "Masas",
    price: 4345,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/quichejamonqueso.webp`,
    alt: "Quiche jamón queso - platos congelados",
  },
  {
    id: 23,
    slug: "quiche-verdura",
    title: "Quiche de Verdura",
    description:
      "Plato vegetariano, liviano con verduras frescas y masa muy delgada",
    descriptionLarge:
      "El Quiche de Verduras es un exquisito plato que fusiona una variedad de vegetales frescos en una base de huevos, crema y queso. Estos ingredientes se mezclan y se vierten sobre una base de masa quebrada, luego se hornea hasta obtener una textura dorada y un relleno esponjoso. La combinación de verduras, como espinacas, champiñones y pimientos, aporta colores y sabores diversos. Cada bocado es una sinfonía de sabores vegetales, complementados por la suavidad de la mezcla de huevo y el contraste crujiente de la masa. Es un plato versátil que resalta la frescura y la nutrición de las verduras, creando una experiencia culinaria saludable y deliciosa.",
    metaDescription:
      "Descubre la autenticidad en nuestro Quiche de Verdura casero, con ingredientes frescos y deliciosos. Disfruta de la comodidad de la entrega a domicilio.",
    category: "Masas",
    price: 4345,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/quicheverduras.webp`,
    alt: "Quiche de Verdura - platos congelados",
  },
  {
    id: 24,
    slug: "lasana-de-pollo",
    title: "Lasaña de pollo",
    description:
      "El secreto de nuestro recetario familiar está en la salsa bechamel, es única y le da ese toque más cremoso y suave, en cuanto a la masa, somos italianas ",
    descriptionLarge:
      "La Lasaña de Pollo es una deliciosa combinación de capas de láminas de pasta intercaladas con trozos tiernos de pollo, salsa de tomate y queso derretido. Cada bocado ofrece una fusión de sabores, desde la suavidad del pollo hasta la riqueza de la salsa y el gratinado del queso. Una experiencia culinaria reconfortante y sabrosa.",
    metaDescription:
      "Disfruta de nuestra deliciosa Lasaña de Pollo casera. Sabores auténticos y envío a domicilio para una experiencia culinaria única en la comodidad de tu hogar.",
    category: "Masas",
    price: 4345,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/lasanapollo.webp`,
    alt: "Lasaña de pollo - platos congelados",
  },
  {
    id: 25,
    slug: "panqueques-para-rellenar",
    title: "Panqueques para rellenar (la docena)",
    description:
      "Delgados, suaves, te ayudan en cualquier comida dulce o salada, los mejores, en nuestro instagram te daremos muchas ideas para usarlos",
    descriptionLarge:
      "Los Panqueques para Rellenar son versátiles y suaves discos de masa que se preparan para ser rellenados con una amplia gama de ingredientes. Desde opciones dulces como frutas y crema batida, hasta alternativas saladas como carne y verduras. Estos panqueques son un lienzo culinario en blanco, permitiendo crear combinaciones personalizadas de sabores y texturas. Su flexibilidad los convierte en una opción ideal tanto para platos principales como para postres, ofreciendo una experiencia culinaria personalizada y satisfactoria.",
    metaDescription:
      "Transforma tus platos con nuestros Panqueques para Rellenar congelados. Sabor casero directo a tu puerta. ¡Crea y saborea con nosotros!",
    category: "Masas",
    price: 3630,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/panquequesrellenar.webp`,
    alt: "Panqueques para rellenar (la docena) - platos congelados",
  },
  {
    id: 26,
    slug: "pastelera",
    title: "Pastelera",
    description:
      "Esta pastelera es perfecta para acompañar alguna carne roja o blanca, está hecha con choclo tierno, le damos una sazón natural para que no pierda su sabor original",
    descriptionLarge:
      'La "Pastelera" es un plato tradicional chileno que se elabora principalmente a partir de maíz tierno o choclo. Es una especie de crema o puré a base de granos de maíz desgranados y molidos, que se cocina lentamente hasta obtener una consistencia suave y cremosa. A menudo se condimenta con sal y puede llevar otros ingredientes como cebolla o albahaca para potenciar su sabor. La Pastelera suele servirse como acompañamiento de carnes o aves, y es especialmente popular en la época de cosecha del maíz. Es una preparación sencilla pero deliciosa que destaca el sabor dulce y fresco del choclo.',
    metaDescription:
      "Disfruta de la auténtica Pastelera de Choclo congelada. Sabor casero que llega a tu puerta. ¡Ordénala y saborea la tradición en cada bocado",
    category: "Masas",
    price: 3630,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/pastelera.webp`,
    alt: "Pastelera - platos congelados",
  },
  {
    id: 27,
    slug: "crema-de-zapallo",
    title: "Crema de Zapallo",
    description:
      "Zapallo natural molido, le damos una cocción tan especial que se asoma un poco el dulzor  y cremosidad perfecta, pruebala invierno y verano",
    descriptionLarge:
      "La Crema de Zapallo es un manjar reconfortante. El zapallo, cocido a la perfección, se transforma en una mezcla suave y sedosa. Su color vibrante y cálido refleja la calidez de su sabor. Condimentada con suavidad, la crema ofrece un equilibrio entre dulzura y sabor terroso. Cada cucharada es un abrazo culinario, perfecto para los días fríos o cualquier momento en busca de confort.",
    metaDescription:
      "Disfruta nuestra exquisita Crema de Zapallo congelada. Sabor casero en cada cucharada. Haz tu pedido y siente el calor del hogar en tu paladar",
    category: "Cremas",
    price: 3630,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/cremazapallo.webp`,
    alt: "Crema de Zapallo - platos congelados",
  },
  // {
  //   id: 28,
  //   slug: 'alfajor-con-chocolate',
  //   title: 'Alfajor con chocolate',
  //   description:
  //     'Deliciosos alfajores de chocolate con suave relleno de manjar, el equilibrio perfecto entre dulzura y sabor que te hará desear más (8 Unidades).',
  //   descriptionLarge:
  //     'Los Alfajores son dulces tradicionales que consisten en dos galletas suaves y delicadas que se unen con un relleno dulce, generalmente de dulce de leche. Estas galletas suelen ser espolvoreadas con azúcar glas o decoradas con coco rallado en los bordes. El resultado es un bocado tierno y dulce que combina la textura crujiente de las galletas con la cremosidad del relleno. Los alfajores son una delicia popular en muchas culturas y una tentadora opción para acompañar una taza de té o café.',
  //   metaDescription:
  //     'Deléitate con el placer de nuestro Alfajor con Chocolate congelado. Sabor casero que te conquistará. ¡Ordénalo y endulza tus momentos',
  //   category: 'Dulces',
  //   price: 7900,
  //   image: Alfajores,
  //   alt: 'Alfajor con chocolate - comida prepadara',
  // },
  // {
  //   id: 29,
  //   title: 'Galletas finas',
  //   slug: 'galletas-finas',
  //   description:
  //     'Galletas finas  crujientes por fuera, suaves por dentro. Saborea nuestros dulces sabores y disfruta de un momento ideal para tus tardes de té (1 KG Surtido).',
  //   descriptionLarge:
  //     'Las Galletas Dulces son pequeñas delicias horneadas que combinan la delicadeza de las galletas con un toque sutil de té. El aroma y el sabor del té se fusionan con la dulzura de la masa, creando una experiencia gustativa única. Estas galletas suelen tener una textura crujiente por fuera y suave por dentro. Son el acompañamiento perfecto para una taza de té o café, proporcionando un bocado delicado y reconfortante que combina lo dulce con lo aromático.',
  //   metaDescription:
  //     'Descubre la exquisitez de nuestras Galletas Finas congeladas. Sabor casero que llega a tu puerta. ¡Ordénalas y disfruta de un festín de dulzura!',
  //   category: 'Dulces',
  //   price: 17000,
  //   image: Galletas,
  //   alt: 'Galletas finas - comida prepadara',
  // },
  // {
  //   id: 30,
  //   slug: 'pan-de-pascua',
  //   title: 'Pan de pascua',
  //   description:
  //     'El clásico pan de pascua, con su mezcla perfecta con almendras y nueces, especias y sabores navideños. Disfruta de su textura esponjosa y su aroma inigualable, en cada rebanada. (800 gr).',
  //   descriptionLarge:
  //     'El Pan de Pascua es un clásico postre navideño que combina una mezcla rica y especiada de frutas secas, nueces y especias con una masa esponjosa y aromática. Su textura húmeda y sabor dulce se logran con ingredientes como pasas, nueces, ralladura de naranja y especias como canela y clavo de olor. Hornearlo impregna el aire con una fragancia reconfortante. Este pan festivo es una tradición en muchas culturas, sirviendo como un homenaje culinario que encarna la celebración y el compartir en la temporada navideña.',
  //   metaDescription:
  //     'Revive el espíritu navideño con nuestro delicioso Pan de Pascua congelado. Sabor casero que te transportará a Navidad ¡Ordénalo y celebra con nosotros!',
  //   category: 'Dulces',
  //   price: 10500,
  //   image: PanDePascua,
  //   alt: 'Pan de pascua - comida prepadara',
  // },
  // {
  //   id: 31,
  //   slug: 'galleta-de-navidad',
  //   title: 'Galleta Navideña',
  //   description:
  //     '¡Nuestras estrellas festivas! Galletas navideñas, 1 kg de pura magia: harina selecta, miel dorada, canela aromática, con amor y alegría en cada bocado.',
  //   descriptionLarge:
  //     'Descubre nuestras galletas navideñas de 1 kg, con una base de harina crujiente, miel dulce y canela cálida. La combinación de huevos y margarina crea una textura suave y mantecosa, mientras el azúcar flor añade un toque sutil de dulzura. Son el regalo perfecto para compartir y celebrar la Navidad en familia y con amigos.',
  //   metaDescription:
  //     '¡Nuestras estrellas festivas! Galletas navideñas, 1 kg de pura magia: harina selecta, miel dorada, canela aromática, con amor y alegría en cada bocado.',
  //   category: 'Dulces',
  //   price: 21250,
  //   image: GalletaNavidad,
  //   alt: 'Galleta Navideña - comida prepadara',
  // },
  // {
  //   id: 32,
  //   slug: 'cuchufli',
  //   title: 'Cuchuflí (25 unidades)',
  //   description:
  //     'Cuchuflí chileno exquisito: 25 unidades, vainas crujientes, rellenas de manjar suave, bañadas en rico chocolate. Un deleite en cada bocado.',
  //   descriptionLarge:
  //     'Sumérgete en el sabor de Chile con nuestros cuchuflís, disponibles en cajas de 25 unidades. Cada pieza es una vaina crujiente de harina y aceite vegetal, rellena generosamente con manjar cremoso y dulce. El toque final es una inmersión en chocolate sedoso, creando una experiencia gustativa única. Perfectos para compartir y disfrutar en cualquier ocasión.',
  //   metaDescription:
  //     'Cuchuflí chileno exquisito: 25 unidades, vainas crujientes, rellenas de manjar suave, bañadas en rico chocolate. Un deleite en cada bocado.',
  //   category: 'Dulces',
  //   price: 7200,
  //   image: Cuchufli,
  //   alt: 'Cuchuflí - comida prepadara',
  // },
  // {
  //   id: 33,
  //   slug: 'cuchufli',
  //   title: 'Cuchuflí (50 unidades)',
  //   description:
  //     'Cuchuflí chileno exquisito: 50 unidades, vainas crujientes, rellenas de manjar suave, bañadas en rico chocolate. Un deleite en cada bocado.',
  //   descriptionLarge:
  //     'Sumérgete en el sabor de Chile con nuestros cuchuflís, disponibles en cajas de 50 unidades. Cada pieza es una vaina crujiente de harina y aceite vegetal, rellena generosamente con manjar cremoso y dulce. El toque final es una inmersión en chocolate sedoso, creando una experiencia gustativa única. Perfectos para compartir y disfrutar en cualquier ocasión.',
  //   metaDescription:
  //     'Cuchuflí chileno exquisito: 50 unidades, vainas crujientes, rellenas de manjar suave, bañadas en rico chocolate. Un deleite en cada bocado.',
  //   category: 'Dulces',
  //   price: 14000,
  //   image: Cuchufli,
  //   alt: 'Cuchuflí - comida prepadara',
  // },
  {
    id: 34,
    slug: "arroz-blanco",
    title: "Arroz Blanco",
    description:
      "La simplicidad perfecta del arroz blanco, un acompañante versátil que realza los sabores de cualquier plato principal.",
    descriptionLarge:
      "La preparación del arroz blanco comienza con el enjuague minucioso del grano, seguido de su cocción en agua con una pizca de sal, buscando alcanzar una textura esponjosa y granos perfectamente separados. Este arroz es la base ideal para una amplia variedad de platos, ofreciendo un lienzo en blanco que realza los sabores con los que se combina.",
    metaDescription:
      "La preparación del arroz blanco comienza con el enjuague minucioso del grano, seguido de su cocción en agua con una pizca de sal, buscando alcanzar una textura esponjosa y granos perfectamente separados.",
    category: "Arroces",
    price: 1430,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/arroz_blanco.webp`,
    alt: "Arroz Blanco - comida prepadara",
  },
  {
    id: 35,
    title: "Arroz Árabe",
    slug: "arroz-arabe",
    description:
      "Sumérgete en el sabor exótico del Medio Oriente con nuestro arroz árabe, enriquecido con frutos secos y especias.",
    descriptionLarge:
      "El arroz árabe es una delicia culinaria que combina el arroz basmati con un rico tapiz de especias como canela y comino, además de frutos secos y pasas, que se cocinan juntos para crear un plato fragante y lleno de sabor. Es una celebración de la cocina del Medio Oriente, perfecto para acompañar carnes o como plato principal vegetariano.",
    metaDescription:
      "El arroz árabe es una delicia culinaria que combina el arroz basmati con un rico tapiz de especias como canela y comino, además de frutos secos y pasas, que se cocinan juntos para crear un plato fragante y lleno de sabor.",
    category: "Arroces",
    price: 1430,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/arroz_arabe.webp`,
    alt: "Arroz Árabe - comida prepadara",
  },
  {
    id: 36,
    title: "Arroz Cilantro",
    slug: "arroz-cilantro",
    description:
      "Deleita tu paladar con el frescor del arroz cilantro, una explosión de sabor verde que aporta un toque único a tu mesa.",
    descriptionLarge:
      "Este arroz incorpora la frescura del cilantro y el toque cítrico del limón en una base de arroz blanco cocido. La clave está en añadir el cilantro picado y el jugo de limón después de la cocción, preservando así el color vibrante y el sabor fresco del cilantro. Es una opción refrescante y ligera, ideal para acompañar desde pescados hasta platos vegetarianos.",
    metaDescription:
      "Este arroz incorpora la frescura del cilantro y el toque cítrico del limón en una base de arroz blanco cocido.",
    category: "Arroces",
    price: 1430,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/Arroz_cilantro.webp`,
    alt: "Arroz Cilantro - comida prepadara",
  },
  {
    id: 37,
    title: "Arroz Pimentón",
    slug: "arroz-pimenton",
    description:
      "La mezcla perfecta de colores y sabores, una combinación balanceada de dulzura y textura.",
    descriptionLarge:
      "El arroz pimiento mezcla arroz cocido con tiras de pimientos rojos y verdes salteados, añadiendo no solo un estallido de color sino también una dulzura natural. Un ligero sofrito de ajo y cebolla antes de añadir el arroz ayuda a crear una base de sabor sobre la cual los pimientos pueden brillar. Este plato aporta una dosis de sabor y color a cualquier comida.",
    metaDescription:
      "El arroz pimiento mezcla arroz cocido con tiras de pimientos rojos y verdes salteados, añadiendo no solo un estallido de color sino también una dulzura natural. Un ligero sofrito de ajo y cebolla antes de añadir el arroz ayuda a crear una base de sabor sobre la cual los pimientos pueden brillar.",
    category: "Arroces",
    price: 1430,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/arroz_pimenton.webp`,
    alt: "Arroz Pimentón - comida prepadara",
  },
  {
    id: 38,
    title: "Arroz Curry",
    slug: "arroz-curry",
    description:
      "Un viaje de sabores intensos, una delicia especiada que transporta tus sentidos a lejanas tierras orientales.",
    descriptionLarge:
      "Preparado con una mezcla de especias de curry que infunden al arroz con un color dorado y un aroma profundo, este plato incluye también verduras picadas para añadir textura y sabor, resultando en un arroz cremoso con un equilibrio perfecto de sabores exóticos y reconfortantes. Es ideal como acompañamiento de platos de carne o como base de una comida vegetariana rica en sabores.",
    metaDescription:
      "Preparado con una mezcla de especias de curry que infunden al arroz con un color dorado y un aroma profundo, este plato incluye también verduras picadas para añadir textura y sabor, resultando en un arroz cremoso con un equilibrio perfecto de sabores exóticos y reconfortantes.",
    category: "Arroces",
    price: 1430,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/arroz_curry.webp`,
    alt: "Arroz Curry - comida prepadara",
  },
  {
    id: 39,
    title: "Crema de Tomate",
    slug: "crema-de-tomate",
    description:
      "Una suave y reconfortante crema de tomate, perfecta para cualquier momento.",
    descriptionLarge:
      "Sumérgete en el confort de nuestra Crema de Tomate, una sopa rica y cremosa que combina el intenso sabor del tomate maduro con la suavidad de la crema. Cocinada lentamente con caldo de verduras casero, cebolla y un toque de orégano, esta crema es una delicia reconfortante que calienta el alma. Ideal para acompañar tus comidas o disfrutarla sola, es un clásico renovado que no puede faltar en tu mesa.",
    metaDescription:
      "Sumérgete en el confort de nuestra Crema de Tomate, una sopa rica y cremosa que combina el intenso sabor del tomate maduro con la suavidad de la crema. Cocinada lentamente con caldo de verduras casero, cebolla y un toque de orégano, esta crema es una delicia reconfortante que calienta el alma. ",
    category: "Cremas",
    price: 3630,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/crema_tomate.webp`,
    alt: "Crema de Tomate - comida prepadara",
  },
  {
    id: 40,
    title: "Ganso a la Olla",
    slug: "ganso-a-la-olla",
    description:
      "Sabroso ganso (corte de vacuno) a la olla, cocinado a la perfección.",
    descriptionLarge:
      "Nuestro Ganso a la Olla captura la esencia de un corte de vacuno especial, conocido por su jugosidad y sabor. Cocinado lentamente con cebolla y pimentón, este plato es una muestra de la cocina tradicional, donde la carne se funde con sabores naturales y un toque de orégano y sal. Es una elección ideal para los amantes de la carne que buscan disfrutar de una textura tierna y un sabor que reconforta el paladar. Ideal para una comida familiar o una cena especial, nuestro Ganso a la Olla promete ser un deleite en cada bocado.",
    metaDescription:
      "Nuestro Ganso a la Olla captura la esencia de un corte de vacuno especial, conocido por su jugosidad y sabor. Cocinado lentamente con cebolla y pimentón, este plato es una muestra de la cocina tradicional, donde la carne se funde con sabores naturales y un toque de orégano y sal.",
    category: "Carnes Blancas",
    price: 4895,
    image: `${import.meta.env.VITE_PUBLIC_URL}images/foods/gansoalaolla.webp`,
    alt: "Ganso a la Olla - comida prepadara",
  },
  {
    id: 41,
    title: "Puré de Garbanzos",
    slug: "pure-de-garbanzos",
    description:
      "Un puré de garbanzos suave y nutritivo, ideal como acompañamiento.",
    descriptionLarge:
      "Nuestro Puré de Garbanzos es una opción saludable y sabrosa para complementar cualquier comida. Hecho con garbanzos ricos en fibra, combinados con cebolla y pimentón, este puré no solo es nutritivo sino también lleno de sabor. Sazonado con sal y orégano, ofrece una textura cremosa y un gusto suave que enriquece desde platos principales hasta ensaladas. Disfruta de un acompañamiento diferente que satisfará a todos en la familia.",
    metaDescription:
      "Nuestro Puré de Garbanzos es una opción saludable y sabrosa para complementar cualquier comida. Hecho con garbanzos ricos en fibra, combinados con cebolla y pimentón, este puré no solo es nutritivo sino también lleno de sabor.",
    category: "Cremas",
    price: 3630,
    image: `${
      import.meta.env.VITE_PUBLIC_URL
    }images/foods/crema_garbanzos.webp`,
    alt: "Puré de Garbanzos - comida prepadara",
  },
];
