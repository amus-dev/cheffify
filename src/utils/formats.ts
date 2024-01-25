const formatterCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export const formatPriceCLP = (price) => formatterCLP.format(price);
