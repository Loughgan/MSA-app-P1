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

  public getLyrics = async (e: any) => {
    e.preventDefault();
    const theArtist = e.target.elements.newArtist.value;
    const theSong = e.target.elements.newSong.value;
    // tslint:disable-next-line:no-console
    console.log(theArtist);
    if(theArtist && theSong){
      const API = await fetch(`https://orion.apiseeds.com/api/music/lyric/${theArtist}/${theSong}?apikey=snMiaZzHvKn3lVDz6SArWbItrgTiBdhBluLZ5o3ay4QOZdP2wWQsjuaDLUIzlRkB`);
      try {
        const data = await API.json();
        // tslint:disable-next-line:no-console
        // console.log(data.result.track.text);

        if(data.result){// (data.result.artist.name && data.result.track.text && data.result.track.name){
          this.setState({
            artist: data.result.artist.name,
            lyrics: data.result.track.text,// .replace(/\n/gi, "<br/>"
            song: data.result.track.name
          });
        }
        else {
          this.setState({
            artist: undefined,
            lyrics: "ARTIST AND/OR SONG NOT RECOGNIZED. PLEASE CHECK SPELLING AND TRY AGAIN.\nIF YOU ARE CERTAIN IT IS CORRECT, LOGAN MAY NOT HAVE THE LYRICS IN HIS LIBRARY.",
            song: undefined
          })
        }
      }
      catch (e) {
        this.setState({
          artist: undefined,
          lyrics: "ERROR HAS OCCURED\nPLEASE STICK TO ARTIST NAMES AND SONG NAMES",
          song: undefined
        })
      }
    }
    else {
      this.setState({
        artist: undefined,
        lyrics: "PLEASE ENTER AN ARTIST AND A NAME OF A SONG",
        song: undefined
      })
    }
  }

  public render() {
    return (
      <reactRouterDom.BrowserRouter>
        <div>
        <Header />
        <div className="container-fluid">
        <div className="centreText">
          {/* React components must have a wrapper node/element */}
          <div style={{margin: '10px'}}>
            Enter the name of an artist and a song by them to get the lyrics!
          </div>
          <form onSubmit={this.getLyrics}>
            <TextField
              label="Enter the Artist's Name"
              name = "newArtist"
              placeholder="Artist Name"
              margin="normal"
              style={{margin: '15px'}}
            />
            <TextField
              label="Enter the Song's Name"
              name = "newSong"
              placeholder="Song Name"
              margin="normal"
              style={{margin: '15px'}}
            />
            <div>
            <Button variant="contained" type="submit" color="secondary">
            FIND LYRICS
            </Button>
            </div>
          </form>
          <h1>
            {this.state.artist} - {this.state.song}
          </h1>
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