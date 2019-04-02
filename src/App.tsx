import * as React from 'react';
import './App.css';

import EmailSignatureBasic from './components/email-signature-basic';
// import logo from './logo.svg';


// tslint:disable-next-line: no-empty-interface
interface IAppProps {
  person: any[];
}

// tslint:disable-next-line: no-empty-interface
interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      person: {
        contactOptions: {
          cellPhone: "",
          emailAddress: "",
          officePhone: "",
        },
        jobTitle: "",
        linkedinUrl: "",
        name: {
          firstName: "",
          fullName: "",
          fullNameSlug: "",
          lastName: "",
          middleName: "",
          title: "",
        },
      }
    }
  }

  public render() {
    return (
      <>
        <EmailSignatureBasic />
      </>
    );
  }
}

export default App;
