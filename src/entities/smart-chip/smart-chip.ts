import { ISmartChip } from "@/entities/protocols/smart-chip";

export class SmartChip  implements ISmartChip
{
	constructor(public readonly label: string, public readonly prefix: string)
	{}
}
