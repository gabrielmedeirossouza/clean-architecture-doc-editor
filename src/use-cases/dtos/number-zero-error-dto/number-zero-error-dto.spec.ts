import { NumberZeroErrorDTO } from ".";

test.each([
	{ field: "id" },
	{ field: "name" },
	{ field: "type" },
])(`${NumberZeroErrorDTO.name}($field)`, ({ field }) =>
{
	const numberZeroError = new NumberZeroErrorDTO({ field });
	expect(numberZeroError.message).toBe(`NumberZeroErrorDTO: Field "${field}" with value "0" is not allowed.`);
	expect(numberZeroError.field).toBe(field);
	expect(numberZeroError.IsFieldDTO()).toBe(true);
	expect(numberZeroError.IsMessageDTO()).toBe(true);
	expect(numberZeroError.IsStringTooShortDTO()).toBe(false);
	expect(numberZeroError.IsStringTooLongDTO()).toBe(false);
	expect(numberZeroError.IsNumberZeroDTO()).toBe(true);
	expect(numberZeroError.IsNumberNegativeDTO()).toBe(false);
	expect(numberZeroError.IsNumberTooLargeDTO()).toBe(false);
	expect(numberZeroError.IsNumberTooSmallDTO()).toBe(false);
	expect(numberZeroError.IsNumberOutsideRangeDTO()).toBe(false);
});
