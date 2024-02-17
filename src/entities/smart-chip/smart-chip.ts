import { SmartChip } from "@/entities/interfaces";

export namespace ConcreteSmartChip {
    export interface ConstructorParameters {
        label: string;
        prefix: string;
        position: number;
        children: SmartChip[];
        requiredParent?: SmartChip;
    }

    export class Entity implements SmartChip
    {
    	public readonly label: string;

    	public readonly prefix: string;

    	public readonly position: number;

    	public readonly children: SmartChip[];

    	public readonly requiredParent?: SmartChip;

    	constructor({ label, prefix, position, children, requiredParent }: ConstructorParameters)
    	{
    		this.label = label;
    		this.prefix = prefix;
    		this.position = position;
    		this.children = children;
    		this.requiredParent = requiredParent;
    	}
    }
}
