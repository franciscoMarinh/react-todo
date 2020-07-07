import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { Creators as Actions } from '../../store/ducks/main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
}
function Form(props) {
  const classes = useStyles()
  const history = useHistory()

  const [state, setState] = React.useState(initialState)

  const inputWatcher = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const goToSignIn = (e) => {
    e.preventDefault()
    history.push('/')
  }

  React.useEffect(() => {}, [])

  const submitRequest = (e) => {
    e.preventDefault()
    props.attempsRegister({
      name: state.name,
      email: state.email,
      password: state.password,
    })
    setState(initialState)
  }

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete='fname'
            name='name'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='Primeiro nome'
            autoFocus
            onChange={inputWatcher}
            value={state.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='lastName'
            label='Segundo nome'
            name='lastName'
            autoComplete='lname'
            onChange={inputWatcher}
            value={state.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Endereço de E-mail'
            name='email'
            autoComplete='email'
            onChange={inputWatcher}
            value={state.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
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
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value='allowExtraEmails' color='primary' />}
            label='Quero receber notificações, promoções de marketing e atualizações por e-mail.'
          />
        </Grid>
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        onClick={submitRequest}
      >
        Criar
      </Button>
      <Grid container justify='flex-end'>
        <Grid item>
          <Link href='' variant='body2' onClick={goToSignIn}>
            Você já possui conta? Entrar
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

Form.propTypes = {
  attempsRegister: PropTypes.func,
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ attempsRegister: Actions.attempsRegister }, dispatch)

export default connect(null, mapDispatchToProps)(Form)
