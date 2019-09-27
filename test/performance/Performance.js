class Perf {

    constructor(name) {
        this.name = name;
        this.tests = [];
    }

    setup(callback) {
        this.setup = callback;
        return this;
    }

    add(name, callback) {
        this.tests.push({ name, callback });
        return this;
    }

    run() {
        if (this.name) {
            console.log(`Running: ${this.name}`);
        }
        else {
            console.log(`Running`);
        }
        for (let test of this.tests) {
            const args = this.setup ? this.setup() : undefined;
            const t1 = Date.now();
            test.callback(args);
            const t2 = Date.now();
            console.log(`    ${test.name} ${t2 - t1}ms`);
        }
        console.log("--- Done ---\n");
    }

}
export default Perf;