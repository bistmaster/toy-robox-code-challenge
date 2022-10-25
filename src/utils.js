const fs = require('fs')
const { COMMANDS } = require('./constants')

const readFileInput = (path) => {
  const readCommands = fs.readFileSync(path, 'utf8').split('\n')
  return readCommands.map(_command => {
    let command = '', params;
    const [pCommand, directions = ''] = _command.split(' ')
    if (pCommand === COMMANDS.PLACE) {
      command = pCommand;
      const [x,y, direction] = directions.split(',')
      params = [parseInt(x), parseInt(y), direction]
    } else {
      command = _command
      params = null
    }
    
    return {
      command,
      params 
    }
  })

}

module.exports = {
  readFileInput
}