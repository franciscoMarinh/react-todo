import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { makeStyles } from '@material-ui/core/styles'

import { Creators as Actions } from '../../store/ducks/main'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Form(props) {
  const classes = useStyles()
  const history = useHistory()

  const [state, setState] = React.useState({
    email: '',
    password: '',
  })

  const inputWatcher = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const attempsAuth = (e) => {
    e.preventDefault()
    props.attempsAuth(state)
  }

  const createAccount = (e) => {
    e.preventDefault()
    history.push('/signup')
  }

  return (
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
        value={state.email}
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
        value={state.password}
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
          <Link variant='body2'>Esqueceu a senha?</Link>
        </Grid>
        <Grid item>
          <Link variant='body2' onClick={createAccount} href=''>
            {'Não possui uma conta?, Criar'}
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

Form.propTypes = {
  attempsAuth: PropTypes.func,
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ attempsAuth: Actions.attempsAuth }, dispatch)

export default connect(null, mapDispatchToProps)(Form)
