const maxFitness = 10
const minHunger= 0

class Pet {
    constructor(name,age,hunger,fitness) {
        this.name = name;
        this.age=age;
        this.hunger=hunger;
        this.fitness=fitness; 
    }
    growUp() {
        this.age += 1;
        this.hunger+=5;
        this.fitness-=3;
    }
    walk(){
        if(this.fitness < 7){
            this.fitness+=4;
        } else {
            this.fitness= maxFitness;
        }
    }

    feed() {
        if(this.hunger >=3) {
            this.hunger -=3;
        } else {
            this.hunger=minHunger;
        }
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
    }

    checkup() {
        if(this.fitness <= 3 && this.hunger <= 5){
            return 'I need a walk';
        } else if (this.fitness > 3 && this.hunger >= 5) {
            return 'I am hungry';
        } else if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        } else {
            return 'I feel great';
        }
    }
    
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    };
};

module.exports = Pet;
