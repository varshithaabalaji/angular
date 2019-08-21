import React,{Component} from 'react'
import {connect} from 'react-redux';
import {selectBook,deleteBook} from '../actions'

class BookList extends Component{
    

    render(){
        // console.log(this.props);
        const booklist=this.props.books.map(
            book => <li className="list-group-item" key={book.id}
            onClick={()=>this.props.selectBook(book)}>
                {book.title}
                <button onClick={(e)=>{e.stopPropagation();this.props.deleteBook(book)}}>X</button>
            </li>
        )
        const booklist1 =this.props.book
        return(
            
        <div>
            Book List
            <ul className="list-group">
                {booklist}
            </ul>
        </div>
        );
    }
}
const mapStateToProps = state =>
    ({books: state.bookList});

export default connect(mapStateToProps,{
    selectBook,
    deleteBook
    })(BookList)