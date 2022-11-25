import React, {Fragment} from 'react'

import { connect } from 'react-redux';


const Navbar = () => {
    
    // const authOptions = (
    //     <Fragment>
    //         <li className="nav-item">
    //             <a className="nav-link" href="/portfolio">
    //             <i class="fas fa-camera"></i> Portfolio</a>
    //         </li>
    //         {/* <li className="nav-item">
    //             <a className="nav-link" href={`/profile/${localStorage.getItem('user_id')}`}>
    //                 <i className='fa fa-user'></i> Profile</a>
    //         </li> */}
    //         {/*  No Auth Yet
    //         <li className="nav-item">
    //             <a className="nav-link" onClick={logout} tabIndex="-1" aria-disabled="false" href='#!'>
    //             <i class="fa fa-sign-out"></i> Logout</a>
    //         </li> */}
    //     </Fragment>
    // )
    

    const publicOptions = (
        <Fragment>
            <li className="nav-item">
                <a className="nav-link" href="/main">
                    <i className='fas fa-sign-in'></i> Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/new-acc">
                    <i className='fas fa-sign-in'></i>New Account</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/new-tra">
                    <i className='fas fa-sign-in'></i>New Transaction</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/dash">
                    <i className='fas fa-sign-in'></i>Accounts & Transactions</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/login">
                    <i className='fas fa-sign-in'></i> Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/register">
                <i className='fas fa-user-plus'></i> Register</a>
            </li> */}
        </Fragment>
    )

    return(
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href='/main'><i className='fas fa-dollar'></i>$$$</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='/main'>
                            <i className='fas fa-home'></i> Home</a>
                    </li>
                    {publicOptions}
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        {/* <Alert/> */}
        </Fragment>
    )
}


Navbar.propTypes = {
    // logout: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired
}

export default connect(null, {})(Navbar)