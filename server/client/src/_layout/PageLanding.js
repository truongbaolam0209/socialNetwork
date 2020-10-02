import React, { useState } from 'react';
import ButtonIcon from '../_components/_ui/ButtonIcon';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../_action/auth';
import Alert from '../_components/_ui/Alert';
import styled from 'styled-components';


const PageLanding = ({ isAuthenticated, login, userId }) => {



    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };


    if (isAuthenticated && userId) {
        return <Redirect to={`/${userId._id}`} />;
    };


    return (
        <Page>
            <Alert />
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">Sign Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        placeholder="Email Address" name="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password" placeholder="Password" name="password"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account?
                <Link to="/register">Sign Up</Link>
            </p>
        </Page>
    );
};

PageLanding.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userId: state.auth.user
});

export default connect(mapStateToProps, { login })(PageLanding);



const Page = styled.div`
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
`;