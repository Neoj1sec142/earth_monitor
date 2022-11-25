import React, { useState } from 'react'
import { connect } from 'react-redux';
import {upload_account} from '../../store/actions/account.js'
import { NavigateTimer } from '../../utils/utils.js';

const AccountForm = ({upload_account}) => {
    const [formData, setFormData] = useState({title: '', description: '', balance: 0.0})
    const {title, description, balance} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault()
        upload_account(formData)
        NavigateTimer(5, '')
    }
    return (
        <div className='container-fluid'>
            <div className='card m-3 shadow text-center'>
                <h1>Add a New Account:</h1>
                <form className='form-group' onSubmit={e=>onSubmit(e)}>
                    <input className='form-control sq' type='text' name='title' onChange={e=>onChange(e)} value={title} />
                    <input className='form-control mt-2 sq' type='text' name='description' onChange={e=>onChange(e)} value={description} />
                    <input className='form-control mt-2 sq' type='number' name='balance' onChange={e=>onChange(e)} value={balance} />
                    <button className='btn btn-info mt-2 mb-2 sq' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {upload_account})(AccountForm)