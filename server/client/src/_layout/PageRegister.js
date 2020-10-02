import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../_action/alert';
// import { register } from '../_action/auth';
import PropTypes from 'prop-types';
import Alert from '../_components/_ui/Alert';
import styled from 'styled-components';

const PageRegister = ({ setAlert }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) setAlert('Passwords do not match', 'danger');
        // else register({ name, email, password });
    };

    // if (isAuthenticated) return <Redirect to="/dashboard" />;
    
    return (
        <Page>
            <Alert />

            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Create Your Account
            </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text' placeholder='Name' name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email' placeholder='Email Address' name='email'
                        value={email}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>Avatar</small>
                </div>
                <div className='form-group'>
                    <input
                        type='password' placeholder='Password' name='password'
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password' placeholder='Confirm Password' name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/'>Sign In</Link>
            </p>
        </Page>
    );
};


PageRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    // register: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => {
    return {
        // isAuthenticated: state.auth.isAuthenticated
    }
};


// const mapDispatchToProps = () => ({
//     setAlert,

// });


// export default connect(null, { setAlert })(PageRegister);
export default connect(mapStateToProps, { setAlert })(PageRegister);


const Page = styled.div`
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
`;