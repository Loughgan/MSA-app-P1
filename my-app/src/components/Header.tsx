import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Logan's Lyrical Library</Link>
                        <Link style={{color: "white"}} to="/FirstComponent"> | About | </Link>
                        <Link style={{color: "white"}} to="/SecondComponent"> Page 2 </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}