import { ISmartChip } from "@/entities/protocols/smart-chip";

export class SmartChip  implements ISmartChip
{
	constructor(public label: string, public prefix: string)
	{}
}
