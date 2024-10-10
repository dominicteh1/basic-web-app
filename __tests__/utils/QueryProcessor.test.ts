import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return capital of france', () => {
        const query = "capital of france";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Paris");
    });
    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe("dteh");
    });
    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Dominic Reem Jullia");
    });
    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 9, 99, 35?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("99");
    });
    test('should return sum of numbers', () => {
        const query = "What is 19 plus 14?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("33");
    });
    test('should return product of numbers', () => {
        const query = "What is 19 multiplied by 14?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("266");
    });
    test('should return square and cube of numbers', () => {
        const query = "Which of the following numbers is both a square and a cube: 64, 81, 100, 121?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });
    test('should return difference of numbers', () => {
        const query = "What is 19 minus 14?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("5");
    });
    test('should return prime numbers', () => {
        const query = "Which of the following numbers are primes: 43, 75, 92, 72, 55?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("43");
    });
});