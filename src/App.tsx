import * as React from 'react';
import './App.css';

import EmailSignatureBasic from './components/email-signature-basic';
// import logo from './logo.svg';


// tslint:disable-next-line: no-empty-interface
interface IAppProps {

}

// tslint:disable-next-line: no-empty-interface
interface IAppState {
  fullName: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      fullName: ""
    }
  }

  public render() {
    return (
      <>
        <EmailSignatureBasic fullName={this.state.fullName} />
      </>
    );
  }
}

export default App;
