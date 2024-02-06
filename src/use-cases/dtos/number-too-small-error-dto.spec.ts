import { NumberTooSmallErrorDTO } from ".";

test.each([
	{ field: "id", value: 15, minValue: 0 },
	{ field: "name", value: 20, minValue: 0 },
	{ field: "type", value: -10, minValue: 0 },
	{ field: "id", value: 5, minValue: 10 },
])(`${NumberTooSmallErrorDTO.name}($field, $value, $minValue)`, ({ field, value, minValue }) => {
	const numberTooSmallError = new NumberTooSmallErrorDTO(field, value, minValue);
	expect(numberTooSmallError.message).toBe(`NumberTooSmallErrorDTO: The number cannot be less than ${minValue}. Received: ${value}.`);
	expect(numberTooSmallError.field).toBe(field);
	expect(numberTooSmallError.value).toBe(value);
	expect(numberTooSmallError.minValue).toBe(minValue);
	expect(numberTooSmallError.isFieldDTO()).toBe(true);
	expect(numberTooSmallError.isMessageDTO()).toBe(true);
	expect(numberTooSmallError.isStringTooShortDTO()).toBe(false);
	expect(numberTooSmallError.isStringTooLongDTO()).toBe(false);
	expect(numberTooSmallError.isNumberZeroDTO()).toBe(false);
	expect(numberTooSmallError.isNumberNegativeDTO()).toBe(false);
	expect(numberTooSmallError.isNumberTooLargeDTO()).toBe(false);
	expect(numberTooSmallError.isNumberTooSmallDTO()).toBe(true);
	expect(numberTooSmallError.isNumberOutsideRangeDTO()).toBe(false);
});
