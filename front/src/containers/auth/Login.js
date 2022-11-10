import React, {useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({username:'',password:''})
    const {username, password} = formData;

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
                        name='password'
                        type='password'
                        className='form-control py-2'
                        placeholder='*********'
                        onChange={e=>onChange(e)}
                        value={password} />
                </form>
            </div>
        </div>
    )
}

export default Login;