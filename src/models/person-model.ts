import { IPersonNameModel } from "../models/person-name-model";
import { IPersonContactModel } from './person-contact-model';

export interface IPersonModel {
    name: IPersonNameModel;
    jobTitle: string;
    linkedinUrl?: string;
    contactOptions: IPersonContactModel;
}