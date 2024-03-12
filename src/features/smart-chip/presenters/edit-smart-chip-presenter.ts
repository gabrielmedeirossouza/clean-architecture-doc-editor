import { IEditResponseResult, IEditSmartChipUseCaseOutputPort, IEditSmartChipView } from "@/features/smart-chip/protocols";

export class EditSmartChipPresenter implements IEditSmartChipUseCaseOutputPort {
    constructor(private readonly view: IEditSmartChipView) { }

    public EditResponse({ ok, value }: IEditResponseResult): void {
        if (ok)
            return this.view.RenderSuccess({
                id: value.id,
                label: value.data.label,
                prefix: value.data.prefix,
            });

        if (value.code === "SMART_CHIP_NOT_FOUND")
            return this.view.RenderMessage("Ocorreu um erro interno. Parece que o Smart Chip que você está tentando editar não existe.");

        if (value.code === "LABEL_ALREADY_EXISTS")
            return this.view.RenderFieldError("label", "Um Smart Chip com essa Etiqueta já existe.");

        if (value.code === "LABEL_TOO_SHORT")
            return this.view.RenderFieldError("label", `O campo Etiqueta deve ter no mínimo ${value.minLength} caracteres.`);

        if (value.code === "LABEL_TOO_LONG")
            return this.view.RenderFieldError("label", `O campo Etiqueta deve ter no máximo ${value.maxLength} caracteres.`);

        if (value.code === "PREFIX_ALREADY_EXISTS")
            return this.view.RenderFieldError("prefix", "Um Smart Chip com esse Prefixo já existe.");

        if (value.code === "PREFIX_TOO_SHORT")
            return this.view.RenderFieldError("prefix", `O campo Prefixo deve ter no mínimo ${value.minLength} caracteres.`);

        if (value.code === "PREFIX_TOO_LONG")
            return this.view.RenderFieldError("prefix", `O campo Prefixo deve ter no máximo ${value.maxLength} caracteres.`);

        value satisfies never;
    }
}
