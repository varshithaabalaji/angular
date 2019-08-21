import React from 'react';
import {connect} from 'react-redux';

const BookDetails = props =>{
    // console.log(props.selectedBook)
    if(!props.selectedBook){
        return(
            <div>
                Select a book
            </div>
        );
    }
    return(
        <div>
            BookDetails
            <p>
                Title : {props.selectedBook.title}
                <br/>
                Author:{props.selectedBook.author}
                <br/>
            </p>
        </div>
    );
};

const mapStateToProps = state =>({selectedBook:state.selectedBook})

export default connect(mapStateToProps)(BookDetails);