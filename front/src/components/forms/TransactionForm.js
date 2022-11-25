import React, { useState } from 'react'

const AccountForm = () => {
    const [formData, setFormData] = useState({location: '', description:'', withdrawl: false, amount: 0.0})
    const {location, description, withdrawl, amount} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()

    }
    return (
        <div className='container-fluid'>
            <div className='card m-3 shadow text-center'>
                <h1>Add a New Transaction:</h1>
                <form className='form-group' onSubmit={e=>onSubmit(e)}>
                    <input className='form-control sq' type='text' name='title' onChange={e=>onChange(e)} value={location} />
                    <input className='form-control mt-2 sq' type='text' name='description' onChange={e=>onChange(e)} value={description} />
                    <input className='form-control mt-2 sq' type='number' name='balance' onChange={e=>onChange(e)} value={amount} />
                    <input className='form-control' type='checkbox' name='withdrawl' onChange={e=>onChange(e)} value={withdrawl}/>
                    <button className='btn btn-info mt-2 mb-2 sq' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AccountForm