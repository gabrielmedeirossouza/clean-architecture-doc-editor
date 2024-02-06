import { StringTooLongErrorDTO } from ".";

test.each([
	{ field: "id", value: "test", maxLength: 2 },
	{ field: "name", value: "test", maxLength: 2 },
	{ field: "type", value: "test", maxLength: 2 },
])(`${StringTooLongErrorDTO.name}($field, $value, $maxLength)`, ({ field, value, maxLength }) => {
	const stringTooLongError = new StringTooLongErrorDTO(field, value, maxLength);
	expect(stringTooLongError.message).toBe(`StringTooLongErrorDTO: The string must have at most ${maxLength} characters. String ${value} has ${value.length} characters.`);
	expect(stringTooLongError.field).toBe(field);
	expect(stringTooLongError.value).toBe(value);
	expect(stringTooLongError.maxLength).toBe(maxLength);
	expect(stringTooLongError.isFieldDTO()).toBe(true);
	expect(stringTooLongError.isMessageDTO()).toBe(true);
	expect(stringTooLongError.isStringTooShortDTO()).toBe(false);
	expect(stringTooLongError.isStringTooLongDTO()).toBe(true);
	expect(stringTooLongError.isNumberZeroDTO()).toBe(false);
	expect(stringTooLongError.isNumberNegativeDTO()).toBe(false);
	expect(stringTooLongError.isNumberTooLargeDTO()).toBe(false);
	expect(stringTooLongError.isNumberTooSmallDTO()).toBe(false);
	expect(stringTooLongError.isNumberOutsideRangeDTO()).toBe(false);
});
