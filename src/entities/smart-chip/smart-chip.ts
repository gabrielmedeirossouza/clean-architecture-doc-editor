import { SmartChip } from "@/entities/interfaces";

export namespace ConcreteSmartChip {
    export interface ConstructorParameters {
        label: string;
        prefix: string;
    }

    export class Entity implements SmartChip
    {
    	public readonly label: string;

    	public readonly prefix: string;

    	constructor({ label, prefix }: ConstructorParameters)
    	{
    		this.label = label;
    		this.prefix = prefix;
    	}
    }
}
