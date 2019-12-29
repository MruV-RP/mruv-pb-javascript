// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/profile.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_date_pb from "../../../../google/type/date_pb";
import * as google_type_postal_address_pb from "../../../../google/type/postal_address_pb";

export class Profile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasIsHirable(): boolean;
  clearIsHirable(): void;
  getIsHirable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsHirable(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCandidateUpdateTime(): boolean;
  clearCandidateUpdateTime(): void;
  getCandidateUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCandidateUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResumeUpdateTime(): boolean;
  clearResumeUpdateTime(): void;
  getResumeUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResumeUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResume(): boolean;
  clearResume(): void;
  getResume(): Resume | undefined;
  setResume(value?: Resume): void;

  clearPersonNamesList(): void;
  getPersonNamesList(): Array<PersonName>;
  setPersonNamesList(value: Array<PersonName>): void;
  addPersonNames(value?: PersonName, index?: number): PersonName;

  clearAddressesList(): void;
  getAddressesList(): Array<Address>;
  setAddressesList(value: Array<Address>): void;
  addAddresses(value?: Address, index?: number): Address;

  clearEmailAddressesList(): void;
  getEmailAddressesList(): Array<Email>;
  setEmailAddressesList(value: Array<Email>): void;
  addEmailAddresses(value?: Email, index?: number): Email;

  clearPhoneNumbersList(): void;
  getPhoneNumbersList(): Array<Phone>;
  setPhoneNumbersList(value: Array<Phone>): void;
  addPhoneNumbers(value?: Phone, index?: number): Phone;

  clearPersonalUrisList(): void;
  getPersonalUrisList(): Array<PersonalUri>;
  setPersonalUrisList(value: Array<PersonalUri>): void;
  addPersonalUris(value?: PersonalUri, index?: number): PersonalUri;

  clearAdditionalContactInfoList(): void;
  getAdditionalContactInfoList(): Array<AdditionalContactInfo>;
  setAdditionalContactInfoList(value: Array<AdditionalContactInfo>): void;
  addAdditionalContactInfo(value?: AdditionalContactInfo, index?: number): AdditionalContactInfo;

  clearEmploymentRecordsList(): void;
  getEmploymentRecordsList(): Array<EmploymentRecord>;
  setEmploymentRecordsList(value: Array<EmploymentRecord>): void;
  addEmploymentRecords(value?: EmploymentRecord, index?: number): EmploymentRecord;

  clearEducationRecordsList(): void;
  getEducationRecordsList(): Array<EducationRecord>;
  setEducationRecordsList(value: Array<EducationRecord>): void;
  addEducationRecords(value?: EducationRecord, index?: number): EducationRecord;

  clearSkillsList(): void;
  getSkillsList(): Array<google_cloud_talent_v4beta1_common_pb.Skill>;
  setSkillsList(value: Array<google_cloud_talent_v4beta1_common_pb.Skill>): void;
  addSkills(value?: google_cloud_talent_v4beta1_common_pb.Skill, index?: number): google_cloud_talent_v4beta1_common_pb.Skill;

  clearActivitiesList(): void;
  getActivitiesList(): Array<Activity>;
  setActivitiesList(value: Array<Activity>): void;
  addActivities(value?: Activity, index?: number): Activity;

  clearPublicationsList(): void;
  getPublicationsList(): Array<Publication>;
  setPublicationsList(value: Array<Publication>): void;
  addPublications(value?: Publication, index?: number): Publication;

  clearPatentsList(): void;
  getPatentsList(): Array<Patent>;
  setPatentsList(value: Array<Patent>): void;
  addPatents(value?: Patent, index?: number): Patent;

  clearCertificationsList(): void;
  getCertificationsList(): Array<google_cloud_talent_v4beta1_common_pb.Certification>;
  setCertificationsList(value: Array<google_cloud_talent_v4beta1_common_pb.Certification>): void;
  addCertifications(value?: google_cloud_talent_v4beta1_common_pb.Certification, index?: number): google_cloud_talent_v4beta1_common_pb.Certification;

  clearApplicationsList(): void;
  getApplicationsList(): Array<string>;
  setApplicationsList(value: Array<string>): void;
  addApplications(value: string, index?: number): string;

  clearAssignmentsList(): void;
  getAssignmentsList(): Array<string>;
  setAssignmentsList(value: Array<string>): void;
  addAssignments(value: string, index?: number): string;

  getCustomAttributesMap(): jspb.Map<string, google_cloud_talent_v4beta1_common_pb.CustomAttribute>;
  clearCustomAttributesMap(): void;
  getProcessed(): boolean;
  setProcessed(value: boolean): void;

  getKeywordSnippet(): string;
  setKeywordSnippet(value: string): void;

  clearAvailabilitySignalsList(): void;
  getAvailabilitySignalsList(): Array<AvailabilitySignal>;
  setAvailabilitySignalsList(value: Array<AvailabilitySignal>): void;
  addAvailabilitySignals(value?: AvailabilitySignal, index?: number): AvailabilitySignal;

  clearDerivedAddressesList(): void;
  getDerivedAddressesList(): Array<google_cloud_talent_v4beta1_common_pb.Location>;
  setDerivedAddressesList(value: Array<google_cloud_talent_v4beta1_common_pb.Location>): void;
  addDerivedAddresses(value?: google_cloud_talent_v4beta1_common_pb.Location, index?: number): google_cloud_talent_v4beta1_common_pb.Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    name: string,
    externalId: string,
    source: string,
    uri: string,
    groupId: string,
    isHirable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    candidateUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resumeUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resume?: Resume.AsObject,
    personNamesList: Array<PersonName.AsObject>,
    addressesList: Array<Address.AsObject>,
    emailAddressesList: Array<Email.AsObject>,
    phoneNumbersList: Array<Phone.AsObject>,
    personalUrisList: Array<PersonalUri.AsObject>,
    additionalContactInfoList: Array<AdditionalContactInfo.AsObject>,
    employmentRecordsList: Array<EmploymentRecord.AsObject>,
    educationRecordsList: Array<EducationRecord.AsObject>,
    skillsList: Array<google_cloud_talent_v4beta1_common_pb.Skill.AsObject>,
    activitiesList: Array<Activity.AsObject>,
    publicationsList: Array<Publication.AsObject>,
    patentsList: Array<Patent.AsObject>,
    certificationsList: Array<google_cloud_talent_v4beta1_common_pb.Certification.AsObject>,
    applicationsList: Array<string>,
    assignmentsList: Array<string>,
    customAttributesMap: Array<[string, google_cloud_talent_v4beta1_common_pb.CustomAttribute.AsObject]>,
    processed: boolean,
    keywordSnippet: string,
    availabilitySignalsList: Array<AvailabilitySignal.AsObject>,
    derivedAddressesList: Array<google_cloud_talent_v4beta1_common_pb.Location.AsObject>,
  }
}

export class AvailabilitySignal extends jspb.Message {
  getType(): google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap];
  setType(value: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap]): void;

  hasLastUpdateTime(): boolean;
  clearLastUpdateTime(): void;
  getLastUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFilterSatisfied(): boolean;
  clearFilterSatisfied(): void;
  getFilterSatisfied(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setFilterSatisfied(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilitySignal.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilitySignal): AvailabilitySignal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilitySignal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilitySignal;
  static deserializeBinaryFromReader(message: AvailabilitySignal, reader: jspb.BinaryReader): AvailabilitySignal;
}

export namespace AvailabilitySignal {
  export type AsObject = {
    type: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap],
    lastUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filterSatisfied?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class Resume extends jspb.Message {
  getStructuredResume(): string;
  setStructuredResume(value: string): void;

  getResumeType(): Resume.ResumeTypeMap[keyof Resume.ResumeTypeMap];
  setResumeType(value: Resume.ResumeTypeMap[keyof Resume.ResumeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resume.AsObject;
  static toObject(includeInstance: boolean, msg: Resume): Resume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resume;
  static deserializeBinaryFromReader(message: Resume, reader: jspb.BinaryReader): Resume;
}

export namespace Resume {
  export type AsObject = {
    structuredResume: string,
    resumeType: Resume.ResumeTypeMap[keyof Resume.ResumeTypeMap],
  }

  export interface ResumeTypeMap {
    RESUME_TYPE_UNSPECIFIED: 0;
    HRXML: 1;
    OTHER_RESUME_TYPE: 2;
  }

  export const ResumeType: ResumeTypeMap;
}

export class PersonName extends jspb.Message {
  hasFormattedName(): boolean;
  clearFormattedName(): void;
  getFormattedName(): string;
  setFormattedName(value: string): void;

  hasStructuredName(): boolean;
  clearStructuredName(): void;
  getStructuredName(): PersonName.PersonStructuredName | undefined;
  setStructuredName(value?: PersonName.PersonStructuredName): void;

  getPreferredName(): string;
  setPreferredName(value: string): void;

  getPersonNameCase(): PersonName.PersonNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonName.AsObject;
  static toObject(includeInstance: boolean, msg: PersonName): PersonName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonName;
  static deserializeBinaryFromReader(message: PersonName, reader: jspb.BinaryReader): PersonName;
}

export namespace PersonName {
  export type AsObject = {
    formattedName: string,
    structuredName?: PersonName.PersonStructuredName.AsObject,
    preferredName: string,
  }

  export class PersonStructuredName extends jspb.Message {
    getGivenName(): string;
    setGivenName(value: string): void;

    getPreferredName(): string;
    setPreferredName(value: string): void;

    getMiddleInitial(): string;
    setMiddleInitial(value: string): void;

    getFamilyName(): string;
    setFamilyName(value: string): void;

    clearSuffixesList(): void;
    getSuffixesList(): Array<string>;
    setSuffixesList(value: Array<string>): void;
    addSuffixes(value: string, index?: number): string;

    clearPrefixesList(): void;
    getPrefixesList(): Array<string>;
    setPrefixesList(value: Array<string>): void;
    addPrefixes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonStructuredName.AsObject;
    static toObject(includeInstance: boolean, msg: PersonStructuredName): PersonStructuredName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonStructuredName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonStructuredName;
    static deserializeBinaryFromReader(message: PersonStructuredName, reader: jspb.BinaryReader): PersonStructuredName;
  }

  export namespace PersonStructuredName {
    export type AsObject = {
      givenName: string,
      preferredName: string,
      middleInitial: string,
      familyName: string,
      suffixesList: Array<string>,
      prefixesList: Array<string>,
    }
  }

  export enum PersonNameCase {
    PERSON_NAME_NOT_SET = 0,
    FORMATTED_NAME = 1,
    STRUCTURED_NAME = 2,
  }
}

export class Address extends jspb.Message {
  getUsage(): google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap];
  setUsage(value: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap]): void;

  hasUnstructuredAddress(): boolean;
  clearUnstructuredAddress(): void;
  getUnstructuredAddress(): string;
  setUnstructuredAddress(value: string): void;

  hasStructuredAddress(): boolean;
  clearStructuredAddress(): void;
  getStructuredAddress(): google_type_postal_address_pb.PostalAddress | undefined;
  setStructuredAddress(value?: google_type_postal_address_pb.PostalAddress): void;

  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCurrent(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getAddressCase(): Address.AddressCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    usage: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap],
    unstructuredAddress: string,
    structuredAddress?: google_type_postal_address_pb.PostalAddress.AsObject,
    current?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }

  export enum AddressCase {
    ADDRESS_NOT_SET = 0,
    UNSTRUCTURED_ADDRESS = 2,
    STRUCTURED_ADDRESS = 3,
  }
}

export class Email extends jspb.Message {
  getUsage(): google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap];
  setUsage(value: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap]): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    usage: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap],
    emailAddress: string,
  }
}

export class Phone extends jspb.Message {
  getUsage(): google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap];
  setUsage(value: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap]): void;

  getType(): Phone.PhoneTypeMap[keyof Phone.PhoneTypeMap];
  setType(value: Phone.PhoneTypeMap[keyof Phone.PhoneTypeMap]): void;

  getNumber(): string;
  setNumber(value: string): void;

  getWhenAvailable(): string;
  setWhenAvailable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Phone.AsObject;
  static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Phone;
  static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
}

export namespace Phone {
  export type AsObject = {
    usage: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap],
    type: Phone.PhoneTypeMap[keyof Phone.PhoneTypeMap],
    number: string,
    whenAvailable: string,
  }

  export interface PhoneTypeMap {
    PHONE_TYPE_UNSPECIFIED: 0;
    LANDLINE: 1;
    MOBILE: 2;
    FAX: 3;
    PAGER: 4;
    TTY_OR_TDD: 5;
    VOICEMAIL: 6;
    VIRTUAL: 7;
    VOIP: 8;
    MOBILE_OR_LANDLINE: 9;
  }

  export const PhoneType: PhoneTypeMap;
}

export class PersonalUri extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalUri.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalUri): PersonalUri.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonalUri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalUri;
  static deserializeBinaryFromReader(message: PersonalUri, reader: jspb.BinaryReader): PersonalUri;
}

export namespace PersonalUri {
  export type AsObject = {
    uri: string,
  }
}

export class AdditionalContactInfo extends jspb.Message {
  getUsage(): google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap];
  setUsage(value: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap]): void;

  getName(): string;
  setName(value: string): void;

  getContactId(): string;
  setContactId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalContactInfo): AdditionalContactInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdditionalContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalContactInfo;
  static deserializeBinaryFromReader(message: AdditionalContactInfo, reader: jspb.BinaryReader): AdditionalContactInfo;
}

export namespace AdditionalContactInfo {
  export type AsObject = {
    usage: google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap[keyof google_cloud_talent_v4beta1_common_pb.ContactInfoUsageMap],
    name: string,
    contactId: string,
  }
}

export class EmploymentRecord extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_type_date_pb.Date | undefined;
  setStartDate(value?: google_type_date_pb.Date): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_type_date_pb.Date | undefined;
  setEndDate(value?: google_type_date_pb.Date): void;

  getEmployerName(): string;
  setEmployerName(value: string): void;

  getDivisionName(): string;
  setDivisionName(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  getJobTitle(): string;
  setJobTitle(value: string): void;

  getJobDescription(): string;
  setJobDescription(value: string): void;

  hasIsSupervisor(): boolean;
  clearIsSupervisor(): void;
  getIsSupervisor(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsSupervisor(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasIsSelfEmployed(): boolean;
  clearIsSelfEmployed(): void;
  getIsSelfEmployed(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsSelfEmployed(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasIsCurrent(): boolean;
  clearIsCurrent(): void;
  getIsCurrent(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsCurrent(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getJobTitleSnippet(): string;
  setJobTitleSnippet(value: string): void;

  getJobDescriptionSnippet(): string;
  setJobDescriptionSnippet(value: string): void;

  getEmployerNameSnippet(): string;
  setEmployerNameSnippet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmploymentRecord.AsObject;
  static toObject(includeInstance: boolean, msg: EmploymentRecord): EmploymentRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmploymentRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmploymentRecord;
  static deserializeBinaryFromReader(message: EmploymentRecord, reader: jspb.BinaryReader): EmploymentRecord;
}

export namespace EmploymentRecord {
  export type AsObject = {
    startDate?: google_type_date_pb.Date.AsObject,
    endDate?: google_type_date_pb.Date.AsObject,
    employerName: string,
    divisionName: string,
    address?: Address.AsObject,
    jobTitle: string,
    jobDescription: string,
    isSupervisor?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    isSelfEmployed?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    isCurrent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    jobTitleSnippet: string,
    jobDescriptionSnippet: string,
    employerNameSnippet: string,
  }
}

export class EducationRecord extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_type_date_pb.Date | undefined;
  setStartDate(value?: google_type_date_pb.Date): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_type_date_pb.Date | undefined;
  setEndDate(value?: google_type_date_pb.Date): void;

  hasExpectedGraduationDate(): boolean;
  clearExpectedGraduationDate(): void;
  getExpectedGraduationDate(): google_type_date_pb.Date | undefined;
  setExpectedGraduationDate(value?: google_type_date_pb.Date): void;

  getSchoolName(): string;
  setSchoolName(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  hasDegreeDescription(): boolean;
  clearDegreeDescription(): void;
  getDegreeDescription(): string;
  setDegreeDescription(value: string): void;

  hasStructuredDegree(): boolean;
  clearStructuredDegree(): void;
  getStructuredDegree(): Degree | undefined;
  setStructuredDegree(value?: Degree): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasIsCurrent(): boolean;
  clearIsCurrent(): void;
  getIsCurrent(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsCurrent(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getSchoolNameSnippet(): string;
  setSchoolNameSnippet(value: string): void;

  getDegreeSnippet(): string;
  setDegreeSnippet(value: string): void;

  getDegreeCase(): EducationRecord.DegreeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EducationRecord.AsObject;
  static toObject(includeInstance: boolean, msg: EducationRecord): EducationRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EducationRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EducationRecord;
  static deserializeBinaryFromReader(message: EducationRecord, reader: jspb.BinaryReader): EducationRecord;
}

export namespace EducationRecord {
  export type AsObject = {
    startDate?: google_type_date_pb.Date.AsObject,
    endDate?: google_type_date_pb.Date.AsObject,
    expectedGraduationDate?: google_type_date_pb.Date.AsObject,
    schoolName: string,
    address?: Address.AsObject,
    degreeDescription: string,
    structuredDegree?: Degree.AsObject,
    description: string,
    isCurrent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    schoolNameSnippet: string,
    degreeSnippet: string,
  }

  export enum DegreeCase {
    DEGREE_NOT_SET = 0,
    DEGREE_DESCRIPTION = 6,
    STRUCTURED_DEGREE = 7,
  }
}

export class Degree extends jspb.Message {
  getDegreeType(): google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap];
  setDegreeType(value: google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap]): void;

  getDegreeName(): string;
  setDegreeName(value: string): void;

  clearFieldsOfStudyList(): void;
  getFieldsOfStudyList(): Array<string>;
  setFieldsOfStudyList(value: Array<string>): void;
  addFieldsOfStudy(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Degree.AsObject;
  static toObject(includeInstance: boolean, msg: Degree): Degree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Degree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Degree;
  static deserializeBinaryFromReader(message: Degree, reader: jspb.BinaryReader): Degree;
}

export namespace Degree {
  export type AsObject = {
    degreeType: google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap],
    degreeName: string,
    fieldsOfStudyList: Array<string>,
  }
}

export class Activity extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_type_date_pb.Date | undefined;
  setCreateDate(value?: google_type_date_pb.Date): void;

  hasUpdateDate(): boolean;
  clearUpdateDate(): void;
  getUpdateDate(): google_type_date_pb.Date | undefined;
  setUpdateDate(value?: google_type_date_pb.Date): void;

  clearTeamMembersList(): void;
  getTeamMembersList(): Array<string>;
  setTeamMembersList(value: Array<string>): void;
  addTeamMembers(value: string, index?: number): string;

  clearSkillsUsedList(): void;
  getSkillsUsedList(): Array<google_cloud_talent_v4beta1_common_pb.Skill>;
  setSkillsUsedList(value: Array<google_cloud_talent_v4beta1_common_pb.Skill>): void;
  addSkillsUsed(value?: google_cloud_talent_v4beta1_common_pb.Skill, index?: number): google_cloud_talent_v4beta1_common_pb.Skill;

  getActivityNameSnippet(): string;
  setActivityNameSnippet(value: string): void;

  getActivityDescriptionSnippet(): string;
  setActivityDescriptionSnippet(value: string): void;

  clearSkillsUsedSnippetList(): void;
  getSkillsUsedSnippetList(): Array<string>;
  setSkillsUsedSnippetList(value: Array<string>): void;
  addSkillsUsedSnippet(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    displayName: string,
    description: string,
    uri: string,
    createDate?: google_type_date_pb.Date.AsObject,
    updateDate?: google_type_date_pb.Date.AsObject,
    teamMembersList: Array<string>,
    skillsUsedList: Array<google_cloud_talent_v4beta1_common_pb.Skill.AsObject>,
    activityNameSnippet: string,
    activityDescriptionSnippet: string,
    skillsUsedSnippetList: Array<string>,
  }
}

export class Publication extends jspb.Message {
  clearAuthorsList(): void;
  getAuthorsList(): Array<string>;
  setAuthorsList(value: Array<string>): void;
  addAuthors(value: string, index?: number): string;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getJournal(): string;
  setJournal(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  getPublisher(): string;
  setPublisher(value: string): void;

  hasPublicationDate(): boolean;
  clearPublicationDate(): void;
  getPublicationDate(): google_type_date_pb.Date | undefined;
  setPublicationDate(value?: google_type_date_pb.Date): void;

  getPublicationType(): string;
  setPublicationType(value: string): void;

  getIsbn(): string;
  setIsbn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Publication.AsObject;
  static toObject(includeInstance: boolean, msg: Publication): Publication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Publication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Publication;
  static deserializeBinaryFromReader(message: Publication, reader: jspb.BinaryReader): Publication;
}

export namespace Publication {
  export type AsObject = {
    authorsList: Array<string>,
    title: string,
    description: string,
    journal: string,
    volume: string,
    publisher: string,
    publicationDate?: google_type_date_pb.Date.AsObject,
    publicationType: string,
    isbn: string,
  }
}

export class Patent extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  clearInventorsList(): void;
  getInventorsList(): Array<string>;
  setInventorsList(value: Array<string>): void;
  addInventors(value: string, index?: number): string;

  getPatentStatus(): string;
  setPatentStatus(value: string): void;

  hasPatentStatusDate(): boolean;
  clearPatentStatusDate(): void;
  getPatentStatusDate(): google_type_date_pb.Date | undefined;
  setPatentStatusDate(value?: google_type_date_pb.Date): void;

  hasPatentFilingDate(): boolean;
  clearPatentFilingDate(): void;
  getPatentFilingDate(): google_type_date_pb.Date | undefined;
  setPatentFilingDate(value?: google_type_date_pb.Date): void;

  getPatentOffice(): string;
  setPatentOffice(value: string): void;

  getPatentNumber(): string;
  setPatentNumber(value: string): void;

  getPatentDescription(): string;
  setPatentDescription(value: string): void;

  clearSkillsUsedList(): void;
  getSkillsUsedList(): Array<google_cloud_talent_v4beta1_common_pb.Skill>;
  setSkillsUsedList(value: Array<google_cloud_talent_v4beta1_common_pb.Skill>): void;
  addSkillsUsed(value?: google_cloud_talent_v4beta1_common_pb.Skill, index?: number): google_cloud_talent_v4beta1_common_pb.Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Patent.AsObject;
  static toObject(includeInstance: boolean, msg: Patent): Patent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Patent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Patent;
  static deserializeBinaryFromReader(message: Patent, reader: jspb.BinaryReader): Patent;
}

export namespace Patent {
  export type AsObject = {
    displayName: string,
    inventorsList: Array<string>,
    patentStatus: string,
    patentStatusDate?: google_type_date_pb.Date.AsObject,
    patentFilingDate?: google_type_date_pb.Date.AsObject,
    patentOffice: string,
    patentNumber: string,
    patentDescription: string,
    skillsUsedList: Array<google_cloud_talent_v4beta1_common_pb.Skill.AsObject>,
  }
}

