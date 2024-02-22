type Ok<P> = {
	ok: true,
	value: P
};

type Fail<S> = {
	ok: false,
	value: S
};

export type Result<O, F> = Ok<O> | Fail<F>;

export const Result = class {
	public static Ok<O>(value: O): Result<O, never> {
		return {
			ok: true,
			value: value
		};
	}

	public static Fail<F>(value: F): Result<never, F> {
		return {
			ok: false,
			value: value
		};
	}
};
