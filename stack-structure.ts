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

    peek(): T | undefined {
        if (this.count === 0) {
            throw new Error('Stack is empty!');
        }

        return this.items[this.count - 1];
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    clear(): void {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.size()); // Output: 3

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true