import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Main = () => {
    const [data, setData] = useState()
    // useEffect(() => {
        const getData = async () => {
            await axios.get("https://api.hge.earth/api/co2/", {mode: 'CORS'})
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e, 'ERROR'))
        }
        getData()
    // },[])
    console.log(data)
    return(
        <div className="container-fluid">
            <br></br>
            <div className="card">
                <div className="row">
                    <div className="col l1">
                        <div className="card l1">
                            {/* <h1>{data}</h1> */}
                        </div>
                        <div className="card l2">
                            <h1>container</h1>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card r1">
                            <h1>containerM</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col l2">
                        <div className="card l3">
                            <h1>container</h1>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card r2">
                            <h1>container</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main