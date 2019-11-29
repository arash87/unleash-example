import React from 'react'
import FeatureFlagContext from './FeatureFlagContext'

const FeatureFlag = ({name, children, defaultChildren}) => (
    <FeatureFlagContext.Consumer>
        {features  => {
            if (features[name] && features[name].isEnabled){
                return children
            }

            return defaultChildren
        }}
    </FeatureFlagContext.Consumer>
)

export default FeatureFlag