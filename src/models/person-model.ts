// import { IPersonNameModel } from "../models/person-name-model";
// import { IPersonContactModel } from './person-contact-model';
// import { IPersonalExternalLinksModel } from "./personal-external-links-model";

export interface IPersonModel {
    additionalName: string,
    cellPhone: string,
    emailAddress: string,
    workPhone: string,
    familyName: string,
    fullName: string,
    fullNameSlug: string,
    givenName: string,
    honorificPrefix: string,
    honorificSuffix: string,
    organizationTitle: string,
    linkedinUrl: string,
    workplaceUrl: string,
    profilePicture: string,
}