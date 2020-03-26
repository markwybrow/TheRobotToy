import { isRobotOffGrid, moveCommand, getDirection, turnCommand, directionFromAmountOfTurns } from './index';

describe(' isRobotOffGrid(gridDimensions,gridPosition) ', () => {
  it('-should return TRUE if the passed in coords are NOT within the scope of the grid dimensions', () => {
    const gridDimensions = { gridX: 4, gridY: 4 };
    const gridPosition = { posX: 0, posY: 0, direction: 'N' };
    const offGrid = isRobotOffGrid(gridDimensions, gridPosition);
    expect(offGrid).toBeTruthy();
  });
  it('-should return TRUE if the passed in coords are NOT within the scope of the grid dimensions', () => {
    const gridDimensions = { gridX: 4, gridY: 4 };
    const gridPosition = { posX: 2, posY: 3, direction: 'E' };
    const offGrid = isRobotOffGrid(gridDimensions, gridPosition);
    expect(offGrid).toBeFalsy();
  });
});

describe(' moveCommand(gridPosition) ', () => {
  it('-should move posY:2 by negative 1 to posY:1 if North direction is used  ', () => {
    const gridPosition = { posX: 1, posY: 2, direction: 'N' };
    const getCoords = moveCommand(gridPosition, 1);

    expect(getCoords.posX).toEqual(1);
    expect(getCoords.posY).toEqual(1);
    expect(getCoords.direction).toEqual('N');
  });

  it('-should move posX:1 by positive 1 to posX:2 if East direction is used  ', () => {
    const gridPosition = { posX: 1, posY: 2, direction: 'E' };
    const getCoords = moveCommand(gridPosition, 1);

    expect(getCoords.posX).toEqual(2);
    expect(getCoords.posY).toEqual(2);
    expect(getCoords.direction).toEqual('E');
  });
  it('-should move posY:1 by positive 1 to posX:2 if South direction is used  ', () => {
    const gridPosition = { posX: 1, posY: 1, direction: 'S' };
    const getCoords = moveCommand(gridPosition, 1);
    expect(getCoords.posX).toEqual(1);
    expect(getCoords.posY).toEqual(2);
    expect(getCoords.direction).toEqual('S');
  });
  it('-should move posX:1 by negative 1 to posX:0 if West direction is used  ', () => {
    const gridPosition = { posX: 1, posY: 1, direction: 'W' };
    const getCoords = moveCommand(gridPosition, 1);
    expect(getCoords.posX).toEqual(0);
    expect(getCoords.posY).toEqual(1);
    expect(getCoords.direction).toEqual('W');
  });
});

describe(' getDirection(N) of compass', () => {
  it('-should return the string "north" from N', () => {
    const direction = getDirection('N');
    expect(direction).toEqual('north');
  });
  it('-should return the string "south" from S', () => {
    const direction = getDirection('S');
    expect(direction).toEqual('south');
  });
  it('-should return the string "west" from W', () => {
    const direction = getDirection('W');
    expect(direction).toEqual('west');
  });
  it('-should return the string "east" from E', () => {
    const direction = getDirection('E');
    expect(direction).toEqual('east');
  });
  it('-should return the string "?" from " " ', () => {
    const direction = getDirection('');
    expect(direction).toEqual('east');
  });
});

describe(' turnCommand(turn, direction)', () => {
  it('-should return new direction from N + turn Left to W', () => {
    const newDirection = turnCommand('L', 'N');
    expect(newDirection).toEqual('W');
  });
  it('-should return new direction from N + turn Right to E', () => {
    const newDirection = turnCommand('R', 'N');
    expect(newDirection).toEqual('E');
  });
  it('-should return new direction from N + turn Left to W + turn Left again to S', () => {
    let newDirection = turnCommand('L', 'N');
    newDirection = turnCommand('L', 'W');
    expect(newDirection).toEqual('S');
  });
});

describe(' directionFromAmountOfTurns(direction)', () => {
  it("-should return starting direction's index N=0", () => {
    const direction = directionFromAmountOfTurns('N');
    expect(direction).toEqual(0);
  });
  it("-should return starting direction's index S=2", () => {
    const direction = directionFromAmountOfTurns('S');
    expect(direction).toEqual(2);
  });
  it("-should return starting direction's index E=1", () => {
    const direction = directionFromAmountOfTurns('E');
    expect(direction).toEqual(1);
  });
  it("-should return starting direction's index W=3", () => {
    const direction = directionFromAmountOfTurns('W');
    expect(direction).toEqual(3);
  });
});
