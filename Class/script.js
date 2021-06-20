// Class definition
class Calculation {
    constructor(firstPara, secondPara) {
        this.firstP = firstPara;
        this.secondP = secondPara;
    }

    // Function definition
    getAdd() {
        return this.firstP + this.secondP;
    }
    getSub() {
        return this.firstP - this.secondP;
    }
    getMul() {
        return this.firstP * this.secondP;
    }
    getDiv() {
        return this.firstP / this.secondP;
    }
}

// Instantiate
let calc = new Culculation(32, 56);
console.log("Addition : " + calc.getAdd());
console.log("Subtraction : " + calc.getSub());
console.log("Multiplication : " + calc.getMul());
console.log("Division : " + calc.getDiv());