import { Book } from "./models/Book";

class BookService {
  static getBooks() {
    const books = [
      new Book({
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "A classic fantasy novel",
      }),
      new Book({
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "A children's fantasy novel",
      }),
      new Book({
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "A dystopian young adult novel",
      }),
    ];
    return books;
  }
}

export default BookService;
