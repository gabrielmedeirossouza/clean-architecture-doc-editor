import { ISmartChip } from "../interfaces";

export class SmartChip implements ISmartChip
{
	private _prefix: string;

	private _position: number;

	private _children: ISmartChip[];

	private _requiredParent?: ISmartChip;

	constructor(
        public readonly label: string,
        prefix: string,
        position: number,
        children: ISmartChip[],
        requiredParent?: ISmartChip
	)
	{
		this._prefix = prefix;
		this._position = position;
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

	public get position(): number
	{
		return this._position;
	}

	public set position(value: number)
	{
		this._position = value;
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
