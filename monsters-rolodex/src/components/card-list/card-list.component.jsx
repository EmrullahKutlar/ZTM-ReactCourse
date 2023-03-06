import  Card  from "../card/card.component";
import "./card-list.styles.css";
const CardList = ({ monsters }) => {
// const CardList = (props,)=> {
    // const { monsters } = props;

    return monsters.map((monster) => {
      return (
        <Card monster={monster}/>
      );
    });
  }

export default CardList;
