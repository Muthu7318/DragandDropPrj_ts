    // Component BaseClass

export abstract class Component<T1 extends HTMLElement,T2 extends HTMLElement>{
    templateElement:HTMLTemplateElement;
    hostElement: T1;
    element:T2;

    constructor(
        templateId:string,
        hostElementId:string,
        insertAtStart:boolean,
        newElementId?:string
    ){
        this.templateElement =document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T1;

        const importedNode = document.importNode(this.templateElement.content,true);
        this.element=importedNode.firstElementChild as T2;
        if(newElementId){
            this.element.id =newElementId;
        }
        this.attach(insertAtStart);
    }
    private attach(insertAtStart:boolean){
        this.hostElement.insertAdjacentElement(insertAtStart?'afterbegin':'beforeend',this.element)
    }

    abstract configure():void;
    abstract renderContent():void;
}
