import React, {useState} from 'react'
import Book from './BookComponent'

//React dapat merender elemen HTML atau component lain secara kondisional (true/false) pada bagian return

//syntaxnya adalah => variabel_boolean && <component/> atau variabel_boolean || <component />
//arti penggunaan operator && adalah apabila statement (variabel_boolean) sebelah kiri bernilai true,
//maka statement di sebelah kanan (Component) akan dirender.
//arti penggunaan operator || adalah apabila statement sebelah kiri (variabel_boolean) bernilai false,
//maka statement di sebelah kanan (Compoenent) akan dirender.

//Selain boolean, string juga dapat bernilai true/false untuk conditional di React. False jika variabel
//bernilai string kosong dan true jika tidak kosong. 
const ConditionalRendering = () => {
    const [isLoading, setIsLoading] = useState(true)
    const mystring = ''
    return (
        <div>
            {
                mystring && <h2>Loading....</h2>
            }
            {
                mystring || <h2>This is Content</h2>
            }
            <button className="btn" onClick={() => setIsLoading(!isLoading)}>Click Me</button>
        </div>
    )
}

export default ConditionalRendering
