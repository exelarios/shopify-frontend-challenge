import { useContext } from "react";

import Card from "../card/card.component";

import { NominateContext } from "../../context/nominate.context";

import "./nominations.styles.scss";

function Nominations() {

    const { nominees } = useContext(NominateContext);

    return(
        <div className="nominations-wrapper">
            <div className="heading"> nominations </div>
            { nominees.length === 0 ?
                <center style={{padding: "2%"}}> no nominations selected </center>
            :
                <div className="number-nominees"> {nominees.length} nominated </div>
            }
            {
            nominees.map(item => {
                return <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    poster={item.poster} 
                />
            })
            }
        </div>
    )
}

export default Nominations;