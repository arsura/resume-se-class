import React, { Component } from 'react';
import InfoCard from './components/InfoCard';
import Grid from '@material-ui/core/Grid';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid container justify="center">
                    <InfoCard />
                </Grid>
            </div>
        );
    }
}

export default App;
