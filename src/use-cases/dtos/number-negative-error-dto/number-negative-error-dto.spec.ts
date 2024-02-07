import { LoggerDummy } from "@/__test__/dummies";
import { NumberNegativeErrorDTO } from ".";

test.each([
	{ field: "id", value: -1 },
	{ field: "name", value: -2 },
])(`${NumberNegativeErrorDTO.name}($field, $value)`, ({ field, value }) =>
{
	const numberNegativeErrorDTO = new NumberNegativeErrorDTO({ field, value, logger: new LoggerDummy });
	expect(numberNegativeErrorDTO.message).toBe(`NumberNegativeErrorDTO: Field "${field}" with value "${value}" is negative.`);
	expect(numberNegativeErrorDTO.field).toBe(field);
	expect(numberNegativeErrorDTO.value).toBe(value);
	expect(numberNegativeErrorDTO.IsFieldDTO()).toBe(true);
	expect(numberNegativeErrorDTO.IsMessageDTO()).toBe(true);
	expect(numberNegativeErrorDTO.IsStringTooShortDTO()).toBe(false);
	expect(numberNegativeErrorDTO.IsStringTooLongDTO()).toBe(false);
	expect(numberNegativeErrorDTO.IsNumberZeroDTO()).toBe(false);
	expect(numberNegativeErrorDTO.IsNumberNegativeDTO()).toBe(true);
	expect(numberNegativeErrorDTO.IsNumberTooLargeDTO()).toBe(false);
	expect(numberNegativeErrorDTO.IsNumberTooSmallDTO()).toBe(false);
	expect(numberNegativeErrorDTO.IsNumberOutsideRangeDTO()).toBe(false);
});
