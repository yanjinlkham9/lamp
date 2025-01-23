function arrElement<T>(number: T[], index: number): T | boolean {
  if (number.length > index) {
    return number[index];
  } else return false;
}

console.log(arrElement<string>(["a"], 0));
console.log(arrElement<string>(["a"], 1));
