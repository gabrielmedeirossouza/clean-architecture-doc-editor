import { StringTooLongErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: "test", maxLength: 2 },
	{ fieldName: "name", value: "test", maxLength: 2 },
	{ fieldName: "type", value: "test", maxLength: 2 },
])(`${StringTooLongErrorDTO.name}($field, $value, $maxLength)`, ({ fieldName, value, maxLength }) =>
{
	const stringTooLongError = new StringTooLongErrorDTO({ fieldName, value, maxLength });
	expect(stringTooLongError.message).toBe(`StringTooLongErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is longer than the maximum length of "${maxLength}".`);
	expect(stringTooLongError.fieldName).toBe(fieldName);
	expect(stringTooLongError.value).toBe(value);
	expect(stringTooLongError.maxLength).toBe(maxLength);
	expect(stringTooLongError.IsFieldDTO()).toBe(true);
	expect(stringTooLongError.IsMessageDTO()).toBe(true);
	expect(stringTooLongError.IsStringTooShortDTO()).toBe(false);
	expect(stringTooLongError.IsStringTooLongDTO()).toBe(true);
	expect(stringTooLongError.IsNumberZeroDTO()).toBe(false);
	expect(stringTooLongError.IsNumberNegativeDTO()).toBe(false);
	expect(stringTooLongError.IsNumberTooLargeDTO()).toBe(false);
	expect(stringTooLongError.IsNumberTooSmallDTO()).toBe(false);
	expect(stringTooLongError.IsNumberOutsideRangeDTO()).toBe(false);
});
