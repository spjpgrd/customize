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



    public render() {
        return (
            <>
                <table cellSpacing="0" cellPadding="0" style={{ border: "0px" }}>
                    <tbody>
                        <tr >
                            <td style={{ paddingLeft: "0px", paddingTop: "32px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                <a href={this.props.linkedinUrl}><img src={this.props.profilePicture.endsWith("-aware-64.png") ? this.props.profilePicture : "/profile-photos/default-aware-64.png"} style={{ width: "64px", height: "64px", }} width="64" height="64" alt={this.props.fullName} title={this.props.fullName} /></a></td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "8px", paddingRight: "0px" }}>
                                <span style={{ textAlign: "left", color: "#2C2B2A", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontWeight: "bold" }}>{this.props.fullName}<br /><span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#3F3D3C", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>{this.props.organizationTitle}<span style={{ color: "#878582", fontVariantNumeric: "tabular-nums slashed-zero", }}>{this.props.workPhone ? <span><br />O: {this.props.workPhone}</span> : ""}{this.props.cellPhone ? <span><br />C: {this.props.cellPhone}</span> : ""}</span><br /><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"mailto:" + this.props.emailAddress}>{this.props.emailAddress}</a></span></span></td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "bottom", paddingLeft: "0px", paddingTop: "16px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px" }}>
                                <a target="_blank" href={"https://awarehq.com?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}><img src="https://www.awarehq.com/hubfs/email-signature/aware/aware-email-32.png" style={{ width: "128px", height: "32px", border: "0" }} width="128" height="32" alt="Aware Logo" title="Aware Logo" /></a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px" }}>
                                <p style={{ marginTop: "0px", textAlign: "left", color: "#555759", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px" }}><b style={{ fontWeight: "bold", color: "#26241F" }}><strong>Aware Columbus Office</strong></b><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https://wrtp.me/HQ1directions">📍</a><br />111 Liberty Street • Suite 102 • Columbus, OH 43215<br /><span style={{ textAlign: "left", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }}><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5" }} target="_blank" href={"http://awarehq.com?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Website</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5" }} target="_blank" href={"http://awarehq.com/li?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>LinkedIn</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5" }} target="_blank" href={"http://awarehq.com/tw?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Twitter</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5" }} target="_blank" href={"http://awarehq.com/fb?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Facebook</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5" }} target="_blank" href={"http://awarehq.com/ig?utm_medium=" + this.props.utmParams.utmMedium + "?utm_source=" + this.props.utmParams.utmSource + "?utm_content=" + this.props.fullNameSlug + "-aware-brand-launch"}>Instagram</a></span><br /><br /><span style={{ textAlign: "left", color: "#A4A1A1", fontFamily: "'Effra','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "lighter", lineHeight: "1.5", paddingTop: "4px" }}>Formerly known as Wiretap</span></p>
                            </td >
                        </tr >
                    </tbody>
                </table>
            </>
        );
    }
}

export default EmailSignatureBasic;


