import React,{useState, useReducer, useEffect} from 'react'

//useReducer dapat digunakan jika kita memiliki banyak sekali state dengan kegunaan berbeda-beda.
//Pada contoh ini kita membutuhkan state untuk menyimpan array data, menyimpan boolean untuk tutup buka
//modal dan message untuk modal yang ditampilkan. Nilai ketiga state tersebut akan diupdate pada waktu berbeada-beda

//Dengan menggunakan useReducer, kita dapat mensederhanakan dari segi code dan performance.
//syntaxnya const[nama_state, nama_fungsi_pemanggil] = useReducer(nama_fungsi_update_state,initial_state)
//Pada contoh ini kita membuat satu state yang menampung array data, booelan show dan message modal.

const Reducer = (state, action) => {
    if(action.type==='ADD_DATA'){
        const newItem = [...state.data, action.payload]
        return {...state, data: newItem, isShowModal:true, modalContent:'ITEM ADDED'}
    }
    if(action.type==='REMOVE_DATA'){
        const newItem = state.data.filter((datum) => datum.name !== action.payload)
        return {...state, data: newItem, isShowModal:true, modalContent: 'ITEM REMOVED'}
    }
    if(action.type==="CLOSE_MODAL"){
        return {...state, isShowModal: false}
    }
} 

//Fungsi Reducer diatas mengupdate state sesuai dengan action type yang dimasukkan ketika dispatch dipanggil

const Index = () => {
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const defaultState = {
        data: [], isShowModal: false, modalContent: '' 
    }
    const [state, dispatch] = useReducer(Reducer, defaultState)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {name, email}
        dispatch({type: 'ADD_DATA', payload: newData})        
        setName('')
        setEmail('')
    }
    const handleCloseModal = () => {
        dispatch({type:'CLOSE_MODAL'})
    }
    return (
        <div>
            {state.isShowModal && <MyModal closeModal={handleCloseModal} modalContent={state.modalContent}/>}
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
            {
                state.data.map((datum, index) => {
                    return <div key={index} className="item">
                        <h4>{datum.name}</h4>
                        <h5>{datum.email}</h5>
                        <button type="button" onClick={() => dispatch({type:"REMOVE_DATA", payload: datum.name})}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

const MyModal = ({modalContent, closeModal}) => {
    useEffect(() => {
        setTimeout(() => {
          closeModal()
        }, 3000)
      })
    return <div className="modal">{modalContent}</div>
}

export default Index
