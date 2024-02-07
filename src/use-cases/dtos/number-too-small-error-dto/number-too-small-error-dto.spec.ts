import { LoggerDummy } from "@/__test__/dummies";
import { NumberTooSmallErrorDTO } from ".";

test.each([
	{ field: "id", value: 15, minValue: 0 },
	{ field: "name", value: 20, minValue: 0 },
	{ field: "type", value: -10, minValue: 0 },
	{ field: "id", value: 5, minValue: 10 },
])(`${NumberTooSmallErrorDTO.name}($field, $value, $minValue)`, ({ field, value, minValue }) =>
{
	const numberTooSmallError = new NumberTooSmallErrorDTO({ field, value, minValue, logger: new LoggerDummy });
	expect(numberTooSmallError.message).toBe(`NumberTooSmallErrorDTO: Field "${field}" with value "${value}" cannot be smaller than "${minValue}".`);
	expect(numberTooSmallError.field).toBe(field);
	expect(numberTooSmallError.value).toBe(value);
	expect(numberTooSmallError.minValue).toBe(minValue);
	expect(numberTooSmallError.IsFieldDTO()).toBe(true);
	expect(numberTooSmallError.IsMessageDTO()).toBe(true);
	expect(numberTooSmallError.IsStringTooShortDTO()).toBe(false);
	expect(numberTooSmallError.IsStringTooLongDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberZeroDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberNegativeDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberTooLargeDTO()).toBe(false);
	expect(numberTooSmallError.IsNumberTooSmallDTO()).toBe(true);
	expect(numberTooSmallError.IsNumberOutsideRangeDTO()).toBe(false);
});
