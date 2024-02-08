import { NumberNegativeErrorDTO } from ".";

test.each([
	{ fieldName: "id", value: -1 },
	{ fieldName: "name", value: -2 },
])(`${NumberNegativeErrorDTO.name}($field, $value)`, ({ fieldName, value }) =>
{
	const numberNegativeErrorDTO = new NumberNegativeErrorDTO({ fieldName, value });
	expect(numberNegativeErrorDTO.message).toBe(`NumberNegativeErrorDTO: Field "${fieldName}" with value "${value}" is negative.`);
	expect(numberNegativeErrorDTO.fieldName).toBe(fieldName);
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
