import { NumberOutsideRangeErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: 15, minValue: 0, maxValue: 10 },
	{ fieldName: "name", value: 20, minValue: 0, maxValue: 10 },
	{ fieldName: "type", value: -10, minValue: 0, maxValue: 10 },
	{ fieldName: "id", value: 5, minValue: 10, maxValue: 20 },
])(`${NumberOutsideRangeErrorDTO.name}($field, $value, $minValue, $maxValue)`, ({ fieldName, value, minValue, maxValue }) =>
{
	const numberOutsideRangeError = new NumberOutsideRangeErrorDTO({ fieldName, value, minValue, maxValue });
	expect(numberOutsideRangeError.message).toBe(`NumberOutsideRangeErrorDTO: Field "${fieldName}" with value "${value}" is outside the range of "${minValue}" and "${maxValue}".`);
	expect(numberOutsideRangeError.fieldName).toBe(fieldName);
	expect(numberOutsideRangeError.value).toBe(value);
	expect(numberOutsideRangeError.minValue).toBe(minValue);
	expect(numberOutsideRangeError.maxValue).toBe(maxValue);
	expect(numberOutsideRangeError.IsFieldDTO()).toBe(true);
	expect(numberOutsideRangeError.IsMessageDTO()).toBe(true);
	expect(numberOutsideRangeError.IsStringTooShortDTO()).toBe(false);
	expect(numberOutsideRangeError.IsStringTooLongDTO()).toBe(false);
	expect(numberOutsideRangeError.IsNumberZeroDTO()).toBe(false);
	expect(numberOutsideRangeError.IsNumberNegativeDTO()).toBe(false);
	expect(numberOutsideRangeError.IsNumberTooLargeDTO()).toBe(false);
	expect(numberOutsideRangeError.IsNumberTooSmallDTO()).toBe(false);
	expect(numberOutsideRangeError.IsNumberOutsideRangeDTO()).toBe(true);
});
