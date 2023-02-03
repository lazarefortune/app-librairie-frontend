const RegisterPage = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input type="password" className="form-control" id="password2" placeholder="Confirm Password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-toolbar mt-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RegisterPage