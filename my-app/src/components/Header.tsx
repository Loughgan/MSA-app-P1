import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';
// import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display2" color="inherit">
                        Logan's Lyrical Library
                    </Typography>
                </Toolbar>
            </AppBar>
            // <Link style={{color: "white"}} to="/">Logan's Lyrical Library</Link>          
    );
}