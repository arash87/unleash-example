import React from 'react'
import FeatureFlag from './FeatureFlag'
import { Typography, Paper } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
    paper: {
        padding: 100,
        textAlign: 'center'
    },
    bluie: {
        backgroundColor: lightBlue[300]
    }

}))


const Feature3 = () => {
    const classes = useStyles()
    return (
        <FeatureFlag name="feature3">
            <Paper className={cx(classes.paper, classes.blue)}>
                <Typography>
                    Frature#3
              </Typography>
            </Paper>
        </FeatureFlag>
    )
}

export default Feature3