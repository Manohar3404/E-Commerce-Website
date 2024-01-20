import  {moneyformat} from "../scripts/utils/money.js";
console.log('test suite: testing for money format');
console.log('Working with cents');
console.log((moneyformat(2095)));
if (moneyformat(2095)==='20.95') 
{
    
    console.log('passed');
}else {
    console.log('failed');
}
console.log('working with 0');
if (moneyformat(0)==='0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}
