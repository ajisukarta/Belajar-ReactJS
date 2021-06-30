import React from 'react';

const Book = (props) =>{
    const {image, title, author} = props;
    const clickHandler = (title) =>{
        alert('Your choice is :' + title);
    }

    const clickHandler2 = (e) => {
        console.log(e);
        console.log(e.target);
    }
    return <div className="item"> 
                <img src={props.image}></img>
                <h3>{props.title}</h3>
                <h5>{props.author}</h5>
                <button type="button" onClick={() => clickHandler(props.title)}>Click Me!</button>
                <button type="button" onClick={clickHandler2}>Click Me Button2!</button>
            </div>
}

export default Book;

//Note: 
// dalam invoke function yang perlu parameter untuk event handler, maka dalam properti event (eg: onClick, onDoubleClick) 
// maka harus dipanggil dengan arrow function agar event tidak diinvoke saat render
// e.target adalah element apa yang barusan mengalami event seperti klik atau doble klik