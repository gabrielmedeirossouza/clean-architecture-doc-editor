import { NumberTooSmallErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: 15, minValue: 0 },
	{ fieldName: "name", value: 20, minValue: 0 },
	{ fieldName: "type", value: -10, minValue: 0 },
	{ fieldName: "id", value: 5, minValue: 10 },
])(`${NumberTooSmallErrorDTO.name}($field, $value, $minValue)`, ({ fieldName, value, minValue }) =>
{
	const numberTooSmallError = new NumberTooSmallErrorDTO({ fieldName, value, minValue });
	expect(numberTooSmallError.message).toBe(`NumberTooSmallErrorDTO: Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`);
	expect(numberTooSmallError.fieldName).toBe(fieldName);
	expect(numberTooSmallError.value).toBe(value);
	expect(numberTooSmallError.minValue).toBe(minValue);
	expect(numberTooSmallError.IsFieldDTO()).toBe(true);
	expect(numberTooSmallError.IsMessageDTO()).toBe(true);
	expect(numberTooSmallError.IsStringTooShortDTO()).toBe(false);
	expect(numberTooSmallError.IsStringTooLongDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberZeroDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberNegativeDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberTooLargeDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberTooSmallDTO()).toBe(true);
	expect(numberTooSmallError.IsNumberOutsideRangeDTO()).toBe(false);
});
