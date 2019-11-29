import React from 'react'
import FeatureFlag from './FeatureFlag'
import { Typography, Paper } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 100,
        textAlign: 'center'
    },
    amber: {
        backgroundColor: amber[700]
    }

}))


const Feature1 = () => {
    const classes = useStyles()
    return (
        <FeatureFlag name="feature1">
            <Paper className={cx(classes.paper, classes.amber)}>
                <Typography>
                    Frature#1
              </Typography>
            </Paper>
        </FeatureFlag>
    )
}

export default Feature1