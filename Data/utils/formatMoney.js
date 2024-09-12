export function formatMoney(priceCents) {
  const money = (priceCents / 100).toFixed(2);
  return money;
}

export default formatMoney;