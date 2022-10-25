const DIRECTIONS = {
  NORTH: {
    RIGHT: 'EAST',
    LEFT: 'WEST'
  },
  EAST: {
    RIGHT: 'SOUTH',
    LEFT: 'NORTH'    
  },
  SOUTH: {
    RIGHT: 'WEST',
    LEFT: 'EAST',
  },
  WEST: {
    RIGHT: 'NORTH',
    LEFT: 'SOUTH'
  }
}

const COMMANDS = {
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  PLACE: 'PLACE',
  REPORT: 'REPORT'
}


module.exports = {
  DIRECTIONS,
  COMMANDS
}
