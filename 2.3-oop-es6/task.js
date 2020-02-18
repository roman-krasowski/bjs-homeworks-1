//Assignment 1
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
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


const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

//regular weapon
const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

//enforced weapon
const longbow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range,
});

const staffOfStorm = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: staff.durability,
  range: 3,
});


//Assignment 2
class Bow extends Weapon {
  constructor () {
  super ('Лук', 10, 200, 3);
  }
}

class Arm extends Weapon {
  constructor () {
  super ('Рука', 1, Infinity, 1);
  }
}

class Sword extends Weapon {
constructor () {
  super ('Меч', 25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor () {
  super ('Нож', 5, 300, 1);
  }
}

class Staff extends Weapon {
  constructor () {
  super ('Посох', 8, 300, 2);
  }
}

class NewBow extends Bow {
  constructor () {
  super (200);
  this.name = 'Длинный лук',
  this.attack  = 15,
  this.range = 4
  }
}

class NewSword extends Sword {
  constructor () {
  super (1);
  this.name = 'Секира',
  this.attack  = 27,
  this.durability = 800
  }
}

class NewStaff extends Staff {
  constructor () {
  super (300);
  this.name = 'Посох Бури',
  this.attack  = 10,
  this.range = 3
  }
}
