import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import { Copyright } from '../../commons/components/copyright'
import Form from './form'

import CircularIndeterminate from '../../commons/components/lazyLoad'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))

function SignIn(props) {
  const classes = useStyles()

  React.useEffect(() => {
    if (props.token) props.history.push('/home')
  }, [props.token])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      {props.loading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
          </div>
          <Form />
          <Box mt={8}>
            <Copyright />
          </Box>
        </>
      )}
    </Container>
  )
}

SignIn.propTypes = {
  history: PropTypes.object,
  token: PropTypes.string,
  loading: PropTypes.bool,
}

const mapStateToProps = (store) => ({
  token: store.main.token,
  loading: store.app.loading,
})

export default connect(mapStateToProps)(SignIn)
