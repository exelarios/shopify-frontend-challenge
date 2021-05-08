import { useContext } from "react";

import { NominateContext } from "../../context/nominate.context";

import "./card.styles.scss";

function Card(props) {
    const { title, poster } = props;

    const { removeNominee } = useContext(NominateContext);

    function onRemoveNominee() {
        removeNominee(props);
    }

    return (
        <div className="card">
            <div className="poster" style={{backgroundImage: `url(${poster})`}}></div>
            <div className="content"> 
                <div className="title"> { title } </div>
                <button onClick={onRemoveNominee}> Remove </button>
            </div>
        </div>
    )
}

export default Card;