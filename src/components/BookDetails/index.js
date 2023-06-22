import React, { Component } from "react";
import Book from "./components/Book";

class BookDetails extends Component {
  render() {
    const book = this.props.book;
    return (
      <div>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
    );
  }
}

export default BookDetails;
