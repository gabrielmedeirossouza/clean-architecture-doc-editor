export interface ISmartChipController {
    Create(label: string, prefix: string): void;
    GetById(id: string): void;
    FirstPage(): void;
    LastPage(): void;
    PreviousPage(): void;
    NextPage(): void;
    GoToPage(page: number): void;
    Edit(id: string, fields: { label?: string, prefix?: string }): void;
    Remove(id: string): void;
}
