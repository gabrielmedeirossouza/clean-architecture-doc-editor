import { NumberNegativeErrorDTO } from ".";

test.each([
	{ number: -1 },
	{ number: -0.1 },
])(`${NumberNegativeErrorDTO.name}($number)`, ({ number }) => {
	const numberNegativeErrorDTO = new NumberNegativeErrorDTO("number", number);
	expect(numberNegativeErrorDTO.message).toBe("NumberNegativeErrorDTO: The number cannot be negative.");
	expect(numberNegativeErrorDTO.field).toBe("number");
	expect(numberNegativeErrorDTO.value).toBe(number);
	expect(numberNegativeErrorDTO.isFieldDTO()).toBe(true);
	expect(numberNegativeErrorDTO.isMessageDTO()).toBe(true);
	expect(numberNegativeErrorDTO.isStringTooShortDTO()).toBe(false);
	expect(numberNegativeErrorDTO.isStringTooLongDTO()).toBe(false);
	expect(numberNegativeErrorDTO.isNumberZeroDTO()).toBe(false);
	expect(numberNegativeErrorDTO.isNumberNegativeDTO()).toBe(true);
	expect(numberNegativeErrorDTO.isNumberTooLargeDTO()).toBe(false);
	expect(numberNegativeErrorDTO.isNumberTooSmallDTO()).toBe(false);
	expect(numberNegativeErrorDTO.isNumberOutsideRangeDTO()).toBe(false);
});
