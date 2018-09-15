import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import * as reactRouterDom from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import './App.css'
import { Header } from './components/Header';

interface IState{
  artist: any,
  song: any,
  lyrics: any,
}

export default class App extends React.Component<{}, IState> {
  
  constructor (props:any){
    super(props);
    this.state = {
    artist: "",
    lyrics: "",
    song: ""
    }
  }

  // public changeArtist(value: string){
  //  this.setState({artist: value});
  // }

  public getRate = async (e: any) => {
    e.preventDefault();
    const artist = e.target.elements.newArtist.value;
    const song = e.target.elements.newSong.value;
    // tslint:disable-next-line:no-console
    console.log(artist);
    const API = await fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=snMiaZzHvKn3lVDz6SArWbItrgTiBdhBluLZ5o3ay4QOZdP2wWQsjuaDLUIzlRkB`);
    const data = await API.json();
    // tslint:disable-next-line:no-console
    console.log(data.result.track.text);
    this.setState({
      lyrics: data.result.track.text// .replace(/\n/gi, "<br/>")
    });
  }

  public render() {
    return (
      <reactRouterDom.BrowserRouter>
        <div>
        <Header />
        <div className="container-fluid">
        <div className="centreText">
          {/* React components must have a wrapper node/element */}
          <form onSubmit={this.getRate}>
            <TextField
              label="Enter the Artist's Name"
              name = "newArtist"
              placeholder="Artist Name"
              margin="normal"
            />
            <TextField
              label="Enter the Song's Name"
              name = "newSong"
              placeholder="Song Name"
              margin="normal"
            />
            <Button variant="contained" type="submit" color="secondary">
            Submit
            </Button>
          </form>
          <div className="display-linebreak">
          <p>{this.state.lyrics}</p>
          </div>
        </div>
        </div>
        </div>
      </reactRouterDom.BrowserRouter>
    );
  }
}