import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const authedUser = useSelector(state => state.authedUser);
  return (
    <Route {...rest} render={(props) => {
      return (
        authedUser
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { form: props.location } }} />
      )}
    } />
  );
}

export default withRouter(ProtectedRoute);