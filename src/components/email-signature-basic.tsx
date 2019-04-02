import * as React from 'react';
// import UTMMediumEnum from "../enums/utm-medium-enum";
// import UTMSourceEnum from "../enums/utm-source-enum";
import { IPersonModel } from "../models/person-model";
import { IUTMParamModel } from "../models/utm-param-model"

// export interface IEmailSignatureBasic {

// }

interface IEmailSignatureBasicProps {
    person: IPersonModel;
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

    public getFullNameDisplay(firstName: string, middleName: string | null, lastName: string) {
        if (firstName != null && firstName.trim() === "" && middleName != null && middleName.trim() === "" && lastName != null && lastName.trim() === "") {
            const fullName = firstName + " " + middleName + " " + lastName;
            return fullName;
        } else if (firstName != null && firstName.trim() === "" && middleName === null && lastName != null && lastName.trim() === "") {
            const fullName = firstName + " " + lastName;
            return fullName;
        } else {
            const fullName = firstName + " " + middleName + " " + lastName;
            return fullName;
        }
    }


    // const fullName = firstName + " " + middleName.trim() > 0 ? middleName + " " : " " + " " + lastName;
    // return fullName;


    // public getFullNameSlugDisplay(fullName: string) {

    // }

    // public getTelephoneUrl(phoneNumber: string) {

    // }

    public render() {
        return (
            <>
                <table cellSpacing="0" cellPadding="0" style={{ border: "none", borderSpacing: "0px" }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "0px", paddingTop: "32px", paddingBottom: " 4px", paddingRight: "0px", verticalAlign: "top" }}>
                                {this.props.person.name.honorificPrefix}
                                <a href="https://www.linkedin.com/in/austinjmckinley/"><img src="https://www.awarehq.com/hubfs/email-signature/austin-mckinley-64.png" style={{ textDecoration: "none!important", borderBottomWidth: "0", width: "64px", height: "64px", border: "none" }} width="64" height="64" alt={this.props.person.name.fullName} title={this.props.person.name.fullName} /></a></td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "8px", paddingRight: "0px" }}>
                                <span style={{ textAlign: "left", color: "#26241F", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontWeight: "bold" }}>{this.props.person.name.fullName}<br /><span style={{ textAlign: "left", marginTop: "0px", marginBottom: "0px", color: "#555759", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontWeight: "normal", fontSize: "10pt", lineHeight: "1.5" }}>Director of Strategic Partnerships | Workplace<br />O: 614.407.9884 • <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="mailto:austin.mckinley@awarehq.com">austin.mckinley@awarehq.com</a></span></span></td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "8px", paddingBottom: "0px", paddingRight: "0px", marginTop: "0px" }}>
                                <a href="https://awarehq.com?utm_medium=email-sig?utm_source=austin-mckinley"><img src="https://www.awarehq.com/hubfs/email-signature/wiretap-logo-32.png" style={{ width: "123px", height: "32px", border: "0" }} width="123" height="32" alt="Aware" title="Aware" /></a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "top", paddingLeft: "0px", paddingTop: "0px", paddingBottom: "5px", paddingRight: "0px" }}>
                                <p style={{ textAlign: "left", color: "#555759", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5", paddingTop: "4px" }}><b style={{ fontWeight: "bold", color: "#26241F" }}><strong> Aware HQ</strong></b><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https:// wrtp.me/HQ1directions">📍</a><br />111 Liberty Street | Suite 102 | Columbus, OH 43215<br /><span style={{ textAlign: "left", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }}><a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https://awarehq.com?utm_medium=email-sig?utm_source=austin-mckinley">Aware</a> | <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https://awarehq.com/li?utm_medium=email-sig?utm_source=austin-mckinley">LinkedIn</a> | <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="awarehq.com/tw?utm_medium=email-sig?utm_source=austin-mckinley">Twitter</a> | <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https:// awarehq.com/fb?utm_medium=email-sig?utm_source=austin-mckinley">Facebook</a> | <a style={{ textDecoration: "none", borderBottomWidth: "0", color: "#F16E25", fontFamily: "'Effra','Lato','-apple-system', 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','sans-serif'", fontSize: "10pt", fontStyle: "normal", fontWeight: "normal", lineHeight: "1.5" }} href="https://awarehq.com/ig?utm_medium=email-sig?utm_source=austin-mckinley">Instagram</a></span></p>
                            </td >
                        </tr >
                    </tbody>
                </table>
            </>
        );
    }
}

export default EmailSignatureBasic;


