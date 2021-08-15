    //Autobind decorator
    export function Autobind(_:any,_2:string,descriptor:PropertyDescriptor){
    // debugger;
        const originalMethod = descriptor.value;
        const adjustedDescriptor:PropertyDescriptor = {
            configurable:true,
            enumerable:false,
            get(){
                const boundfn = originalMethod.bind(this);
                return boundfn; 
            }
        }
        return adjustedDescriptor;
    }
