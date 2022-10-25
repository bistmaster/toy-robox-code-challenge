class Position {

  // initialize variables
  xPos = 0;
  yPos = 0;

  constructor(xNum, yNum) {
    this.validate(xNum, yNum)
  }

  validate(xNum, yNum) {
    if (xNum >= 0 
      && yNum >=0) {
      this.xPos = xNum
      this.yPos = yNum
    } 
  }

  get xPos() {
    return this.xPos
  }

  get yPos() {
    return this.yPos
  }
}

module.exports = {
  Position
}