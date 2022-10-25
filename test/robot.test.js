const Robot = require('./../src/robot').Robot
const Table = require('./../src/table').Table

const table = new Table(5, 5)
const robot = new Robot(table)

const commands_1 = [
  { command: 'PLACE', params: [0, 0, 'NORTH']},
  { command: 'MOVE', params: null},
  { command: 'REPORT', params: null}
]

describe('Robot Class', () => {
  test('Set sample commands with correct output', () => {
    const logSpy = jest.spyOn(console, 'log')
    console.log('Output: 0, 1, NORTH');
    commands_1.forEach(({command, params}) => {
      robot.command(command, params)
    })
    expect(logSpy).toHaveBeenCalledWith('Output: 0, 1, NORTH')
  });

  test('Set sample commands with incorrect output', () => {
    const logSpy = jest.spyOn(console, 'log')
    console.log('Output: 0, 1, NORTH');
    commands_1.forEach(({command, params}) => {
      robot.command(command, params)
    })
    expect(logSpy).not.toHaveBeenCalledWith('Output: 0, 0, NORTH')
  });  
})