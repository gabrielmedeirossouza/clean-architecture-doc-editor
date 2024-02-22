import { GenericServiceErrorDto, MessageDto, Result } from "@/shared";
import { IRemoveResponseResult, IRemoveSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/remove-smart-chip-user-case";
import { IRemoveSmartChipPresenterOutput } from "@/interface-adapters/protocols/presenters/smart-chip-presenter/remove-smart-chip-presenter";

export class RemoveSmartChipPresenter implements IRemoveSmartChipUseCaseOutputPort {
	constructor(private readonly output: IRemoveSmartChipPresenterOutput) { }

	public RemoveResponse({ ok, value }: IRemoveResponseResult): void {
		if (ok)
			return this.output.removeOutput?.Notify(Result.Ok(value));

		if (value.code === "SMART_CHIP_NOT_FOUND")
			return this.output.removeOutput?.Notify(Result.Fail(new MessageDto("SMART_CHIP_NOT_FOUND", "Não foi possível remover o Smart Chip.")));

		if (value.code === "GENERIC_SERVICE_ERROR")
			return this.output.removeOutput?.Notify(Result.Fail(new GenericServiceErrorDto()));

        value satisfies never;
	}
}

