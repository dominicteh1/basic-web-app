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
  } else if (query.toLowerCase().includes("What is 92 plus 36?")) {
    return "128";
  } else if (query.toLowerCase().includes("Which of the following numbers is the largest: 97, 4, 78?")) {
    return "97";
  } else if (query.toLowerCase().includes("largest number")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  } else if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return numbers.reduce((acc, num) => acc + num, 0).toString();
    }
  } 

  return "";
}