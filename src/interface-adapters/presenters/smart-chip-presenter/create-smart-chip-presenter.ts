import { ICreateResponseResult, ICreateSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/create-smart-chip-use-case";
import { ICreateSmartChipView } from "@/interface-adapters/protocols/views/smart-chip-view/create-smart-chip-view";

export class CreateSmartChipPresenter implements ICreateSmartChipUseCaseOutputPort {
	constructor(private readonly view: ICreateSmartChipView) { }

	public CreateResponse({ ok, value }: ICreateResponseResult): void {
		if (ok)
			return this.view.RenderSuccess({
				id: value.id,
				label: value.entity.label,
				prefix: value.entity.prefix,
			});

		if (value.code === "LABEL_TOO_SHORT")
			return this.view.RenderFieldError("label", `O Campo Etiqueta deve ter pelo menos ${value.minLength} caracteres.`);

		if (value.code === "LABEL_TOO_LONG")
			return this.view.RenderFieldError("label", `O Campo Etiqueta deve ter no máximo ${value.maxLength} caracteres.`);

		if (value.code === "LABEL_ALREADY_EXISTS")
			return this.view.RenderFieldError("label", `Um Smart Chip com essa Etiqueta já existe.`);

		if (value.code === "PREFIX_TOO_SHORT")
			return this.view.RenderFieldError("prefix", `O Campo Prefixo deve ter pelo menos ${value.minLength} caracteres.`);

		if (value.code === "PREFIX_TOO_LONG")
			return this.view.RenderFieldError("prefix", `O Campo Prefixo deve ter no máximo ${value.maxLength} caracteres.`);

		if (value.code === "PREFIX_ALREADY_EXISTS")
			return this.view.RenderFieldError("prefix", `Um Smart Chip com esse Prefixo já existe.`);

		if (value.code === "GENERIC_SERVICE_ERROR")
			return this.view.RenderMessage("Ocorreu um erro inesperado. Tente novamente mais tarde.");

		value satisfies never;
	}
}
