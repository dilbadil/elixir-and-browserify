class Counter {
    count = 0;

    constructor() {
        setInterval( () => this.tick(), 1000 );
    }

    tick() {
        console.log(++this.count);
    }
}

export default Counter;
