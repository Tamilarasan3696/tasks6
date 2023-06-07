class person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getPer(){
        return `There is a person with the details, name is ${this.name}, age is ${this.age} and gender is ${this.gender}`;
    }
}
let per=new person("ABDUL",21,"MALE");
console.log(per);
console.log(per.getPer());