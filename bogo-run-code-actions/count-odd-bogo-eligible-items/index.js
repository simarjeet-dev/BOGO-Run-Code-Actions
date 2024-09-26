
export default function main({order}) {
  let bogoQty = 0;
  const bogoTag = "bogo-diwali";

  order.lineItems.forEach(lineItem => {
    lineItem.product.tags.forEach(tag => {
      if(tag.includes(bogoTag)) {
        bogoQty += lineItem.quantity;
      }
    });
  });

  return {
    bogoQty: bogoQty,
    holdBogo: bogoQty % 2 !== 0 && bogoQty >= 3
  }
}