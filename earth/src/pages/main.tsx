

const Main = () => {
    return(
        <div className="container-fluid">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col">
                    <div className="card l-1">
                        <h1>Deex left 1</h1>
                    </div>
                    <br></br>
                    <div className="card l-2">
                        <h1>Deex left 2</h1>
                    </div>
                    <br></br>
                </div>
                <div className="col">
                    <div className="card r-M">
                        <h1>Deex right Main</h1>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
            <br></br>
                <div className="col">
                    <div className="card l-3">
                        <h1>Deex left 3</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="card r-B">
                        <h1>Deex right blog</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main