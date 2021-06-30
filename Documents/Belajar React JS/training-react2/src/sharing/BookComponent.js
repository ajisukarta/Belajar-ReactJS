import React from 'react'

const BookComponent = () => {
    const image = "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg"
    const title = "Sapiens: A brief history of humankind"
    const author = "Yuval Noah Harari"
    return (
        <div className="book">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
        </div>
    )
}

export default BookComponent
