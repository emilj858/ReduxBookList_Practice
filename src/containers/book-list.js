import React, { Component} from 'react'; 
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
renderList() {
    return this.props.books.map((book) => {
        return (
            <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title}
            </li>
        );
    });
 }

render() {
    return (
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of bookList
    return {
        books: state.books
    }
}

    // Anything returned from this function will end up as props on booklist container

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
    // Whenever select book is called the result should be passed to all reducers
}

    // Promote BookList from component to contrainer - it needs to know about
    // dispatch method selectBook. Make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);