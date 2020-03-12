//Assignment 1
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
         this.durabilityInitial = durability;
        this.range = range;
    }

    takeDamage(damage) {
            if (this.durability - damage <= 0) {
            return this.durability = 0;
        } else {
            return this.durability -= damage;
        }
    }

    getDamage() {
      let durabilityInitial = this.durability;
      if (this.durability >= this.durabilityInitial /100 * 30) {
        return this.attack;
      } else if (this.durability === 0) {
        return this.durability = 0;
      } else {
        return this.attack / 2;
      }
    }

    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
}


//Assignment 2
//regular weapon classes

class Arm extends Weapon {
  constructor () {
  super ({
    name:"Рука",
    attack: 1,
    durability: Infinity,
    range:1})
  }
}

class Bow extends Weapon {
  constructor () {
  super ({
    name:"Лук",
    attack: 10,
    durability: 200,
    range:3})
  }
}

class Sword extends Weapon {
  constructor () {
  super ({
    name:"Меч",
    attack: 25,
    durability: 500,
    range:1})
  }
}

class Knife extends Weapon {
  constructor () {
  super ({
    name:"Нож",
    attack: 5,
    durability: 300,
    range:1})
  }
}

class Staff extends Weapon {
  constructor () {
  super ({
    name:"Посох",
    attack: 8,
    durability: 300,
    range:2})
  }
}

//extended weapon classes

class Longbow extends Bow {
  constructor () {
  super ({
    name:"Длинный лук",
    attack: 15,
    durability: bow.durability,
    range:4})
  }
}

class Axe extends Sword {
  constructor () {
  super ({
    name:"Секира",
    attack: 27,
    durability: 800,
    range: sword.range})
  }
}

class StaffOfStorm extends Staff {
  constructor () {
  super ({
    name:"Посох Бури",
    attack: 10,
    durability: staff.durability,
    range: 3})
  }
}

//test
console.log('TESTING WEAPONS');

const bow = new Bow();
console.log(bow.name);
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);

const arm = new Arm();
console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);

const sword = new Sword();
console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);

const knife = new Knife();
console.log(knife.name);
console.log(knife.attack);
console.log(knife.durability);
console.log(knife.range);

const staff = new Staff();
console.log(staff.name);
console.log(staff.attack);
console.log(staff.durability);
console.log(staff.range);

const longbow = new Longbow();
console.log(longbow.name);
console.log(longbow.attack);
console.log(longbow.durability);
console.log(longbow.range);

const axe = new Axe();
console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);

const staffOfStorm = new StaffOfStorm();
console.log(staffOfStorm.name);
console.log(staffOfStorm.attack);
console.log(staffOfStorm.durability);
console.log(staffOfStorm.range);

//test methods
console.log("\n");
console.log('TESTING METHODS');

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(bow.getDamage()); 

console.log(bow.durability);
console.log(bow.isBroken());
