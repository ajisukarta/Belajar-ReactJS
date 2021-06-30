import React, { useState } from 'react'
import data from './data.json'

//useState adalah salah satu hook yang mulai dikenalkan sejak React versi 16.8
//useState memiliki fungsi yang sama dengan this.state yang ada pada React sebelum versi 16.8

//state seperti variabel yang menampung value beragam tipe data. Namun, state dapat menyebabkan
//render ulang sebagian elemen apabila value nya berubah. sementara variable JS biasa tidak

//Untuk menggunakan fungsionalitas state, kita wajib mengimpor hook useState dari module 'react'
//Syntax deklarasi state adalah const[nama_state, nama_fungsi_update] = useState(default_value)
//Jika kita ingin mengupdate nilai suatu state, kita cukup memanggil fungsi update state. Perubahan value
//state akan menyebabkan render ulang sebagian element yang merender state.

const BelajarState = () => {
    const [message, setMessage] = useState('Hello World')
    const [counter, setCounter] = useState(0)
    //let message = "Hello World"
    const handleClick = () => {
        //message = "Hello brother"
        //console.log(message)
        //setMessage("Hello Brother")
        if(message === "Hello World"){
            setMessage("Random Title")
        }else{
            setMessage("Hello World")
        }
    }

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="container">
            <h1>{message}</h1>
            <button className="btn" onClick={handleClick}>Click Me!</button>
            <h2>Counter</h2>
            <h1>{counter}</h1>
            <button className="btn" onClick={handleCounter}>Add Counter</button>
            <BookShelf />            
        </div>
    )
}

const BookShelf = () => { 
    const [books, setBooks] = useState(data)
    const handleClick = (title) => {
        const filtered = books.filter((book) => book.title!== title)
        setBooks(filtered)
    }
    return(
        <>  
            <h2>Book Array</h2>
            {
                books.map((book, index) => {
                    return <div key={index} className="item">
                        <h5>{book.title}</h5>
                        <button onClick={() => handleClick(book.title)}>Remove</button>
                    </div>
                })
            }
        </>
    )
}
export default BelajarState
