import { IRemoveResponseResult, IRemoveSmartChipUseCaseOutputPort, IRemoveSmartChipView } from "@/features/smart-chip/protocols";

export class RemoveSmartChipPresenter implements IRemoveSmartChipUseCaseOutputPort {
    constructor(private readonly output: IRemoveSmartChipView) { }

    public RemoveResponse({ ok, value }: IRemoveResponseResult): void {
        if (ok)
            return this.output.RenderSuccess(value);

        if (value.code === "SMART_CHIP_NOT_FOUND")
            return this.output.RenderMessage("Não foi possível remover o Smart Chip.");

        if (value.code === "GENERIC_SERVICE_ERROR")
            return this.output.RenderMessage("Ocorreu um erro inesperado. Tente novamente mais tarde.");

        value satisfies never;
    }
}

