class Complexe {
    constructor(reel, imaginaire){
        this.reel = reel;
        this.imaginaire = imaginaire;
    }

    toString(){
        return this.reel + "+" + this.imaginaire + "i";
    }

    //Méthodes de calcul
    additionner(nbComplexe2){
        return (this.reel + nbComplexe2.reel) + " + " + (this.imaginaire + nbComplexe2.imaginaire) + "i";
    }

    soustraire(nbComplexe2){
        return (this.reel - nbComplexe2.reel) + " + " + (this.imaginaire - nbComplexe2.imaginaire) + "i";
    }

    multiplier(nbComplexe2){
        let imaginaireSimple1 = (this.reel * nbComplexe2.imaginaire);
        let imaginaireSimple2 = (this.imaginaire * nbComplexe2.reel);
        let resultRe = (this.reel * nbComplexe2.reel);
        let resultIm2 = (this.imaginaire * nbComplexe2.imaginaire + "i^2");

        return resultRe + " + " + (imaginaireSimple1 + imaginaireSimple2 + "i") + " + " + resultIm2;
    }

    divisier(nbComplexe2){
        let re = this.reel * nbComplexe2.reel;
        let im1 = this.reel * (-nbComplexe2.imaginaire);
        let im2 = this.imaginaire * nbComplexe2.reel;
        let imResult = im1 + im2;
        let imInRe = (this.imaginaire*(-nbComplexe2.imaginaire))*-1;
        let reTotal = re + imInRe;
        let denominateur = (nbComplexe2.reel**2) + (nbComplexe2.imaginaire**2);
        return (reTotal + "/" + denominateur) + " " + (imResult + "/" + denominateur + "i");
    }
}

let nbComplexe1 = new Complexe(8,9);
let nbComplexe2 = new Complexe(2,6);

console.log("z = " + nbComplexe1.toString())
console.log("z' = " + nbComplexe2.toString())
console.log("z + z' = " + nbComplexe1.additionner(nbComplexe2))
console.log("z - z' = " + nbComplexe1.soustraire(nbComplexe2))
console.log("z * z' = " + nbComplexe1.multiplier(nbComplexe2))
console.log("z / z' = " + nbComplexe1.divisier(nbComplexe2))

let nbComplexe3 = new Complexe(20, -4);
let nbComplexe4 = new Complexe(3,2);
console.log("z / z' = " + nbComplexe3.divisier(nbComplexe4))
