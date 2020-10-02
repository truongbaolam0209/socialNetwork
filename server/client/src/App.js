import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PageRegister from './_layout/PageRegister';
import PageLanding from './_layout/PageLanding';
import PageUser from './_layout/PageUser';
import Test from './_layout/Test';
import PagePropertiesMarket from './_layout/PagePropertiesMarket';

// Redux
import { Provider } from 'react-redux';
import store from './_store';

import { loadUser } from './_action/auth';
import setAuthToken from './_utils/setAuthToken';
import styled from 'styled-components';
import Navbar from './_components/Navbar';



if (localStorage.token) setAuthToken(localStorage.token);


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);


    return (
        <Provider store={store}>
            <Router>

                <div>
                    <Navbar />
                    <Switch>
                        {/* <Route path='/' component={PageUser} /> */}
                        <Route exact path='/' component={PageLanding} />
                        
                        <Route exact path='/register' component={PageRegister} />

                        <Route exact path='/property-market' component={PagePropertiesMarket} />
                        <Route exact path='/:id' component={PageUser} />


                    </Switch>





                    <Switch>
                        {/* <Route exact path='/register' component={PageRegister} /> */}
                        {/* <Route exact path='/login' component={PageLogin} /> */}

                        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
                        {/* <PrivateRoute exact path='/create-profile' component={ProfileForm} /> */}

                    </Switch>


                </div>

            </Router>
        </Provider>
    );
};

export default App;







