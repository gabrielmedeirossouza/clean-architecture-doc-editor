import { NumberZeroErrorDTO } from ".";

test.each([
	{ field: "id" },
	{ field: "name" },
	{ field: "type" },
])(`${NumberZeroErrorDTO.name}($field)`, ({ field }) => {
	const numberZeroError = new NumberZeroErrorDTO(field);
	expect(numberZeroError.message).toBe("NumberZeroErrorDTO: The number cannot be zero.");
	expect(numberZeroError.field).toBe(field);
	expect(numberZeroError.isFieldDTO()).toBe(true);
	expect(numberZeroError.isMessageDTO()).toBe(true);
	expect(numberZeroError.isStringTooShortDTO()).toBe(false);
	expect(numberZeroError.isStringTooLongDTO()).toBe(false);
	expect(numberZeroError.isNumberZeroDTO()).toBe(true);
	expect(numberZeroError.isNumberNegativeDTO()).toBe(false);
	expect(numberZeroError.isNumberTooLargeDTO()).toBe(false);
	expect(numberZeroError.isNumberTooSmallDTO()).toBe(false);
	expect(numberZeroError.isNumberOutsideRangeDTO()).toBe(false);
});
