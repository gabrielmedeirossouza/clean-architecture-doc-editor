export interface ISmartChipController {
    Create(label: string, prefix: string): void;
    GetById(id: string): void;
    List(): void;
    Edit(id: string, fields: { label?: string, prefix?: string }): void;
    Remove(id: string): void;
}
