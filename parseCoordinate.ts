interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return { x, y };
}

// ⛔️ Error: This overload signature is not
// compatible with its implementation signature
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
//TODO: To solve the error, we have to make sure the implementation signature is compatible with all of the overload signatures.
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  //   判斷是 object 還是 其他type
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(19, 43));
console.log(
  parseCoordinate({
    x: 3432,
    y: 43,
  })
);

// ⛔️ Error: This overload signature is not
// compatible with its implementation signature
function example(str: string): void;
function example(num: number): void;
//TODO: To solve the error, we have to make sure the implementation signature is compatible with all of the overload signatures.
function example(arg: string | number) {}
