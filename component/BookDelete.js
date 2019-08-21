import React from 'react';
import {connect} from 'react-redux';
import {deleteBook} from '../actions'

const BookDelete = props=>{
    
    if(!props.deletedBook)
    return(
        
        <div>
            <ul className="list-group">
                {booklist}
            </ul>
           

        </div>
    )
}
const mapStateToProps = state =>({books:state.bookList});
export default connect(mapStateToProps,{
    deleteBook})(BookDelete);