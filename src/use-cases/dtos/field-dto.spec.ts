import { FieldDTO } from ".";

test.each([
	{ field: "id" },
	{ field: "name" },
	{ field: "type" },
])(`${FieldDTO.name}($field)`, ({ field }) => {
	const fieldDTO = new FieldDTO(field);
	expect(fieldDTO.field).toBe(field);
	expect(fieldDTO.isFieldDTO()).toBe(true);
	expect(fieldDTO.isMessageDTO()).toBe(false);
	expect(fieldDTO.isStringTooShortDTO()).toBe(false);
	expect(fieldDTO.isStringTooLongDTO()).toBe(false);
	expect(fieldDTO.isNumberZeroDTO()).toBe(false);
	expect(fieldDTO.isNumberNegativeDTO()).toBe(false);
	expect(fieldDTO.isNumberTooLargeDTO()).toBe(false);
	expect(fieldDTO.isNumberTooSmallDTO()).toBe(false);
	expect(fieldDTO.isNumberOutsideRangeDTO()).toBe(false);
});
