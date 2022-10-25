const Position = require('./../src/position').Position
const xNum = 4
const yNum = 4
const position = new Position(xNum, yNum)

describe('Position Class', () => {
  test('Get the correct value set', () => {
    expect(position.xPos).toBe(xNum);
    expect(position.yPos).toBe(yNum);
  });

  test('Get the incorrect value set', () => {
    expect(position.xPos).not.toBe(5);
    expect(position.yPos).not.toBe(5);
  });  

  test('Set the incorrect position', () => {
    const inPosition = new Position(-1, -2);
    expect(inPosition.xPos).toBe(0);
    expect(inPosition.yPos).toBe(0);
  });  
})

