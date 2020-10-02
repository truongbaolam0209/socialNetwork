import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import DashboardActions from './DashboardActions';
// import Experience from './Experience';
// import Education from './Education';
import { getCurrentProfile } from '../../_action/profile';
import Spinner from '../_ui/Spinner';
import DashboardActions from './DashboardAction';




const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <Fragment>
            <br /><br /><br /><br /><br /><br /><br /><br />

            
            {loading && profile === null ? <Spinner /> : (
                <Fragment>
                    <h1>Dashboard</h1>
                    <h2>{user && user.name}</h2>
                    <div>{profile !== null ? (
                        <Fragment>
                            <DashboardActions />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p>there is no profile, please create a profile</p>
                            <Link to='/create-profile'>Create profile</Link>
                        </Fragment>
                    )}</div>
                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);