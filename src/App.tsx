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

interface IEmployeeList {
  fullName: string;
  givenName: string;
  familyName: string;
  fullNameSlug: string;
  profilePicture: string;
}
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
  employeeList: IEmployeeList[];
  selectedEmployee: string;
  [key: string]: any;
}

class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    const employeeList = [{
      "familyName": "weiker",
      "fullName": "alex weiker",
      "fullNameSlug": "alex-weiker",
      "givenName": "alex",
      "profilePicture": "/profile-photos/alex-weiker-aware-64.png"
    }, {
      "familyName": "scarcello",
      "fullName": "andi scarcello",
      "fullNameSlug": "andi-scarcello",
      "givenName": "andi",
      "profilePicture": "/profile-photos/andi-scarcello-aware-64.png"
    }, {
      "familyName": "dario",
      "fullName": "anthony dario",
      "fullNameSlug": "anthony-dario",
      "givenName": "anthony",
      "profilePicture": "/profile-photos/anthony-dario-aware-64.png"
    }, {
      "familyName": "mckinley",
      "fullName": "austin mckinley",
      "fullNameSlug": "austin-mckinley",
      "givenName": "austin",
      "profilePicture": "/profile-photos/austin-mckinley-aware-64.png"
    }, {
      "familyName": "barnhouse",
      "fullName": "betsy barnhouse",
      "fullNameSlug": "betsy-barnhouse",
      "givenName": "betsy",
      "profilePicture": "/profile-photos/betsy-barnhouse-aware-64.png"
    }, {
      "familyName": "sewell",
      "fullName": "betsy sewell",
      "fullNameSlug": "betsy-sewell",
      "givenName": "betsy",
      "profilePicture": "/profile-photos/betsy-sewell-aware-64.png"
    }, {
      "familyName": "davell",
      "fullName": "cooper davell",
      "fullNameSlug": "cooper-davell",
      "givenName": "cooper",
      "profilePicture": "/profile-photos/cooper-davell-aware-64.png"
    }, {
      "familyName": "seibert",
      "fullName": "craig seibert",
      "fullNameSlug": "craig-seibert",
      "givenName": "craig",
      "profilePicture": "/profile-photos/craig-seibert-aware-64.png"
    }, {
      "familyName": "bourke",
      "fullName": "david bourke",
      "fullNameSlug": "david-bourke",
      "givenName": "david",
      "profilePicture": "/profile-photos/david-bourke-aware-64.png"
    }, {
      "familyName": "moran",
      "fullName": "greg moran",
      "fullNameSlug": "greg-moran",
      "givenName": "greg",
      "profilePicture": "/profile-photos/greg-moran-aware-64.png"
    }, {
      "familyName": "lawson",
      "fullName": "jack lawson",
      "fullNameSlug": "jack-lawson",
      "givenName": "jack",
      "profilePicture": "/profile-photos/jack-lawson-aware-64.png"
    }, {
      "familyName": "tsai",
      "fullName": "james tsai",
      "fullNameSlug": "james-tsai",
      "givenName": "james",
      "profilePicture": "/profile-photos/james-tsai-aware-64.png"
    }, {
      "familyName": "morgan",
      "fullName": "jason morgan",
      "fullNameSlug": "jason-morgan",
      "givenName": "jason",
      "profilePicture": "/profile-photos/jason-morgan-aware-64.png"
    }, {
      "familyName": "stein",
      "fullName": "jason stein",
      "fullNameSlug": "jason-stein",
      "givenName": "jason",
      "profilePicture": "/profile-photos/jason-stein-aware-64.png"
    }, {
      "familyName": "schumann",
      "fullName": "jeff schumann",
      "fullNameSlug": "jeff-schumann",
      "givenName": "jeff",
      "profilePicture": "/profile-photos/jeff-schumann-aware-64.png"
    }, {
      "familyName": "spridgeon",
      "fullName": "jeff spridgeon",
      "fullNameSlug": "jeff-spridgeon",
      "givenName": "jeff",
      "profilePicture": "/profile-photos/jeff-spridgeon-aware-64.png"
    }, {
      "familyName": "fletcher",
      "fullName": "julia fletcher",
      "fullNameSlug": "julia-fletcher",
      "givenName": "julia",
      "profilePicture": "/profile-photos/julia-fletcher-aware-64.png"
    }, {
      "familyName": "debelak",
      "fullName": "kaitlyn debelak",
      "fullNameSlug": "kaitlyn-debelak",
      "givenName": "kaitlyn",
      "profilePicture": "/profile-photos/kaitlyn-debelak-aware-64.png"
    }, {
      "familyName": "ritzer",
      "fullName": "kristi ritzer",
      "fullNameSlug": "kristi-ritzer",
      "givenName": "kristi",
      "profilePicture": "/profile-photos/kristi-ritzer-aware-64.png"
    }, {
      "familyName": "vandemark",
      "fullName": "kristian vandemark",
      "fullNameSlug": "kristian-vandemark",
      "givenName": "kristian",
      "profilePicture": "/profile-photos/kristian-vandemark-aware-64.png"
    }, {
      "familyName": "keys",
      "fullName": "kyjah keys",
      "fullNameSlug": "kyjah-keys",
      "givenName": "kyjah",
      "profilePicture": "/profile-photos/kyjah-keys-aware-64.png"
    }, {
      "familyName": "lescoezec",
      "fullName": "kyle lescoezec",
      "fullNameSlug": "kyle-lescoezec",
      "givenName": "kyle",
      "profilePicture": "/profile-photos/kyle-lescoezec-aware-64.png"
    }, {
      "familyName": "huber",
      "fullName": "matt huber",
      "fullNameSlug": "matt-huber",
      "givenName": "matt",
      "profilePicture": "/profile-photos/matt-huber-aware-64.png"
    }, {
      "familyName": "pasternack",
      "fullName": "matt pasternack",
      "fullNameSlug": "matt-pasternack",
      "givenName": "matt",
      "profilePicture": "/profile-photos/matt-pasternack-aware-64.png"
    }, {
      "familyName": "stiffler",
      "fullName": "matt stiffler",
      "fullNameSlug": "matt-stiffler",
      "givenName": "matt",
      "profilePicture": "/profile-photos/matt-stiffler-aware-64.png"
    }, {
      "familyName": "mcclellan",
      "fullName": "megan mcclellan",
      "fullNameSlug": "megan-mcclellan",
      "givenName": "megan",
      "profilePicture": "/profile-photos/megan-mcclellan-aware-64.png"
    }, {
      "familyName": "perdue",
      "fullName": "missy perdue",
      "fullNameSlug": "missy-perdue",
      "givenName": "missy",
      "profilePicture": "/profile-photos/missy-perdue-aware-64.png"
    }, {
      "familyName": "holmer",
      "fullName": "nick holmer",
      "fullNameSlug": "nick-holmer",
      "givenName": "nick",
      "profilePicture": "/profile-photos/nick-holmer-aware-64.png"
    }, {
      "familyName": "dunewood",
      "fullName": "robb dunewood",
      "fullNameSlug": "robb-dunewood",
      "givenName": "robb",
      "profilePicture": "/profile-photos/robb-dunewood-aware-64.png"
    }, {
      "familyName": "kenny",
      "fullName": "sarah kenny",
      "fullNameSlug": "sarah-kenny",
      "givenName": "sarah",
      "profilePicture": "/profile-photos/sarah-kenny-aware-64.png"
    }, {
      "familyName": "O'Neill",
      "fullName": "Sean O'Neill",
      "fullNameSlug": "sean-oneill",
      "givenName": "Sean",
      "profilePicture": "/profile-photos/sean-oneill-aware-64.png"
    }, {
      "familyName": "doran",
      "fullName": "sean patrick john paul george ringo doran",
      "fullNameSlug": "sean-patrick-john-paul-george-ringo-doran",
      "givenName": "sean",
      "profilePicture": "/profile-photos/sean-patrick-john-paul-george-ringo-doran-aware-64.png"
    }, {
      "familyName": "domer",
      "fullName": "shawn domer",
      "fullNameSlug": "shawn-domer",
      "givenName": "shawn",
      "profilePicture": "/profile-photos/shawn-domer-aware-64.png"
    }, {
      "familyName": "ruland",
      "fullName": "steve ruland",
      "fullNameSlug": "steve-ruland",
      "givenName": "steve",
      "profilePicture": "/profile-photos/steve-ruland-aware-64.png"
    }, {
      "familyName": "smallwood",
      "fullName": "susan smallwood",
      "fullNameSlug": "susan-smallwood",
      "givenName": "susan",
      "profilePicture": "/profile-photos/susan-smallwood-aware-64.png"
    }, {
      "familyName": "shen",
      "fullName": "xu joseph shen",
      "fullNameSlug": "xu-joseph-shen",
      "givenName": "xu",
      "profilePicture": "/profile-photos/xu-joseph-shen-aware-64.png"
    },
    ];

    this.state = {
      additionalName: "",
      cellPhone: "555-867-5309",
      emailAddress: "jeff@awarehq.com",
      workPhone: "555-133-7123",
      // tslint:disable-next-line: object-literal-sort-keys
      employeeList,
      selectedEmployee: "",
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
    this.handleEmployeeListSelection = this.handleEmployeeListSelection.bind(this);
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

  public async handleEmployeeListSelection(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    await this.setState({
      [name]: value,
    });
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
        <nav>
          <div className="row between-xs middle-xs">
            <div className="col-xs-6">
              <svg style={{ maxWidth: "8.75rem" }} width="100%" height="100%" viewBox="0 0 618 83" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path d="M286.070083,77.4422533 C274.138656,70.1100358 266.287092,56.9062506 266.287092,41.6741259 C266.287092,18.4573427 284.710561,2.27373675e-13 308.000608,2.27373675e-13 C331.406525,2.27373675e-13 349.945865,18.4573427 349.945865,41.6741259 C349.945865,57.1746374 341.764041,70.5747018 329.408969,77.82434 C328.059668,71.0483822 323.626866,65.2188999 317.710254,62.0529969 C325.074752,58.4037668 330.247816,50.7209436 330.247816,41.9062937 C330.247816,29.7174825 320.16705,19.2699301 308.116479,19.2699301 C295.834166,19.2699301 285.985141,29.7174825 285.985141,41.9062937 C285.985141,50.5539045 290.849545,58.1121786 298.004351,61.8412106 C291.983422,64.8969479 287.512097,70.6763679 286.070083,77.4422533 Z M43.4515788,81.8391608 C37.3104223,81.8391608 33.1390708,81.3748252 29.4312027,80.4461538 C12.5140547,76.034965 0,60.2475524 0,41.7902098 C0,23.1006993 12.6299256,7.42937063 29.5470736,3.13426573 C33.1390708,2.20559441 37.0786806,1.74125874 43.4515788,1.74125874 L44.6102876,1.74125874 L49.6113093,1.74125874 L49.5992003,21.1164347 L44.6102876,20.8951049 L43.4515788,20.8951049 C36.8469388,20.8951049 32.2121037,22.172028 28.5042357,24.7258741 C23.4059171,28.2083916 19.6980491,34.8251748 19.6980491,41.7902098 C19.6980491,48.7552448 23.4059171,55.372028 28.5042357,58.8545455 C32.2121037,61.4083916 36.8469388,62.6853147 43.4515788,62.6853147 L44.6102876,62.6853147 C46.3397707,62.4219623 48.0027416,62.2902861 49.5992003,62.2902861 C49.5992003,62.9103938 49.614942,69.3790886 49.6464256,81.6963704 L44.6102876,81.8391608 L43.4515788,81.8391608 Z M95.7781592,83 C82.1053957,83 65.0582331,73.7132867 65.0582331,51.6573427 L65.0582331,1.74125874 L84.7562822,1.74125874 L84.7562822,51.6573427 C84.7562822,59.2027972 89.0576483,63.8461538 95.7781592,63.8461538 C102.49867,63.8461538 106.800036,59.2027972 106.800036,51.6573427 L106.800036,1.74125874 L126.498085,1.74125874 L126.498085,51.6573427 C126.498085,73.7132867 109.450923,83 95.7781592,83 Z M139.443298,81.8391608 L139.443298,73.1479957 L139.443298,62.6853147 L162.965086,62.6853147 C167.831663,62.6853147 170.033209,60.3636364 170.033209,57.5776224 C170.033209,54.4433566 167.368179,52.3538462 164.587278,51.4251748 C154.158899,47.9426573 149.408193,46.4335664 145.468583,42.3706294 C141.181361,37.9594406 139.211556,32.2713287 139.211556,25.7706294 C139.211556,13.5818182 146.163809,4.64335664 156.9398,2.43776224 C160.300056,1.74125874 163.776182,1.74125874 169.106242,1.74125874 L179.882234,1.74125874 L203.119335,1.74125874 L206.095258,20.8951049 L179.882234,20.8951049 L165.050762,20.8951049 C160.87941,20.8951049 158.909605,23.1006993 158.909605,25.8867133 C158.909605,28.7888112 160.531797,30.9944056 164.123795,32.0391608 C172.582369,34.4769231 178.375912,36.2181818 182.779006,40.048951 C187.529712,44.227972 189.731258,50.4965035 189.731258,57.1132867 C189.731258,71.972028 178.723525,81.8391608 165.282503,81.8391608 L139.443298,81.8391608 Z M217.645804,81.8391608 L217.645804,20.8951049 L199.685818,20.8951049 L199.685818,1.74125874 L258.279761,1.74125874 L258.279761,20.8951049 L237.343853,20.8951049 L237.343853,81.8391608 L217.645804,81.8391608 Z M360.972136,81.8391608 L360.972136,1.74125874 L380.670185,1.74125874 C390.51921,1.74125874 400.368234,6.38461538 405.930036,13.2335664 C411.491839,6.38461538 421.340863,1.74125874 431.189888,1.74125874 L450.887937,1.74125874 L450.887937,81.8391608 L431.189888,81.8391608 L431.189888,21.4755245 L430.958146,21.4755245 C423.658281,21.9398601 414.967965,27.1636364 414.967965,38.3076923 L414.967965,81.8391608 L396.892108,81.8391608 L396.892108,38.3076923 C396.892108,27.1636364 388.201792,21.9398601 380.901927,21.4755245 L380.670185,21.4755245 L380.670185,81.8391608 L360.972136,81.8391608 Z M464.739675,81.8391608 L464.739675,1.74125874 L484.437724,1.74125874 L484.437724,81.8391608 L464.739675,81.8391608 Z M493.565495,81.8391608 L526.009341,20.8951049 L500.86536,20.8951049 L500.86536,1.74125874 L557.64209,1.74125874 L526.009341,62.6853147 L557.873832,62.6853147 L557.873832,81.8391608 L493.565495,81.8391608 Z M567.480298,81.8391608 L567.480298,1.74125874 L618,1.74125874 L618,20.8951049 L587.178347,20.8951049 L587.178347,32.5034965 L608.035105,32.5034965 L608.035105,51.0769231 L587.178347,51.0769231 L587.178347,62.6853147 L618,62.6853147 L618,81.8391608 L567.480298,81.8391608 Z" id="customize" fill="#F5EDED" fill-rule="nonzero" />
                </g>
              </svg>
              <header>
                <h1 className="u-screen-reader">
                  Customize
                </h1>
              </header>
            </div>
            <div className="col-xs-6">
              <div className="c-nav-time"><span className="c-nav-time__label">Updated:</span> <time>April 2 12:30PM EST</time></div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <div className="row between-xs">
              <div className="last-xs last-sm initial-order-md col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
                <form name="personal-info" autoComplete="on">
                  <fieldset>
                    <legend>Pick Your Pic</legend>
                    <label htmlFor="profilePicture">Browse or type to search</label>
                    <input type="text" list="employeeList" id="profilePicture" name="profilePicture" onChange={this.handleEmployeeListSelection} autoFocus={true} />
                    <datalist id="employeeList" >
                      {this.state.employeeList.map((employee, index) => (
                        <option key={index} value={employee.profilePicture}>{employee.profilePicture}</option>
                      ))}
                    </datalist>
                  </fieldset>
                  {/* <fieldset>
                <legend>Your Photo</legend>
                <label htmlFor="profilePicture">Profile Picture URL</label><br />
                <input type="photo" name="profilePicture" value={this.state.profilePicture || ""} required={true} onChange={this.handleInputChange} /><br />
              </fieldset> */}
                  <fieldset>
                    <legend>Your Details</legend>
                    <label htmlFor="honorificPrefix">Honorific Prefix <span className="c-form-label__optional">(optional)</span></label><br />
                    <span className="c-form-input__example">Examples: Dr., Sir, Queen</span><br />
                    <input type="text" name="honorificPrefix" autoCorrect="off" title="Dr., Sir, Queen, etc. 👑" autoComplete="honorific-prefix" value={this.state.honorificPrefix || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="givenName">First Name</label><br />
                    <input type="text" name="givenName" required={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.givenName || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="additionalName">Middle Name <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="text" name="additionalName" autoCorrect="off" autoComplete="additionalName" title="I once worked with someone who had five middle names 🥁" value={this.state.additionalName || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="familyName">Last Name</label><br />
                    <input type="text" name="familyName" required={true} autoCorrect="off" autoComplete="family-name" title="Your last name, please 🙃" value={this.state.familyName || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="honorificSuffix">Honorific Suffix <span className="c-form-label__optional">(optional)</span></label><br />
                    <span className="c-form-input__example">Examples: Jr., PhD, MBA</span><br />
                    <input type="text" name="honorificSuffix" autoCorrect="off" autoComplete="honorific-suffix" title="Suffix or bust 🎰" value={this.state.honorificSuffix || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="organizationTitle">Job Title</label><br />
                    <input type="text" name="organizationTitle" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.organizationTitle || ""} onChange={this.handleInputChange} /><br />
                  </fieldset>
                  <fieldset>
                    <legend>Contact Options</legend>
                    <label htmlFor="cellPhone">Cell Phone <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="tel-national" name="cellPhone" autoComplete="tel-national" value={this.state.cellPhone || ""} onChange={this.handleInputChange} /><br />
                    <label htmlFor="workPhone">Work Phone <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="tel-national" name="workPhone" autoComplete="tel-national" value={this.state.workPhone || ""} onChange={this.handleInputChange} /><br />
                    <label htmlFor="emailAddress">Email Address</label><br />
                    <input type="email" name="emailAddress" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.emailAddress} onChange={this.handleInputChange} /><br />
                    {/* <label htmlFor="workplaceUrl">Workplace Profile <span className="c-form-label__optional">(optional)</span></label><br />
                <span className="c-form-input__example">Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
                <input type="url" name="workplaceUrl" value={this.state.workplaceUrl || ""} onChange={this.handleInputChange} /><br /> */}
                    <label htmlFor="linkedinUrl">LinkedIn Profile <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="url" name="linkedinUrl" value={this.state.linkedinUrl || ""} onChange={this.handleInputChange} /><br />
                  </fieldset>
                </form>
                <footer className="u-mb7">
                  <small>Hacked together for Aware • <a href="https://github.com/spjpgrd/customize" target="_blank">View on Github</a></small>
                </footer>
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
          </div>
        </main>

      </>
    );
  }
}

export default App;