import React from "react";
import { slugify } from "../helpers/helpers";
// import UTMMediumEnum from "../enums/utm-medium-enum";
// import UTMSourceEnum from "../enums/utm-source-enum";
// import { IPersonModel } from "../models/person-model";
import { IUTMParamModel } from "../models/utm-param-model";

// export interface IEmailSignatureBasic {

// }

export interface IEmailSignatureBasicProps {
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
    secondaryTitle: string;
    linkedinUrl: string;
    sameLinePhoneNumbers: boolean;
    workplaceUrl: string;
    profilePicture: string;
    companyLogoUrl: string;
    companyLogoHeight: number;
    companyLogoWidth: number;
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
    id: string;
}

type TLinkSource = "twitter" | "linkedin" | "youtube" | "instagram" | "dotcom" | "facebook";

// tslint:disable-next-line: no-empty-interface
interface IEmailSignatureBasicState {

}

class EmailSignatureBasic extends React.Component<IEmailSignatureBasicProps, IEmailSignatureBasicState> {

    constructor(props: IEmailSignatureBasicProps) {
        super(props);
        this.getLink = this.getLink.bind(this);
        this.getFullUtmParams = this.getFullUtmParams.bind(this);
    }

    getFullUtmParams(
        utmCampaignSlug: string,
    ) {
        const fullUtmParams = `?utm_content=${this.props.utmParams.utmContent}-via-${this.props.fullNameSlug}&utm_medium=${this.props.utmParams.utmMedium}&utm_source=${this.props.utmParams.utmSource}${utmCampaignSlug !== "" ? `&utm_campaign=${utmCampaignSlug}` : ``}`;
        return fullUtmParams;
    }

    getLink(
        source: TLinkSource,
    ) {
        const fullUtmParams = this.getFullUtmParams(slugify(this.props.utmCampaign).trim());

        switch (source) {
            case "twitter":  return `https://awarehq.com/tw${fullUtmParams}`;
            case "linkedin":  return `https://awarehq.com/li${fullUtmParams}`;
            case "youtube":  return `https://awarehq.com/yt${fullUtmParams}`;
            case "instagram": return `https://awarehq.com/ig${fullUtmParams}`;
            case "facebook": return `https://awarehq.com/fb${fullUtmParams}`;
            case "dotcom": return `https://awarehq.com${fullUtmParams}`;
        }
    }

    // const utmCampaignSlug = slugify(this.props.utmCampaign).trim();
    // const fullUtmParams = `?utm_content=${this.props.utmParams.utmContent}-via-${this.props.fullNameSlug}&utm_medium=${this.props.utmParams.utmMedium}&utm_source=${this.props.utmParams.utmSource}${utmCampaignSlug !== "" ? `&utm_campaign=${utmCampaignSlug}` : ``}`;

    render() {
        // const utmCampaignSlug = slugify(this.props.utmCampaign).trim();
        // const fullUtmParams = `?utm_content=${this.props.utmParams.utmContent}-via-${this.props.fullNameSlug}&utm_medium=${this.props.utmParams.utmMedium}&utm_source=${this.props.utmParams.utmSource}${utmCampaignSlug !== "" ? `&utm_campaign=${utmCampaignSlug}` : ``}`;

        return (
            <>
                <table cellSpacing="0" cellPadding="0" style={{ border: "0px" }} id={this.props.id}>
                    <tbody>
                        {(!this.props.hidePicture && this.props.profilePicture !== "") &&
                            <tr >
                                {this.props.linkedinUrl.length > 0 ?
                                    <td style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                        <a target="_blank" href={this.props.linkedinUrl}><img src={this.props.profilePicture.endsWith("") ? this.props.profilePicture : "/profile-photos/default-aware-128.png"} style={{ width: "64px", height: "64px", }} width="64" height="64" alt={this.props.fullName} title={this.props.fullName} /></a></td>
                                    :
                                    <td style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                        <img src={this.props.profilePicture.endsWith("") ? this.props.profilePicture : "/profile-photos/default-aware-128.png"} style={{ width: "64px", height: "64px", }} width="64" height="64" alt={this.props.fullName} title={this.props.fullName} /></td>
                                }
                            </tr>
                        }
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "8px", paddingRight: "0px" }}>
                                <span style={{ textAlign: "left", color: "#2C2B2A", fontFamily: this.props.fontStack, fontSize: "10pt", fontWeight: "bold" }}>{this.props.fullName}<br /></span>
                                {(this.props.organizationTitle !== "") && <span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#3F3D3C", fontFamily: this.props.fontStack, fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>{this.props.organizationTitle}<br /></span>}
                                {(this.props.secondaryTitle !== "") && <span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#3F3D3C", fontFamily: this.props.fontStack, fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>{this.props.secondaryTitle}<br /></span>}
                                {(this.props.workPhone !== "" || this.props.cellPhone !== "") && <span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#878582", fontFamily: this.props.fontStack, fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5", fontVariantNumeric: "tabular-nums slashed-zero", }}>{`${this.props.workPhone}`}{(this.props.workPhone !== "" && this.props.cellPhone !== "") && ` \u00B7 `}{`${this.props.cellPhone}`}<br /></span>}
                                <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href={"mailto:" + this.props.emailAddress}>{this.props.emailAddress}</a>
                            </td>
                        </tr>
                        {(!this.props.hideAwareLogo && this.props.companyLogoUrl !== "") &&
                            <tr>
                                <td style={{ verticalAlign: "bottom", paddingLeft: "0px", paddingTop: "16px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px" }}>
                                    <a target="_blank" href={this.getLink("dotcom")}><img src={this.props.companyLogoUrl} style={{ width: `${this.props.companyLogoWidth}px`, height: `${this.props.companyLogoHeight}px`, border: "0" }} width={this.props.companyLogoWidth} height={this.props.companyLogoHeight} alt={`${this.props.companyName} Logo`} title={`${this.props.companyName} Logo`} /></a>
                                </td>
                            </tr>
                        }
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px" }}>
                                <p style={{ marginTop: "0px", textAlign: "left", color: "#555759", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "16px" }}>
                                    {(this.props.companyName !== "") && <span>{this.props.companyName !== "" && <b style={{ fontWeight: "bold", color: "#26241F" }}><strong>{this.props.companyName}</strong></b>} <br /></span>}{this.props.companyAddress !== "" && <span>{this.props.companyAddress}<br /></span>}
                                    {!this.props.hideSocialLinks &&
                                        <span style={{ textAlign: "left", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }}><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: "'Effra', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={this.getLink("dotcom")}>Website</a> {`\u00B7`} <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank" href={this.getLink("linkedin")}>LinkedIn</a> {`\u00B7`} <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank"  href={this.getLink("twitter")}>Twitter</a> {`\u00B7`} <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank"  href={this.getLink("facebook")}>Facebook</a> {`\u00B7`} <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#E64257", fontFamily: this.props.fontStack, fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} target="_blank"  href={this.getLink("instagram")}>Instagram</a><br /><br /></span>
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
