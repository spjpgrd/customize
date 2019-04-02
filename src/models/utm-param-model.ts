// import UTMContentEnum from "../enums/utm-content-enum";
import UTMMediumEnum from "../enums/utm-medium-enum";
import UTMSourceEnum from "../enums/utm-source-enum";

export interface IUTMParamModel {
  utmContent: string;
  utmMedium: UTMMediumEnum;
  utmSource: UTMSourceEnum;
}