import { Observable } from "./observable";

type Primary<P> = {
	isPrimary: true,
	primaryValue: P
};

type Secondary<S> = {
	isPrimary: false,
	secondaryValue: S
};

export type Result<P, S> = Primary<P> | Secondary<S>;

export const Result = class
{
	public static get compose(): Compose
	{
		return new Compose();
	}

	public static Primary<P>(value: P): Result<P, never>
	{
		return {
			isPrimary: true,
			primaryValue: value
		};
	}

	public static Secondary<S>(value: S): Result<never, S>
	{
		return {
			isPrimary: false,
			secondaryValue: value
		};
	}
};

class Compose
{
	private _observable = new Observable<Result<any, any>>();

	protected _hasSecondary = false;

	constructor()
	{
		this._observable.Subscribe(this._OnResult.bind(this));
	}

	public get hasSecondary(): boolean
	{
		return this._hasSecondary;
	}

	public AddHandler<P, S>(result: Result<P, S>): Handler<P, S>
	{
		return new Handler<P, S>(this, result, this._observable);
	}

	private _OnResult(result: Result<any, any>): void
	{
		if (!result.isPrimary)
		{
			this._hasSecondary = true;
		}
	}
}

class Handler<P, S>
{
	private _onCallback: ((callback: Result<P, S>) => void) | undefined;

	private _onPrimaryCallback: ((callback: P) => void) | undefined;

	private _onSecondaryCallback: ((callback: S) => void) | undefined;

	constructor(
        private readonly _compose: Compose,
        private readonly _result: Result<P, S>,
        private readonly _observable: Observable<Result<any, any>>
	)
	{}

	public On(callback: (result: Result<P, S>) => void): this
	{
		this._onCallback = callback;

		return this;
	}

	public OnPrimary(callback: (value: P) => void): this
	{
		this._onPrimaryCallback = callback;

		return this;
	}

	public OnSecondary(callback: (value: S) => void): this
	{
		this._onSecondaryCallback = callback;

		return this;
	}

	public Handle(): Compose
	{
		this._onCallback?.(this._result);

		if (this._result.isPrimary)
		{
			this._onPrimaryCallback?.(this._result.primaryValue);
		}
		else
		{
			this._onSecondaryCallback?.(this._result.secondaryValue);
		}

		this._observable.Notify(this._result);

		return this._compose;
	}
}
