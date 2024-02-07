import { SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort
{
	constructor(
		private readonly _smartChipValidationService: ISmartChipValidationService,
		private readonly _outputPort: ICreateSmartChipUseCaseOutputPort
	)
	{ }

	public Create({ name, label, prefix, position }: ICreateSmartChipUseCaseRequestModel): void
	{
		const compose = Result.compose
			.AddHandler(this._smartChipValidationService.ValidateLabel(name), (response) => this._outputPort.NameResponse({ response }))
			.AddHandler(this._smartChipValidationService.ValidateLabel(label), (response) => this._outputPort.LabelResponse({ response }))
			.AddHandler(this._smartChipValidationService.ValidatePrefix(prefix), (response) => this._outputPort.PrefixResponse({ response }))
			.AddHandler(this._smartChipValidationService.ValidatePosition(position), (response) => this._outputPort.PositionResponse({ response }));

		if (compose.someFailed)
		{
			return this._outputPort.Response({
				response: Result.Fail(new MessageDTO("CreateSmartChipUseCase create error."))
			});
		}

		const smartSmartChip = new SmartChip(name, label, prefix, position, []);

		return this._outputPort.Response({ response: Result.Ok(smartSmartChip) });
	}
}
