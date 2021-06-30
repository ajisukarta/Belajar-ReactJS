import React, { useState, useEffect } from 'react'

//useEffect adalah hook untuk menambahkan efek tambahan ketika terjadi re-render pada salah satu bagian UI 
//code yang ada di dalam useEffect akan dieksekusi ketika terjadi re-render.

//apabila kita menggunakan useState dan useEffect dalam suatu komponen yang sama, perlu diperhatikan 
//untuk tidak mengupdate state (setValue(newValue)) dalam useEffect. Karena perubahan state menyebabkan 
//re-render pada salah satu bagian UI, dan re-render tersebut akan ditangkap oleh useEffect dan useEffect
//akan mengeksekusi code didalamnya dimana terdapat fungsi update state. Hal ini akan menyebabkan infinite loop.

//Untuk menghindari infinite loop, kita dapat menambahkan parameter kedua setelah callback function dalam
//useEffect

const url = 'https://api.github.com/users';

const BelajarUseEffect = () => {
    const [message, setMessage ] = useState("Hello World")
    const [counter, setCounter ] = useState(0)
    const [users, setUsers ] = useState([])

    const fetchData = async() => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
    }

    const handleClick = () => {
        if(message==="Hello World"){
            setMessage("Hello Brother")
        }else{
            setMessage("Hello World")
        }
    }

    useEffect(() => {
        console.log("Call useEffect")
        fetchData()
    },[])
    return (
        <div>
            <h2>{message}</h2>
            <button className="btn" onClick={handleClick}>Change Message</button>
            <h2>{counter}</h2>
            <button className="btn" onClick={()=> setCounter(counter + 1)}>Add Counter</button>
            <h2>Fetching Data</h2>
            {
                users.map((user) => {
                    return <div key={user.id} className="item">
                        <h4>{user.login}</h4>
                    </div>
                })
            }
        </div>
    )
}

//useEffect umum digunakan untuk mempersiapkan data yang berasal dari API. Jika data berasal dari API, artinya
//data belum siap ketika initial render. Dengan menggunakan useEffect, React akan merender component kosong
//pada initial render, setelah initial render selesai, maka React akan menghubungi API untuk mendapatkan
//data dan memprosesnya. Selanjutnya data akan dirender sebagai tampilan UI. 

export default BelajarUseEffect
