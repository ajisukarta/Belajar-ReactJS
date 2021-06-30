import React from 'react'
import data from './data.json'

const MainComponent = () => {
    const handleClick = (message) => {
        console.log(message)
    }
    return(
        <>
            <LoopingRender books={data} onClick={handleClick}/>
        </>
    )
}

//Untuk menghindari repetisi code, jika kita ingin merender component yang sama kita dapat melakukan
//looping terhadap component tersebut. Pada contoh ini kita malekukan looping terhadap component Book
//sebanyak object JSON yang ada di dalam data.

//Kita juga dapat melakukan passing 1 object utuh sebagai parameter tanpa perlu menuliskan dan memasukkan 
//properti component yang dipanggil satu-persatu. Caranya hanya dengan menuliskan rest parameter '{...data}'
const LoopingRender = (props) => {
    const {books, onClick} = props
    return (
        <div className="products">
            {
                books.map((book, index) => {
                    return(
                        <Book key={index} {...book} onClick={onClick}/>
                    )
                })
            }
        </div>
    )
}

//Selain itu, React juga memungkinkan kita untuk mengoper properti dari dari beberapa lapis komponen
//Teknik ini disebut dengan prop-drilling. Pada contoh ini kita mem-passing event handleClick di component
//MainComponent ke dalam LoopingRender component untuk selanjutnya di-passing lagi ke Book component.

const Book = (props) => {
    const {image, title, author, price, onClick } = props
    return(
        <div className="book">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <h6>Rp {price}</h6>
            <button className="btn" onClick={() => onClick(title)}>Click Me!</button>
        </div>
    )
}

export default MainComponent
