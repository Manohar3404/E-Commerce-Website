export function moneyformat(pricecents){
    return Math.round(pricecents/100).toFixed(2);
}
console.log(moneyformat(9880));