# Toy Robot Code Challenge

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed. 

## Requirements
* Node.js v16.15.0
* NPM
* Jest for testing

## Installation
* `npm install`


## Running the code
* `npm run commands_1` for sample 1 commands
* `npm run commands_2` for sample 2 commands
* `npm run commands_3` for sample 3 commands
* `node app.js <file_path_of_command_text_file>`


## Test
* npm run test

## Example 

```bash
a)----------------
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
b)----------------
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
c)----------------
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```



