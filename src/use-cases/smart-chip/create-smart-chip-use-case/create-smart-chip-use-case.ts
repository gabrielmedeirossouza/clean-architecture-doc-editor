import { SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort
{
	constructor(
		private readonly smartChipValidationService: ISmartChipValidationService,
		private readonly outputPort: ICreateSmartChipUseCaseOutputPort
	)
	{ }

	public Create({ name, label, prefix, position }: ICreateSmartChipUseCaseRequestModel): void
	{
		const compose = Result.Compose()
			.AddFailChecker(this.smartChipValidationService.ValidateLabel(name), (response) => this.outputPort.NameResponse({ response }))
			.AddFailChecker(this.smartChipValidationService.ValidateLabel(label), (response) => this.outputPort.LabelResponse({ response }))
			.AddFailChecker(this.smartChipValidationService.ValidatePrefix(prefix), (response) => this.outputPort.PrefixResponse({ response }))
			.AddFailChecker(this.smartChipValidationService.ValidatePosition(position), (response) => this.outputPort.PositionResponse({ response }))
			.Check();

		if (compose.someFailed)
			return this.outputPort.Response({
				response: Result.Fail(new MessageDTO("CreateSmartChipUseCase create error."))
			});

		const smartSmartChip = new SmartChip(name, label, prefix, position, []);

		return this.outputPort.Response({ response: Result.Ok(smartSmartChip) });
	}
}
