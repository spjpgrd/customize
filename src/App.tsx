import React from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import "flexboxgrid2";
import Checkbox from "./components/checkbox";
import EmailSignatureBasic, { IEmailSignatureBasicProps } from "./components/email-signature-basic";
import Modal from "./components/modal";
import { getSlugIfNotNull, fixedEncodeURIComponent, parseBoolean } from "./helpers/helpers";
import { IUTMParamModel } from "./models/utm-param-model";
import queryString from "query-string";

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
  hidePicture: boolean;
  hideAwareLogo: boolean;
  hideAddress: boolean;
  hideSocialLinks: boolean;
  hideFKAW: boolean;
  honorificPrefix: string;
  honorificSuffix: string;
  isBoxModalOpen: boolean;
  isSaveModalOpen: boolean;
  isCopyHtmlModalOpen: boolean;
  organizationTitle: string;
  linkedinUrl: string;
  workplaceUrl: string;
  profilePicture: string;
  companyLogoUrl: string;
  companyLogoWidth: number;
  companyLogoHeight: number;
  companyAddress: string;
  companyWebsite: string;
  companyLinkedIn: string;
  companyTwitter: string;
  companyFacebook: string;
  companyInstagram: string;
  sameLinePhoneNumbers: boolean;
  utmParams: IUTMParamModel;
  utmCampaign: string;
  fontStack: string;
  directionsUrl: string;
  selectedEmployee: string;
  [key: string]: any;
}

class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      additionalName: "",
      cellPhone: "C: 555-867-5309",
      emailAddress: "jeff@awarehq.com",
      workPhone: "W: 555-133-7123",
      selectedEmployee: "",
      familyName: "",
      fullName: "Jeff Schumann",
      fullNameSlug: "jeff-schumann",
      givenName: "Jeff Schumann",
      hidePicture: false,
      hideAwareLogo: false,
      hideAddress: false,
      hideSocialLinks: false,
      hideFKAW: true,
      honorificPrefix: "",
      honorificSuffix: "",
      isBoxModalOpen: false,
      isCopyHtmlModalOpen: false,
      isSaveModalOpen: false,
      organizationTitle: "CEO & Co-Founder",
      linkedinUrl: "",
      sameLinePhoneNumbers: true,
      workplaceUrl: "https://wiretap.facebook.com/profile.php?id=100013799348501",
      profilePicture: "https://wiretapfiles.box.com/shared/static/81nuynta2p10mbvg0kksiy8pa18qv140.png",
      companyLogoUrl: "https://www.awarehq.com/hubfs/email-signature/aware/aware-email-24.png",
      companyLogoWidth: 64,
      companyLogoHeight: 16,
      companyName: "Aware",
      companyAddress: "111 Liberty Street \u00B7 Suite 102 \u00B7 Columbus, OH 43215",
      companyWebsite: "https://awarehq.com",
      companyLinkedIn: "https://awarehq.com/li",
      companyTwitter: "https://awarehq.com/tw",
      companyFacebook: "https://awarehq.com/fb",
      companyInstagram: "https://awarehq.com/ig",
      utmParams: {
        utmCampaign: "",
        utmContent: "email-link",
        utmMedium: "email-signature",
        utmSource: "email",
      },
      utmCampaign: "",
      fontStack: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'",
      directionsUrl: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUtmChange = this.handleUtmChange.bind(this);
    this.getFullNameDisplay = this.getFullNameDisplay.bind(this);
    this.toggleBoxModal = this.toggleBoxModal.bind(this);
    this.toggleSaveModal = this.toggleSaveModal.bind(this);
    this.handleQueryParams = this.handleQueryParams.bind(this);
    this.getShareableUrl = this.getShareableUrl.bind(this);
    this.copyText = this.copyText.bind(this);
    this.handleCopyHTML = this.handleCopyHTML.bind(this);
    // this.handleEmployeeListSelection = this.handleEmployeeListSelection.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);fhandleCheckboxChange

  }

  componentDidMount() {
    const parsedQuery: IEmailSignatureBasicProps = this.handleQueryParams() as unknown as IEmailSignatureBasicProps;

    this.setState({
      additionalName: parsedQuery.additionalName !== undefined ? parsedQuery.additionalName : this.state.additionalName,
      cellPhone: parsedQuery.cellPhone !== undefined ? parsedQuery.cellPhone : this.state.cellPhone,
      emailAddress: parsedQuery.emailAddress !== undefined ? parsedQuery.emailAddress : this.state.emailAddress,
      workPhone: parsedQuery.workPhone !== undefined ? parsedQuery.workPhone : this.state.workPhone,
      familyName: parsedQuery.familyName !== undefined ? parsedQuery.familyName : this.state.familyName,
      fullName: parsedQuery.fullName !== undefined ? parsedQuery.fullName : this.state.fullName,
      fullNameSlug: parsedQuery.fullNameSlug !== undefined ? parsedQuery.fullNameSlug : this.state.fullNameSlug,
      givenName: parsedQuery.givenName !== undefined ? parsedQuery.givenName : this.state.givenName,
      hidePicture: parsedQuery.hidePicture !== undefined ? parseBoolean(parsedQuery.hidePicture) : this.state.hidePicture,
      hideAwareLogo: parsedQuery.hideAwareLogo !== undefined ? parseBoolean(parsedQuery.hideAwareLogo) : this.state.hideAwareLogo,
      hideAddress: parsedQuery.hideAddress !== undefined ? parseBoolean(parsedQuery.hideAddress) : this.state.hideAddress,
      hideSocialLinks: parsedQuery.hideSocialLinks !== undefined ? parseBoolean(parsedQuery.hideSocialLinks) : this.state.hideSocialLinks,
      hideFKAW: parsedQuery.hideFKAW !== undefined ? parseBoolean(parsedQuery.hideFKAW) : this.state.hideFKAW,
      honorificPrefix: parsedQuery.honorificPrefix !== undefined ? parsedQuery.honorificPrefix : this.state.honorificPrefix,
      honorificSuffix: parsedQuery.honorificSuffix !== undefined ? parsedQuery.honorificSuffix : this.state.honorificSuffix,
      sameLinePhoneNumbers: parsedQuery.sameLinePhoneNumbers !== undefined ? parseBoolean(parsedQuery.sameLinePhoneNumbers) : this.state.sameLinePhoneNumbers,
      organizationTitle: parsedQuery.organizationTitle !== undefined ? parsedQuery.organizationTitle : this.state.organizationTitle,
      linkedinUrl: parsedQuery.linkedinUrl !== undefined ? parsedQuery.linkedinUrl : this.state.linkedinUrl,
      workplaceUrl: parsedQuery.workplaceUrl !== undefined ? parsedQuery.workplaceUrl : this.state.workplaceUrl,
      profilePicture: parsedQuery.profilePicture !== undefined ? parsedQuery.profilePicture : this.state.profilePicture,
      companyLogoUrl: parsedQuery.companyLogoUrl !== undefined ? parsedQuery.companyLogoUrl : this.state.companyLogoUrl,
      companyLogoHeight: parsedQuery.companyLogoHeight !== undefined ? Number(parsedQuery.companyLogoHeight) : this.state.companyLogoHeight,
      companyLogoWidth: parsedQuery.companyLogoWidth !== undefined ? Number(parsedQuery.companyLogoWidth) : this.state.companyLogoWidth,
      companyAddress: parsedQuery.companyAddress !== undefined ? parsedQuery.companyAddress : this.state.companyAddress,
      companyWebsite: parsedQuery.companyWebsite !== undefined ? parsedQuery.companyWebsite : this.state.companyWebsite,
      companyLinkedIn: parsedQuery.companyLinkedIn !== undefined ? parsedQuery.companyLinkedIn : this.state.companyLinkedIn,
      companyTwitter: parsedQuery.companyTwitter !== undefined ? parsedQuery.companyTwitter : this.state.companyTwitter,
      companyFacebook: parsedQuery.companyFacebook !== undefined ? parsedQuery.companyFacebook : this.state.companyFacebook,
      companyInstagram: parsedQuery.companyInstagram !== undefined ? parsedQuery.companyInstagram : this.state.companyInstagram,
      companyName: parsedQuery.companyName !== undefined ? parsedQuery.companyName : this.state.companyName,
      utmCampaign: parsedQuery.utmCampaign !== undefined ? parsedQuery.utmCampaign : this.state.utmCampaign,
      directionsUrl: parsedQuery.directionsUrl !== undefined ? parsedQuery.directionsUrl : this.state.directionsUrl,
    });
  }

  handleQueryParams() {
    return { ...queryString.parse(location.search) };
  }

  getShareableUrl() {
    let url = `${window.location.protocol}//${window.location.host}?`;

    const params = [
      `additionalName=${fixedEncodeURIComponent(this.state.additionalName.trim())}`,
      `cellPhone=${fixedEncodeURIComponent(this.state.cellPhone.trim())}`,
      `emailAddress=${fixedEncodeURIComponent(this.state.emailAddress.trim())}`,
      `workPhone=${fixedEncodeURIComponent(this.state.workPhone.trim())}`,
      `familyName=${fixedEncodeURIComponent(this.state.familyName.trim())}`,
      `fullName=${fixedEncodeURIComponent(this.state.fullName.trim())}`,
      `fullNameSlug=${fixedEncodeURIComponent(this.state.fullNameSlug.trim())}`,
      `givenName=${fixedEncodeURIComponent(this.state.givenName.trim())}`,
      `hidePicture=${fixedEncodeURIComponent(this.state.hidePicture.toString())}`,
      `hideAwareLogo=${fixedEncodeURIComponent(this.state.hideAwareLogo.toString())}`,
      `hideAddress=${fixedEncodeURIComponent(this.state.hideAddress.toString())}`,
      `hideSocialLinks=${fixedEncodeURIComponent(this.state.hideSocialLinks.toString())}`,
      `hideFKAW=${fixedEncodeURIComponent(this.state.hideFKAW.toString())}`,
      `honorificPrefix=${fixedEncodeURIComponent(this.state.honorificPrefix.trim())}`,
      `honorificSuffix=${fixedEncodeURIComponent(this.state.honorificSuffix.trim())}`,
      `sameLinePhoneNumbers=${fixedEncodeURIComponent(this.state.sameLinePhoneNumbers.toString())}`,
      `organizationTitle=${fixedEncodeURIComponent(this.state.organizationTitle.trim())}`,
      `linkedinUrl=${fixedEncodeURIComponent(this.state.linkedinUrl.trim())}`,
      `workplaceUrl=${fixedEncodeURIComponent(this.state.workplaceUrl.trim())}`,
      `profilePicture=${fixedEncodeURIComponent(this.state.profilePicture.trim())}`,
      `companyLogoUrl=${fixedEncodeURIComponent(this.state.companyLogoUrl.trim())}`,
      `companyLogoHeight=${fixedEncodeURIComponent(this.state.companyLogoHeight.toString())}`,
      `companyLogoWidth=${fixedEncodeURIComponent(this.state.companyLogoWidth.toString())}`,
      `companyAddress=${fixedEncodeURIComponent(this.state.companyAddress.trim())}`,
      `companyWebsite=${fixedEncodeURIComponent(this.state.companyWebsite.trim())}`,
      `companyLinkedIn=${fixedEncodeURIComponent(this.state.companyLinkedIn.trim())}`,
      `companyTwitter=${fixedEncodeURIComponent(this.state.companyTwitter.trim())}`,
      `companyFacebook=${fixedEncodeURIComponent(this.state.companyFacebook.trim())}`,
      `companyInstagram=${fixedEncodeURIComponent(this.state.companyInstagram.trim())}`,
      `companyName=${fixedEncodeURIComponent(this.state.companyName.trim())}`,
      `utmCampaign=${fixedEncodeURIComponent(this.state.utmCampaign.trim())}`,
      `directionsUrl=${fixedEncodeURIComponent(this.state.directionsUrl.trim())}`,
    ];

    params.map((p) => {
      url += `${p}&`;
    });

    return url;
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleNameChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: await value,
    });
    const fullName = this.getFullNameDisplay(this.state.honorificPrefix, this.state.givenName, this.state.additionalName, this.state.familyName, this.state.honorificSuffix);
    const fullNameSlug = getSlugIfNotNull(fullName);

    this.setState({ fullName, fullNameSlug });
  }

  async handleUtmChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: await value,
    });
  }

  getFullNameDisplay(honorificPrefix: string | null, givenName: string | null, additionalName: string | null, familyName: string | null, honorificSuffix: string | null) {
    const fullName = [honorificPrefix, givenName, additionalName, familyName, honorificSuffix].filter((value) => value).join(" ");
    return fullName;
  }

  toggleBoxModal() {
    this.setState({
      isBoxModalOpen: !this.state.isBoxModalOpen
    });
  }

  toggleCopyHtmlModal() {
    this.setState({
      isCopyHtmlModalOpen: !this.state.isCopyHtmlModalOpen
    });
  }

  toggleSaveModal() {
    this.setState({
      isSaveModalOpen: !this.state.isSaveModalOpen
    });
  }

  copyText(someId: string) {
    const elementHolder = document.getElementById(someId);
    if (elementHolder !== null) {
      // @ts-ignore
      elementHolder.select();
      // @ts-ignore
      elementHolder.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
    }
  }

  handleCopyHTML() {
    const test = ReactDOMServer.renderToStaticMarkup(
      <EmailSignatureBasic
        additionalName={this.state.additionalName.trim()}
        cellPhone={this.state.cellPhone.trim()}
        emailAddress={this.state.emailAddress.trim()}
        workPhone={this.state.workPhone.trim()}
        familyName={this.state.familyName.trim()}
        fullName={this.state.fullName.trim()}
        fullNameSlug={this.state.fullNameSlug.trim()}
        givenName={this.state.givenName.trim()}
        hidePicture={this.state.hidePicture}
        hideAwareLogo={this.state.hideAwareLogo}
        hideAddress={this.state.hideAddress}
        hideSocialLinks={this.state.hideSocialLinks}
        hideFKAW={this.state.hideFKAW}
        honorificPrefix={this.state.honorificPrefix.trim()}
        honorificSuffix={this.state.honorificSuffix.trim()}
        sameLinePhoneNumbers={this.state.sameLinePhoneNumbers}
        organizationTitle={this.state.organizationTitle.trim()}
        linkedinUrl={this.state.linkedinUrl.trim()}
        workplaceUrl={this.state.workplaceUrl.trim()}
        profilePicture={this.state.profilePicture.trim()}
        companyLogoUrl={this.state.companyLogoUrl.trim()}
        companyLogoHeight={this.state.companyLogoHeight}
        companyLogoWidth={this.state.companyLogoWidth}
        companyAddress={this.state.companyAddress.trim()}
        companyWebsite={this.state.companyWebsite.trim()}
        companyLinkedIn={this.state.companyLinkedIn.trim()}
        companyTwitter={this.state.companyTwitter.trim()}
        companyFacebook={this.state.companyFacebook.trim()}
        companyInstagram={this.state.companyInstagram.trim()}
        companyName={this.state.companyName.trim()}
        utmParams={this.state.utmParams}
        utmCampaign={this.state.utmCampaign.trim()}
        fontStack={this.state.fontStack.trim()}
        directionsUrl={this.state.directionsUrl.trim()}
        id={"js-aware-customize-signature"}
        ref={`js-ref-aware-customize-signature`}
      />
    );
    // @ts-ignore
    console.log(test);
    const el = document.createElement("textarea");  // Create a <textarea> element
    el.value = test;                                // Set its value to the string that you want copied
    el.setAttribute("readonly", "");                // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px";                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    el.select();                                    // Select the <textarea> content
    document.execCommand("copy");                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element

    window.alert("Copied Successfully");
  }

  render() {
    return (
      <>
        {/* Input names based on these standard autocomplete keywords */}
        {/* https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute */}
        <nav>
          <div className="row between-xs middle-xs" >
            <div className="col-xs-6">
              <a href="/">
                <svg style={{ maxWidth: "8.75rem" }} width="100%" height="100%" viewBox="0 0 618 83" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path d="M286.070083,77.4422533 C274.138656,70.1100358 266.287092,56.9062506 266.287092,41.6741259 C266.287092,18.4573427 284.710561,2.27373675e-13 308.000608,2.27373675e-13 C331.406525,2.27373675e-13 349.945865,18.4573427 349.945865,41.6741259 C349.945865,57.1746374 341.764041,70.5747018 329.408969,77.82434 C328.059668,71.0483822 323.626866,65.2188999 317.710254,62.0529969 C325.074752,58.4037668 330.247816,50.7209436 330.247816,41.9062937 C330.247816,29.7174825 320.16705,19.2699301 308.116479,19.2699301 C295.834166,19.2699301 285.985141,29.7174825 285.985141,41.9062937 C285.985141,50.5539045 290.849545,58.1121786 298.004351,61.8412106 C291.983422,64.8969479 287.512097,70.6763679 286.070083,77.4422533 Z M43.4515788,81.8391608 C37.3104223,81.8391608 33.1390708,81.3748252 29.4312027,80.4461538 C12.5140547,76.034965 0,60.2475524 0,41.7902098 C0,23.1006993 12.6299256,7.42937063 29.5470736,3.13426573 C33.1390708,2.20559441 37.0786806,1.74125874 43.4515788,1.74125874 L44.6102876,1.74125874 L49.6113093,1.74125874 L49.5992003,21.1164347 L44.6102876,20.8951049 L43.4515788,20.8951049 C36.8469388,20.8951049 32.2121037,22.172028 28.5042357,24.7258741 C23.4059171,28.2083916 19.6980491,34.8251748 19.6980491,41.7902098 C19.6980491,48.7552448 23.4059171,55.372028 28.5042357,58.8545455 C32.2121037,61.4083916 36.8469388,62.6853147 43.4515788,62.6853147 L44.6102876,62.6853147 C46.3397707,62.4219623 48.0027416,62.2902861 49.5992003,62.2902861 C49.5992003,62.9103938 49.614942,69.3790886 49.6464256,81.6963704 L44.6102876,81.8391608 L43.4515788,81.8391608 Z M95.7781592,83 C82.1053957,83 65.0582331,73.7132867 65.0582331,51.6573427 L65.0582331,1.74125874 L84.7562822,1.74125874 L84.7562822,51.6573427 C84.7562822,59.2027972 89.0576483,63.8461538 95.7781592,63.8461538 C102.49867,63.8461538 106.800036,59.2027972 106.800036,51.6573427 L106.800036,1.74125874 L126.498085,1.74125874 L126.498085,51.6573427 C126.498085,73.7132867 109.450923,83 95.7781592,83 Z M139.443298,81.8391608 L139.443298,73.1479957 L139.443298,62.6853147 L162.965086,62.6853147 C167.831663,62.6853147 170.033209,60.3636364 170.033209,57.5776224 C170.033209,54.4433566 167.368179,52.3538462 164.587278,51.4251748 C154.158899,47.9426573 149.408193,46.4335664 145.468583,42.3706294 C141.181361,37.9594406 139.211556,32.2713287 139.211556,25.7706294 C139.211556,13.5818182 146.163809,4.64335664 156.9398,2.43776224 C160.300056,1.74125874 163.776182,1.74125874 169.106242,1.74125874 L179.882234,1.74125874 L203.119335,1.74125874 L206.095258,20.8951049 L179.882234,20.8951049 L165.050762,20.8951049 C160.87941,20.8951049 158.909605,23.1006993 158.909605,25.8867133 C158.909605,28.7888112 160.531797,30.9944056 164.123795,32.0391608 C172.582369,34.4769231 178.375912,36.2181818 182.779006,40.048951 C187.529712,44.227972 189.731258,50.4965035 189.731258,57.1132867 C189.731258,71.972028 178.723525,81.8391608 165.282503,81.8391608 L139.443298,81.8391608 Z M217.645804,81.8391608 L217.645804,20.8951049 L199.685818,20.8951049 L199.685818,1.74125874 L258.279761,1.74125874 L258.279761,20.8951049 L237.343853,20.8951049 L237.343853,81.8391608 L217.645804,81.8391608 Z M360.972136,81.8391608 L360.972136,1.74125874 L380.670185,1.74125874 C390.51921,1.74125874 400.368234,6.38461538 405.930036,13.2335664 C411.491839,6.38461538 421.340863,1.74125874 431.189888,1.74125874 L450.887937,1.74125874 L450.887937,81.8391608 L431.189888,81.8391608 L431.189888,21.4755245 L430.958146,21.4755245 C423.658281,21.9398601 414.967965,27.1636364 414.967965,38.3076923 L414.967965,81.8391608 L396.892108,81.8391608 L396.892108,38.3076923 C396.892108,27.1636364 388.201792,21.9398601 380.901927,21.4755245 L380.670185,21.4755245 L380.670185,81.8391608 L360.972136,81.8391608 Z M464.739675,81.8391608 L464.739675,1.74125874 L484.437724,1.74125874 L484.437724,81.8391608 L464.739675,81.8391608 Z M493.565495,81.8391608 L526.009341,20.8951049 L500.86536,20.8951049 L500.86536,1.74125874 L557.64209,1.74125874 L526.009341,62.6853147 L557.873832,62.6853147 L557.873832,81.8391608 L493.565495,81.8391608 Z M567.480298,81.8391608 L567.480298,1.74125874 L618,1.74125874 L618,20.8951049 L587.178347,20.8951049 L587.178347,32.5034965 L608.035105,32.5034965 L608.035105,51.0769231 L587.178347,51.0769231 L587.178347,62.6853147 L618,62.6853147 L618,81.8391608 L567.480298,81.8391608 Z" id="customize" fill="#F5EDED" fillRule="nonzero" />
                  </g>
                </svg>
              </a>
              <header>
                <h1 className="u-screen-reader">
                  Customize
                </h1>
              </header>
            </div>
            <div className="col-xs-6" style={{ textAlign: "right" }}>
              <button
                onClick={this.handleCopyHTML} style={{ cursor: "pointer", fontSize: ".8em", marginRight: ".5em" }}
                className="c-button c-button--secondary">
                <span aria-hidden="true" className="u-mr--2">🤓</span> Copy as HTML
              </button>
              <button
                onClick={this.toggleSaveModal} style={{ cursor: "pointer", fontSize: ".8em" }}
                className="c-button c-button--primary">
                <span aria-hidden="true" className="u-mr--2">☁️</span> Save Your Signature
                </button>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <div className="row between-xs">
              <div className="last-xs last-sm initial-order-md col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
                <a href="https://wiretapfiles.app.box.com/folder/72642759039"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="c-button c-button--secondary c-button--block u-ta--c"><small><span aria-hidden="true" className="u-mr--2">🎨</span> Grab an Aware Wallpaper</small></a>
                <form name="personal-info" autoComplete="on">
                  <fieldset>
                    <legend>Your Photo</legend>
                    <div className="l-flex l-jc--sb l-ai--bl">
                      <label htmlFor="profilePicture"><span aria-hidden="true" className="u-mr--2">🖼️ </span>Headshot URL <span className="c-form-label__optional">(optional)</span></label><a style={{ float: "right", cursor: "pointer", fontSize: ".8em", }} onClick={this.toggleBoxModal} className="c-text-gradient">Get Your Headshot</a>
                    </div>
                    <input type="photo" name="profilePicture" value={this.state.profilePicture} required={true} onChange={this.handleInputChange} /><br />
                  </fieldset>
                  <fieldset>
                    <legend>Your Details</legend>
                    <label htmlFor="givenName"><span aria-hidden="true" className="u-mr--2">🙂 </span>Your Name</label><br />
                    <input type="text" name="givenName" required={true} autoCorrect="off" autoComplete="given-name" title="What do they call you? 🤔" value={this.state.givenName || ""} onChange={this.handleNameChange} /><br />
                    <label htmlFor="organizationTitle"><span aria-hidden="true" className="u-mr--2">💼 </span>Job Title <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="text" name="organizationTitle" required={true} autoComplete="organization-title" title="Your job description this month 📝" value={this.state.organizationTitle || ""} onChange={this.handleInputChange} /><br />
                  </fieldset>
                  <fieldset>
                    <legend>Contact Options</legend>
                    <label htmlFor="workPhone"><span aria-hidden="true" className="u-mr--2">☎️</span> Office Phone <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="tel-national" name="workPhone" autoComplete="tel-national" value={this.state.workPhone || ""} onChange={this.handleInputChange} /><br />
                    <label htmlFor="cellPhone"><span aria-hidden="true" className="u-mr--2">📱 </span>Cell Phone <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="tel-national" name="cellPhone" autoComplete="tel-national" value={this.state.cellPhone || ""} onChange={this.handleInputChange} /><br />
                    <label htmlFor="emailAddress"><span aria-hidden="true" className="u-mr--2">💌 </span>Email Address </label><br />
                    <input type="email" name="emailAddress" required={true} autoComplete="email" pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9].awarehq.[a-zA-z]+$" title="Please use your @awarehq.com address 📬" value={this.state.emailAddress} onChange={this.handleInputChange} /><br />
                    {/* <label htmlFor="workplaceUrl"><span aria-hidden="true" className="u-mr--2">Wo</span>rkplace Profile <span className="c-form-label__optional">(optional)</span></label><br />
                <span className="c-form-input__example">Tip: <a href={"https://workplace.com/?utm_medium=email-sig?utm_source=" + this.state.fullNameSlug} target="_blank">Head to Workplace</a>, go to your profile, and copy the URL from the address bar</span><br />
                <input type="url" name="workplaceUrl" value={this.state.workplaceUrl || ""} onChange={this.handleInputChange} /><br /> */}
                    <label htmlFor="linkedinUrl"><span aria-hidden="true" className="u-mr--2">🔗 </span>HTTPS LinkedIn Profile <span className="c-form-label__optional">(optional)</span></label><br />
                    <span className="c-form-input__example">Adds a link to your profile picture</span><br />
                    <input type="url" name="linkedinUrl" value={this.state.linkedinUrl || ""} onChange={this.handleInputChange} /><br />
                  </fieldset>
                  <fieldset>
                    <legend>Your Company's Logo</legend>
                    <label htmlFor="companyLogoUrl"><span aria-hidden="true" className="u-mr--2">🎨 </span>Company Logo URL<span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="photo" name="companyLogoUrl" value={this.state.companyLogoUrl} required={false} onChange={this.handleInputChange} /><br />
                    <div className="row">
                      <div className="col-xs-6">
                        <label htmlFor="companyLogoWidth">Logo Width (px)</label><br />
                        <div className="col-xs-8" style={{ marginRight: "0", paddingRight: "0", marginLeft: "0", paddingLeft: "0" }}>
                          <input type="number" name="companyLogoWidth" value={this.state.companyLogoWidth} required={false} onChange={this.handleInputChange} className="u-ff--mono u-fvn--tab" />
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <label htmlFor="companyLogoHeight">Logo Height (px)</label><br />
                        <div className="col-xs-8" style={{ marginRight: "0", paddingRight: "0", marginLeft: "0", paddingLeft: "0" }}>
                          <input type="number" name="companyLogoHeight" value={this.state.companyLogoHeight} required={false} onChange={this.handleInputChange} className="u-ff--mono u-fvn--tab" /><br />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Your Company's Details</legend>
                    <label htmlFor="companyName"><span aria-hidden="true" className="u-mr--2">📛 </span>Company Name <span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="text" name="companyName" value={this.state.companyName} required={false} onChange={this.handleInputChange} /><br />
                    <label htmlFor="directionsUrl"><span aria-hidden="true" className="u-mr--2">📍 </span>Directions URL<span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="url" name="directionsUrl" value={this.state.directionsUrl} required={false} onChange={this.handleInputChange} />
                    <label htmlFor="companyAddress"><span aria-hidden="true" className="u-mr--2">📬 </span>Company Address<span className="c-form-label__optional">(optional)</span></label><br />
                    <input type="text" name="companyAddress" value={this.state.companyAddress} required={false} onChange={this.handleInputChange} />
                  </fieldset>
                  <fieldset>
                    <legend>UTM Parameters</legend>
                    <small className="u-d--b u-ml--2 u-mb--6 u-op--70">
                      <span aria-hidden="true" className="u-mr--2">ℹ️</span> These are additional details added to the end of a URL. They provide more specific information about the link for marketing and analytics.
                    </small>
                    <label htmlFor="utmCampaign">Campaign<span className="c-form-label__optional">(optional)</span></label><br />
                    <span className="c-form-input__example">Examples: Replies to Acme, Ignite 2019, Webinar Outreach</span><br />
                    <input type="text" name="utmCampaign" value={this.state.utmCampaign || ""} onChange={this.handleUtmChange} className="u-ff--mono" /><br />
                    <label htmlFor="utmContent">Content<span className="c-form-label__optional">(fixed value)</span></label><br />
                    <input type="text" name="utmContent" value={this.state.utmParams.utmContent} disabled={true} style={{ cursor: "not-allowed" }} className="u-ff--mono" /><br />
                    <label htmlFor="utmMedium">Medium<span className="c-form-label__optional">(fixed value)</span></label><br />
                    <input type="text" name="utmMedium" autoCorrect="off" value={this.state.utmParams.utmMedium} readOnly={true} disabled={true} style={{ cursor: "not-allowed" }} className="u-ff--mono" /><br />
                    <label htmlFor="utmSource">Source<span className="c-form-label__optional">(fixed value)</span></label><br />
                    <input type="text" name="utmSource" autoCorrect="off" value={this.state.utmParams.utmSource} readOnly={true} disabled={true} style={{ cursor: "not-allowed" }} className="u-ff--mono" /><br />
                  </fieldset>
                  <fieldset>
                    <legend>Alterations</legend>
                    <Checkbox
                      label="Hide Social Links"
                      name="hideSocialLinks"
                      isSelected={this.state.hideSocialLinks}
                      onCheckboxChange={this.handleInputChange}
                      key="hideSocialLinks"
                    />
                  </fieldset>
                </form>
                <footer className="u-mb7">
                  <small>Hacked together for Aware · <a
                    href="https://github.com/spjpgrd/customize"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="c-text-gradient">View on Github</a></small><br />
                </footer>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-xl-7">
                <div className="w-signature">
                  <EmailSignatureBasic
                    additionalName={this.state.additionalName.trim()}
                    cellPhone={this.state.cellPhone.trim()}
                    emailAddress={this.state.emailAddress.trim()}
                    workPhone={this.state.workPhone.trim()}
                    familyName={this.state.familyName.trim()}
                    fullName={this.state.fullName.trim()}
                    fullNameSlug={this.state.fullNameSlug.trim()}
                    givenName={this.state.givenName.trim()}
                    hidePicture={this.state.hidePicture}
                    hideAwareLogo={this.state.hideAwareLogo}
                    hideAddress={this.state.hideAddress}
                    hideSocialLinks={this.state.hideSocialLinks}
                    hideFKAW={this.state.hideFKAW}
                    honorificPrefix={this.state.honorificPrefix.trim()}
                    honorificSuffix={this.state.honorificSuffix.trim()}
                    sameLinePhoneNumbers={this.state.sameLinePhoneNumbers}
                    organizationTitle={this.state.organizationTitle.trim()}
                    linkedinUrl={this.state.linkedinUrl.trim()}
                    workplaceUrl={this.state.workplaceUrl.trim()}
                    profilePicture={this.state.profilePicture.trim()}
                    companyLogoUrl={this.state.companyLogoUrl.trim()}
                    companyLogoHeight={this.state.companyLogoHeight}
                    companyLogoWidth={this.state.companyLogoWidth}
                    companyAddress={this.state.companyAddress.trim()}
                    companyWebsite={this.state.companyWebsite.trim()}
                    companyLinkedIn={this.state.companyLinkedIn.trim()}
                    companyTwitter={this.state.companyTwitter.trim()}
                    companyFacebook={this.state.companyFacebook.trim()}
                    companyInstagram={this.state.companyInstagram.trim()}
                    companyName={this.state.companyName.trim()}
                    utmParams={this.state.utmParams}
                    utmCampaign={this.state.utmCampaign.trim()}
                    fontStack={this.state.fontStack.trim()}
                    directionsUrl={this.state.directionsUrl.trim()}
                    id={"js-aware-customize-signature"}
                    ref={`js-ref-aware-customize-signature`}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal show={this.state.isBoxModalOpen}
          onClose={this.toggleBoxModal}
        >
          <div className="c-modal">
            <h2 style={{ marginTop: 0 }}>
              How to Get a Direct Link to an <span className="u-nowrap">Image in Box</span>
            </h2>
            <p>
              A direct link will end in the file extension. This is the kind of URL the generator needs 👍
          </p>
            <img src="https://github.com/spjpgrd/customize/blob/master/public/assets/images/how-to-get-a-public-link-from-box.gif?raw=true" style={{ border: "2px solid rgba(0,0,0,.05)", marginTop: "16px", marginBottom: "24px" }} />
            <p>
              <a href="https://wiretapfiles.box.com/v/emailsignatures" target="_blank" className="c-button c-button--primary c-button--block">Get your photo in Box

              <svg style={{ marginLeft: "8px" }} width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path d="M13.9768799,3.80552688 L6.71363475,10.9861254 C6.24536248,11.4490693 5.48614313,11.4490693 5.01787087,10.9861254 C4.5495986,10.5231815 4.5495986,9.77260109 5.01787087,9.30965717 L12.281116,2.12905866 L10.1275525,0 L16,0 L16,5.80562644 L13.9768799,3.80552688 Z M15.6666667,9.8855649 L15.6666667,12.7098779 C15.6666667,14.5270776 14.1961434,16 12.3819035,16 L3.28476319,16 C1.4705233,16 0,14.5270776 0,12.7098779 L0,3.95678882 C0,2.13958907 1.4705233,0.666666667 3.28314188,0.666666667 L6.20522876,0.666666667 C7.67973856,0.666666667 7.67973856,1.11516667 7.67973856,1.56366667 C7.67973856,2.01216667 7.67973856,2.46066667 6.20522876,2.46066667 L3.65555556,2.46066667 C2.63761896,2.46066667 1.8124183,3.28446273 1.8124183,4.30066667 L1.8124183,12.366 C1.8124183,13.3822039 2.63761896,14.206 3.65555556,14.206 L12.0111111,14.206 C13.0290477,14.206 13.8542484,13.3822039 13.8542484,12.366 L13.8542484,9.8855649 C13.8542484,8.33333333 14.3071961,8.33333333 14.7601437,8.33333333 C15.2130914,8.33333333 15.6666667,8.33333333 15.6666667,9.8855649 Z" id="Shape" fill="#FFFFFF" />
                  </g>
                </svg></a>
            </p>
          </div>
        </Modal>
        <Modal show={this.state.isSaveModalOpen}
          onClose={this.toggleSaveModal}>
          <div className="c-modal">
            <h2 style={{ marginTop: 0 }}>
              Your Unique Shareable Link
            </h2>
            <p>
              This link contains all of information within it, so none of your info is uploaded anywhere.
          </p>
            <p>
              Easy.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "80%", marginRight: ".25em" }}>
                <input
                  readOnly
                  type="url"
                  style={{ overflow: "hidden", margin: 0 }}
                  id="js-shareable-url"
                  value={this.getShareableUrl()}
                />
              </div>
              <div>
                <button
                  onClick={() => this.copyText("js-shareable-url")}
                  style={{ fontSize: ".7em" }}
                  className="c-button c-button--primary c-button--block u-ta--c"
                >
                  <span className="u-ta--c">
                    Copy
                    </span>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default App;
