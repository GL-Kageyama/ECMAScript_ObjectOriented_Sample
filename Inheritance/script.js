// Super class definition
class Alphabet {
    upperCase() {
        return console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
}

// Subclass definition (Inheritance Alphabet class)
class Character extends Alphabet {
    lowerCase() {
        return console.log("abcdefghijklmnopqrstuvwxyz");
    }
}

// Instantiate
let chara = new Character();
chara.upperCase();
chara.lowerCase();