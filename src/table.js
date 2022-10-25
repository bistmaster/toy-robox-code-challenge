class Table  {
  // initialize 
  xTable = 0;
  yTable = 0

  constructor(_xTable, _yTable) {
    this.validate(_xTable, _yTable)
  }

  validate(_xTable, _yTable) {
    if ( _xTable >= 0 && _yTable >= 0)  {
      this.xTable = _xTable
      this.yTable = _yTable
    }
  }

  checkInRange(xNumber, yNumber) {
    return xNumber <= this.xTable && xNumber >= 0 && yNumber <= this.yTable && yNumber >= 0
  }
}

module.exports = {
  Table
}