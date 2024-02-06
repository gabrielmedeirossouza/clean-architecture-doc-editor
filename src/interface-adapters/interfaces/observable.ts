import { Result } from "../../shared/result";

export interface IObservable<T> {
	Subscribe<J extends (data: T) => void>(observer: J): Result<void, string>;
	Unsubscribe(observer: (data: T) => void): Result<void, string>;
	Notify(data: T): void;
}
