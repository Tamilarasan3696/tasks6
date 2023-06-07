class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if (rating == null) {
            return this.rating = "PG";
        }
        else {
            return this.rating = rating;
        }
    }
    getPG() {
        if (rating == "PG") {
            return this.rating;
        }
    }

}
let film = new movie("Casino Royale", "Eon productions","PG13");
console.log(film);
let film1=new movie("hello","nothing");
console.log(film1);