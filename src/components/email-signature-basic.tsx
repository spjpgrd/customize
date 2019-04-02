import * as React from 'react';
// import UTMMediumEnum from "../enums/utm-medium-enum";
// import UTMSourceEnum from "../enums/utm-source-enum";
// import { IPersonModel } from "../models/person-model";
import { IUTMParamModel } from "../models/utm-param-model"

// export interface IEmailSignatureBasic {

// }

interface IEmailSignatureBasicProps {
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
};

// tslint:disable-next-line: no-empty-interface
interface IEmailSignatureBasicState {

}

class EmailSignatureBasic extends React.Component<IEmailSignatureBasicProps, IEmailSignatureBasicState> {


    constructor(props: IEmailSignatureBasicProps) {
        super(props);

        // const workPhone = "844-433-3326";

    }

    // public componentDidMount() {
    // }

    // public stringTrim(text: string) {

    // }


    // const fullName = givenName + " " + additionalName.trim() > 0 ? additionalName + " " : " " + " " + familyName;
    // return fullName;


    // public getFullNameSlugDisplay(fullName: string) {

    // }

    // public getTelephoneUrl(phoneNumber: string) {

    // }

    public render() {
        return (
            <>
                <table cellSpacing="0" cellPadding="0" style={{ border: "0px", borderSpacing: "0px" }}>
                    <tbody>
                        <tr style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px", borderCollapse: "collapse", border: "0px" }}>
                            <td style={{ paddingLeft: "0px", paddingTop: "32px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                <a href={this.props.linkedinUrl}><img src={this.props.profilePicture} style={{ width: "64px", height: "64px", }} width="64" height="64" alt={this.props.fullName} title={this.props.fullName} /></a></td>
                        </tr>
                        <tr style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px", borderCollapse: "collapse", border: "0px" }}>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "8px", paddingRight: "0px" }}>
                                <span style={{ textAlign: "left", color: "#2C2B2A", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontWeight: "bold" }}>{this.props.fullName}<br /><span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#3F3D3C", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>{this.props.organizationTitle}<span style={{ color: "#878582", fontVariantNumeric: "tabular-nums slashed-zero", }}>{this.props.workPhone ? <span><br />O: {this.props.workPhone}</span> : ""}{this.props.cellPhone ? <span><br />C: {this.props.cellPhone}</span> : ""}</span><br /><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"mailto:" + this.props.emailAddress}>{this.props.emailAddress}</a></span></span></td>
                        </tr>
                        <tr style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px", borderCollapse: "collapse", border: "0px" }}>
                            <td style={{ verticalAlign: "bottom", paddingLeft: "0px", paddingTop: "16px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px" }}>
                                <a href={"https://awarehq.com?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}><img src="https://www.awarehq.com/hubfs/email-signature/aware/aware-email-32.png" style={{ width: "128px", height: "32px", border: "0" }} width="128" height="32" alt="Aware Logo" title="Aware Logo" /></a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "5px", paddingRight: "0px" }}>
                                <p style={{ textAlign: "left", color: "#3F3D3C", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px" }}><b style={{ fontWeight: "bold", color: "#2C2B2A" }}><strong>Aware Columbus Office</strong></b><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https://wrtp.me/HQ1directions">📍</a></p>
                                <address style={{ textAlign: "left", color: "#3F3D3C", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px", paddingLeft: "0px", paddingBottom: "5px", paddingRight: "0px", }}>111 Liberty Street • Suite 102 • Columbus, OH 43215</address><span style={{ textAlign: "left", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }}><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"https://awarehq.com?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Website</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"http://awarehq.com/li?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>LinkedIn</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"http://awarehq.com/tw?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Twitter</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"http://awarehq.com/fb?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Facebook</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"http://awarehq.com/ig?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Instagram</a></span></p>
                            </td >
                        </tr >
                    </tbody>
            </table>
            </>
        );
    }
}

export default EmailSignatureBasic;


