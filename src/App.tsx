import * as React from 'react';
import './App.css';

import EmailSignatureBasic from './components/email-signature-basic';
// import { slugify } from './helpers/helpers';
import { IPersonModel } from './models/person-model';
// import logo from './logo.svg';


// tslint:disable-next-line: no-empty-interface
interface IAppProps {

}

// tslint:disable-next-line: no-empty-interface
interface IAppState {
  person: IPersonModel;
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
        {/* Input names based on these standard autocomplete keywords */}
        {/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute */}
        <form name="personal-info" autoComplete="on">
          <fieldset>
            <legend>Your Details</legend>
            <br /><label htmlFor="honorific-prefix">Honorifix Prefix (optional)</label>
            <br /><span>Examples: Dr., Sir, Queen</span>
            <br /><input type="text" name="honorific-prefix" autoCorrect="off" title="Dr., Sir, Queen, etc." autoComplete="honorific-prefix" />
            <br /><label htmlFor="given-name">First Name</label>
            <br /><input type="text" name="given-name" required={true} autoFocus={true} autoCorrect="off" autoComplete="given-name" />
            <br /><label htmlFor="additional-name">Middle Name (optional)</label>
            <br /><input type="text" name="additional-name" autoCorrect="off" autoComplete="additional-name" />
            <br /><label htmlFor="family-name">Last Name</label>
            <br /><input type="text" name="family-name" required={true} autoCorrect="off" autoComplete="family-name" />
            <br /><label htmlFor="honorific-suffix">Honorific Suffix (optional)</label>
            <br /><span>Examples: Jr., PhD, MBA</span>
            <br /><input type="text" name="honorific-suffix" autoCorrect="off" autoComplete="honorific-suffix" />
            <br /><label htmlFor="organization-title">Job Title</label>
            <br /><input type="text" name="organization-title" required={true} autoComplete="organization-title" />
          </fieldset>
          <fieldset>
            <legend>Contact Options</legend>
            <br /><label htmlFor="input-cell-phone">Cell Phone (optional)</label>
            <br /><span>Note: Don't worry about the country code</span>
            <br /><input type="tel-national" name="input-cell-phone" autoComplete="tel-national" />
            <br /><label htmlFor="input-work-phone">Work Phone (optional)</label>
            <br /><span>Note: Don't worry about the country code</span>
            <br /><input type="tel-national" name="input-work-phone" autoComplete="tel-national" />
            <br /><label htmlFor="input-email-address">Email Address</label>
            <br /><input type="email" name="input-email-address" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Your @awarehq.com email please" />
            <br /><label htmlFor="input-workplace-profile">Workplace Profile (optional)</label>
            <br /><span>Tip: Head to Workplace, go to your profile, and copy the URL</span>
            <br /><input type="url" name="input-workplace-profile" />
          </fieldset>
          <fieldset>
            <legend>Your Photo</legend>
            <br /><label htmlFor="input-profile-picture">Profile Picture URL</label>
            <br /><input type="photo" name="input-profile-picture" required={true} />
          </fieldset>
          <input type="reset" />
          <input type="submit" value="Create My Signature" />
        </form>
        <EmailSignatureBasic person={this.state.person} />
      </>
    );
  }
}

export default App;
