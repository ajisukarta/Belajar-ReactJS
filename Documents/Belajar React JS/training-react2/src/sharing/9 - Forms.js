import React,{useState, useRef} from 'react'
import books from './data.json'

//Kita dapat mengkombinasikan state React ke dalam form. Untuk textbox, validasi seperti minimal atau
//maximal length dapat dilakukan lebih mudah dengan menggunakan state.

const Forms = () => {
    const [title, setTitle ] = useState('')
    const [author, setAuthor] = useState('')
    const [data, setData ] = useState(books)
    //const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        //const refTitle = refContainer.current.value
        const newBook = {title, author}
        console.log(newBook)
        setData([...data, newBook])
        setTitle('')
        setAuthor('')
    }

    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                {/* <input type="text" ref={refContainer}/> */}
            </div>
            <div className="form-control">
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
        {
            data.map((book, index) => {
                const { author, title } = book
                return <div key={index} className="item">
                    <h4>{title}</h4>
                    <h5>{author}</h5>
                </div>
            })
        }
        </div>
    )
}

export default Forms
