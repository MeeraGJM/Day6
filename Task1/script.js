class movie{
    constructor(title, studio, rating="Pg-14"){
      this.title=title;
      this.studio=studio;
      if(rating===" ")
      {
        this.rating=" ";
      }
      else
      {
        this.rating=rating;
      }
    }
     
    getPG(ipArr){
      return this.rating;
    }
  }
      let flim=new movie;("Casino Royale", "Eon Productions","PG-13");
      let ipArr=[{title:"Casino Royale", studio: "Eon Productions"},
                  {title:"Casino Royale", studio: "Eon Productions", rating: "PG-15"},
                  {title:"Casino Royale", studio: "Eon Productions"}];
                  console.log(flim.getPG(ipArr));
