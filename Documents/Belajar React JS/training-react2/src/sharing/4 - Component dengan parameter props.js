import React from 'react'

//Component react masih memiliki fungsionalitas sebuah function, yaitu memiliki parameter sebagai masukan
//Naming Convention untuk parameter Component adalah props

//Ketika kita ingin menggunakan suatu component dalam component lain, maka kita dapat memasukkan variabel
//yang dimiliki component pemanggil sebagai parameter untuk component yang dipanggil

//Memasukkan parameter ke dalam komponen mengikuti properti seperti HTML. Dan perlu diperhatikan agar nama 
//prop yang didefinisikan dalam komponen sesuai ketika dipanggil.
const image = "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg"
const title = "Sapiens: A brief history of humankind"
const author = "Yuval Noah Harari"

const ComponentProps = () => {
    const handleClick = () => {
        console.log("Button clicked")
    }
    return (
        <>
            <Book image={image} title={title} author={author} onClick={handleClick}/>        
        </>
    )
}

//Ketika kita memasukkan parameter ketika memanggil component lain, maka component yang dipanggil akan
//menerimanya sebagai suatu object. Untuk menggunakannya sebagai return value, maka kita wajib merincikan
//field apa yang akan digunakan sepert props.title, props.image, atau props.author dalam contoh ini.
//Atau kita juga dapat melakukan destructuring atau menguraikan object props tersebut ke dalam variable
//lokal dalam component tersebut

//Pada contoh dibawah, field yang ada dalam props dipecah ke dalam variabel iamge, title, author, dan onClick
const Book = (props) => {
    const { image, title, author, onClick } = props    
    return(
        <div className="book">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <button className="btn" target="ID" onClick={onClick}>Click Me!</button>
        </div>
    )
}

export default ComponentProps
