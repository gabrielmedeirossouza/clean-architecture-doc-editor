import { GenericServiceErrorDto, MessageDto, Result } from "@/shared";
import { IGetByIdResponseResult, IGetSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/get-smart-chip-use-case";
import { IGetSmartChipPresenterOutput } from "@/interface-adapters/protocols/presenters/smart-chip-presenter/get-smart-chip-presenter";

export class GetSmartChipPresenter implements IGetSmartChipUseCaseOutputPort {
	constructor(private readonly output: IGetSmartChipPresenterOutput) { }

	public GetByIdResponse({ ok, value }: IGetByIdResponseResult): void {
		if (ok)
			return this.output.getSmartChipByIdOutput?.Notify(Result.Ok({
				id: value.id,
				label: value.entity.label,
				prefix: value.entity.prefix,
			}));

		if (value.code === "SMART_CHIP_NOT_FOUND")
			return this.output.getSmartChipByIdOutput?.Notify(Result.Fail(new MessageDto("SMART_CHIP_NOT_FOUND", "Não foi possível obter o Smart Chip.")));

		if (value.code === "GENERIC_SERVICE_ERROR")
			return this.output.getSmartChipByIdOutput?.Notify(Result.Fail(new GenericServiceErrorDto()));

        value satisfies never;
	}
}

