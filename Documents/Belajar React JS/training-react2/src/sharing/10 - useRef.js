import React, {useRef} from 'react'

//useRef mampu menyimpan satu element HTML yang ditargetkan dan kita dapat memanfaatkannya untuk diambil
//propertiesnya seperti value, name, dll.

const BelajarUseRef = () => {
    const refContainer = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refContainer.current)
        console.log(refContainer.current.value)
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name:</label>
                    <input type="text" ref={refContainer}/>
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BelajarUseRef
