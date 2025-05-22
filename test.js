const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    const dollars =fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected.toFixed(2)); 
})

test("One dollar should be 146.26 yen", function() {

    const yen =fromDollarToYen(3.5);

    const expected = 3.5 * (1/1.07) * 156.5;

    expect(yen).toBe(expected.toFixed(2)); 
})

test("One yen should be 0,0056 pound", function() {

    const pound =fromYenToPound(3.5);

    const expected = 3.5 * 0.0056;

    expect(pound).toBe(expected.toFixed(2)); 
})