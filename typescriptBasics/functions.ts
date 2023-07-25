function add(
  num1: number,
  num2: number,
  num3?: number,
  num4: number = 3
): number {
  if (num3) return num1 + num2 + num3 + num4;
  return num1 + num2 + num4;
}

console.log(add(2, 3, 2, 1));
