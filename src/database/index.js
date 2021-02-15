class Database {
  constructor() {
    this.pageData = {
      About: [
        {
          name: "CDL Mockups",
        }
      ]
    };

    this.aboutPage = {
      title: "about",
      text: "something",
      category: "text",
    }

    this.blm = [
      "George Floyd",
      "Ahmaud Arbery",
      "Breonna Taylor",
      "David McAtee",
      "Tony McDade",
      "Tamir Rice",
      "Trayvon Martin",
      "Oscar Grant",
      "Eric Garner",
      "Philando Castile",
      "Samuel Dubose",
      "Sandra Bland",
      "Walter Scott",
      "Terrence Crutcher",
      "& too many more to count."             
    ]
  }
}

const store = new Database();
export default store;