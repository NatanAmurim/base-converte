class Stack{
    constructor(){
        this.numberOfElements = 0;
        this.items = {};
    }

    push(element){
        this.items[this.numberOfElements] = element;
        this.numberOfElements++;
    }

    pop(){
        if (this.isEmpty())
            return undefined;        

        this.numberOfElements--;
        const result = this.items[this.numberOfElements];
        delete this.items[this.numberOfElements];
        return result;

    }

    peek(){
        if (this.isEmpty())
            return undefined;

        return this.items[this.numberOfElements - 1];  
    }

    isEmpty(){
        return this.numberOfElements === 0;
    }

    clear(){
        this.items = {};
        this.numberOfElements = 0;
    }

    size(){
        return this.numberOfElements;
    }

    toString(){
        if (this.isEmpty())
            return '';
        
        let objString = `${this.items[0]}`;

        for(let i = 1; this.numberOfElements > i; i++){
            objString += `, ${this.items[i]}`;
        }

        return objString;
    }
}

module.exports = Stack;