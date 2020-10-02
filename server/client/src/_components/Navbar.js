import React from 'react';
import styled from 'styled-components';
import { Icon, Input, Grid } from 'semantic-ui-react';
import IconButton from './_ui/IconButton';
import AvatarCircle from './_ui/AvatarCircle';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../_action/auth';
import store from '../_store';


const Navbar = ({
    // auth: { isAuthenticated, loading }, logout 
}) => {

    
    let history = useHistory();
    const logOutHandle = () => {
        store.dispatch(logout());
        history.push('/');
    };

    return (
        <NavContainer>
            <Grid>
                <GridRow style={{ justifyContent: 'space-between' }}>
                    <div style={{ width: '400px' }}>
                        <ul>
                            <div className='logo'><Link to='/'>House</Link></div>
                            <Input icon placeholder='Search...'>
                                <input />
                                <Icon name='search' />
                            </Input>
                        </ul>
                    </div>
                    <div style={{ width: '750px' }}>
                        <ul style={{ justifyContent: 'space-between' }}>
                            <li className='item'><Link to='/'>Home</Link></li>
                            <li className='item'><Link to='/'>Properties Market</Link></li>
                            <li className='item'><Link to='/'>Map</Link></li>
                            <li className='item'>
                                <Link to='/'>
                                    <span>My Page</span>
                                    <AvatarCircle />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{ width: '300px' }}>
                        <ul style={{ justifyContent: 'flex-end' }}>
                            <li className='toggle'>
                                <div><Icon name='bars' /></div>
                            </li>
                            <li className='btn'>
                                <div><IconButton name='bell outline' /></div>
                            </li>
                            <li className='btn'>
                                <div><IconButton name='envelope outline' /></div>
                            </li>
                            <li className='btn'>
                                <div><IconButton name='chevron down' /></div>
                            </li>
                            <li className='btn'>
                                <div onClick={logOutHandle}><IconButton name='log out' /></div>
                            </li>
                        </ul>
                    </div>
                </GridRow>
            </Grid>
        </NavContainer>
    );
};


// Navbar.propTypes = {
//     logout: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => {
//     return {
//         auth: state.auth
//     }
// }

export default connect()(Navbar);




const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 49;
    


    ul {
        list-style-type: none;
        display: flex;
    }
    a {
        display: flex;
        font-size: 19px;
        color: white;
    }
    ul a span {
        margin-right: 15px;
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 6px;
        width: 100%;
        border-radius: 10px;
    }
    .item:hover {
        background-color: var(--color-secondary);
        cursor: pointer;
        
    }
    ul li a span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toggle {
        display: none;
    };
`;

const GridRow = styled(Grid.Row)`
    &&& {
        background-color: var(--color-primary);
        padding: 25px 20px 10px 20px;
    }
`;

