import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { Copyright } from './copyright'
import { useStyles } from './style'

import { connect } from 'react-redux'
import { Creators as Actions } from '../../store/ducks/main'
import { bindActionCreators } from 'redux'

function SignIn(props) {
  const classes = useStyles()

  const [state, setState] = React.useState({
    email: '',
    password: '',
  })

  const actionsWithComponentMount = () => {
    state.email = document.getElementById('email').value
    state.password = document.getElementById('password').value
  }

  React.useEffect(() => {
    actionsWithComponentMount()
  }, [])

  const inputWatcher = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const attempsAuth = (e) => {
    e.preventDefault()
    props.attempsAuth(state)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={inputWatcher}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={inputWatcher}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Lembrar-me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={attempsAuth}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {'Não possui uma conta?, Criar'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

SignIn.propTypes = {
  attempsAuth: PropTypes.func,
}

const mapStateToProps = (state) => ({
  token: state.main.token,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
