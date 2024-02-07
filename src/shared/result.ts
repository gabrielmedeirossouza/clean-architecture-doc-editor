type Ok<T> = {
	ok: true,
	value: T
};

type Fail<K> = {
	ok: false,
	error: K
};

export type Result<T, K> = Ok<T> | Fail<K>;

export const Result = class
{
	public static get compose(): Compose
	{
		return new Compose();
	}

	public static Ok<T>(value: T): Result<T, never>
	{
		return {
			ok: true,
			value
		};
	}

	public static Fail<K>(error: K): Result<never, K>
	{
		return {
			ok: false,
			error
		};
	}
};

class Compose
{
	private _someFailed = false;

	public get someFailed(): boolean
	{
		return this._someFailed;
	}

	public AddHandler<R extends Result<any, any>>(result: R, callback?: (result: R) => void): this
	{
		callback?.(result);

		if (!result.ok)
		{
			this._someFailed = true;
		}

		return this;
	}
}
