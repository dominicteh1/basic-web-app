export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("capital of france")) {
    return "Paris";
  } else if (query.toLowerCase().includes("andrew id")) {
    return "dteh"
  } else if (query.toLowerCase().includes("name")) {
    return "Dominic Reem Jullia";
  } else if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  } else if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return numbers.reduce((acc, num) => acc + num, 0).toString();
    }
  } else if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  } 
  else if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isSquareAndCube = (num: number) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const result = numbers.find(isSquareAndCube);
      if (result !== undefined) {
        return result.toString();
      }
    }
  } else if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isSquareAndCube = (num: number) => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const result = numbers.find(isSquareAndCube);
      if (result !== undefined) {
      return result.toString();
      }
    }
  } else if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  } else if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(isPrime);
      if (primes.length > 0) {
        return primes.join(", ");
      }
    }
  } else if (query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return Math.pow(numbers[0], numbers[1]).toString();
    }
  } else if (query.toLowerCase().includes("multiplied by") && query.toLowerCase().includes("plus")) {
    const parts = query.split("plus");
    const firstPart = parts[0].match(/\d+/g)?.map(Number);
    const secondPart = parts[1].match(/\d+/g)?.map(Number);
    if (firstPart && firstPart.length === 2 && secondPart && secondPart.length === 1) {
      const product = firstPart[0] * firstPart[1];
      return (product + secondPart[0]).toString();
    }
  } else if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("multiplied by")) {
    const parts = query.split("plus");
    const firstPart = parts[0].match(/\d+/g)?.map(Number);
    const secondPart = parts[1].match(/\d+/g)?.map(Number);
    if (firstPart && firstPart.length === 1 && secondPart && secondPart.length === 2) {
      const product = secondPart[0] * secondPart[1];
      return (firstPart[0] + product).toString();
    }
  }
  return "";
}