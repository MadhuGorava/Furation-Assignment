import React, { Component } from "react";
import Book from "..//Book";
import "./index.css";

class BookList extends Component {
  render() {
    const books = this.props.books.map((book) => (
      <Book key={book.id} book={book} />
    ));
    return (
      <div className="container">
        <h1 className="heading">Book List</h1>
        <div className="sub-container">{books}</div>
      </div>
    );
  }
}

export default BookList;
