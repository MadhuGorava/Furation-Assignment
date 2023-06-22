import React, { Component } from "react";
import Book from "..//Book";

class ShoppingCart extends Component {
  render() {
    const books = this.props.books.map((book) => (
      <Book key={book.id} book={book} />
    ));
    return (
      <div>
        <h1>Shopping Cart</h1>
        {books}
      </div>
    );
  }
}

export default ShoppingCart;
