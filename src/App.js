import React, { Component } from "react";
import "./App.css";
import { USERS } from "./users.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>React Benchmark v1.0 beta</header>
                <ul>
                    {USERS.contacts.map(contact => (
                        <li key={contact.id}>{contact.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
