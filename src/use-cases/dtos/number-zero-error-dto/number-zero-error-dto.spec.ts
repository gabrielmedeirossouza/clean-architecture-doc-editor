import { NumberZeroErrorDTO } from ".";

test.each([
	{ fieldName: "id" },
	{ fieldName: "name" },
	{ fieldName: "type" },
])(`${NumberZeroErrorDTO.name}($field)`, ({ fieldName }) =>
{
	const numberZeroError = new NumberZeroErrorDTO({ fieldName });
	expect(numberZeroError.message).toBe(`NumberZeroErrorDTO: Field "${fieldName}" with value "0" is not allowed.`);
	expect(numberZeroError.fieldName).toBe(fieldName);
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
