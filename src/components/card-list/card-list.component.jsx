import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
import "./../card/card.component.jsx"

class CardList extends Component{
    render(){
        const {monsters}=this.props;
        return(
            monsters.map((monster) => {
                return(
                    <Card monster={monster}/>
    
   ) })
        )
    }
}

export default CardList;