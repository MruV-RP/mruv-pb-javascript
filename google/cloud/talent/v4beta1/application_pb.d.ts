// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/application.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_date_pb from "../../../../google/type/date_pb";

export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getProfile(): string;
  setProfile(value: string): void;

  getJob(): string;
  setJob(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  hasApplicationDate(): boolean;
  clearApplicationDate(): void;
  getApplicationDate(): google_type_date_pb.Date | undefined;
  setApplicationDate(value?: google_type_date_pb.Date): void;

  getStage(): Application.ApplicationStageMap[keyof Application.ApplicationStageMap];
  setStage(value: Application.ApplicationStageMap[keyof Application.ApplicationStageMap]): void;

  getState(): Application.ApplicationStateMap[keyof Application.ApplicationStateMap];
  setState(value: Application.ApplicationStateMap[keyof Application.ApplicationStateMap]): void;

  clearInterviewsList(): void;
  getInterviewsList(): Array<google_cloud_talent_v4beta1_common_pb.Interview>;
  setInterviewsList(value: Array<google_cloud_talent_v4beta1_common_pb.Interview>): void;
  addInterviews(value?: google_cloud_talent_v4beta1_common_pb.Interview, index?: number): google_cloud_talent_v4beta1_common_pb.Interview;

  hasReferral(): boolean;
  clearReferral(): void;
  getReferral(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setReferral(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOutcomeNotes(): string;
  setOutcomeNotes(value: string): void;

  getOutcome(): google_cloud_talent_v4beta1_common_pb.OutcomeMap[keyof google_cloud_talent_v4beta1_common_pb.OutcomeMap];
  setOutcome(value: google_cloud_talent_v4beta1_common_pb.OutcomeMap[keyof google_cloud_talent_v4beta1_common_pb.OutcomeMap]): void;

  hasIsMatch(): boolean;
  clearIsMatch(): void;
  getIsMatch(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsMatch(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getJobTitleSnippet(): string;
  setJobTitleSnippet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    externalId: string,
    profile: string,
    job: string,
    company: string,
    applicationDate?: google_type_date_pb.Date.AsObject,
    stage: Application.ApplicationStageMap[keyof Application.ApplicationStageMap],
    state: Application.ApplicationStateMap[keyof Application.ApplicationStateMap],
    interviewsList: Array<google_cloud_talent_v4beta1_common_pb.Interview.AsObject>,
    referral?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outcomeNotes: string,
    outcome: google_cloud_talent_v4beta1_common_pb.OutcomeMap[keyof google_cloud_talent_v4beta1_common_pb.OutcomeMap],
    isMatch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    jobTitleSnippet: string,
  }

  export interface ApplicationStateMap {
    APPLICATION_STATE_UNSPECIFIED: 0;
    IN_PROGRESS: 1;
    CANDIDATE_WITHDREW: 2;
    EMPLOYER_WITHDREW: 3;
    COMPLETED: 4;
    CLOSED: 5;
  }

  export const ApplicationState: ApplicationStateMap;

  export interface ApplicationStageMap {
    APPLICATION_STAGE_UNSPECIFIED: 0;
    NEW: 1;
    SCREEN: 2;
    HIRING_MANAGER_REVIEW: 3;
    INTERVIEW: 4;
    OFFER_EXTENDED: 5;
    OFFER_ACCEPTED: 6;
    STARTED: 7;
  }

  export const ApplicationStage: ApplicationStageMap;
}

