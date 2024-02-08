import { FieldDTO } from ".";

test.each([
	{ fieldName: "id" },
	{ fieldName: "name" },
	{ fieldName: "type" },
])(`${FieldDTO.name}($field)`, ({ fieldName }) =>
{
	const fieldDTO = new FieldDTO({ fieldName,  });
	expect(fieldDTO.fieldName).toBe(fieldName);
	expect(fieldDTO.IsFieldDTO()).toBe(true);
	expect(fieldDTO.IsMessageDTO()).toBe(false);
	expect(fieldDTO.IsStringTooShortDTO()).toBe(false);
	expect(fieldDTO.IsStringTooLongDTO()).toBe(false);
	expect(fieldDTO.IsNumberZeroDTO()).toBe(false);
	expect(fieldDTO.IsNumberNegativeDTO()).toBe(false);
	expect(fieldDTO.IsNumberTooLargeDTO()).toBe(false);
	expect(fieldDTO.IsNumberTooSmallDTO()).toBe(false);
	expect(fieldDTO.IsNumberOutsideRangeDTO()).toBe(false);
});
