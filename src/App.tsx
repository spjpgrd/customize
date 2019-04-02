import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import EmailSignatureBasic from './components/email-signature-basic';
import UTMMediumEnum from "./enums/utm-medium-enum";
import UTMSourceEnum from "./enums/utm-source-enum";
// import { slugify } from './helpers/helpers';
// import { IPersonModel } from './models/person-model';
// import { IPersonModel } from './models/person-model';
import { IUTMParamModel } from "./models/utm-param-model";


// tslint:disable-next-line: no-empty-interface
interface IAppProps {

}

interface IAppState {
  additionalName: string;
  cellPhone: string;
  emailAddress: string;
  workPhone: string;
  familyName: string;
  fullName: string;
  fullNameSlug: string;
  givenName: string;
  honorificPrefix: string;
  honorificSuffix: string;
  organizationTitle: string;
  linkedinUrl: string;
  workplaceUrl: string;
  profilePicture: string;
  utmParams: IUTMParamModel;
  [key: string]: any;
}

class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
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
      utmParams: {
        utmContent: "",
        utmMedium: UTMMediumEnum.EmailSignature,
        utmSource: UTMSourceEnum.Email,
      },
      // tslint:disable-next-line: object-literal-sort-keys
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.getFullNameDisplay = this.getFullNameDisplay.bind(this);
  }

  public handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    // tslint:disable-next-line: no-console
    console.log({ [name]: value });
  }

  public handleNameChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    const fullName = this.getFullNameDisplay(this.state.honorificPrefix, this.state.givenName, this.state.additionalName, this.state.familyName, this.state.honorificSuffix);
    this.setState({ fullName });
  }

  public getFullNameDisplay(honorificPrefix: string | null, givenName: string | null, additionalName: string | null, familyName: string | null, honorificSuffix: string | null) {
    // tslint:disable-next-line: only-arrow-functions
    const fullName = [honorificPrefix, givenName, additionalName, familyName, honorificSuffix].filter(function (value) { return value; }).join(" ");
    return fullName;
  }

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
            <input type="text" name="honorificPrefix" autoCorrect="off" title="Dr., Sir, Queen, etc. 👑" autoComplete="honorific-prefix" value={this.state.honorificPrefix} onChange={this.handleNameChange} /><br />
            <label htmlFor="givenName">First Name</label><br />
            <input type="text" name="givenName" required={true} autoFocus={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.givenName} onChange={this.handleNameChange} /><br />
            <label htmlFor="additionalName">Middle Name (optional)</label><br />
            <input type="text" name="additionalName" autoCorrect="off" autoComplete="additionalName" title="I once worked with someone who had five middle names 🥁" value={this.state.additionalName} onChange={this.handleNameChange} /><br />
            <label htmlFor="familyName">Last Name</label><br />
            <input type="text" name="familyName" required={true} autoCorrect="off" autoComplete="family-name" title="Your last name, please 🙃" value={this.state.familyName} onChange={this.handleNameChange} /><br />
            <label htmlFor="honorificSuffix">Honorific Suffix (optional)</label><br />
            <span>Examples: Jr., PhD, MBA</span><br />
            <input type="text" name="honorificSuffix" autoCorrect="off" autoComplete="honorific-suffix" title="Suffix or bust 🎰" value={this.state.honorificSuffix} onChange={this.handleNameChange} /><br />
            <label htmlFor="organizationTitle">Job Title</label><br />
            <input type="text" name="organizationTitle" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.organizationTitle} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Contact Options</legend>
            <span>Note: Don't worry about the country code for phone numbers</span><br />
            <label htmlFor="cellPhone">Cell Phone (optional)</label><br />
            <input type="tel-national" name="cellPhone" autoComplete="tel-national" value={this.state.cellPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="workPhone">Work Phone (optional)</label><br />
            <input type="tel-national" name="workPhone" autoComplete="tel-national" value={this.state.workPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="emailAddress">Email Address</label><br />
            <input type="email" name="emailAddress" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.emailAddress} onChange={this.handleInputChange} /><br />
            <label htmlFor="workplaceUrl">Workplace Profile (optional)</label><br />
            <span>Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="workplaceUrl" value={this.state.workplaceUrl} onChange={this.handleInputChange} /><br />
            <label htmlFor="linkedinUrl">LinkedIn Profile (optional)</label><br />
            <span>Tip: <a href="https://linkedin.com/" target="_blank">Head to LinkedIn</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="linkedinUrl" value={this.state.linkedinUrl} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Your Photo</legend>
            <label htmlFor="profilePicture">Profile Picture URL</label><br />
            <input type="photo" name="profilePicture" value={this.state.profilePicture} required={true} onChange={this.handleInputChange} /><br />
          </fieldset>
        </form>
        <EmailSignatureBasic
          additionalName={this.state.additionalName}
          cellPhone={this.state.cellPhone}
          emailAddress={this.state.emailAddress}
          workPhone={this.state.workPhone}
          familyName={this.state.familyName}
          fullName={this.state.fullName}
          fullNameSlug={this.state.fullNameSlug}
          givenName={this.state.givenName}
          honorificPrefix={this.state.honorificPrefix}
          honorificSuffix={this.state.honorificSuffix}
          organizationTitle={this.state.organizationTitle}
          linkedinUrl={this.state.linkedinUrl}
          workplaceUrl={this.state.workplaceUrl}
          profilePicture={this.state.profilePicture}
          utmParams={this.state.utmParams} />
      </>
    );
  }
}

export default App;