import React from 'react'
import data from '../sharing/data.json'
import Book from '../sharing2/Book'
import { Link } from 'react-router-dom'

const BookShop = () => {
    return (
        <div className="products">
            {   
                data.map((datum, index) => {
                    return (
                        <div key={index}><Book {...datum}/>
                            <Link to={`/book/${datum.id}`}>See More</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookShop
