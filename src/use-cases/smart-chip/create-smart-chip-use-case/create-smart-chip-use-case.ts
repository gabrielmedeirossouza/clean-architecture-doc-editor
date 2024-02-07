import { SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export interface ICreateSmartChipUseCaseConstructorParameters {
    logger: ILogger;
    smartChipValidationService: ISmartChipValidationService;
    outputPort: ICreateSmartChipUseCaseOutputPort;
}

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort
{
	private readonly _outputPort: ICreateSmartChipUseCaseOutputPort;

	private readonly _smartChipValidationService: ISmartChipValidationService;

	private readonly _logger: ILogger;

	constructor({ outputPort, smartChipValidationService, logger }: ICreateSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipValidationService = smartChipValidationService;
		this._logger = logger;
	}

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
				response: Result.Fail(new MessageDTO({ message: "CreateSmartChipUseCase: Cannot create SmartChip entity, because one or more fields are invalid.", logger: this._logger }))
			});
		}

		const smartSmartChip = new SmartChip(name, label, prefix, position, []);
		this._logger.Log(`CreateSmartChipUseCase: SmartChip entity created successfully. Name: "${name}", Label: "${label}", Prefix: "${prefix}", Position: "${position}"`);

		return this._outputPort.Response({ response: Result.Ok(smartSmartChip) });
	}
}
