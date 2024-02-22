import { GenericServiceErrorDto, MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { ICreateResponseResult, ICreateSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/create-smart-chip-use-case";
import { ICreateSmartChipPresenterOutput } from "@/interface-adapters/protocols/presenters/smart-chip-presenter/create-smart-chip-presenter";

export class CreateSmartChipPresenter implements ICreateSmartChipUseCaseOutputPort {
	constructor(private readonly output: ICreateSmartChipPresenterOutput) { }

	public CreateResponse({ ok, value }: ICreateResponseResult): void {
		if (ok)
			return this.output.createOutput?.Notify(Result.Ok({
				id: value.id,
				label: value.entity.label,
				prefix: value.entity.prefix,
			}));

		if (value.code === "LABEL_TOO_SHORT")
			return this.output.createOutput?.Notify(
				Result.Fail(new StringTooShortErrorDto("LABEL_TOO_SHORT", "Etiqueta", value.value, value.minLength, `O Campo Etiqueta deve ter pelo menos ${value.minLength} caracteres.`))
			);

		if (value.code === "LABEL_TOO_LONG")
			return this.output.createOutput?.Notify(
				Result.Fail(new StringTooLongErrorDto("LABEL_TOO_LONG", "Etiqueta", value.value, value.maxLength, `O Campo Etiqueta deve ter no máximo ${value.maxLength} caracteres.`))
			);

		if (value.code === "LABEL_ALREADY_EXISTS")
			return this.output.createOutput?.Notify(
				Result.Fail(new MessageDto("LABEL_ALREADY_EXISTS", `Um Smart Chip com essa Etiqueta já existe.`))
			);

		if (value.code === "PREFIX_TOO_SHORT")
			return this.output.createOutput?.Notify(
				Result.Fail(new StringTooShortErrorDto("PREFIX_TOO_SHORT", "Prefixo", value.value, value.minLength, `O Campo Prefixo deve ter pelo menos ${value.minLength} caracteres.`))
			);

		if (value.code === "PREFIX_TOO_LONG")
			return this.output.createOutput?.Notify(
				Result.Fail(new StringTooLongErrorDto("PREFIX_TOO_LONG", "Prefixo", value.value, value.maxLength, `O Campo Prefixo deve ter no máximo ${value.maxLength} caracteres.`))
			);

		if (value.code === "PREFIX_ALREADY_EXISTS")
			return this.output.createOutput?.Notify(
				Result.Fail(new MessageDto("PREFIX_ALREADY_EXISTS", `Um Smart Chip com esse Prefixo já existe.`))
			);

		if (value.code === "GENERIC_SERVICE_ERROR")
			return this.output.createOutput?.Notify(Result.Fail(new GenericServiceErrorDto()));

		value satisfies never;
	}
}
