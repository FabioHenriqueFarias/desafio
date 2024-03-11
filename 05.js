function inverterStringRecursivo(str, index) {
    if (index < 0) {
      return "";
    } else {
      return str[index] + inverterStringRecursivo(str, index - 1);
    }
  }

console.log(inverterStringRecursivo("Hello", "Hello".length - 1));
let teste = "Hello";
console.log(teste[0] + "8");