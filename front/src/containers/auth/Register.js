import React, {useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: ''
    })
    const {username, email, first_name, last_name, password, confirm_password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return(
        <div className='container-fluid'>
            <div className='card mt-3'>
                <form className='form-group'>
                    <input 
                        name='username' 
                        required
                        type='text'
                        className='form-control py-2'
                        placeholder='Username'
                        onChange={e=>onChange(e)}
                        value={username} />
                    <input 
                        name='email' 
                        required
                        type='email'
                        className='form-control py-2'
                        placeholder='Email'
                        onChange={e=>onChange(e)}
                        value={email} />
                    <input 
                        name='first_name' 
                        required
                        type='text'
                        className='form-control py-2'
                        placeholder='First Name'
                        onChange={e=>onChange(e)}
                        value={first_name} />
                    <input 
                        name='last_name' 
                        required
                        type='text'
                        className='form-control py-2'
                        placeholder='Last Name'
                        onChange={e=>onChange(e)}
                        value={last_name} />
                    <input 
                        name='password'
                        type='password'
                        className='form-control py-2'
                        placeholder='*********'
                        onChange={e=>onChange(e)}
                        value={password} />
                    <input 
                        name='confirm_password'
                        type='password'
                        className='form-control py-2'
                        placeholder='*********'
                        onChange={e=>onChange(e)}
                        value={confirm_password} />
                </form>
            </div>
        </div>
    )
}

export default Login;