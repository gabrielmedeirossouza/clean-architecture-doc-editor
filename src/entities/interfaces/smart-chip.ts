export interface ISmartChip {
	id: string;
	name: string;
	prefix: string;
	value: number;
	children: ISmartChip[];
  requiredParent?: ISmartChip;
}