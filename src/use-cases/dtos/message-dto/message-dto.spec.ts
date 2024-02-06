import { MessageDTO } from ".";

test.each([
	{ message: "" },
	{ message: "Testing message" },
])(`${MessageDTO.name}($message)`, ({ message }) =>
{
	const messageDTO = new MessageDTO(message);
	expect(messageDTO.message).toBe(message);
	expect(messageDTO.IsFieldDTO()).toBe(false);
	expect(messageDTO.IsMessageDTO()).toBe(true);
	expect(messageDTO.IsStringTooShortDTO()).toBe(false);
	expect(messageDTO.IsStringTooLongDTO()).toBe(false);
	expect(messageDTO.IsNumberZeroDTO()).toBe(false);
	expect(messageDTO.IsNumberNegativeDTO()).toBe(false);
	expect(messageDTO.IsNumberTooLargeDTO()).toBe(false);
	expect(messageDTO.IsNumberTooSmallDTO()).toBe(false);
	expect(messageDTO.IsNumberOutsideRangeDTO()).toBe(false);
});
