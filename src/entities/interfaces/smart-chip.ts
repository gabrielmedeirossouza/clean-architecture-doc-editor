export interface SmartChip {
    label: string;
    prefix: string;
    position: number;
    children: SmartChip[];
    requiredParent?: SmartChip;
}
