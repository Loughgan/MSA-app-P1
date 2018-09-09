// import * as React from 'react';
// import './App.css';

// import logo from './logo.svg';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <h1>( ͡° ͜ʖ ͡°)</h1>
      </div>
    </div>
    );
  }
}