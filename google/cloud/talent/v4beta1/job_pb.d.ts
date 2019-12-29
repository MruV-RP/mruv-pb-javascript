// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/job.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_postal_address_pb from "../../../../google/type/postal_address_pb";

export class Job extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getRequisitionId(): string;
  setRequisitionId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  hasApplicationInfo(): boolean;
  clearApplicationInfo(): void;
  getApplicationInfo(): Job.ApplicationInfo | undefined;
  setApplicationInfo(value?: Job.ApplicationInfo): void;

  clearJobBenefitsList(): void;
  getJobBenefitsList(): Array<google_cloud_talent_v4beta1_common_pb.JobBenefitMap[keyof google_cloud_talent_v4beta1_common_pb.JobBenefitMap]>;
  setJobBenefitsList(value: Array<google_cloud_talent_v4beta1_common_pb.JobBenefitMap[keyof google_cloud_talent_v4beta1_common_pb.JobBenefitMap]>): void;
  addJobBenefits(value: google_cloud_talent_v4beta1_common_pb.JobBenefitMap[keyof google_cloud_talent_v4beta1_common_pb.JobBenefitMap], index?: number): google_cloud_talent_v4beta1_common_pb.JobBenefitMap[keyof google_cloud_talent_v4beta1_common_pb.JobBenefitMap];

  hasCompensationInfo(): boolean;
  clearCompensationInfo(): void;
  getCompensationInfo(): google_cloud_talent_v4beta1_common_pb.CompensationInfo | undefined;
  setCompensationInfo(value?: google_cloud_talent_v4beta1_common_pb.CompensationInfo): void;

  getCustomAttributesMap(): jspb.Map<string, google_cloud_talent_v4beta1_common_pb.CustomAttribute>;
  clearCustomAttributesMap(): void;
  clearDegreeTypesList(): void;
  getDegreeTypesList(): Array<google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap]>;
  setDegreeTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap]>): void;
  addDegreeTypes(value: google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap], index?: number): google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap];

  getDepartment(): string;
  setDepartment(value: string): void;

  clearEmploymentTypesList(): void;
  getEmploymentTypesList(): Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>;
  setEmploymentTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>): void;
  addEmploymentTypes(value: google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap], index?: number): google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap];

  getIncentives(): string;
  setIncentives(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getJobLevel(): google_cloud_talent_v4beta1_common_pb.JobLevelMap[keyof google_cloud_talent_v4beta1_common_pb.JobLevelMap];
  setJobLevel(value: google_cloud_talent_v4beta1_common_pb.JobLevelMap[keyof google_cloud_talent_v4beta1_common_pb.JobLevelMap]): void;

  getPromotionValue(): number;
  setPromotionValue(value: number): void;

  getQualifications(): string;
  setQualifications(value: string): void;

  getResponsibilities(): string;
  setResponsibilities(value: string): void;

  getPostingRegion(): google_cloud_talent_v4beta1_common_pb.PostingRegionMap[keyof google_cloud_talent_v4beta1_common_pb.PostingRegionMap];
  setPostingRegion(value: google_cloud_talent_v4beta1_common_pb.PostingRegionMap[keyof google_cloud_talent_v4beta1_common_pb.PostingRegionMap]): void;

  getVisibility(): google_cloud_talent_v4beta1_common_pb.VisibilityMap[keyof google_cloud_talent_v4beta1_common_pb.VisibilityMap];
  setVisibility(value: google_cloud_talent_v4beta1_common_pb.VisibilityMap[keyof google_cloud_talent_v4beta1_common_pb.VisibilityMap]): void;

  hasJobStartTime(): boolean;
  clearJobStartTime(): void;
  getJobStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasJobEndTime(): boolean;
  clearJobEndTime(): void;
  getJobEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPostingPublishTime(): boolean;
  clearPostingPublishTime(): void;
  getPostingPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPostingExpireTime(): boolean;
  clearPostingExpireTime(): void;
  getPostingExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPostingCreateTime(): boolean;
  clearPostingCreateTime(): void;
  getPostingCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPostingUpdateTime(): boolean;
  clearPostingUpdateTime(): void;
  getPostingUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCompanyDisplayName(): string;
  setCompanyDisplayName(value: string): void;

  hasDerivedInfo(): boolean;
  clearDerivedInfo(): void;
  getDerivedInfo(): Job.DerivedInfo | undefined;
  setDerivedInfo(value?: Job.DerivedInfo): void;

  hasProcessingOptions(): boolean;
  clearProcessingOptions(): void;
  getProcessingOptions(): Job.ProcessingOptions | undefined;
  setProcessingOptions(value?: Job.ProcessingOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    name: string,
    company: string,
    requisitionId: string,
    title: string,
    description: string,
    addressesList: Array<string>,
    applicationInfo?: Job.ApplicationInfo.AsObject,
    jobBenefitsList: Array<google_cloud_talent_v4beta1_common_pb.JobBenefitMap[keyof google_cloud_talent_v4beta1_common_pb.JobBenefitMap]>,
    compensationInfo?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.AsObject,
    customAttributesMap: Array<[string, google_cloud_talent_v4beta1_common_pb.CustomAttribute.AsObject]>,
    degreeTypesList: Array<google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap]>,
    department: string,
    employmentTypesList: Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>,
    incentives: string,
    languageCode: string,
    jobLevel: google_cloud_talent_v4beta1_common_pb.JobLevelMap[keyof google_cloud_talent_v4beta1_common_pb.JobLevelMap],
    promotionValue: number,
    qualifications: string,
    responsibilities: string,
    postingRegion: google_cloud_talent_v4beta1_common_pb.PostingRegionMap[keyof google_cloud_talent_v4beta1_common_pb.PostingRegionMap],
    visibility: google_cloud_talent_v4beta1_common_pb.VisibilityMap[keyof google_cloud_talent_v4beta1_common_pb.VisibilityMap],
    jobStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    jobEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingPublishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingExpireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingCreateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    companyDisplayName: string,
    derivedInfo?: Job.DerivedInfo.AsObject,
    processingOptions?: Job.ProcessingOptions.AsObject,
  }

  export class ApplicationInfo extends jspb.Message {
    clearEmailsList(): void;
    getEmailsList(): Array<string>;
    setEmailsList(value: Array<string>): void;
    addEmails(value: string, index?: number): string;

    getInstruction(): string;
    setInstruction(value: string): void;

    clearUrisList(): void;
    getUrisList(): Array<string>;
    setUrisList(value: Array<string>): void;
    addUris(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationInfo): ApplicationInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationInfo;
    static deserializeBinaryFromReader(message: ApplicationInfo, reader: jspb.BinaryReader): ApplicationInfo;
  }

  export namespace ApplicationInfo {
    export type AsObject = {
      emailsList: Array<string>,
      instruction: string,
      urisList: Array<string>,
    }
  }

  export class DerivedInfo extends jspb.Message {
    clearLocationsList(): void;
    getLocationsList(): Array<google_cloud_talent_v4beta1_common_pb.Location>;
    setLocationsList(value: Array<google_cloud_talent_v4beta1_common_pb.Location>): void;
    addLocations(value?: google_cloud_talent_v4beta1_common_pb.Location, index?: number): google_cloud_talent_v4beta1_common_pb.Location;

    clearJobCategoriesList(): void;
    getJobCategoriesList(): Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>;
    setJobCategoriesList(value: Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>): void;
    addJobCategories(value: google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap], index?: number): google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DerivedInfo.AsObject;
    static toObject(includeInstance: boolean, msg: DerivedInfo): DerivedInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DerivedInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DerivedInfo;
    static deserializeBinaryFromReader(message: DerivedInfo, reader: jspb.BinaryReader): DerivedInfo;
  }

  export namespace DerivedInfo {
    export type AsObject = {
      locationsList: Array<google_cloud_talent_v4beta1_common_pb.Location.AsObject>,
      jobCategoriesList: Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>,
    }
  }

  export class ProcessingOptions extends jspb.Message {
    getDisableStreetAddressResolution(): boolean;
    setDisableStreetAddressResolution(value: boolean): void;

    getHtmlSanitization(): google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap[keyof google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap];
    setHtmlSanitization(value: google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap[keyof google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessingOptions): ProcessingOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessingOptions;
    static deserializeBinaryFromReader(message: ProcessingOptions, reader: jspb.BinaryReader): ProcessingOptions;
  }

  export namespace ProcessingOptions {
    export type AsObject = {
      disableStreetAddressResolution: boolean,
      htmlSanitization: google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap[keyof google_cloud_talent_v4beta1_common_pb.HtmlSanitizationMap],
    }
  }
}

