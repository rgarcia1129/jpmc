import Calculator from '../src/Calculator';

export default class ScientificCalculator extends Calculator {
  constructor(){
    super();
  }

  sin(num){
    return Math.sin(num);
  }

  cos(num){
    return Math.cos(num);
  }

  tan(num){
    return Math.tan(num);
  }

  log(num){
    return Math.log(num);
  }

}
