import { PresenterMessageDTO } from "./presenter-message-dto";

export class PresenterGenericServiceErrorDTO extends PresenterMessageDTO<"GENERIC_SERVICE_ERROR">
{
	constructor()
	{
		super({ code: "GENERIC_SERVICE_ERROR", message: "Ocorreu um problema em nossos serviços. Por favor, tente novamente mais tarde." });
	}
}
