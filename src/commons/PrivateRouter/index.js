import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              // eslint-disable-next-line react/prop-types
              from: props.location,
            },
          }}
        />
      )
    }
  />
)

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRouter
