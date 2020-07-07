import React from 'react'
import Load from '../../images/loading.svg'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
}))

export default function CircularIndeterminate() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.image} src={Load}></img>
    </div>
  )
}
