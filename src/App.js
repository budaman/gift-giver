import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "./helper/index";

class App extends Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    gifts.push({ id: max_number(ids) + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(g => g.id !== id);
    this.setState({
      gifts
    });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
        <Button onClick={this.addGift} className="btn-add">
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
