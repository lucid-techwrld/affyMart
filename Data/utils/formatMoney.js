export function formatMoney(priceCents) {
  const money = (Math.round(priceCents) / 100).toFixed(2);
  return money;
}

export default formatMoney;