import { StringTooShortErrorDTO } from ".";

test.each([
	{ field: "id", value: "test", minLength: 2 },
	{ field: "name", value: "testing", minLength: 5 },
	{ field: "type", value: "tested", minLength: 20 },
])(`${StringTooShortErrorDTO.name}($field, $value, $minLength)`, ({ field, value, minLength }) => {
	const stringTooShortError = new StringTooShortErrorDTO(field, value, minLength);
	expect(stringTooShortError.message).toBe(`StringTooShortErrorDTO: The string must have at least ${minLength} characters. String ${value} has ${value.length} characters.`);
	expect(stringTooShortError.field).toBe(field);
	expect(stringTooShortError.value).toBe(value);
	expect(stringTooShortError.minLength).toBe(minLength);
	expect(stringTooShortError.isFieldDTO()).toBe(true);
	expect(stringTooShortError.isMessageDTO()).toBe(true);
	expect(stringTooShortError.isStringTooShortDTO()).toBe(true);
	expect(stringTooShortError.isStringTooLongDTO()).toBe(false);
	expect(stringTooShortError.isNumberZeroDTO()).toBe(false);
	expect(stringTooShortError.isNumberNegativeDTO()).toBe(false);
	expect(stringTooShortError.isNumberTooLargeDTO()).toBe(false);
	expect(stringTooShortError.isNumberTooSmallDTO()).toBe(false);
	expect(stringTooShortError.isNumberOutsideRangeDTO()).toBe(false);
});
