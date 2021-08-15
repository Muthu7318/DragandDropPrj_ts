
    //validation
export interface Validatable{
    value:string |number;
    required?:boolean;
    minlength?:number;
    maxlength?:number;
    min?:number;
    max?:number;
}

export function Validate(ValidatableInput:Validatable):boolean{
    let isValid=true;
    if(ValidatableInput.required){
        isValid = isValid && ValidatableInput.value.toString().trim().length !== 0
    }
    if(ValidatableInput.minlength != null && typeof ValidatableInput.value == 'string'){
        isValid = isValid && ValidatableInput.value.length >= ValidatableInput.minlength
    }
    if(ValidatableInput.maxlength != null && typeof ValidatableInput.value == 'string'){
        isValid = isValid && ValidatableInput.value.length <= ValidatableInput.maxlength
    }
    if(ValidatableInput.min != null && typeof ValidatableInput.value == 'number'){
        isValid = isValid && ValidatableInput.value >= ValidatableInput.min
    }
    if(ValidatableInput.max != null && typeof ValidatableInput.value == 'number'){
        isValid = isValid && ValidatableInput.value <= ValidatableInput.max
    }
    return isValid
}
