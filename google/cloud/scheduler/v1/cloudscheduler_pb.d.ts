// package: google.cloud.scheduler.v1
// file: google/cloud/scheduler/v1/cloudscheduler.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_scheduler_v1_job_pb from "../../../../google/cloud/scheduler/v1/job_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<google_cloud_scheduler_v1_job_pb.Job>;
  setJobsList(value: Array<google_cloud_scheduler_v1_job_pb.Job>): void;
  addJobs(value?: google_cloud_scheduler_v1_job_pb.Job, index?: number): google_cloud_scheduler_v1_job_pb.Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<google_cloud_scheduler_v1_job_pb.Job.AsObject>,
    nextPageToken: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_cloud_scheduler_v1_job_pb.Job | undefined;
  setJob(value?: google_cloud_scheduler_v1_job_pb.Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    parent: string,
    job?: google_cloud_scheduler_v1_job_pb.Job.AsObject,
  }
}

export class UpdateJobRequest extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_cloud_scheduler_v1_job_pb.Job | undefined;
  setJob(value?: google_cloud_scheduler_v1_job_pb.Job): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
  static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
  export type AsObject = {
    job?: google_cloud_scheduler_v1_job_pb.Job.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteJobRequest): DeleteJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteJobRequest;
  static deserializeBinaryFromReader(message: DeleteJobRequest, reader: jspb.BinaryReader): DeleteJobRequest;
}

export namespace DeleteJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class PauseJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseJobRequest): PauseJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseJobRequest;
  static deserializeBinaryFromReader(message: PauseJobRequest, reader: jspb.BinaryReader): PauseJobRequest;
}

export namespace PauseJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResumeJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeJobRequest): ResumeJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeJobRequest;
  static deserializeBinaryFromReader(message: ResumeJobRequest, reader: jspb.BinaryReader): ResumeJobRequest;
}

export namespace ResumeJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class RunJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunJobRequest): RunJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunJobRequest;
  static deserializeBinaryFromReader(message: RunJobRequest, reader: jspb.BinaryReader): RunJobRequest;
}

export namespace RunJobRequest {
  export type AsObject = {
    name: string,
  }
}

