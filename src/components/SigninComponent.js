import React from 'react';

export default function SigninComponent() {

    return (
        <div className="signin" >
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="text-center" >
                            <h1>Signin</h1>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <small id="passwordHelp" className="form-text text-muted
                                ">We'll never share your password with anyone else.</small>
                            </div>
                            <button type="submit" className="btn btn-secondary mt-4 w-100">Login</button>
                            <button type="submit" className="btn btn-secondary mt-2 w-100">or Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}