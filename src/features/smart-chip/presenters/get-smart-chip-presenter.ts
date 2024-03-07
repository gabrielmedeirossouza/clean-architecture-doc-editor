import { IGetByIdResponseResult, IGetSmartChipUseCaseOutputPort, IGetSmartChipView } from "@/features/smart-chip/protocols";

export class GetSmartChipPresenter implements IGetSmartChipUseCaseOutputPort {
    constructor(private readonly view: IGetSmartChipView) { }

    public GetByIdResponse({ ok, value }: IGetByIdResponseResult): void {
        if (ok)
            return this.view.RenderSuccess({
                id: value.id,
                label: value.entity.label,
                prefix: value.entity.prefix,
            });

        if (value.code === "SMART_CHIP_NOT_FOUND")
            return this.view.RenderMessage("Não foi possível obter o Smart Chip.");

        if (value.code === "GENERIC_SERVICE_ERROR")
            return this.view.RenderMessage("Ocorreu um erro inesperado. Tente novamente mais tarde.");

        value satisfies never;
    }
}

