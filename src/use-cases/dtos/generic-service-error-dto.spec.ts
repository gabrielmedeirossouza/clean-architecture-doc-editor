import { GenericServiceErrorDTO } from ".";

test(`${GenericServiceErrorDTO.name}()`, () => {
	const genericServiceErrorDTO = new GenericServiceErrorDTO();
	expect(genericServiceErrorDTO.message).toBe("GenericServiceErrorDTO: Generic Service Error.");
	expect(genericServiceErrorDTO.isFieldDTO()).toBe(false);
	expect(genericServiceErrorDTO.isMessageDTO()).toBe(true);
	expect(genericServiceErrorDTO.isStringTooShortDTO()).toBe(false);
	expect(genericServiceErrorDTO.isStringTooLongDTO()).toBe(false);
	expect(genericServiceErrorDTO.isNumberZeroDTO()).toBe(false);
	expect(genericServiceErrorDTO.isNumberNegativeDTO()).toBe(false);
	expect(genericServiceErrorDTO.isNumberTooLargeDTO()).toBe(false);
	expect(genericServiceErrorDTO.isNumberTooSmallDTO()).toBe(false);
	expect(genericServiceErrorDTO.isNumberOutsideRangeDTO()).toBe(false);
});
