import { MessageDTO } from ".";

test.each([
	{ message: ""},
	{ message: "Testing message" },
])(`${MessageDTO.name}($message)`, ({ message }) => {
	const messageDTO = new MessageDTO(message);
	expect(messageDTO.message).toBe(message);
	expect(messageDTO.isFieldDTO()).toBe(false);
	expect(messageDTO.isMessageDTO()).toBe(true);
	expect(messageDTO.isStringTooShortDTO()).toBe(false);
	expect(messageDTO.isStringTooLongDTO()).toBe(false);
	expect(messageDTO.isNumberZeroDTO()).toBe(false);
	expect(messageDTO.isNumberNegativeDTO()).toBe(false);
	expect(messageDTO.isNumberTooLargeDTO()).toBe(false);
	expect(messageDTO.isNumberTooSmallDTO()).toBe(false);
	expect(messageDTO.isNumberOutsideRangeDTO()).toBe(false);
});
