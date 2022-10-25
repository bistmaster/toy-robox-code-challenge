const { DIRECTIONS, COMMANDS} = require('./constants')
const Position = require('./position').Position

class Robot {
  direction = '';
  position = {};
  table = null;

  constructor(table) {
    this.table = table
  }

  command(command, params) {
    if (this.notInPlaced() && command !== COMMANDS.PLACE) {
      return
    }

    switch(command) {
      case COMMANDS.MOVE:
        const [NORTH, EAST, SOUTH, WEST] = Object.keys(DIRECTIONS)
        const { xPos = 0, yPos = 0 } = this.position

        if (this.direction === NORTH) {
          this.movePosition(xPos, yPos + 1)
        } 
        
        if (this.direction === EAST) {
          this.movePosition(xPos + 1, yPos)
        } 
        
        if (this.direction === SOUTH) {
          this.movePosition(xPos, yPos - 1)
        } 
        
        if (this.direction === WEST){
          this.movePosition(xPos - 1, yPos)
        }

        break; 
      case COMMANDS.PLACE:
        this.place(params)
        break        
      case COMMANDS.LEFT:
        this.left()
        break
      case COMMANDS.RIGHT:
        this.right()
        break
      case COMMANDS.REPORT:
        this.report()
        break
    }
  }

  place(params) {
    const [x, y, direction] = params
    if (x > this.table.xTable || y > this.table.yTable || x < 0 || y < 0) {
      return
    }

    this.direction = direction
    this.movePosition(x, y)
  }  

  left() {
    if (this.noDirection()) {
      return 
    }
    this.direction = DIRECTIONS[this.direction].LEFT
  }

  right() {
    if (this.noDirection()) {
      return 
    }
    this.direction = DIRECTIONS[this.direction].RIGHT
  }

  report() {
    if (this.noDirection()) {
      return 
    }
    const xPosition = this.position.xPos
    const yPosition = this.position.yPos
    const fDirection = this.direction
    console.log(`Output: ${xPosition}, ${yPosition}, ${fDirection}`)
  }

  get position() {
    return this.position
  }

  get direction() {
    return this.direction
  }

  movePosition(x, y) {
    if (this.table.checkInRange(x, y)) {
      this.position = new Position(x, y)
    }
  }

  notInPlaced() {
    return !this.position
  }

  noDirection() {
    const directions = Object.keys(DIRECTIONS)
    return !this.direction || !directions.includes(this.direction)
  }
}

module.exports = {
  Robot
}

