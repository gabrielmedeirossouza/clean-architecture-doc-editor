import { Result } from "../../shared/result";

export interface IObservable<T> {
	subscribe<J extends (data: T) => void>(observer: J): Result<void, string>;
	unsubscribe(observer: (data: T) => void): Result<void, string>;
	notify(data: T): void;
}
