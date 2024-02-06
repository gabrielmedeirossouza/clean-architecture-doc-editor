import { NumberNegativeErrorDTO } from ".";

test.each([
	{ number: -1 },
	{ number: -0.1 },
])(`${NumberNegativeErrorDTO.name}($number)`, ({ number }) =>
{
	const numberNegativeErrorDTO = new NumberNegativeErrorDTO("number", number);
	expect(numberNegativeErrorDTO.message).toBe("NumberNegativeErrorDTO: The number cannot be negative.");
	expect(numberNegativeErrorDTO.field).toBe("number");
	expect(numberNegativeErrorDTO.value).toBe(number);
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
