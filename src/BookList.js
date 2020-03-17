import React, { Component } from "react";
// Components
import BookRow from "./BookRow";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
    state = {
        filteredBooks: this.props.books

    };
    osamaFilter = query => {
        query = query.toLowerCase();
        const filteredBook = this.props.books.filter(book =>
            book.title.toLowerCase()
                .includes(query)
        );
        this.setState({ filteredBooks: filteredBook });

    };
    osamaFilterColor = bookColor => {
        return this.state.filteredBooks.filter(book => book.color === bookColor
        )
    }

    render() {

        var bookCards = this.state.filteredBooks;
        const bookColor = this.props.match.params.bookColor
        if (bookColor) {

            bookCards = this.osamaFilterColor(bookColor)
        }

        return (
            <div>
                <h3>books</h3>
                <SearchBar handleFilter={this.osamaFilter} />
                <BookTable books={bookCards} />

            </div>
        );
    }
}

export default BookList;
