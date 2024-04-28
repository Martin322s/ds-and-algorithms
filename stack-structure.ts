class Stack<T> {
    private items: T[];
    private count: number;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(item: T): void {
        this.items.push(item);
        this.count++;
    }

    pop(): T | undefined {
        if (this.count === 0) {
            throw new Error('Stack is empty!');
        }
        
        this.count--;
        return this.items.pop();
    }
}