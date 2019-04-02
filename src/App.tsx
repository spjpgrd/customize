import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import 'flexboxgrid2'
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
      cellPhone: "555-867-5309",
      emailAddress: "jeff@awarehq.com",
      workPhone: "555-133-7123",
      // tslint:disable-next-line: object-literal-sort-keys
      familyName: "Schumann",
      fullName: "Jeff Schumann",
      fullNameSlug: "jeff-schumann",
      givenName: "Jeff",
      honorificPrefix: "",
      honorificSuffix: "",
      organizationTitle: "CEO & Co-Founder",
      linkedinUrl: "https://www.linkedin.com/in/jeffreyschumann/",
      workplaceUrl: "https://wiretap.facebook.com/profile.php?id=100013799348501",
      profilePicture: "https://www.awarehq.com/hubfs/email-signature/aware/jeff-schumann-aware-64.png",
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

  public async handleNameChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: await value,
    });
    const fullName = this.getFullNameDisplay(this.state.honorificPrefix, this.state.givenName, this.state.additionalName, this.state.familyName, this.state.honorificSuffix);
    this.setState({ fullName });
  }

  public getFullNameDisplay(honorificPrefix: string | null, givenName: string | null, additionalName: string | null, familyName: string | null, honorificSuffix: string | null) {
    // tslint:disable-next-line: only-arrow-functions
    const fullName = [honorificPrefix, givenName, additionalName, familyName, honorificSuffix].filter(function (value) { return value; }).join(" ");
    return fullName;
  }

  // Probably wont work for easily autopopulating the profile picture
  // Example: Xu / Joseph
  // Forces someone to mess with the display name to get the right profile picture
  // Too finnicky
  // public getFirstLastSlug(givenName: string | null, familyName: string | null) {
  // }

  // tslint:disable-next-line: member-access
  render() {
    return (
      <>
        {/* Input names based on these standard autocomplete keywords */}
        {/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute */}
        <div className="row between-xs">
          <div className="last-xs last-sm initial-order-md col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
            <form name="personal-info" autoComplete="on">
              <fieldset>
                <legend>Your Photo</legend>
                <label htmlFor="profilePicture">Profile Picture URL</label><br />
                <input type="photo" name="profilePicture" value={this.state.profilePicture} autoFocus={true} required={true} onChange={this.handleInputChange} /><br />
              </fieldset>
              <fieldset>
                <legend>Your Details</legend>
                <label htmlFor="honorificPrefix">Honorific Prefix (optional)</label><br />
                <span className="c-form-input__example">Examples: Dr., Sir, Queen</span><br />
                <input type="text" name="honorificPrefix" autoCorrect="off" title="Dr., Sir, Queen, etc. 👑" autoComplete="honorific-prefix" value={this.state.honorificPrefix} onChange={this.handleNameChange} /><br />
                <label htmlFor="givenName">First Name</label><br />
                <input type="text" name="givenName" required={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.givenName} onChange={this.handleNameChange} /><br />
                <label htmlFor="additionalName">Middle Name (optional)</label><br />
                <input type="text" name="additionalName" autoCorrect="off" autoComplete="additionalName" title="I once worked with someone who had five middle names 🥁" value={this.state.additionalName} onChange={this.handleNameChange} /><br />
                <label htmlFor="familyName">Last Name</label><br />
                <input type="text" name="familyName" required={true} autoCorrect="off" autoComplete="family-name" title="Your last name, please 🙃" value={this.state.familyName} onChange={this.handleNameChange} /><br />
                <label htmlFor="honorificSuffix">Honorific Suffix (optional)</label><br />
                <span className="c-form-input__example">Examples: Jr., PhD, MBA</span><br />
                <input type="text" name="honorificSuffix" autoCorrect="off" autoComplete="honorific-suffix" title="Suffix or bust 🎰" value={this.state.honorificSuffix} onChange={this.handleNameChange} /><br />
                <label htmlFor="organizationTitle">Job Title</label><br />
                <input type="text" name="organizationTitle" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.organizationTitle} onChange={this.handleInputChange} /><br />
              </fieldset>
              <fieldset>
                <legend>Contact Options</legend>
                <label htmlFor="cellPhone">Cell Phone (optional)</label><br />
                <input type="tel-national" name="cellPhone" autoComplete="tel-national" value={this.state.cellPhone} onChange={this.handleInputChange} /><br />
                <label htmlFor="workPhone">Work Phone (optional)</label><br />
                <input type="tel-national" name="workPhone" autoComplete="tel-national" value={this.state.workPhone} onChange={this.handleInputChange} /><br />
                <label htmlFor="emailAddress">Email Address</label><br />
                <input type="email" name="emailAddress" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.emailAddress} onChange={this.handleInputChange} /><br />
                {/* <label htmlFor="workplaceUrl">Workplace Profile (optional)</label><br />
                <span className="c-form-input__example">Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
                <input type="url" name="workplaceUrl" value={this.state.workplaceUrl} onChange={this.handleInputChange} /><br /> */}
                <label htmlFor="linkedinUrl">LinkedIn Profile (optional)</label><br />
                <input type="url" name="linkedinUrl" value={this.state.linkedinUrl} onChange={this.handleInputChange} /><br />
              </fieldset>
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-xl-7">
            <div className="w-signature">
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;