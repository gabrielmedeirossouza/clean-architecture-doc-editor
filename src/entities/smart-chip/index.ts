import { ISmartChip } from "../interfaces";

export class SmartChip implements ISmartChip
{
	private _prefix: string;

	private _value: number;

	private _children: ISmartChip[];

	private _requiredParent?: ISmartChip;

	constructor(
        public readonly id: string,
        public readonly name: string,
        prefix: string,
        value: number,
        children: ISmartChip[],
        requiredParent?: ISmartChip
	)
	{
		this._prefix = prefix;
		this._value = value;
		this._children = children;
		this._requiredParent = requiredParent;
	}

	public get prefix(): string
	{
		return this._prefix;
	}

	public set prefix(value: string)
	{
		this._prefix = value;
	}

	public get value(): number
	{
		return this._value;
	}

	public set value(value: number)
	{
		this._value = value;
	}

	public get children(): ISmartChip[]
	{
		return this._children;
	}

	public set children(value: ISmartChip[])
	{
		this._children = value;
	}

	public get requiredParent(): ISmartChip | undefined
	{
		return this._requiredParent;
	}

	public set requiredParent(value: ISmartChip | undefined)
	{
		this._requiredParent = value;
	}
}
