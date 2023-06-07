class uber{
    constructor(km,timeHr){
        this.km=km;
        this.timeHr=timeHr;
    }
    getRate(){
        const baseRate=15;
        return`your ride cost is ${baseRate*this.km+(60*this.timeHr)}`;
    }
}
let ube=new uber(123,2);
console.log(ube);
