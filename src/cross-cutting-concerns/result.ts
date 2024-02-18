import { Observable } from "./observable";

type Ok<P> = {
	ok: true,
	value: P
};

type Fail<S> = {
	ok: false,
	value: S
};

export type Result<O, F> = Ok<O> | Fail<F>;

export const Result = class
{
	public static get compose(): Compose
	{
		return new Compose();
	}

	public static Ok<O>(value: O): Result<O, never>
	{
		return {
			ok: true,
			value: value
		};
	}

	public static Fail<F>(value: F): Result<never, F>
	{
		return {
			ok: false,
			value: value
		};
	}
};

class Compose
{
	private _observable = new Observable<Result<any, any>>();

	protected _someFailed = false;

	constructor()
	{
		this._observable.Subscribe(this._OnResult.bind(this));
	}

	public get someFailed(): boolean
	{
		return this._someFailed;
	}

	public AddHandler<P, S>(result: Result<P, S>): Handler<P, S>
	{
		return new Handler<P, S>(this, result, this._observable);
	}

	private _OnResult(result: Result<any, any>): void
	{
		if (!result.ok)
		{
			this._someFailed = true;
		}
	}
}

class Handler<O, F>
{
	private _onCallback: ((callback: Result<O, F>) => void) | undefined;

	private _onOkCallback: ((callback: O) => void) | undefined;

	private _onFailCallback: ((callback: F) => void) | undefined;

	constructor(
        private readonly _compose: Compose,
        private readonly _result: Result<O, F>,
        private readonly _observable: Observable<Result<any, any>>
	)
	{}

	public On(callback: (result: Result<O, F>) => void): this
	{
		this._onCallback = callback;

		return this;
	}

	public OnOk(callback: (value: O) => void): this
	{
		this._onOkCallback = callback;

		return this;
	}

	public OnFail(callback: (value: F) => void): this
	{
		this._onFailCallback = callback;

		return this;
	}

	public Handle(): Compose
	{
		this._onCallback?.(this._result);

		if (this._result.ok)
		{
			this._onOkCallback?.(this._result.value);
		}
		else
		{
			this._onFailCallback?.(this._result.value);
		}

		this._observable.Notify(this._result);

		return this._compose;
	}
}
