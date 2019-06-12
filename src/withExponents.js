const pow = (x, y) => {
  return Math.pow(x,y);
}

const multiplyExp = (x, y) => {
  return Math.pow(x[0], x[1]) * Math.pow(y[0], y[1]);
}

const divideExp = (x, y) => {
  return Math.pow(x[0], x[1]) / Math.pow(y[0], y[1]);
}

export function withExponents(){
  this.pow = pow.bind(this);
  this.multiplyExp = multiplyExp.bind(this);
  this.divideExp = divideExp.bind(this);
};
