import { Component } from "react";
import  Card  from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props);
    const { monsters } = this.props;

    return monsters.map((monster) => {
      return (
        <Card monster={monster}/>
      );
    });
  }
}

export default CardList;
