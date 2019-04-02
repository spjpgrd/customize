import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import EmailSignatureBasic from './components/email-signature-basic';
import UTMMediumEnum from "./enums/utm-medium-enum";
import UTMSourceEnum from "./enums/utm-source-enum";
// import { slugify } from './helpers/helpers';
// import { IPersonModel } from './models/person-model';
import { IUTMParamModel } from "./models/utm-param-model";
import { IPersonModel } from './models/person-model';


// tslint:disable-next-line: no-empty-interface
interface IAppProps {

}

interface IAppState {
  person: IPersonModel;
  utmParams: IUTMParamModel;
  [key: string]: any;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      person: {
        additionalName: "",
        cellPhone: "",
        emailAddress: "",
        workPhone: "",
        // tslint:disable-next-line: object-literal-sort-keys
        familyName: "",
        fullName: "",
        fullNameSlug: "",
        givenName: "",
        honorificPrefix: "",
        honorificSuffix: "",
        organizationTitle: "",
        linkedinUrl: "asdf",
        workplaceUrl: "asdfasd",
        profilePicture: "",
      },
      utmParams: {
        utmContent: "",
        utmMedium: UTMMediumEnum.EmailSignature,
        utmSource: UTMSourceEnum.Email,
      },
      // tslint:disable-next-line: object-literal-sort-keys
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // public handleInputChange = (event: any) => {
  //   const { target: { name, value } } = event
  //   this.setState({ [name]: value })
  //   // tslint:disable-next-line: no-console
  //   console.log({ [name]: value });
  // }

  public handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const newState = { ...this.state.person };
    newState[name] = value;
    this.setState({
      person: newState,
    });
    // tslint:disable-next-line: no-console
    console.log({ person: newState });
  }

  // public handleInputChangeForContactOptions = (event: any) => {
  //   const { target: { name, value } } = event
  //   this.setState({ [name]: value })
  //   // tslint:disable-next-line: no-console
  //   console.log({ [name]: value });
  // }

  // tslint:disable-next-line: member-access
  render() {
    return (
      <>
        {/* Input names based on these standard autocomplete keywords */}
        {/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute */}

        <form name="personal-info" autoComplete="on">
          <fieldset>
            <legend>Your Details</legend>
            <label htmlFor="honorificPrefix">Honorific Prefix (optional)</label><br />
            <span>Examples: Dr., Sir, Queen</span><br />
            <input type="text" name="honorificPrefix" autoCorrect="off" title="Dr., Sir, Queen, etc. 👑" autoComplete="honorific-prefix" value={this.state.person.honorificPrefix} onChange={this.handleInputChange} /><br />
            <label htmlFor="givenName">First Name</label><br />
            <input type="text" name="givenName" required={true} autoFocus={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.person.givenName} onChange={this.handleInputChange} /><br />
            <label htmlFor="additionalName">Middle Name (optional)</label><br />
            <input type="text" name="additionalName" autoCorrect="off" autoComplete="additionalName" title="I once worked with someone who had five middle names 🥁" value={this.state.person.additionalName} onChange={this.handleInputChange} /><br />
            <label htmlFor="familyName">Last Name</label><br />
            <input type="text" name="familyName" required={true} autoCorrect="off" autoComplete="family-name" title="Your last name, please 🙃" value={this.state.person.familyName} onChange={this.handleInputChange} /><br />
            <label htmlFor="honorificSuffix">Honorific Suffix (optional)</label><br />
            <span>Examples: Jr., PhD, MBA</span><br />
            <input type="text" name="honorificSuffix" autoCorrect="off" autoComplete="honorific-suffix" title="Suffix or bust 🎰" value={this.state.person.honorificSuffix} onChange={this.handleInputChange} /><br />
            <label htmlFor="organizationTitle">Job Title</label><br />
            <input type="text" name="organizationTitle" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.person.organizationTitle} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Contact Options</legend>
            <span>Note: Don't worry about the country code for phone numbers</span><br />
            <label htmlFor="cellPhone">Cell Phone (optional)</label><br />
            <input type="tel-national" name="cellPhone" autoComplete="tel-national" value={this.state.person.cellPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="workPhone">Work Phone (optional)</label><br />
            <input type="tel-national" name="workPhone" autoComplete="tel-national" value={this.state.person.workPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="emailAddress">Email Address</label><br />
            <input type="email" name="emailAddress" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.person.emailAddress} onChange={this.handleInputChange} /><br />
            <label htmlFor="workplaceUrl">Workplace Profile (optional)</label><br />
            <span>Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.person.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="workplaceUrl" value={this.state.person.workplaceUrl} onChange={this.handleInputChange} /><br />
            <label htmlFor="linkedinUrl">LinkedIn Profile (optional)</label><br />
            <span>Tip: <a href="https://linkedin.com/" target="_blank">Head to LinkedIn</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="linkedinUrl" value={this.state.person.linkedinUrl} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Your Photo</legend>
            <label htmlFor="profilePicture">Profile Picture URL</label><br />
            <input type="photo" name="profilePicture" value={this.state.person.profilePicture} required={true} onChange={this.handleInputChange} /><br />
          </fieldset>
          <input type="reset" />
          <input type="submit" value="Create My Signature" />
        </form>
        <EmailSignatureBasic person={this.state.person} utmParams={this.state.utmParams} />
      </>
    );
  }
}

export default App;
