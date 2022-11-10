import React from 'react'
import Navbar from './Navbar'
// import { load_current } from '../../store/actions/auth'
import { connect } from 'react-redux'

const Layout = ({children}) => {
    
    // useEffect(() => {
    //     load_current(null)
    // }, [])
  
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default connect(null, {})(Layout)