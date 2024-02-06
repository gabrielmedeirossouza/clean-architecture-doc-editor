import { NumberTooLargeErrorDTO } from ".";

test.each([
	{ field: "id", value: 15, maxValue: 10 },
	{ field: "name", value: 20, maxValue: 10 },
	{ field: "type", value: -10, maxValue: 10 },
	{ field: "id", value: 5, maxValue: 20 },
])(`${NumberTooLargeErrorDTO.name}($field, $value, $maxValue)`, ({ field, value, maxValue }) => {
	const numberTooLargeError = new NumberTooLargeErrorDTO(field, value, maxValue);
	expect(numberTooLargeError.message).toBe(`NumberTooLargeErrorDTO: The number cannot be greater than ${maxValue}. Received: ${value}.`);
	expect(numberTooLargeError.field).toBe(field);
	expect(numberTooLargeError.value).toBe(value);
	expect(numberTooLargeError.maxValue).toBe(maxValue);
	expect(numberTooLargeError.isFieldDTO()).toBe(true);
	expect(numberTooLargeError.isMessageDTO()).toBe(true);
	expect(numberTooLargeError.isStringTooShortDTO()).toBe(false);
	expect(numberTooLargeError.isStringTooLongDTO()).toBe(false);
	expect(numberTooLargeError.isNumberZeroDTO()).toBe(false);
	expect(numberTooLargeError.isNumberNegativeDTO()).toBe(false);
	expect(numberTooLargeError.isNumberTooLargeDTO()).toBe(true);
	expect(numberTooLargeError.isNumberTooSmallDTO()).toBe(false);
	expect(numberTooLargeError.isNumberOutsideRangeDTO()).toBe(false);
});
