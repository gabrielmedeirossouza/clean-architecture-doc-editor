import { LoggerDummy } from "@/__test__/dummies";
import { FieldDTO } from ".";

test.each([
	{ field: "id" },
	{ field: "name" },
	{ field: "type" },
])(`${FieldDTO.name}($field)`, ({ field }) =>
{
	const fieldDTO = new FieldDTO({ field, logger: new LoggerDummy });
	expect(fieldDTO.field).toBe(field);
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
