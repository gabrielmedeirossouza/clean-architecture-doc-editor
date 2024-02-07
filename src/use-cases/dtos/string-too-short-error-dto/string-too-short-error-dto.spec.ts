import { LoggerDummy } from "@/__test__/dummies";
import { StringTooShortErrorDTO } from ".";

test.each([
	{ field: "id", value: "test", minLength: 2 },
	{ field: "name", value: "testing", minLength: 5 },
	{ field: "type", value: "tested", minLength: 20 },
])(`${StringTooShortErrorDTO.name}($field, $value, $minLength)`, ({ field, value, minLength }) =>
{
	const stringTooShortError = new StringTooShortErrorDTO({ field, value, minLength, logger: new LoggerDummy });
	expect(stringTooShortError.message).toBe(`StringTooShortErrorDTO: Field "${field}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`);
	expect(stringTooShortError.field).toBe(field);
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
