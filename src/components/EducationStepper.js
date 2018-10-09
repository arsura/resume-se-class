import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
    root: {
        width: "90%"
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2
    },
    resetContainer: {
        padding: theme.spacing.unit * 3
    }
});

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Stepper activeStep={1} orientation="vertical">
                    <Step>
                        <StepLabel>High School (May 2012 - Feb 2015) <br /> Triamudomsuksa school of the North <br /> Phitsanulok THAILAND</StepLabel>
                    </Step>
                    <Step >
                        <StepLabel>
                            Inprogress <br />                              
                            Bachelor of Engineering 
                            (Computer Engineering) 
                            Naresuan University <br /> Phitsanulok THAILAND
                        </StepLabel>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
