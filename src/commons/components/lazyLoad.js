import React from 'react'
import Load from '../../images/loading.svg'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
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
