import { MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { IEditResponseResult, IEditSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/edit-smart-chip-use-case";
import { IEditSmartChipPresenterOutput } from "@/interface-adapters/protocols/presenters/smart-chip-presenter/edit-smart-chip-presenter";

export class EditSmartChipPresenter implements IEditSmartChipUseCaseOutputPort {
	constructor(private readonly output: IEditSmartChipPresenterOutput) { }

	public EditResponse({ ok, value }: IEditResponseResult): void {
		if (ok)
			return this.output.editOutput?.Notify(
				Result.Ok({
					id: value.id,
					label: value.entity.label,
					prefix: value.entity.prefix,
				})
			);

		if (value.code === "SMART_CHIP_NOT_FOUND")
			return this.output.editOutput?.Notify(
				Result.Fail(new MessageDto("SMART_CHIP_NOT_FOUND", "Ocorreu um erro interno. Parece que o Smart Chip que você está tentando editar não existe."))
			);

		if (value.code === "LABEL_ALREADY_EXISTS")
			return this.output.editOutput?.Notify(
				Result.Fail(new MessageDto("LABEL_ALREADY_EXISTS", `Um Smart Chip com essa Etiqueta já existe.`))
			);

		if (value.code === "LABEL_TOO_SHORT")
			return this.output.editOutput?.Notify(
				Result.Fail(new StringTooShortErrorDto("LABEL_TOO_SHORT", "Etiqueta", value.value, value.minLength, `O campo Etiqueta deve ter no mínimo ${value.minLength} caracteres.`))
			);

		if (value.code === "LABEL_TOO_LONG")
			return this.output.editOutput?.Notify(
				Result.Fail(new StringTooLongErrorDto("LABEL_TOO_LONG", "Etiqueta", value.value, value.maxLength, `O campo Etiqueta deve ter no máximo ${value.maxLength} caracteres.`))
			);

		if (value.code === "PREFIX_ALREADY_EXISTS")
			return this.output.editOutput?.Notify(
				Result.Fail(new MessageDto("PREFIX_ALREADY_EXISTS", `Um Smart Chip com esse Prefixo já existe.`))
			);

		if (value.code === "PREFIX_TOO_SHORT") {
			return this.output.editOutput?.Notify(
				Result.Fail(new StringTooShortErrorDto("PREFIX_TOO_SHORT", "Prefixo", value.value, value.minLength, `O campo Prefixo deve ter no mínimo ${value.minLength} caracteres.`))
			);
		}

		if (value.code === "PREFIX_TOO_LONG") {
			return this.output.editOutput?.Notify(
				Result.Fail(new StringTooLongErrorDto("PREFIX_TOO_LONG", "Prefixo", value.value, value.maxLength, `O campo Prefixo deve ter no máximo ${value.maxLength} caracteres.`))
			);
		}

        value satisfies never;
	}
}
