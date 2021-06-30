import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import Css from './books.css';
import {data} from './data';
import NewBook from './book';

function BookList (){
    return (
        <section className="bookList">
            {/* <Book image={book3.image} title={book3.title} author={book3.author}></Book>
            <Book image={book4.image} title={book4.title} author={book4.author}></Book> */}
            {
                data.map((bookd) => {                    
                    // return <Book key={bookd.id} image={bookd.image} author ={bookd.author} title={bookd.title}/>;
                    return <NewBook key={bookd.id} {...bookd} />
                })
            }
        </section>
    );
}

export default BookList;

