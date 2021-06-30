import React from 'react'

const image = "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg"
const title = "Sapiens: A brief history of humankind"
const author = "Yuval Noah Harari"

//Jika kita ingin membuat component yang akan merender beberapa elemen HTML sekaligus, maka kita wajib
//melakukan wrapping (pembungkusan) element-element HTML yang ingin di render ke dalam 1 tag wrapper,
//bisa menggunakan <div>, <article> atau hanya tag kosong <></>.
const Book = () => {  
    return(
        <div className="book">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
        </div>
    )
}

//Component di atas akan merender gambar, text Title dan Author ke dalam satu unit tag HTML Div
export default Book
