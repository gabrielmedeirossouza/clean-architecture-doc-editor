import { IPaginatedViewModel } from "./paginated-view-model";

export interface IPaginateView<T> {
    RenderSuccess(viewModel: IPaginatedViewModel<T>): void;
    RenderFieldError(field: "page", message: string): void;
    RenderMessage(message: string): void;
}
