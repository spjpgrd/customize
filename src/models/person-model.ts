import { IPersonNameModel } from "../models/person-name-model";
import { IPersonContactModel } from './person-contact-model';
import { IPersonalExternalLinksModel } from "./personal-external-links-model";

export interface IPersonModel {
    name: IPersonNameModel;
    organizationTitle: string;
    personalExternalLinks: IPersonalExternalLinksModel;
    contactOptions: IPersonContactModel;
}