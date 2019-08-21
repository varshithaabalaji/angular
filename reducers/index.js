import {combineReducers} from 'redux';

const books= [
        {id:1, title:'Brief History of Time' ,author:'Sh'},
        {id:2, title:'Ignited Minds',author:'Apj'},
        {id:3, title:'Java 2 Complete',author:'Hs'},
        {id:4, title:'Da Vinci Code',author:'Db'},
        {id:5, title:'The C++', author:'Bs'},
    ];
    

export function selectedBookReducer(selectedBook =  null,action){
    if(action.type==='SELECT_BOOK'){
        return action.payload;
    }
    
    return selectedBook;
}
export function deletedBookReducer(bookList = books,action){
    if(action.type==='DELETE_BOOK'){
        return bookList.filter(book => book.id !==action.payload.id);
    }
    return bookList;
}

export default  combineReducers({
    bookList:bookListReducer,
    selectedBook : selectedBookReducer,                                                    
});