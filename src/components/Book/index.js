import React, { Component } from "react";
import "./index.css";

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <h1 className="heading">{book.title}</h1>
        <p className="author">{book.author}</p>
        <p className="disc">{book.description}</p>
      </div>
    );
  }
}

export default Book;
