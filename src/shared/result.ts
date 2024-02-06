type Ok<T> = {
	ok: true,
	value: T
};

type Fail<K> = {
	ok: false,
	error: K
};

export type Result<T, K> = Ok<T> | Fail<K>;

export const Result = {
	Ok<T>(okValue: T): Result<T, never>
	{
		return {
			ok: true,
			value: okValue
		};
	},
	Fail<K>(failValue: K): Result<never, K>
	{
		return {
			ok: false,
			error: failValue
		};
	},
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	Compose()
	{
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		function AddFailChecker<R extends Result<any, any>>(result: R, callback?: (result: R) => void)
		{
			callback?.(result);

			let someFailed = false;
			if (!result.ok) someFailed = true;

			return {
				AddFailChecker,
				Check: (): { someFailed: boolean } => ({
					someFailed,
				})
			};
		}

		return {
			AddFailChecker,
		};
	}
};
