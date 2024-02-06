import { NumberTooLargeErrorDTO } from ".";

test.each([
	{ field: "id", value: 15, maxValue: 10 },
	{ field: "name", value: 20, maxValue: 10 },
	{ field: "type", value: -10, maxValue: 10 },
	{ field: "id", value: 5, maxValue: 20 },
])(`${NumberTooLargeErrorDTO.name}($field, $value, $maxValue)`, ({ field, value, maxValue }) =>
{
	const numberTooLargeError = new NumberTooLargeErrorDTO(field, value, maxValue);
	expect(numberTooLargeError.message).toBe(`NumberTooLargeErrorDTO: The number cannot be greater than ${maxValue}. Received: ${value}.`);
	expect(numberTooLargeError.field).toBe(field);
	expect(numberTooLargeError.value).toBe(value);
	expect(numberTooLargeError.maxValue).toBe(maxValue);
	expect(numberTooLargeError.IsFieldDTO()).toBe(true);
	expect(numberTooLargeError.IsMessageDTO()).toBe(true);
	expect(numberTooLargeError.IsStringTooShortDTO()).toBe(false);
	expect(numberTooLargeError.IsStringTooLongDTO()).toBe(false);
	expect(numberTooLargeError.IsNumberZeroDTO()).toBe(false);
	expect(numberTooLargeError.IsNumberNegativeDTO()).toBe(false);
	expect(numberTooLargeError.IsNumberTooLargeDTO()).toBe(true);
	expect(numberTooLargeError.IsNumberTooSmallDTO()).toBe(false);
	expect(numberTooLargeError.IsNumberOutsideRangeDTO()).toBe(false);
});
