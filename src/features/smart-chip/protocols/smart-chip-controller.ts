export interface ISmartChipController {
    Create(label: string, prefix: string): void;
    GetById(id: string): void;
    List(page: number, limit: number): void;
    Edit(id: string, fields: { label?: string, prefix?: string }): void;
    Remove(id: string): void;
}
