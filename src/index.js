import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

class App extends Component {
  state = {
    doggos: [],
    err: ""
  };
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breed/husky/images")
      .then(res => {
        this.setState({
          doggos: res.data.message,
          error: ""
        });
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
        console.log(err);
      });
  }

  render() {
    console.log(this.state.doggos);
    return (
      <div className="App">
        <h1>Hello doggos</h1>
        {this.state.error && <h4>{this.state.error}</h4>}
        {this.state.doggos.map(doggo => (
          <img src={doggo} width="200" key={doggo} alt={doggo} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
