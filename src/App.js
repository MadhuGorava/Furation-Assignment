import React, { Component } from "react";
import BookService from "./services/BookService";
import BookList from "./components/BookList";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

class App extends Component {
  state = {
    books: [],
    shoppingCart: [],
  };

  componentDidMount() {
    BookService.getBooks().then((books) => {
      this.setState({ books });
    });
  }

  onAddToCart = (book) => {
    this.setState((prevState) => {
      const shoppingCart = [...prevState.shoppingCart, book];
      return { shoppingCart };
    });
  };

  onRemoveFromCart = (book) => {
    this.setState((prevState) => {
      const shoppingCart = prevState.shoppingCart.filter((b) => b !== book);
      return { shoppingCart };
    });
  };

  render() {
    return (
      <div>
        <BookList books={this.state.books} onAddToCart={this.onAddToCart} />
        <ShoppingCart
          books={this.state.shoppingCart}
          onRemoveFromCart={this.onRemoveFromCart}
        />
        <Checkout />
      </div>
    );
  }
}

export default App;
