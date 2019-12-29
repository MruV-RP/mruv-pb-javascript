// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/resultstore_upload.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_resultstore_v2_action_pb from "../../../../google/devtools/resultstore/v2/action_pb";
import * as google_devtools_resultstore_v2_configuration_pb from "../../../../google/devtools/resultstore/v2/configuration_pb";
import * as google_devtools_resultstore_v2_configured_target_pb from "../../../../google/devtools/resultstore/v2/configured_target_pb";
import * as google_devtools_resultstore_v2_file_set_pb from "../../../../google/devtools/resultstore/v2/file_set_pb";
import * as google_devtools_resultstore_v2_invocation_pb from "../../../../google/devtools/resultstore/v2/invocation_pb";
import * as google_devtools_resultstore_v2_target_pb from "../../../../google/devtools/resultstore/v2/target_pb";
import * as google_devtools_resultstore_v2_upload_metadata_pb from "../../../../google/devtools/resultstore/v2/upload_metadata_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class CreateInvocationRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getInvocationId(): string;
  setInvocationId(value: string): void;

  hasInvocation(): boolean;
  clearInvocation(): void;
  getInvocation(): google_devtools_resultstore_v2_invocation_pb.Invocation | undefined;
  setInvocation(value?: google_devtools_resultstore_v2_invocation_pb.Invocation): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  hasAutoFinalizeTime(): boolean;
  clearAutoFinalizeTime(): void;
  getAutoFinalizeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAutoFinalizeTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInitialResumeToken(): string;
  setInitialResumeToken(value: string): void;

  getUploaderState(): Uint8Array | string;
  getUploaderState_asU8(): Uint8Array;
  getUploaderState_asB64(): string;
  setUploaderState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvocationRequest): CreateInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvocationRequest;
  static deserializeBinaryFromReader(message: CreateInvocationRequest, reader: jspb.BinaryReader): CreateInvocationRequest;
}

export namespace CreateInvocationRequest {
  export type AsObject = {
    requestId: string,
    invocationId: string,
    invocation?: google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject,
    authorizationToken: string,
    autoFinalizeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    initialResumeToken: string,
    uploaderState: Uint8Array | string,
  }
}

export class UpdateInvocationRequest extends jspb.Message {
  hasInvocation(): boolean;
  clearInvocation(): void;
  getInvocation(): google_devtools_resultstore_v2_invocation_pb.Invocation | undefined;
  setInvocation(value?: google_devtools_resultstore_v2_invocation_pb.Invocation): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvocationRequest): UpdateInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvocationRequest;
  static deserializeBinaryFromReader(message: UpdateInvocationRequest, reader: jspb.BinaryReader): UpdateInvocationRequest;
}

export namespace UpdateInvocationRequest {
  export type AsObject = {
    invocation?: google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
  }
}

export class MergeInvocationRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasInvocation(): boolean;
  clearInvocation(): void;
  getInvocation(): google_devtools_resultstore_v2_invocation_pb.Invocation | undefined;
  setInvocation(value?: google_devtools_resultstore_v2_invocation_pb.Invocation): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeInvocationRequest): MergeInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeInvocationRequest;
  static deserializeBinaryFromReader(message: MergeInvocationRequest, reader: jspb.BinaryReader): MergeInvocationRequest;
}

export namespace MergeInvocationRequest {
  export type AsObject = {
    requestId: string,
    invocation?: google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
  }
}

export class TouchInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TouchInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TouchInvocationRequest): TouchInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TouchInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TouchInvocationRequest;
  static deserializeBinaryFromReader(message: TouchInvocationRequest, reader: jspb.BinaryReader): TouchInvocationRequest;
}

export namespace TouchInvocationRequest {
  export type AsObject = {
    name: string,
    authorizationToken: string,
  }
}

export class TouchInvocationResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_devtools_resultstore_v2_invocation_pb.Invocation.Id | undefined;
  setId(value?: google_devtools_resultstore_v2_invocation_pb.Invocation.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TouchInvocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TouchInvocationResponse): TouchInvocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TouchInvocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TouchInvocationResponse;
  static deserializeBinaryFromReader(message: TouchInvocationResponse, reader: jspb.BinaryReader): TouchInvocationResponse;
}

export namespace TouchInvocationResponse {
  export type AsObject = {
    name: string,
    id?: google_devtools_resultstore_v2_invocation_pb.Invocation.Id.AsObject,
  }
}

export class DeleteInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInvocationRequest): DeleteInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInvocationRequest;
  static deserializeBinaryFromReader(message: DeleteInvocationRequest, reader: jspb.BinaryReader): DeleteInvocationRequest;
}

export namespace DeleteInvocationRequest {
  export type AsObject = {
    name: string,
  }
}

export class FinalizeInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeInvocationRequest): FinalizeInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeInvocationRequest;
  static deserializeBinaryFromReader(message: FinalizeInvocationRequest, reader: jspb.BinaryReader): FinalizeInvocationRequest;
}

export namespace FinalizeInvocationRequest {
  export type AsObject = {
    name: string,
    authorizationToken: string,
  }
}

export class FinalizeInvocationResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_devtools_resultstore_v2_invocation_pb.Invocation.Id | undefined;
  setId(value?: google_devtools_resultstore_v2_invocation_pb.Invocation.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeInvocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeInvocationResponse): FinalizeInvocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeInvocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeInvocationResponse;
  static deserializeBinaryFromReader(message: FinalizeInvocationResponse, reader: jspb.BinaryReader): FinalizeInvocationResponse;
}

export namespace FinalizeInvocationResponse {
  export type AsObject = {
    name: string,
    id?: google_devtools_resultstore_v2_invocation_pb.Invocation.Id.AsObject,
  }
}

export class CreateTargetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): google_devtools_resultstore_v2_target_pb.Target | undefined;
  setTarget(value?: google_devtools_resultstore_v2_target_pb.Target): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTargetRequest): CreateTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTargetRequest;
  static deserializeBinaryFromReader(message: CreateTargetRequest, reader: jspb.BinaryReader): CreateTargetRequest;
}

export namespace CreateTargetRequest {
  export type AsObject = {
    requestId: string,
    parent: string,
    targetId: string,
    target?: google_devtools_resultstore_v2_target_pb.Target.AsObject,
    authorizationToken: string,
  }
}

export class UpdateTargetRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): google_devtools_resultstore_v2_target_pb.Target | undefined;
  setTarget(value?: google_devtools_resultstore_v2_target_pb.Target): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTargetRequest): UpdateTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTargetRequest;
  static deserializeBinaryFromReader(message: UpdateTargetRequest, reader: jspb.BinaryReader): UpdateTargetRequest;
}

export namespace UpdateTargetRequest {
  export type AsObject = {
    target?: google_devtools_resultstore_v2_target_pb.Target.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class MergeTargetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): google_devtools_resultstore_v2_target_pb.Target | undefined;
  setTarget(value?: google_devtools_resultstore_v2_target_pb.Target): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeTargetRequest): MergeTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeTargetRequest;
  static deserializeBinaryFromReader(message: MergeTargetRequest, reader: jspb.BinaryReader): MergeTargetRequest;
}

export namespace MergeTargetRequest {
  export type AsObject = {
    requestId: string,
    target?: google_devtools_resultstore_v2_target_pb.Target.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class FinalizeTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeTargetRequest): FinalizeTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeTargetRequest;
  static deserializeBinaryFromReader(message: FinalizeTargetRequest, reader: jspb.BinaryReader): FinalizeTargetRequest;
}

export namespace FinalizeTargetRequest {
  export type AsObject = {
    name: string,
    authorizationToken: string,
  }
}

export class FinalizeTargetResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_devtools_resultstore_v2_target_pb.Target.Id | undefined;
  setId(value?: google_devtools_resultstore_v2_target_pb.Target.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeTargetResponse): FinalizeTargetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeTargetResponse;
  static deserializeBinaryFromReader(message: FinalizeTargetResponse, reader: jspb.BinaryReader): FinalizeTargetResponse;
}

export namespace FinalizeTargetResponse {
  export type AsObject = {
    name: string,
    id?: google_devtools_resultstore_v2_target_pb.Target.Id.AsObject,
  }
}

export class CreateConfiguredTargetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  hasConfiguredTarget(): boolean;
  clearConfiguredTarget(): void;
  getConfiguredTarget(): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget | undefined;
  setConfiguredTarget(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConfiguredTargetRequest): CreateConfiguredTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: CreateConfiguredTargetRequest, reader: jspb.BinaryReader): CreateConfiguredTargetRequest;
}

export namespace CreateConfiguredTargetRequest {
  export type AsObject = {
    requestId: string,
    parent: string,
    configId: string,
    configuredTarget?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject,
    authorizationToken: string,
  }
}

export class UpdateConfiguredTargetRequest extends jspb.Message {
  hasConfiguredTarget(): boolean;
  clearConfiguredTarget(): void;
  getConfiguredTarget(): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget | undefined;
  setConfiguredTarget(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConfiguredTargetRequest): UpdateConfiguredTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: UpdateConfiguredTargetRequest, reader: jspb.BinaryReader): UpdateConfiguredTargetRequest;
}

export namespace UpdateConfiguredTargetRequest {
  export type AsObject = {
    configuredTarget?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class MergeConfiguredTargetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasConfiguredTarget(): boolean;
  clearConfiguredTarget(): void;
  getConfiguredTarget(): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget | undefined;
  setConfiguredTarget(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeConfiguredTargetRequest): MergeConfiguredTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: MergeConfiguredTargetRequest, reader: jspb.BinaryReader): MergeConfiguredTargetRequest;
}

export namespace MergeConfiguredTargetRequest {
  export type AsObject = {
    requestId: string,
    configuredTarget?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class FinalizeConfiguredTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeConfiguredTargetRequest): FinalizeConfiguredTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: FinalizeConfiguredTargetRequest, reader: jspb.BinaryReader): FinalizeConfiguredTargetRequest;
}

export namespace FinalizeConfiguredTargetRequest {
  export type AsObject = {
    name: string,
    authorizationToken: string,
  }
}

export class FinalizeConfiguredTargetResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id | undefined;
  setId(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeConfiguredTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeConfiguredTargetResponse): FinalizeConfiguredTargetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeConfiguredTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeConfiguredTargetResponse;
  static deserializeBinaryFromReader(message: FinalizeConfiguredTargetResponse, reader: jspb.BinaryReader): FinalizeConfiguredTargetResponse;
}

export namespace FinalizeConfiguredTargetResponse {
  export type AsObject = {
    name: string,
    id?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.Id.AsObject,
  }
}

export class CreateActionRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getActionId(): string;
  setActionId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_devtools_resultstore_v2_action_pb.Action | undefined;
  setAction(value?: google_devtools_resultstore_v2_action_pb.Action): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateActionRequest): CreateActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateActionRequest;
  static deserializeBinaryFromReader(message: CreateActionRequest, reader: jspb.BinaryReader): CreateActionRequest;
}

export namespace CreateActionRequest {
  export type AsObject = {
    requestId: string,
    parent: string,
    actionId: string,
    action?: google_devtools_resultstore_v2_action_pb.Action.AsObject,
    authorizationToken: string,
  }
}

export class UpdateActionRequest extends jspb.Message {
  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_devtools_resultstore_v2_action_pb.Action | undefined;
  setAction(value?: google_devtools_resultstore_v2_action_pb.Action): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActionRequest): UpdateActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActionRequest;
  static deserializeBinaryFromReader(message: UpdateActionRequest, reader: jspb.BinaryReader): UpdateActionRequest;
}

export namespace UpdateActionRequest {
  export type AsObject = {
    action?: google_devtools_resultstore_v2_action_pb.Action.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class MergeActionRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_devtools_resultstore_v2_action_pb.Action | undefined;
  setAction(value?: google_devtools_resultstore_v2_action_pb.Action): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeActionRequest): MergeActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeActionRequest;
  static deserializeBinaryFromReader(message: MergeActionRequest, reader: jspb.BinaryReader): MergeActionRequest;
}

export namespace MergeActionRequest {
  export type AsObject = {
    requestId: string,
    action?: google_devtools_resultstore_v2_action_pb.Action.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class CreateConfigurationRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): google_devtools_resultstore_v2_configuration_pb.Configuration | undefined;
  setConfiguration(value?: google_devtools_resultstore_v2_configuration_pb.Configuration): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConfigurationRequest): CreateConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateConfigurationRequest, reader: jspb.BinaryReader): CreateConfigurationRequest;
}

export namespace CreateConfigurationRequest {
  export type AsObject = {
    requestId: string,
    parent: string,
    configId: string,
    configuration?: google_devtools_resultstore_v2_configuration_pb.Configuration.AsObject,
    authorizationToken: string,
  }
}

export class UpdateConfigurationRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): google_devtools_resultstore_v2_configuration_pb.Configuration | undefined;
  setConfiguration(value?: google_devtools_resultstore_v2_configuration_pb.Configuration): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConfigurationRequest): UpdateConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateConfigurationRequest, reader: jspb.BinaryReader): UpdateConfigurationRequest;
}

export namespace UpdateConfigurationRequest {
  export type AsObject = {
    configuration?: google_devtools_resultstore_v2_configuration_pb.Configuration.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class CreateFileSetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getFileSetId(): string;
  setFileSetId(value: string): void;

  hasFileSet(): boolean;
  clearFileSet(): void;
  getFileSet(): google_devtools_resultstore_v2_file_set_pb.FileSet | undefined;
  setFileSet(value?: google_devtools_resultstore_v2_file_set_pb.FileSet): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileSetRequest): CreateFileSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileSetRequest;
  static deserializeBinaryFromReader(message: CreateFileSetRequest, reader: jspb.BinaryReader): CreateFileSetRequest;
}

export namespace CreateFileSetRequest {
  export type AsObject = {
    requestId: string,
    parent: string,
    fileSetId: string,
    fileSet?: google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject,
    authorizationToken: string,
  }
}

export class UpdateFileSetRequest extends jspb.Message {
  hasFileSet(): boolean;
  clearFileSet(): void;
  getFileSet(): google_devtools_resultstore_v2_file_set_pb.FileSet | undefined;
  setFileSet(value?: google_devtools_resultstore_v2_file_set_pb.FileSet): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileSetRequest): UpdateFileSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileSetRequest;
  static deserializeBinaryFromReader(message: UpdateFileSetRequest, reader: jspb.BinaryReader): UpdateFileSetRequest;
}

export namespace UpdateFileSetRequest {
  export type AsObject = {
    fileSet?: google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class MergeFileSetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasFileSet(): boolean;
  clearFileSet(): void;
  getFileSet(): google_devtools_resultstore_v2_file_set_pb.FileSet | undefined;
  setFileSet(value?: google_devtools_resultstore_v2_file_set_pb.FileSet): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeFileSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeFileSetRequest): MergeFileSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeFileSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeFileSetRequest;
  static deserializeBinaryFromReader(message: MergeFileSetRequest, reader: jspb.BinaryReader): MergeFileSetRequest;
}

export namespace MergeFileSetRequest {
  export type AsObject = {
    requestId: string,
    fileSet?: google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    authorizationToken: string,
    createIfNotFound: boolean,
  }
}

export class UploadBatchRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  getNextResumeToken(): string;
  setNextResumeToken(value: string): void;

  getResumeToken(): string;
  setResumeToken(value: string): void;

  getUploaderState(): Uint8Array | string;
  getUploaderState_asU8(): Uint8Array;
  getUploaderState_asB64(): string;
  setUploaderState(value: Uint8Array | string): void;

  clearUploadRequestsList(): void;
  getUploadRequestsList(): Array<UploadRequest>;
  setUploadRequestsList(value: Array<UploadRequest>): void;
  addUploadRequests(value?: UploadRequest, index?: number): UploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadBatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadBatchRequest): UploadBatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadBatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadBatchRequest;
  static deserializeBinaryFromReader(message: UploadBatchRequest, reader: jspb.BinaryReader): UploadBatchRequest;
}

export namespace UploadBatchRequest {
  export type AsObject = {
    parent: string,
    authorizationToken: string,
    nextResumeToken: string,
    resumeToken: string,
    uploaderState: Uint8Array | string,
    uploadRequestsList: Array<UploadRequest.AsObject>,
  }
}

export class UploadBatchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadBatchResponse): UploadBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadBatchResponse;
  static deserializeBinaryFromReader(message: UploadBatchResponse, reader: jspb.BinaryReader): UploadBatchResponse;
}

export namespace UploadBatchResponse {
  export type AsObject = {
  }
}

export class UploadRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): UploadRequest.Id | undefined;
  setId(value?: UploadRequest.Id): void;

  getUploadOperation(): UploadRequest.UploadOperationMap[keyof UploadRequest.UploadOperationMap];
  setUploadOperation(value: UploadRequest.UploadOperationMap[keyof UploadRequest.UploadOperationMap]): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getCreateIfNotFound(): boolean;
  setCreateIfNotFound(value: boolean): void;

  hasInvocation(): boolean;
  clearInvocation(): void;
  getInvocation(): google_devtools_resultstore_v2_invocation_pb.Invocation | undefined;
  setInvocation(value?: google_devtools_resultstore_v2_invocation_pb.Invocation): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): google_devtools_resultstore_v2_target_pb.Target | undefined;
  setTarget(value?: google_devtools_resultstore_v2_target_pb.Target): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): google_devtools_resultstore_v2_configuration_pb.Configuration | undefined;
  setConfiguration(value?: google_devtools_resultstore_v2_configuration_pb.Configuration): void;

  hasConfiguredTarget(): boolean;
  clearConfiguredTarget(): void;
  getConfiguredTarget(): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget | undefined;
  setConfiguredTarget(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_devtools_resultstore_v2_action_pb.Action | undefined;
  setAction(value?: google_devtools_resultstore_v2_action_pb.Action): void;

  hasFileSet(): boolean;
  clearFileSet(): void;
  getFileSet(): google_devtools_resultstore_v2_file_set_pb.FileSet | undefined;
  setFileSet(value?: google_devtools_resultstore_v2_file_set_pb.FileSet): void;

  getResourceCase(): UploadRequest.ResourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    id?: UploadRequest.Id.AsObject,
    uploadOperation: UploadRequest.UploadOperationMap[keyof UploadRequest.UploadOperationMap],
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    createIfNotFound: boolean,
    invocation?: google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject,
    target?: google_devtools_resultstore_v2_target_pb.Target.AsObject,
    configuration?: google_devtools_resultstore_v2_configuration_pb.Configuration.AsObject,
    configuredTarget?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject,
    action?: google_devtools_resultstore_v2_action_pb.Action.AsObject,
    fileSet?: google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject,
  }

  export class Id extends jspb.Message {
    getTargetId(): string;
    setTargetId(value: string): void;

    getConfigurationId(): string;
    setConfigurationId(value: string): void;

    getActionId(): string;
    setActionId(value: string): void;

    getFileSetId(): string;
    setFileSetId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      targetId: string,
      configurationId: string,
      actionId: string,
      fileSetId: string,
    }
  }

  export interface UploadOperationMap {
    UPLOAD_OPERATION_UNSPECIFIED: 0;
    CREATE: 1;
    UPDATE: 2;
    MERGE: 3;
    FINALIZE: 4;
  }

  export const UploadOperation: UploadOperationMap;

  export enum ResourceCase {
    RESOURCE_NOT_SET = 0,
    INVOCATION = 4,
    TARGET = 5,
    CONFIGURATION = 6,
    CONFIGURED_TARGET = 7,
    ACTION = 8,
    FILE_SET = 9,
  }
}

export class GetInvocationUploadMetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthorizationToken(): string;
  setAuthorizationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvocationUploadMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvocationUploadMetadataRequest): GetInvocationUploadMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvocationUploadMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvocationUploadMetadataRequest;
  static deserializeBinaryFromReader(message: GetInvocationUploadMetadataRequest, reader: jspb.BinaryReader): GetInvocationUploadMetadataRequest;
}

export namespace GetInvocationUploadMetadataRequest {
  export type AsObject = {
    name: string,
    authorizationToken: string,
  }
}

