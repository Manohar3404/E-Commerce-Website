export function moneyformat(pricecents){
    return (pricecents/100).toFixed(2);
}
console.log(moneyformat(9880));