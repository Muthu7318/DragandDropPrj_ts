import {Draggable} from "../Model/drag-drop-interfaces"
import {Project} from "../Model/project"
import {Component} from "../components/base-component"
import {Autobind} from "../decorators/Autobind"


export class ProjectItem extends Component<HTMLUListElement,HTMLLIElement> implements Draggable{
        private project:Project;
    
        get persons(){
            if(this.project.people===1){
                return '1 person'
            }else{
                return `${this.project.people} persons`
            }
        }
        constructor(hostId:string, project:Project){
            super('single-project',hostId,false,project.id);
            this.project = project;
            this.configure();
            this.renderContent();
        }
        @Autobind
        dragStartHandler(event:DragEvent){
           // debugger;
            //console.log(event)
            event.dataTransfer!.setData('text/plain',this.project.id);
            event.dataTransfer!.effectAllowed = 'move';
    
        }
    
        @Autobind
        dragEndHandler(_:DragEvent){
            console.log('end drag')
        }
        
        configure(){
           // debugger
            this.element.addEventListener('dragstart',this.dragStartHandler)
            this.element.addEventListener('dragend',this.dragEndHandler)
    
        }
    
        renderContent(){
            this.element.querySelector('h2')!.textContent = this.project.title;
            this.element.querySelector('h3')!.textContent = this.persons+' assigned';
            this.element.querySelector('p')!.textContent = this.project.description;
    
        }
    }
