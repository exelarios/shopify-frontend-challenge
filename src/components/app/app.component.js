import './app.styles.scss';

import Search from "../search/search.component";
import Nominations from "../nominations/nominations.component";
import Message from "../message/message.component";

import { NominateProvider } from "../../context/nominate.context";

function App() {
    return (
        <div className="App">
            <NominateProvider>
                <h1> The Shoppies </h1>
                <Message/>
                <div className="container">
                    <Search/>
                    <Nominations/>
                </div>
            </NominateProvider>
        </div>
    );
}

export default App;