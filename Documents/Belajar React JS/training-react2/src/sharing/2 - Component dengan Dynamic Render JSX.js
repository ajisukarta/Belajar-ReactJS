import React from 'react'

//Untuk membuat React merender secara dinamis, maka kita cukup menyisipkan karakter kurung kurawal '{}'
//yang di dalamnya dapat dimasukkan variabel dari JS.
const HelloName = () => {
    const name = 'Brother'
    return (
        <h1>Hello {name}</h1>
    )
}

//Component ini akan menampilkan "Hello Brother" pada browser, mengikuti value dari variabel name

export default HelloName
