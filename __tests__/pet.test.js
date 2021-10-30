const Pet = require('../src/pet');

const pet = new Pet('Fido',0,0,10);

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('constructor', () => {
    it('has a initial age of 0', () => {
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1,hunger by 5 and decreases fitness by 3', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('walk increments fitness by 4 but should not go over 10', () => {
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it('walk increments fitness by 4 starting from fitness 2', () => {
      const pet = new Pet('Bruno',2,0,2);
      pet.walk();
      expect(pet.fitness).toEqual(6);
    });
  });

  describe('feed',() => {
    it('feed decreases pet hunger by 3',() => {
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
    it('feed decreases pet hunger to minHunger,',() => {
      const pet = new Pet('Alex',0,2,10);
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('checkup', () => {
    it ('tells the Bart pet they need a walk', () => {
      const pet = new Pet('Bart',0,0,2);
      expect(pet.checkup()).toEqual('I need a walk') 
    });

    it ('tells the Pongo pet they are hungry', () => {
      const pet = new Pet('Pongo',0,6,4);
      expect(pet.checkup()).toEqual('I am hungry') 
    });

    it ('tells the Bingo pet they are hungry and they need a walk', () => {
      const pet = new Pet('Bingo',0,6,2);
      expect(pet.checkup()).toEqual('I am hungry AND I need a walk') 
    });

    it ('tells the Rongo pet they are feeling great', () => {
      const pet = new Pet('Rongo',0,0,10);
      expect(pet.checkup()).toEqual('I feel great') 
    });

    describe('isAlive', () => {
      it('tells how the pet is feeling',() => {
        const pet = new Pet('Arnold',31,11,11);
        expect(pet.isAlive).toEqual(false)
      });

      it('tells how the pet is feeling',() => {
        const pet = new Pet('Jet',25,9,10);
        expect(pet.isAlive).toEqual(true)
      });
    });

    describe('feed', () => {
      it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
      });
    });