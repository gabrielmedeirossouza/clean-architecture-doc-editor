import { StringTooLongErrorDTO } from ".";

test.each([
	{ field: "id", value: "test", maxLength: 2 },
	{ field: "name", value: "test", maxLength: 2 },
	{ field: "type", value: "test", maxLength: 2 },
])(`${StringTooLongErrorDTO.name}($field, $value, $maxLength)`, ({ field, value, maxLength }) =>
{
	const stringTooLongError = new StringTooLongErrorDTO(field, value, maxLength);
	expect(stringTooLongError.message).toBe(`StringTooLongErrorDTO: The string must have at most ${maxLength} characters. String ${value} has ${value.length} characters.`);
	expect(stringTooLongError.field).toBe(field);
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
