const fibonacci = require('../fibonacci.js');

describe('fibonacci', () => {
    it('Debe calcular fibonacci correctamente', () => {
        expect(fibonacci(1)).toEqual([0, 1, 1]);
        expect(fibonacci(2)).toEqual([0, 1, 1, 2]);
        expect(fibonacci(3)).toEqual([0, 1, 1, 2, 3]);
        expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8]);
        expect(fibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8]);
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);


    });
});