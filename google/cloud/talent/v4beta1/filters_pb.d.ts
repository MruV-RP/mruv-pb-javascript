// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/filters.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_date_pb from "../../../../google/type/date_pb";
import * as google_type_latlng_pb from "../../../../google/type/latlng_pb";
import * as google_type_timeofday_pb from "../../../../google/type/timeofday_pb";

export class JobQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getQueryLanguageCode(): string;
  setQueryLanguageCode(value: string): void;

  clearCompaniesList(): void;
  getCompaniesList(): Array<string>;
  setCompaniesList(value: Array<string>): void;
  addCompanies(value: string, index?: number): string;

  clearLocationFiltersList(): void;
  getLocationFiltersList(): Array<LocationFilter>;
  setLocationFiltersList(value: Array<LocationFilter>): void;
  addLocationFilters(value?: LocationFilter, index?: number): LocationFilter;

  clearJobCategoriesList(): void;
  getJobCategoriesList(): Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>;
  setJobCategoriesList(value: Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>): void;
  addJobCategories(value: google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap], index?: number): google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap];

  hasCommuteFilter(): boolean;
  clearCommuteFilter(): void;
  getCommuteFilter(): CommuteFilter | undefined;
  setCommuteFilter(value?: CommuteFilter): void;

  clearCompanyDisplayNamesList(): void;
  getCompanyDisplayNamesList(): Array<string>;
  setCompanyDisplayNamesList(value: Array<string>): void;
  addCompanyDisplayNames(value: string, index?: number): string;

  hasCompensationFilter(): boolean;
  clearCompensationFilter(): void;
  getCompensationFilter(): CompensationFilter | undefined;
  setCompensationFilter(value?: CompensationFilter): void;

  getCustomAttributeFilter(): string;
  setCustomAttributeFilter(value: string): void;

  getDisableSpellCheck(): boolean;
  setDisableSpellCheck(value: boolean): void;

  clearEmploymentTypesList(): void;
  getEmploymentTypesList(): Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>;
  setEmploymentTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>): void;
  addEmploymentTypes(value: google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap], index?: number): google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap];

  clearLanguageCodesList(): void;
  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): void;
  addLanguageCodes(value: string, index?: number): string;

  hasPublishTimeRange(): boolean;
  clearPublishTimeRange(): void;
  getPublishTimeRange(): google_cloud_talent_v4beta1_common_pb.TimestampRange | undefined;
  setPublishTimeRange(value?: google_cloud_talent_v4beta1_common_pb.TimestampRange): void;

  clearExcludedJobsList(): void;
  getExcludedJobsList(): Array<string>;
  setExcludedJobsList(value: Array<string>): void;
  addExcludedJobs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQuery.AsObject;
  static toObject(includeInstance: boolean, msg: JobQuery): JobQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQuery;
  static deserializeBinaryFromReader(message: JobQuery, reader: jspb.BinaryReader): JobQuery;
}

export namespace JobQuery {
  export type AsObject = {
    query: string,
    queryLanguageCode: string,
    companiesList: Array<string>,
    locationFiltersList: Array<LocationFilter.AsObject>,
    jobCategoriesList: Array<google_cloud_talent_v4beta1_common_pb.JobCategoryMap[keyof google_cloud_talent_v4beta1_common_pb.JobCategoryMap]>,
    commuteFilter?: CommuteFilter.AsObject,
    companyDisplayNamesList: Array<string>,
    compensationFilter?: CompensationFilter.AsObject,
    customAttributeFilter: string,
    disableSpellCheck: boolean,
    employmentTypesList: Array<google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap[keyof google_cloud_talent_v4beta1_common_pb.EmploymentTypeMap]>,
    languageCodesList: Array<string>,
    publishTimeRange?: google_cloud_talent_v4beta1_common_pb.TimestampRange.AsObject,
    excludedJobsList: Array<string>,
  }
}

export class ProfileQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  clearLocationFiltersList(): void;
  getLocationFiltersList(): Array<LocationFilter>;
  setLocationFiltersList(value: Array<LocationFilter>): void;
  addLocationFilters(value?: LocationFilter, index?: number): LocationFilter;

  clearJobTitleFiltersList(): void;
  getJobTitleFiltersList(): Array<JobTitleFilter>;
  setJobTitleFiltersList(value: Array<JobTitleFilter>): void;
  addJobTitleFilters(value?: JobTitleFilter, index?: number): JobTitleFilter;

  clearEmployerFiltersList(): void;
  getEmployerFiltersList(): Array<EmployerFilter>;
  setEmployerFiltersList(value: Array<EmployerFilter>): void;
  addEmployerFilters(value?: EmployerFilter, index?: number): EmployerFilter;

  clearEducationFiltersList(): void;
  getEducationFiltersList(): Array<EducationFilter>;
  setEducationFiltersList(value: Array<EducationFilter>): void;
  addEducationFilters(value?: EducationFilter, index?: number): EducationFilter;

  clearSkillFiltersList(): void;
  getSkillFiltersList(): Array<SkillFilter>;
  setSkillFiltersList(value: Array<SkillFilter>): void;
  addSkillFilters(value?: SkillFilter, index?: number): SkillFilter;

  clearWorkExperienceFilterList(): void;
  getWorkExperienceFilterList(): Array<WorkExperienceFilter>;
  setWorkExperienceFilterList(value: Array<WorkExperienceFilter>): void;
  addWorkExperienceFilter(value?: WorkExperienceFilter, index?: number): WorkExperienceFilter;

  clearTimeFiltersList(): void;
  getTimeFiltersList(): Array<TimeFilter>;
  setTimeFiltersList(value: Array<TimeFilter>): void;
  addTimeFilters(value?: TimeFilter, index?: number): TimeFilter;

  hasHirableFilter(): boolean;
  clearHirableFilter(): void;
  getHirableFilter(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHirableFilter(value?: google_protobuf_wrappers_pb.BoolValue): void;

  clearApplicationDateFiltersList(): void;
  getApplicationDateFiltersList(): Array<ApplicationDateFilter>;
  setApplicationDateFiltersList(value: Array<ApplicationDateFilter>): void;
  addApplicationDateFilters(value?: ApplicationDateFilter, index?: number): ApplicationDateFilter;

  clearApplicationOutcomeNotesFiltersList(): void;
  getApplicationOutcomeNotesFiltersList(): Array<ApplicationOutcomeNotesFilter>;
  setApplicationOutcomeNotesFiltersList(value: Array<ApplicationOutcomeNotesFilter>): void;
  addApplicationOutcomeNotesFilters(value?: ApplicationOutcomeNotesFilter, index?: number): ApplicationOutcomeNotesFilter;

  clearApplicationJobFiltersList(): void;
  getApplicationJobFiltersList(): Array<ApplicationJobFilter>;
  setApplicationJobFiltersList(value: Array<ApplicationJobFilter>): void;
  addApplicationJobFilters(value?: ApplicationJobFilter, index?: number): ApplicationJobFilter;

  getCustomAttributeFilter(): string;
  setCustomAttributeFilter(value: string): void;

  hasCandidateAvailabilityFilter(): boolean;
  clearCandidateAvailabilityFilter(): void;
  getCandidateAvailabilityFilter(): CandidateAvailabilityFilter | undefined;
  setCandidateAvailabilityFilter(value?: CandidateAvailabilityFilter): void;

  clearAvailabilityFiltersList(): void;
  getAvailabilityFiltersList(): Array<AvailabilityFilter>;
  setAvailabilityFiltersList(value: Array<AvailabilityFilter>): void;
  addAvailabilityFilters(value?: AvailabilityFilter, index?: number): AvailabilityFilter;

  clearPersonNameFiltersList(): void;
  getPersonNameFiltersList(): Array<PersonNameFilter>;
  setPersonNameFiltersList(value: Array<PersonNameFilter>): void;
  addPersonNameFilters(value?: PersonNameFilter, index?: number): PersonNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileQuery): ProfileQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileQuery;
  static deserializeBinaryFromReader(message: ProfileQuery, reader: jspb.BinaryReader): ProfileQuery;
}

export namespace ProfileQuery {
  export type AsObject = {
    query: string,
    locationFiltersList: Array<LocationFilter.AsObject>,
    jobTitleFiltersList: Array<JobTitleFilter.AsObject>,
    employerFiltersList: Array<EmployerFilter.AsObject>,
    educationFiltersList: Array<EducationFilter.AsObject>,
    skillFiltersList: Array<SkillFilter.AsObject>,
    workExperienceFilterList: Array<WorkExperienceFilter.AsObject>,
    timeFiltersList: Array<TimeFilter.AsObject>,
    hirableFilter?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    applicationDateFiltersList: Array<ApplicationDateFilter.AsObject>,
    applicationOutcomeNotesFiltersList: Array<ApplicationOutcomeNotesFilter.AsObject>,
    applicationJobFiltersList: Array<ApplicationJobFilter.AsObject>,
    customAttributeFilter: string,
    candidateAvailabilityFilter?: CandidateAvailabilityFilter.AsObject,
    availabilityFiltersList: Array<AvailabilityFilter.AsObject>,
    personNameFiltersList: Array<PersonNameFilter.AsObject>,
  }
}

export class LocationFilter extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getRegionCode(): string;
  setRegionCode(value: string): void;

  hasLatLng(): boolean;
  clearLatLng(): void;
  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): void;

  getDistanceInMiles(): number;
  setDistanceInMiles(value: number): void;

  getTelecommutePreference(): LocationFilter.TelecommutePreferenceMap[keyof LocationFilter.TelecommutePreferenceMap];
  setTelecommutePreference(value: LocationFilter.TelecommutePreferenceMap[keyof LocationFilter.TelecommutePreferenceMap]): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LocationFilter): LocationFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationFilter;
  static deserializeBinaryFromReader(message: LocationFilter, reader: jspb.BinaryReader): LocationFilter;
}

export namespace LocationFilter {
  export type AsObject = {
    address: string,
    regionCode: string,
    latLng?: google_type_latlng_pb.LatLng.AsObject,
    distanceInMiles: number,
    telecommutePreference: LocationFilter.TelecommutePreferenceMap[keyof LocationFilter.TelecommutePreferenceMap],
    negated: boolean,
  }

  export interface TelecommutePreferenceMap {
    TELECOMMUTE_PREFERENCE_UNSPECIFIED: 0;
    TELECOMMUTE_EXCLUDED: 1;
    TELECOMMUTE_ALLOWED: 2;
  }

  export const TelecommutePreference: TelecommutePreferenceMap;
}

export class CompensationFilter extends jspb.Message {
  getType(): CompensationFilter.FilterTypeMap[keyof CompensationFilter.FilterTypeMap];
  setType(value: CompensationFilter.FilterTypeMap[keyof CompensationFilter.FilterTypeMap]): void;

  clearUnitsList(): void;
  getUnitsList(): Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap[keyof google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap]>;
  setUnitsList(value: Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap[keyof google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap]>): void;
  addUnits(value: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap[keyof google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap], index?: number): google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap[keyof google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap];

  hasRange(): boolean;
  clearRange(): void;
  getRange(): google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange | undefined;
  setRange(value?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange): void;

  getIncludeJobsWithUnspecifiedCompensationRange(): boolean;
  setIncludeJobsWithUnspecifiedCompensationRange(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompensationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CompensationFilter): CompensationFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompensationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompensationFilter;
  static deserializeBinaryFromReader(message: CompensationFilter, reader: jspb.BinaryReader): CompensationFilter;
}

export namespace CompensationFilter {
  export type AsObject = {
    type: CompensationFilter.FilterTypeMap[keyof CompensationFilter.FilterTypeMap],
    unitsList: Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap[keyof google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnitMap]>,
    range?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange.AsObject,
    includeJobsWithUnspecifiedCompensationRange: boolean,
  }

  export interface FilterTypeMap {
    FILTER_TYPE_UNSPECIFIED: 0;
    UNIT_ONLY: 1;
    UNIT_AND_AMOUNT: 2;
    ANNUALIZED_BASE_AMOUNT: 3;
    ANNUALIZED_TOTAL_AMOUNT: 4;
  }

  export const FilterType: FilterTypeMap;
}

export class CommuteFilter extends jspb.Message {
  getCommuteMethod(): google_cloud_talent_v4beta1_common_pb.CommuteMethodMap[keyof google_cloud_talent_v4beta1_common_pb.CommuteMethodMap];
  setCommuteMethod(value: google_cloud_talent_v4beta1_common_pb.CommuteMethodMap[keyof google_cloud_talent_v4beta1_common_pb.CommuteMethodMap]): void;

  hasStartCoordinates(): boolean;
  clearStartCoordinates(): void;
  getStartCoordinates(): google_type_latlng_pb.LatLng | undefined;
  setStartCoordinates(value?: google_type_latlng_pb.LatLng): void;

  hasTravelDuration(): boolean;
  clearTravelDuration(): void;
  getTravelDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTravelDuration(value?: google_protobuf_duration_pb.Duration): void;

  getAllowImpreciseAddresses(): boolean;
  setAllowImpreciseAddresses(value: boolean): void;

  hasRoadTraffic(): boolean;
  clearRoadTraffic(): void;
  getRoadTraffic(): CommuteFilter.RoadTrafficMap[keyof CommuteFilter.RoadTrafficMap];
  setRoadTraffic(value: CommuteFilter.RoadTrafficMap[keyof CommuteFilter.RoadTrafficMap]): void;

  hasDepartureTime(): boolean;
  clearDepartureTime(): void;
  getDepartureTime(): google_type_timeofday_pb.TimeOfDay | undefined;
  setDepartureTime(value?: google_type_timeofday_pb.TimeOfDay): void;

  getTrafficOptionCase(): CommuteFilter.TrafficOptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommuteFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CommuteFilter): CommuteFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommuteFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommuteFilter;
  static deserializeBinaryFromReader(message: CommuteFilter, reader: jspb.BinaryReader): CommuteFilter;
}

export namespace CommuteFilter {
  export type AsObject = {
    commuteMethod: google_cloud_talent_v4beta1_common_pb.CommuteMethodMap[keyof google_cloud_talent_v4beta1_common_pb.CommuteMethodMap],
    startCoordinates?: google_type_latlng_pb.LatLng.AsObject,
    travelDuration?: google_protobuf_duration_pb.Duration.AsObject,
    allowImpreciseAddresses: boolean,
    roadTraffic: CommuteFilter.RoadTrafficMap[keyof CommuteFilter.RoadTrafficMap],
    departureTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
  }

  export interface RoadTrafficMap {
    ROAD_TRAFFIC_UNSPECIFIED: 0;
    TRAFFIC_FREE: 1;
    BUSY_HOUR: 2;
  }

  export const RoadTraffic: RoadTrafficMap;

  export enum TrafficOptionCase {
    TRAFFIC_OPTION_NOT_SET = 0,
    ROAD_TRAFFIC = 5,
    DEPARTURE_TIME = 6,
  }
}

export class JobTitleFilter extends jspb.Message {
  getJobTitle(): string;
  setJobTitle(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobTitleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: JobTitleFilter): JobTitleFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobTitleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobTitleFilter;
  static deserializeBinaryFromReader(message: JobTitleFilter, reader: jspb.BinaryReader): JobTitleFilter;
}

export namespace JobTitleFilter {
  export type AsObject = {
    jobTitle: string,
    negated: boolean,
  }
}

export class SkillFilter extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SkillFilter): SkillFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillFilter;
  static deserializeBinaryFromReader(message: SkillFilter, reader: jspb.BinaryReader): SkillFilter;
}

export namespace SkillFilter {
  export type AsObject = {
    skill: string,
    negated: boolean,
  }
}

export class EmployerFilter extends jspb.Message {
  getEmployer(): string;
  setEmployer(value: string): void;

  getMode(): EmployerFilter.EmployerFilterModeMap[keyof EmployerFilter.EmployerFilterModeMap];
  setMode(value: EmployerFilter.EmployerFilterModeMap[keyof EmployerFilter.EmployerFilterModeMap]): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmployerFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EmployerFilter): EmployerFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmployerFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmployerFilter;
  static deserializeBinaryFromReader(message: EmployerFilter, reader: jspb.BinaryReader): EmployerFilter;
}

export namespace EmployerFilter {
  export type AsObject = {
    employer: string,
    mode: EmployerFilter.EmployerFilterModeMap[keyof EmployerFilter.EmployerFilterModeMap],
    negated: boolean,
  }

  export interface EmployerFilterModeMap {
    EMPLOYER_FILTER_MODE_UNSPECIFIED: 0;
    ALL_EMPLOYMENT_RECORDS: 1;
    CURRENT_EMPLOYMENT_RECORDS_ONLY: 2;
    PAST_EMPLOYMENT_RECORDS_ONLY: 3;
  }

  export const EmployerFilterMode: EmployerFilterModeMap;
}

export class EducationFilter extends jspb.Message {
  getSchool(): string;
  setSchool(value: string): void;

  getFieldOfStudy(): string;
  setFieldOfStudy(value: string): void;

  getDegreeType(): google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap];
  setDegreeType(value: google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap]): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EducationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EducationFilter): EducationFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EducationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EducationFilter;
  static deserializeBinaryFromReader(message: EducationFilter, reader: jspb.BinaryReader): EducationFilter;
}

export namespace EducationFilter {
  export type AsObject = {
    school: string,
    fieldOfStudy: string,
    degreeType: google_cloud_talent_v4beta1_common_pb.DegreeTypeMap[keyof google_cloud_talent_v4beta1_common_pb.DegreeTypeMap],
    negated: boolean,
  }
}

export class WorkExperienceFilter extends jspb.Message {
  hasMinExperience(): boolean;
  clearMinExperience(): void;
  getMinExperience(): google_protobuf_duration_pb.Duration | undefined;
  setMinExperience(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxExperience(): boolean;
  clearMaxExperience(): void;
  getMaxExperience(): google_protobuf_duration_pb.Duration | undefined;
  setMaxExperience(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkExperienceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: WorkExperienceFilter): WorkExperienceFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkExperienceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkExperienceFilter;
  static deserializeBinaryFromReader(message: WorkExperienceFilter, reader: jspb.BinaryReader): WorkExperienceFilter;
}

export namespace WorkExperienceFilter {
  export type AsObject = {
    minExperience?: google_protobuf_duration_pb.Duration.AsObject,
    maxExperience?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ApplicationDateFilter extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_type_date_pb.Date | undefined;
  setStartDate(value?: google_type_date_pb.Date): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_type_date_pb.Date | undefined;
  setEndDate(value?: google_type_date_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationDateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationDateFilter): ApplicationDateFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationDateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationDateFilter;
  static deserializeBinaryFromReader(message: ApplicationDateFilter, reader: jspb.BinaryReader): ApplicationDateFilter;
}

export namespace ApplicationDateFilter {
  export type AsObject = {
    startDate?: google_type_date_pb.Date.AsObject,
    endDate?: google_type_date_pb.Date.AsObject,
  }
}

export class ApplicationOutcomeNotesFilter extends jspb.Message {
  getOutcomeNotes(): string;
  setOutcomeNotes(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationOutcomeNotesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationOutcomeNotesFilter): ApplicationOutcomeNotesFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationOutcomeNotesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationOutcomeNotesFilter;
  static deserializeBinaryFromReader(message: ApplicationOutcomeNotesFilter, reader: jspb.BinaryReader): ApplicationOutcomeNotesFilter;
}

export namespace ApplicationOutcomeNotesFilter {
  export type AsObject = {
    outcomeNotes: string,
    negated: boolean,
  }
}

export class ApplicationJobFilter extends jspb.Message {
  getJobRequisitionId(): string;
  setJobRequisitionId(value: string): void;

  getJobTitle(): string;
  setJobTitle(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationJobFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationJobFilter): ApplicationJobFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationJobFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationJobFilter;
  static deserializeBinaryFromReader(message: ApplicationJobFilter, reader: jspb.BinaryReader): ApplicationJobFilter;
}

export namespace ApplicationJobFilter {
  export type AsObject = {
    jobRequisitionId: string,
    jobTitle: string,
    negated: boolean,
  }
}

export class TimeFilter extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeField(): TimeFilter.TimeFieldMap[keyof TimeFilter.TimeFieldMap];
  setTimeField(value: TimeFilter.TimeFieldMap[keyof TimeFilter.TimeFieldMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilter): TimeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilter;
  static deserializeBinaryFromReader(message: TimeFilter, reader: jspb.BinaryReader): TimeFilter;
}

export namespace TimeFilter {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeField: TimeFilter.TimeFieldMap[keyof TimeFilter.TimeFieldMap],
  }

  export interface TimeFieldMap {
    TIME_FIELD_UNSPECIFIED: 0;
    CREATE_TIME: 1;
    UPDATE_TIME: 2;
  }

  export const TimeField: TimeFieldMap;
}

export class CandidateAvailabilityFilter extends jspb.Message {
  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateAvailabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateAvailabilityFilter): CandidateAvailabilityFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandidateAvailabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateAvailabilityFilter;
  static deserializeBinaryFromReader(message: CandidateAvailabilityFilter, reader: jspb.BinaryReader): CandidateAvailabilityFilter;
}

export namespace CandidateAvailabilityFilter {
  export type AsObject = {
    negated: boolean,
  }
}

export class AvailabilityFilter extends jspb.Message {
  getSignalType(): google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap];
  setSignalType(value: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap]): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): google_cloud_talent_v4beta1_common_pb.TimestampRange | undefined;
  setRange(value?: google_cloud_talent_v4beta1_common_pb.TimestampRange): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityFilter): AvailabilityFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityFilter;
  static deserializeBinaryFromReader(message: AvailabilityFilter, reader: jspb.BinaryReader): AvailabilityFilter;
}

export namespace AvailabilityFilter {
  export type AsObject = {
    signalType: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap[keyof google_cloud_talent_v4beta1_common_pb.AvailabilitySignalTypeMap],
    range?: google_cloud_talent_v4beta1_common_pb.TimestampRange.AsObject,
    required: boolean,
  }
}

export class PersonNameFilter extends jspb.Message {
  getPersonName(): string;
  setPersonName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PersonNameFilter): PersonNameFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonNameFilter;
  static deserializeBinaryFromReader(message: PersonNameFilter, reader: jspb.BinaryReader): PersonNameFilter;
}

export namespace PersonNameFilter {
  export type AsObject = {
    personName: string,
  }
}

