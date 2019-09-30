import React from 'react'; 
import Greeting from './greeting'; 
import { connect } from 'react-redux'; 
import { loginUser, logoutUser, signupUser } from '../../actions/session_action'; 

const mapStateToProps = ({ entities, session }) => {
    return {
        currentUser: entities.user[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)), 
        logoutUser: () => dispatch(logoutUser()), 
        signupUser: user => dispatch(signupUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);