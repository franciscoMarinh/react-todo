import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'

import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Form from './form'
import { connect } from 'react-redux'

import { Copyright } from '../../commons/components/copyright'

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

function SignUp(props) {
  const classes = useStyles()

  React.useEffect(() => {
    if (props.token) props.history.push('/page')
  }, [props.token])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Form />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

SignUp.propTypes = {
  history: PropTypes.object,
  token: PropTypes.string,
}

const mapStateToProps = (state) => ({
  token: state.main.token,
})

export default connect(mapStateToProps)(SignUp)
