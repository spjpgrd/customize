import * as React from 'react';
import { getSlugIfNotNull } from 'src/helpers/helpers';
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
    hidePicture: boolean;
    hideAwareLogo: boolean;
    hideAddress: boolean;
    hideSocialLinks: boolean;
    hideFKAW: boolean;
    honorificPrefix: string;
    honorificSuffix: string;
    organizationTitle: string;
    linkedinUrl: string;
    sameLinePhoneNumbers: boolean;
    workplaceUrl: string;
    profilePicture: string;
    companyLogoUrl: string;
    companyName: string;
    companyAddress: string;
    companyWebsite: string;
    companyLinkedIn: string;
    companyTwitter: string;
    companyFacebook: string;
    companyInstagram: string;
    utmParams: IUTMParamModel;
    utmCampaign: string;
    fontStack: string;
    directionsUrl: string;
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
        const utmCampaignSlug = getSlugIfNotNull(this.props.utmCampaign);
        const fullUtmParams = `?utm_content=${this.props.utmParams.utmContent}-via-${this.props.fullNameSlug}&utm_medium=${this.props.utmParams.utmMedium}&utm_source=${this.props.utmParams.utmSource}${utmCampaignSlug !== "" && `&utm_campaign=${utmCampaignSlug}`}`;

        return (
            <>
                <table cellSpacing="0" cellPadding="0" style={{ border: "0px" }}>
                    <tbody>
                        {!this.props.hidePicture &&
                            <tr >
                                <td style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                    <a href={this.props.linkedinUrl}><img src={this.props.profilePicture.endsWith("") ? this.props.profilePicture : "/profile-photos/default-aware-128.png"} style={{ width: "64px", height: "64px", }} width="64" height="64" alt={this.props.fullName} title={this.props.fullName} /></a></td>
                            </tr>
                        }
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "8px", paddingRight: "0px" }}>
                                <span style={{ textAlign: "left", color: "#2C2B2A", fontFamily: this.props.fontStack, fontSize: "10pt", fontWeight: "bold" }}>{this.props.fullName}<br /><span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#3F3D3C", fontFamily: this.props.fontStack, fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>{this.props.organizationTitle}<span style={{ color: "#878582", fontVariantNumeric: "tabular-nums slashed-zero", }}>{this.props.workPhone ? <span><br />O: {this.props.workPhone}</span> : ""}{this.props.cellPhone ? <span>{this.props.sameLinePhoneNumbers ? " • " : <br />}C: {this.props.cellPhone}</span> : ""}</span><br /><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"mailto:" + this.props.emailAddress}>{this.props.emailAddress}</a></span></span></td>
                        </tr>
                        {(!this.props.hideAwareLogo || !this.props.companyLogoUrl) &&
                            <tr>
                                <td style={{ verticalAlign: "bottom", paddingLeft: "0px", paddingTop: "16px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px" }}>
                                    <a target="_blank" href={`https://awarehq.com${fullUtmParams}`}><img src={this.props.companyLogoUrl} style={{ width: "128px", height: "32px", border: "0" }} width="128" height="32" alt={`${this.props.companyName} Logo`} title={`${this.props.companyName} Logo`} /></a>
                                </td>
                            </tr>
                        }
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px" }}>
                                <p style={{ marginTop: "0px", textAlign: "left", color: "#555759", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px" }}>
                                    {(!this.props.hideAddress && !this.props.hideSocialLinks) &&
                                        <span><b style={{ fontWeight: "bold", color: "#26241F" }}><strong>{this.props.companyName}</strong></b>{this.props.directionsUrl && <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={this.props.directionsUrl} target="_blank">📍</a>}<br />{this.props.companyAddress}<br /></span>
                                    }
                                    {(!this.props.hideAddress && this.props.hideSocialLinks) &&
                                        <span><b style={{ fontWeight: "bold", color: "#26241F" }}><strong>{this.props.companyName}</strong></b> {this.props.directionsUrl && <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={this.props.directionsUrl} target="_blank">📍</a>}<br />{this.props.companyAddress}<br /><br /></span>
                                    }
                                    {this.props.hideAddress &&
                                        <span><b style={{ fontWeight: "bold", color: "#26241F" }}><strong>{this.props.companyName}</strong></b><br /></span>
                                    }
                                    {!this.props.hideSocialLinks &&
                                        <span style={{ textAlign: "left", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }}><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={`http://awarehq.com${fullUtmParams}`}>Website</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={`http://awarehq.com/li${fullUtmParams}`}>LinkedIn</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={`http://awarehq.com/tw${fullUtmParams}`}>Twitter</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={`http://awarehq.com/fb${fullUtmParams}`}>Facebook</a> • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={`http://awarehq.com/ig${fullUtmParams}`}>Instagram</a><br /><br /></span>
                                    }
                                    {!this.props.hideFKAW &&
                                        <span style={{ textAlign: "left", color: "#A4A1A1", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px" }}> Formerly known as Wiretap</span>
                                    }
                                </p>
                            </td >
                        </tr >
                    </tbody>
                </table>
            </>
        );
    }
}

export default EmailSignatureBasic;


