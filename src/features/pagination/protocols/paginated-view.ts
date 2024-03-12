import { PersistedDto } from "@/features/@dtos";
import { IPaginatedViewModel } from "./paginated-view-model-dto";

export interface IPaginatedView<T> {
    RenderSuccess?(viewModel: IPaginatedViewModel<PersistedDto<T>>): void;
    RenderFieldError?(field: "page", message: string): void;
    RenderMessage?(message: string): void;
}
