import {Component} from "../components/base-component"
import * as validation from "../util/prjValidation"
import {Autobind} from "../decorators/Autobind"
import {projectState} from "../state/project-state"

export class ProjectInput extends Component<HTMLDivElement,HTMLFormElement>{

        titleInputElement:HTMLInputElement;
        descriptionInputElement:HTMLInputElement;
        PeopleInputElement:HTMLInputElement;
    
        constructor(){
            super('project-input','app',true,'user-input');
            this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
            this.PeopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
    
            this.configure();
            
        }
    
        private gatherUserInput():[string,string,number] | void{
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = +this.PeopleInputElement.value;
    
            const titleValidatable:validation.Validatable={
                value:enteredTitle,
                required:true,
            }
    
            const descriptorValidatable:validation.Validatable={
                value:enteredDescription,
                required:true,
                minlength:1,
                maxlength:5
    
            }
    
            const peopleValidatable:validation.Validatable={
                value:enteredPeople,
                required:true,
                min:1,
                max:5
            }
            //debugger
            if(
                !validation.Validate(titleValidatable) ||
                !validation.Validate(descriptorValidatable) ||
                !validation.Validate(peopleValidatable)
            ){
                alert('Invalid input');
                return;
            }else{
                return [enteredTitle,enteredDescription,enteredPeople]
            }
        }
    
        private clearInputs(){
            this.titleInputElement.value ='';
            this.descriptionInputElement.value='';
            this.PeopleInputElement.value='';
        }
    
        @Autobind
        private submitHandler(event:Event){
            event.preventDefault();
            //console.log(this.titleInputElement.value);
            const userInput = this.gatherUserInput();
            if(Array.isArray(userInput)){
               let [title,desc,people] = userInput;
               console.log(title,desc,people);
               projectState.addProject(title,desc,people);
               this.clearInputs();
            }
        }
    
        configure(){
           
            //this.element.addEventListener('submit',this.submitHandler.bind(this))
            this.element.addEventListener('submit',this.submitHandler)
    
        }
    renderContent(){}
}
