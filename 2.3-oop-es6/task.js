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
  super ();
    this.name = "Длинный лук",
    this.attack = 15,
    this.durability = bow.durability,
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor () {
  super ();
    this.name = "Секира",
    this.attack = 27,
    this.durability = 800,
    this.range = sword.range
    this.durabilityInitial = this.durability;
  }
}

class StaffOfStorm extends Staff {
  constructor () {
  super ()
    this.name = "Посох Бури",
    this.attack = 10,
    this.durability = staff.durability,
    this.range = 3;
  }
}

//test weapons
console.log('TESTING REGULAR WEAPONS');

const bow = new Bow();
console.log(bow);

const arm = new Arm();
console.log(arm);

const sword = new Sword();
console.log(sword);

const knife = new Knife();
console.log(knife);

const staff = new Staff();
console.log(staff);

console.log("\n");
console.log('TESTING EXTENDED WEAPONS');

const myLongbow = new Longbow;
console.log(myLongbow);

const myAxe = new Axe;
console.log(myAxe);

const myStaffOfStorm = new StaffOfStorm;
console.log(myStaffOfStorm);


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
