import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EducationStepper from './EducationStepper'
import ProfileImage from '../static/images/my-profile-pict.jpg'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = () => ({
    card: {
        display: "flex",
        width: 800,
        height: 500,
        margin: '5em'

    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 500,
    },
});

class InfoCard extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { classes } = this.props;
        const { value } = this.state;
        var data;

        if (value === 0) {
            data = (
                <CardContent className={classes.content}>
                    <Typography component="h4" variant="h4">
                        Siwakorn Si Ruenrit
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        185/1 Pichaisongkram Rd. Nai-Muang Sub-district, Muang
                        District, Phitsanulok, 65000 Thailand
                     </Typography>
                    <br />
                    <Typography variant="title">
                        <Icon>school</Icon> Education
                    </Typography>
                    <EducationStepper />
                    <br />
                </CardContent>
            );
        }
        else if (value === 1) {
            data = (
                <CardContent className={classes.content}>
                    <Typography variant="title">
                        <Icon>code</Icon> Programming Experience
                    </Typography>
                    <br />
                    <br />
                    <div className={classes.root}>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <img style={{ width: '80px' }} alt="" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{ width: '80px' }} alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{ width: '150px' }} alt=""  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />                            </Grid>
                            <Grid item xs={3}>                               
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{ width: '80px' }} alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{ width: '150px' }} alt="" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" />
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{ width: '280px' }} alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" />
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            );
        }
        else if (value === 2) {
            data = (
                <CardContent className={classes.content}>
                    <Typography variant="title">
                        <Icon>contacts</Icon> Contact
                    </Typography>
                    <br />
                    <List>
                        <ListItem>
                            <Avatar>
                                <Icon>email</Icon>
                            </Avatar>
                            <ListItemText primary="Email" secondary="arsurarizen@gmail.com" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <Icon>code</Icon>
                            </Avatar>
                            <ListItemText primary="GitHub" secondary="github.com/arsura" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <Icon>facebook</Icon>
                            </Avatar>
                            <ListItemText primary="Facebook" secondary="facebook.com/arsurarizen" />
                        </ListItem>
                    </List>
                </CardContent>
            );
        }

        return (
            <Card className={classes.card}>
                <CardMedia className={classes.cover} image={ProfileImage} />
                <div className={classes.details}>
                    { data }
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Info" />
                        <Tab label="Experience" />
                        <Tab label="Contact" />
                    </Tabs>
                </div>
            </Card>
        );
    }
}

InfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(InfoCard);


// <Typography variant="title">
// <Icon>school</Icon> Programming Experience
// </Typography>