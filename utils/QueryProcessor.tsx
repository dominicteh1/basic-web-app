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
  } else if (query.toLowerCase().includes("what is your name")) {
    return "Dominic Reem Jullia";
  }
  else {
    return "";
  }
}