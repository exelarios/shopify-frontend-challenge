
import { useContext } from "react";

import { NominateContext } from "../../context/nominate.context";

import "./item.styles.scss";

function Item(props) {
    const { title, year, poster, id } = props;

    const { addNominee, nominees } = useContext(NominateContext);

    function isNominated() {
        return nominees.some(item => item.id === id);
    }

    function onAddNominee() {
        addNominee(props);
    }

    return (
        <div className="item">
            <div className="poster" style={{backgroundImage: `url(${poster})`}}></div>
            <div className="content"> 
                <div className="title"> { title } </div>
                <div> { year } </div>
                {
                    isNominated() ?
                    <button onClick={onAddNominee} disabled> Nominate </button>
                    :
                    <button onClick={onAddNominee}> Nominate </button>
                }
            </div>
        </div>
    )
}

export default Item;