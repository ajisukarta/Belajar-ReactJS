import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../sharing/data.json'

const Book = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice]= useState(0)
    const { id } = useParams();
  
    useEffect(() => {
      const newBook = data.find((book) => book.id === parseInt(id));
      setTitle(newBook.title)
      setAuthor(newBook.author)
      setImage(newBook.image)
      setPrice(newBook.price)
    }, []);
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h4>Rp {price}</h4>
            <button className="btn"><Link to="/bookshop">Back</Link></button>
        </div>
    )
}

export default Book
