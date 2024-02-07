import { LoggerDummy } from "@/__test__/dummies";
import { GenericServiceErrorDTO } from ".";

test(`${GenericServiceErrorDTO.name}()`, () =>
{
	const genericServiceErrorDTO = new GenericServiceErrorDTO({ logger: new LoggerDummy });
	expect(genericServiceErrorDTO.message).toBe("GenericServiceErrorDTO: Generic Service Error.");
	expect(genericServiceErrorDTO.IsFieldDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsMessageDTO()).toBe(true);
	expect(genericServiceErrorDTO.IsStringTooShortDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsStringTooLongDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsNumberZeroDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsNumberNegativeDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsNumberTooLargeDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsNumberTooSmallDTO()).toBe(false);
	expect(genericServiceErrorDTO.IsNumberOutsideRangeDTO()).toBe(false);
});
