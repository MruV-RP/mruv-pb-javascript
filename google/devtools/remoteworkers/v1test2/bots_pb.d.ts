// package: google.devtools.remoteworkers.v1test2
// file: google/devtools/remoteworkers/v1test2/bots.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_devtools_remoteworkers_v1test2_worker_pb from "../../../../google/devtools/remoteworkers/v1test2/worker_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class BotSession extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBotId(): string;
  setBotId(value: string): void;

  getStatus(): BotStatusMap[keyof BotStatusMap];
  setStatus(value: BotStatusMap[keyof BotStatusMap]): void;

  hasWorker(): boolean;
  clearWorker(): void;
  getWorker(): google_devtools_remoteworkers_v1test2_worker_pb.Worker | undefined;
  setWorker(value?: google_devtools_remoteworkers_v1test2_worker_pb.Worker): void;

  clearLeasesList(): void;
  getLeasesList(): Array<Lease>;
  setLeasesList(value: Array<Lease>): void;
  addLeases(value?: Lease, index?: number): Lease;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BotSession.AsObject;
  static toObject(includeInstance: boolean, msg: BotSession): BotSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BotSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BotSession;
  static deserializeBinaryFromReader(message: BotSession, reader: jspb.BinaryReader): BotSession;
}

export namespace BotSession {
  export type AsObject = {
    name: string,
    botId: string,
    status: BotStatusMap[keyof BotStatusMap],
    worker?: google_devtools_remoteworkers_v1test2_worker_pb.Worker.AsObject,
    leasesList: Array<Lease.AsObject>,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: string,
  }
}

export class Lease extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_any_pb.Any | undefined;
  setResult(value?: google_protobuf_any_pb.Any): void;

  getState(): LeaseStateMap[keyof LeaseStateMap];
  setState(value: LeaseStateMap[keyof LeaseStateMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  hasRequirements(): boolean;
  clearRequirements(): void;
  getRequirements(): google_devtools_remoteworkers_v1test2_worker_pb.Worker | undefined;
  setRequirements(value?: google_devtools_remoteworkers_v1test2_worker_pb.Worker): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssignment(): string;
  setAssignment(value: string): void;

  hasInlineAssignment(): boolean;
  clearInlineAssignment(): void;
  getInlineAssignment(): google_protobuf_any_pb.Any | undefined;
  setInlineAssignment(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lease.AsObject;
  static toObject(includeInstance: boolean, msg: Lease): Lease.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Lease, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lease;
  static deserializeBinaryFromReader(message: Lease, reader: jspb.BinaryReader): Lease;
}

export namespace Lease {
  export type AsObject = {
    id: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
    result?: google_protobuf_any_pb.Any.AsObject,
    state: LeaseStateMap[keyof LeaseStateMap],
    status?: google_rpc_status_pb.Status.AsObject,
    requirements?: google_devtools_remoteworkers_v1test2_worker_pb.Worker.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assignment: string,
    inlineAssignment?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class AdminTemp extends jspb.Message {
  getCommand(): AdminTemp.CommandMap[keyof AdminTemp.CommandMap];
  setCommand(value: AdminTemp.CommandMap[keyof AdminTemp.CommandMap]): void;

  getArg(): string;
  setArg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTemp.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTemp): AdminTemp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminTemp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTemp;
  static deserializeBinaryFromReader(message: AdminTemp, reader: jspb.BinaryReader): AdminTemp;
}

export namespace AdminTemp {
  export type AsObject = {
    command: AdminTemp.CommandMap[keyof AdminTemp.CommandMap],
    arg: string,
  }

  export interface CommandMap {
    UNSPECIFIED: 0;
    BOT_UPDATE: 1;
    BOT_RESTART: 2;
    BOT_TERMINATE: 3;
    HOST_RESTART: 4;
  }

  export const Command: CommandMap;
}

export class CreateBotSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasBotSession(): boolean;
  clearBotSession(): void;
  getBotSession(): BotSession | undefined;
  setBotSession(value?: BotSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBotSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBotSessionRequest): CreateBotSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBotSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBotSessionRequest;
  static deserializeBinaryFromReader(message: CreateBotSessionRequest, reader: jspb.BinaryReader): CreateBotSessionRequest;
}

export namespace CreateBotSessionRequest {
  export type AsObject = {
    parent: string,
    botSession?: BotSession.AsObject,
  }
}

export class UpdateBotSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasBotSession(): boolean;
  clearBotSession(): void;
  getBotSession(): BotSession | undefined;
  setBotSession(value?: BotSession): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBotSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBotSessionRequest): UpdateBotSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBotSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBotSessionRequest;
  static deserializeBinaryFromReader(message: UpdateBotSessionRequest, reader: jspb.BinaryReader): UpdateBotSessionRequest;
}

export namespace UpdateBotSessionRequest {
  export type AsObject = {
    name: string,
    botSession?: BotSession.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export interface BotStatusMap {
  BOT_STATUS_UNSPECIFIED: 0;
  OK: 1;
  UNHEALTHY: 2;
  HOST_REBOOTING: 3;
  BOT_TERMINATING: 4;
  INITIALIZING: 5;
}

export const BotStatus: BotStatusMap;

export interface LeaseStateMap {
  LEASE_STATE_UNSPECIFIED: 0;
  PENDING: 1;
  ACTIVE: 2;
  COMPLETED: 4;
  CANCELLED: 5;
}

export const LeaseState: LeaseStateMap;

