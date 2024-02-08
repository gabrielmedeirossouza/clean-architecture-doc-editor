import { StringTooShortErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: "test", minLength: 2 },
	{ fieldName: "name", value: "testing", minLength: 5 },
	{ fieldName: "type", value: "tested", minLength: 20 },
])(`${StringTooShortErrorDTO.name}($field, $value, $minLength)`, ({ fieldName, value, minLength }) =>
{
	const stringTooShortError = new StringTooShortErrorDTO({ fieldName, value, minLength });
	expect(stringTooShortError.message).toBe(`StringTooShortErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`);
	expect(stringTooShortError.fieldName).toBe(fieldName);
	expect(stringTooShortError.value).toBe(value);
	expect(stringTooShortError.minLength).toBe(minLength);
	expect(stringTooShortError.IsFieldDTO()).toBe(true);
	expect(stringTooShortError.IsMessageDTO()).toBe(true);
	expect(stringTooShortError.IsStringTooShortDTO()).toBe(true);
	expect(stringTooShortError.IsStringTooLongDTO()).toBe(false);
	expect(stringTooShortError.IsNumberZeroDTO()).toBe(false);
	expect(stringTooShortError.IsNumberNegativeDTO()).toBe(false);
	expect(stringTooShortError.IsNumberTooLargeDTO()).toBe(false);
	expect(stringTooShortError.IsNumberTooSmallDTO()).toBe(false);
	expect(stringTooShortError.IsNumberOutsideRangeDTO()).toBe(false);
});
