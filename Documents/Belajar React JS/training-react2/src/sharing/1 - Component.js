import React from 'react'

//Component adalah konsep dasar dalam React untuk melakukan render elemen UI yang dibutuhkan dan
//menampung logika penanganan event (event-handler) serta persiapan data untuk di render. 
//Component memberikan return value berupa elemen HTML yang akan dirender. Return value harus berupa 
//satu tag HTML atau beberapa tag HTML yang tersusun dan dibungkus (wrapped ) dalam 1 tag HTML utama 
const BasicComponent = () => {
    return (
        <h1>Hello World</h1>
    )
}

// Component diatas hanya akan melakukan render message "Hello World" dalam tag <h1>

export default BasicComponent

//Code export diatas wajib dituliskan apabila kita ingin menggunakan Component ini ke dalam Component lain
//yang lebih besar
