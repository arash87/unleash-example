import React from 'react'
import FeatureFlag from './FeatureFlag'
import { Typography, Paper } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
    paper: {
        padding: 100,
        textAlign: 'center'
    },
    red: {
        backgroundColor: red[300]
    }

}))


const Feature2 = () => {
    const classes = useStyles()
    return (
        <FeatureFlag name="feature2">
            <Paper className={cx(classes.paper, classes.red)}>
                <Typography>
                    Frature#2
              </Typography>
            </Paper>
        </FeatureFlag>
    )
}

export default Feature2