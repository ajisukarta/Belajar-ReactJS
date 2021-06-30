import React,{useState} from 'react'

const DefaultForm = () => {
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])
    const [isShowModal, setIsShowModal] = useState(false)
    const [modalContent, setModalContent] = useState('Item Added')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {name, email}
        setData([...data, newData])
        setName('')
        setEmail('')
        setIsShowModal(true)
    }
    return (
        <div>
            {isShowModal && <MyModal />}
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
                data.map((datum, index) => {
                    return <div key={index} className="item">
                        <h4>{datum.name}</h4>
                        <h5>{datum.email}</h5>
                    </div>
                })
            }
        </div>
    )
}

const MyModal = () => {
    return <div className="modal">Item Added</div>
}

export default DefaultForm
