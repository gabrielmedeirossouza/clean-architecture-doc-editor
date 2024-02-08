import { ISmartChip } from "../interfaces";

export class SmartChip implements ISmartChip
{
	constructor(
        public label: string,
        public prefix: string,
        public position: number,
        public children: ISmartChip[],
        public requiredParent?: ISmartChip
	)
	{}
}
