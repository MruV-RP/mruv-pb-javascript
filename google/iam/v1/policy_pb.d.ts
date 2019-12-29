// package: google.iam.v1
// file: google/iam/v1/policy.proto

import * as jspb from "google-protobuf";
import * as google_type_expr_pb from "../../../google/type/expr_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class Policy extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  clearBindingsList(): void;
  getBindingsList(): Array<Binding>;
  setBindingsList(value: Array<Binding>): void;
  addBindings(value?: Binding, index?: number): Binding;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    version: number,
    bindingsList: Array<Binding.AsObject>,
    etag: Uint8Array | string,
  }
}

export class Binding extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): google_type_expr_pb.Expr | undefined;
  setCondition(value?: google_type_expr_pb.Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binding.AsObject;
  static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binding;
  static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
}

export namespace Binding {
  export type AsObject = {
    role: string,
    membersList: Array<string>,
    condition?: google_type_expr_pb.Expr.AsObject,
  }
}

export class PolicyDelta extends jspb.Message {
  clearBindingDeltasList(): void;
  getBindingDeltasList(): Array<BindingDelta>;
  setBindingDeltasList(value: Array<BindingDelta>): void;
  addBindingDeltas(value?: BindingDelta, index?: number): BindingDelta;

  clearAuditConfigDeltasList(): void;
  getAuditConfigDeltasList(): Array<AuditConfigDelta>;
  setAuditConfigDeltasList(value: Array<AuditConfigDelta>): void;
  addAuditConfigDeltas(value?: AuditConfigDelta, index?: number): AuditConfigDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyDelta.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyDelta): PolicyDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyDelta;
  static deserializeBinaryFromReader(message: PolicyDelta, reader: jspb.BinaryReader): PolicyDelta;
}

export namespace PolicyDelta {
  export type AsObject = {
    bindingDeltasList: Array<BindingDelta.AsObject>,
    auditConfigDeltasList: Array<AuditConfigDelta.AsObject>,
  }
}

export class BindingDelta extends jspb.Message {
  getAction(): BindingDelta.ActionMap[keyof BindingDelta.ActionMap];
  setAction(value: BindingDelta.ActionMap[keyof BindingDelta.ActionMap]): void;

  getRole(): string;
  setRole(value: string): void;

  getMember(): string;
  setMember(value: string): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): google_type_expr_pb.Expr | undefined;
  setCondition(value?: google_type_expr_pb.Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingDelta.AsObject;
  static toObject(includeInstance: boolean, msg: BindingDelta): BindingDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindingDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingDelta;
  static deserializeBinaryFromReader(message: BindingDelta, reader: jspb.BinaryReader): BindingDelta;
}

export namespace BindingDelta {
  export type AsObject = {
    action: BindingDelta.ActionMap[keyof BindingDelta.ActionMap],
    role: string,
    member: string,
    condition?: google_type_expr_pb.Expr.AsObject,
  }

  export interface ActionMap {
    ACTION_UNSPECIFIED: 0;
    ADD: 1;
    REMOVE: 2;
  }

  export const Action: ActionMap;
}

export class AuditConfigDelta extends jspb.Message {
  getAction(): AuditConfigDelta.ActionMap[keyof AuditConfigDelta.ActionMap];
  setAction(value: AuditConfigDelta.ActionMap[keyof AuditConfigDelta.ActionMap]): void;

  getService(): string;
  setService(value: string): void;

  getExemptedMember(): string;
  setExemptedMember(value: string): void;

  getLogType(): string;
  setLogType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditConfigDelta.AsObject;
  static toObject(includeInstance: boolean, msg: AuditConfigDelta): AuditConfigDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditConfigDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditConfigDelta;
  static deserializeBinaryFromReader(message: AuditConfigDelta, reader: jspb.BinaryReader): AuditConfigDelta;
}

export namespace AuditConfigDelta {
  export type AsObject = {
    action: AuditConfigDelta.ActionMap[keyof AuditConfigDelta.ActionMap],
    service: string,
    exemptedMember: string,
    logType: string,
  }

  export interface ActionMap {
    ACTION_UNSPECIFIED: 0;
    ADD: 1;
    REMOVE: 2;
  }

  export const Action: ActionMap;
}

