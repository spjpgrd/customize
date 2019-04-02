import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import EmailSignatureBasic from './components/email-signature-basic';
import UTMMediumEnum from "./enums/utm-medium-enum";
import UTMSourceEnum from "./enums/utm-source-enum";
// import { slugify } from './helpers/helpers';
import { IPersonModel } from './models/person-model';
import { IUTMParamModel } from "./models/utm-param-model";


// tslint:disable-next-line: no-empty-interface
interface IAppProps {

}

interface IAppState {
  person: IPersonModel;
  utmParams: IUTMParamModel;
  [key: string]: any;
  test: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      person: {
        contactOptions: {
          cellPhone: "",
          emailAddress: "",
          workPhone: "",
        },
        name: {
          additionalName: "",
          familyName: "",
          fullName: "",
          fullNameSlug: "",
          givenName: "",
          honorificPrefix: "",
          honorificSuffix: "",
        },
        organizationTitle: "",
        personalExternalLinks: {
          linkedinUrl: "asdf",
          workplaceUrl: "asdfasd",
        },
      },
      utmParams: {
        utmContent: "",
        utmMedium: UTMMediumEnum.EmailSignature,
        utmSource: UTMSourceEnum.Email,
      },
      // tslint:disable-next-line: object-literal-sort-keys
      test: "",
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
    const newerState = { ...newState };
    newerState[name] = value;
    this.setState({
      person: newerState,
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
            <label htmlFor="test">Honorifix Prefix (optional)</label><br />
            <span>Examples: Dr., Sir, Queen</span><br />
            <input type="text" name="test" autoCorrect="off" title="Dr., Sir, Queen, etc. 👑" autoComplete="honorific-prefix" value={this.state.test} onChange={this.handleInputChange} /><br />
            <label htmlFor="given-name">First Name</label><br />
            <input type="text" name="given-name" required={true} autoFocus={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.person.name.givenName} onChange={this.handleInputChange} /><br />
            <label htmlFor="additionalName">Middle Name (optional)</label><br />
            <input type="text" name="additionalName" autoCorrect="off" autoComplete="additionalName" title="I once worked with someone who had five middle names 🥁" value={this.state.person.name.additionalName} onChange={this.handleInputChange} /><br />
            <label htmlFor="family-name">Last Name</label><br />
            <input type="text" name="family-name" required={true} autoCorrect="off" autoComplete="family-name" title="Your last name, please 🙃" value={this.state.person.name.familyName} onChange={this.handleInputChange} /><br />
            <label htmlFor="honorific-suffix">Honorific Suffix (optional)</label><br />
            <span>Examples: Jr., PhD, MBA</span><br />
            <input type="text" name="honorific-suffix" autoCorrect="off" autoComplete="honorific-suffix" title="Suffix or bust 🎰" value={this.state.person.name.honorificSuffix} onChange={this.handleInputChange} /><br />
            <label htmlFor="organization-title">Job Title</label><br />
            <input type="text" name="organization-title" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.person.organizationTitle} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Contact Options</legend>
            <span>Note: Don't worry about the country code for phone numbers</span><br />
            <label htmlFor="input-cell-phone">Cell Phone (optional)</label><br />
            <input type="tel-national" name="input-cell-phone" autoComplete="tel-national" value={this.state.person.contactOptions.cellPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="input-work-phone">Work Phone (optional)</label><br />
            <input type="tel-national" name="input-work-phone" autoComplete="tel-national" value={this.state.person.contactOptions.workPhone} onChange={this.handleInputChange} /><br />
            <label htmlFor="input-email-address">Email Address</label><br />
            <input type="email" name="input-email-address" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.person.contactOptions.emailAddress} onChange={this.handleInputChange} /><br />
            <label htmlFor="input-workplace-profile">Workplace Profile (optional)</label><br />
            <span>Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.person.name.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="input-workplace-profile" value={this.state.person.personalExternalLinks.workplaceUrl} onChange={this.handleInputChange} /><br />
            <label htmlFor="input-linkedin-profile">LinkedIn Profile (optional)</label><br />
            <span>Tip: <a href="https://linkedin.com/" target="_blank">Head to LinkedIn</a>, go to your profile, and copy the URL from the address bar</span><br />
            <input type="url" name="input-linkedin-profile" value={this.state.person.personalExternalLinks.linkedinUrl} onChange={this.handleInputChange} /><br />
          </fieldset>
          <fieldset>
            <legend>Your Photo</legend>
            <label htmlFor="input-profile-picture">Profile Picture URL</label><br />
            <input type="photo" name="input-profile-picture" required={true} onChange={this.handleInputChange} /><br />
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
