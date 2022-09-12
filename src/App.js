import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");

    super();

    this.state = {
      monsters: [],
      searchString: "",
    };

    // this.state = {
    //   name: { firstname: "bijen", lastname: "maharjan" },
    //   office: "nerd platoon",
    // };
  }

  //

  componentDidMount() {
    console.log("component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return {
            monsters: user,
          };
        })
      );
  }

  searchOnChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchString } = this.state;
    const { searchOnChange } = this;
    const filterdItem = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
      <h1 className="header">
        Monster Rolodex
      </h1>
      <SearchBox onChangeHandler={searchOnChange}/>
      <div className="card-list">
        <CardList monsters={filterdItem} />
      </div></div>
    );
  }
}
export default App;
