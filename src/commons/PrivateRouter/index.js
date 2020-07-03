import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
const PrivateRouter = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
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
  token: PropTypes.string,
}

const mapStateToProps = (state) => ({
  token: state.main.token,
})

export default connect(mapStateToProps)(PrivateRouter)
