import { NumberOutsideRangeErrorDTO } from ".";

test.each([
	{ field: "id", value: 15, minValue: 0, maxValue: 10 },
	{ field: "name", value: 20, minValue: 0, maxValue: 10 },
	{ field: "type", value: -10, minValue: 0, maxValue: 10 },
	{ field: "id", value: 5, minValue: 10, maxValue: 20 },
])(`${NumberOutsideRangeErrorDTO.name}($field, $value, $minValue, $maxValue)`, ({ field, value, minValue, maxValue }) => {
	const numberOutsideRangeError = new NumberOutsideRangeErrorDTO(field, value, minValue, maxValue);
	expect(numberOutsideRangeError.message).toBe(`NumberOutsideRangeErrorDTO: The number must be between ${minValue} and ${maxValue}. Received: ${value}.`);
	expect(numberOutsideRangeError.field).toBe(field);
	expect(numberOutsideRangeError.value).toBe(value);
	expect(numberOutsideRangeError.minValue).toBe(minValue);
	expect(numberOutsideRangeError.maxValue).toBe(maxValue);
	expect(numberOutsideRangeError.isFieldDTO()).toBe(true);
	expect(numberOutsideRangeError.isMessageDTO()).toBe(true);
	expect(numberOutsideRangeError.isStringTooShortDTO()).toBe(false);
	expect(numberOutsideRangeError.isStringTooLongDTO()).toBe(false);
	expect(numberOutsideRangeError.isNumberZeroDTO()).toBe(false);
	expect(numberOutsideRangeError.isNumberNegativeDTO()).toBe(false);
	expect(numberOutsideRangeError.isNumberTooLargeDTO()).toBe(false);
	expect(numberOutsideRangeError.isNumberTooSmallDTO()).toBe(false);
	expect(numberOutsideRangeError.isNumberOutsideRangeDTO()).toBe(true);
});
