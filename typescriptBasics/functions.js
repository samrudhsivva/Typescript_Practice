function add(num1, num2, num3, num4) {
    if (num4 === void 0) { num4 = 3; }
    if (num3)
        return num1 + num2 + num3 + num4;
    return num1 + num2 + num4;
}
console.log(add(2, 3, 2, 1));
