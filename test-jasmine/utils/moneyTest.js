import  {moneyformat} from "../../scripts/utils/money.js";
describe('testing moneyformat',()=>{
    it('working with cents',()=>{
        expect(moneyformat(2095)).toEqual('20.95');;
    });
    it('working with 0',()=>{
        expect(moneyformat(0)).toEqual('0.00');
    });
});