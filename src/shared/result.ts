type Ok<O> = {
    ok: true,
    value: O
};

type Fail<F> = {
    ok: false,
    value: F
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
