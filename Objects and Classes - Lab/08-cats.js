function createCats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catStr of input) {
        const [name, age] = catStr.split(' ');
        const cat = new Cat(name, parseInt(age));
        cat.meow();
    }
}

