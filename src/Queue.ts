class Queue<E> {
    public queue: E[];

    constructor() {
        this.queue = [];
    }

    offer(element: E) {
        this.queue.push(element);
    }
}

let queue = new Queue<number>();
queue.offer(1);
console.log(queue);
