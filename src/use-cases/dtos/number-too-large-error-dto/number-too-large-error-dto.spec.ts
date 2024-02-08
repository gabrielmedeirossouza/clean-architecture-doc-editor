import { NumberTooLargeErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: 15, maxValue: 10 },
	{ fieldName: "name", value: 20, maxValue: 10 },
	{ fieldName: "type", value: -10, maxValue: 10 },
	{ fieldName: "id", value: 5, maxValue: 20 },
])(`${NumberTooLargeErrorDTO.name}($field, $value, $maxValue)`, ({ fieldName, value, maxValue }) =>
{
	const numberTooLargeError = new NumberTooLargeErrorDTO({ fieldName, value, maxValue });
	expect(numberTooLargeError.message).toBe(`NumberTooLargeErrorDTO: Field "${fieldName}" with value "${value}" cannot be larger than "${maxValue}".`);
	expect(numberTooLargeError.fieldName).toBe(fieldName);
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
