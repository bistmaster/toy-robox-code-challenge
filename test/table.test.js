const Table = require('./../src/table').Table
const xTable = 4
const yTable = 4
const table = new Table(xTable, yTable)

describe('Table Class', () => {
  test('Get the correct value set', () => {
    expect(table.xTable).toBe(xTable);
    expect(table.yTable).toBe(yTable);
  });

  test('Get the incorrect value set', () => {
    expect(table.xTable).not.toBe(5);
    expect(table.yTable).not.toBe(5);
  });  

  test('Set the incorrect table number params', () => {
    const inTable = new Table(-1, -2);
    expect(inTable.xTable).toBe(0);
    expect(inTable.yTable).toBe(0);
  });
  
  test('Set the incorrect table range', () => {
    expect(table.checkInRange(4, 5)).toBeFalsy();
    expect(table.checkInRange(6, 4)).toBeFalsy();
  });    

  test('Set the correct table range', () => {
    expect(table.checkInRange(3, 4)).toBe(true);
    expect(table.checkInRange(2, 4)).toBe(true);
  });  
})

