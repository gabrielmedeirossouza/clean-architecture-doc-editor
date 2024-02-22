import { Result } from "./result";

export interface Observable<T> {
	Subscribe<J extends (data: T) => void>(observer: J): Result<J, string>;
	Unsubscribe(observer: (data: T) => void): Result<void, string>;
    Dispose(): void;
	Notify(data: T): void;
}

export const Observable = class<T> implements Observable<T> {
	private _observers: Array<(data: T) => void> = [];

	public Subscribe<J extends(data: T) => void>(observer: J): Result<J, string> {
		if (this._observers.includes(observer)) {
			return Result.Fail("Observer already subscribed.");
		}

		this._observers.push(observer);

		return Result.Ok(observer);
	}

	public Unsubscribe(observer: (data: T) => void): Result<void, string> {
		const index = this._observers.indexOf(observer);
		if (index === -1) {
			return Result.Fail("Observer not found.");
		}

		this._observers.splice(index, 1);

		return Result.Ok(undefined);
	}

	public Dispose(): void {
		this._observers = [];
	}

	public Notify(data: T): void {
		this._observers.forEach((observer) => observer(data));
	}
};
