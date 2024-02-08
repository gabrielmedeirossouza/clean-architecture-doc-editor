export interface ISmartChip {
    label: string;
    prefix: string;
    position: number;
    children: ISmartChip[];
    requiredParent?: ISmartChip;
}
