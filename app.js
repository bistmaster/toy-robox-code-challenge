const Table = require('./src/table').Table
const Robot = require('./src/robot').Robot
const { readFileInput } = require('./src/utils')

function main(path) {
  const table = new Table(5, 5)
  const robot = new Robot(table)
  const commands = readFileInput(path)
  commands.forEach(({ command, params}) => {
    robot.command(command, params)
  })
}

main( process.argv[2] || 'input/commands_1.txt')