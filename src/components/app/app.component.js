import { useContext } from 'react';

import { NominateContext } from "../../context/nominate.context";

import Search from "../search/search.component";
import Nominations from "../nominations/nominations.component";
import Message from "../message/message.component";

import './app.styles.scss';

function App() {

    const { nominees } = useContext(NominateContext);

    return (
        <div className="App">
            <h1> The Shoppies </h1>
            {
                nominees.length >= 5 && 
                <Message text="You have reached 5 nominations."/>
            }
            <div className="container">
                <Search/>
                <Nominations/>
            </div>
        </div>
    );
}

export default App;