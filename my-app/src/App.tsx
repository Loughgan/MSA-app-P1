import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import './App.css';



export default class App extends React.Component<{}> {
  
  public state = {
    artist: '',
    lyrics: '',
    song: '',
  };

  public changeArtist(value: string){
    this.setState({artist: value});
  }

  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <h1>{this.state.artist}</h1>
        <TextField
          id="with-placeholder"
          label="Enter the Artist's Name"
          value={this.state.artist}
          // onChange={this.changeArtist(":(")}
          placeholder="Artist Name"
          margin="normal"
        />
        <TextField
          id="with-placeholder"
          label="Enter the Song's Name"
          value={this.state.song}
          placeholder="Song Name"
          margin="normal"
        />
        <Button variant="contained" color="secondary">
        Secondary
      </Button>
      </div>
    </div>
    );
  }
}