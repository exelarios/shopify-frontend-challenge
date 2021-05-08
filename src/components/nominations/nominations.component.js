import { useContext } from "react";

import Card from "../card/card.component";

import { NominateContext } from "../../context/nominate.context";

import "./nominations.styles.scss";

function Nominations() {

    const { nominees } = useContext(NominateContext);

    function isEmpty(object) {
        return Object.keys(object).length === 0;
    }

    return(
        <div className="nominations-wrapper">
            <div className="heading"> nominations </div>
            { isEmpty(nominees) ?
                <center style={{padding: "2%"}}> no nominations selected </center>
            :
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