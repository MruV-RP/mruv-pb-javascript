// package: google.cloud.support.common
// file: google/cloud/support/common.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SupportAccount extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getCloudResource(): string;
  setCloudResource(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getState(): SupportAccount.StateMap[keyof SupportAccount.StateMap];
  setState(value: SupportAccount.StateMap[keyof SupportAccount.StateMap]): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBillingAccountName(): string;
  setBillingAccountName(value: string): void;

  getUnifyAccountId(): string;
  setUnifyAccountId(value: string): void;

  getPricingModel(): SupportAccount.PricingModelMap[keyof SupportAccount.PricingModelMap];
  setPricingModel(value: SupportAccount.PricingModelMap[keyof SupportAccount.PricingModelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportAccount.AsObject;
  static toObject(includeInstance: boolean, msg: SupportAccount): SupportAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportAccount;
  static deserializeBinaryFromReader(message: SupportAccount, reader: jspb.BinaryReader): SupportAccount;
}

export namespace SupportAccount {
  export type AsObject = {
    name: string,
    accountId: string,
    cloudResource: string,
    displayName: string,
    state: SupportAccount.StateMap[keyof SupportAccount.StateMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billingAccountName: string,
    unifyAccountId: string,
    pricingModel: SupportAccount.PricingModelMap[keyof SupportAccount.PricingModelMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    ACTIVE: 1;
    PENDING: 2;
    PENDING_DELETION: 3;
  }

  export const State: StateMap;

  export interface PricingModelMap {
    PRICING_MODEL_UNKNOWN: 0;
    PACKAGES: 1;
    USER_ROLES: 2;
  }

  export const PricingModel: PricingModelMap;
}

export class Case extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getComponent(): string;
  setComponent(value: string): void;

  getSubcomponent(): string;
  setSubcomponent(value: string): void;

  getClientTimezone(): string;
  setClientTimezone(value: string): void;

  clearCcAddressesList(): void;
  getCcAddressesList(): Array<string>;
  setCcAddressesList(value: Array<string>): void;
  addCcAddresses(value: string, index?: number): string;

  getProjectId(): string;
  setProjectId(value: string): void;

  clearIssuesList(): void;
  getIssuesList(): Array<CustomerIssue>;
  setIssuesList(value: Array<CustomerIssue>): void;
  addIssues(value?: CustomerIssue, index?: number): CustomerIssue;

  getPriority(): Case.PriorityMap[keyof Case.PriorityMap];
  setPriority(value: Case.PriorityMap[keyof Case.PriorityMap]): void;

  getState(): Case.StateMap[keyof Case.StateMap];
  setState(value: Case.StateMap[keyof Case.StateMap]): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatorEmail(): string;
  setCreatorEmail(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Case.AsObject;
  static toObject(includeInstance: boolean, msg: Case): Case.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Case, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Case;
  static deserializeBinaryFromReader(message: Case, reader: jspb.BinaryReader): Case;
}

export namespace Case {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    component: string,
    subcomponent: string,
    clientTimezone: string,
    ccAddressesList: Array<string>,
    projectId: string,
    issuesList: Array<CustomerIssue.AsObject>,
    priority: Case.PriorityMap[keyof Case.PriorityMap],
    state: Case.StateMap[keyof Case.StateMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creatorEmail: string,
    category: string,
  }

  export interface PriorityMap {
    PRIORITY_UNSPECIFIED: 0;
    P0: 1;
    P1: 2;
    P2: 3;
    P3: 4;
    P4: 5;
  }

  export const Priority: PriorityMap;

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    NEW: 1;
    ASSIGNED: 2;
    IN_PROGRESS_GOOGLE_SUPPORT: 3;
    IN_PROGRESS_GOOGLE_ENG: 4;
    IN_PROGRESS_KNOWN_ISSUE: 5;
    WAITING_FOR_CUSTOMER_RESPONSE: 6;
    SOLUTION_OFFERED: 7;
    CLOSED: 8;
  }

  export const State: StateMap;
}

export class CustomerIssue extends jspb.Message {
  getIssueId(): string;
  setIssueId(value: string): void;

  getState(): CustomerIssue.IssueStateMap[keyof CustomerIssue.IssueStateMap];
  setState(value: CustomerIssue.IssueStateMap[keyof CustomerIssue.IssueStateMap]): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResolveTime(): boolean;
  clearResolveTime(): void;
  getResolveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResolveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerIssue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerIssue): CustomerIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerIssue;
  static deserializeBinaryFromReader(message: CustomerIssue, reader: jspb.BinaryReader): CustomerIssue;
}

export namespace CustomerIssue {
  export type AsObject = {
    issueId: string,
    state: CustomerIssue.IssueStateMap[keyof CustomerIssue.IssueStateMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resolveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface IssueStateMap {
    ISSUE_STATE_UNSPECIFIED: 0;
    OPEN: 1;
    IN_PROGRESS: 2;
    FIXED: 3;
    WONT_FIX: 4;
    VERIFIED: 5;
  }

  export const IssueState: IssueStateMap;
}

export class SupportRole extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getRole(): SupportRole.RoleMap[keyof SupportRole.RoleMap];
  setRole(value: SupportRole.RoleMap[keyof SupportRole.RoleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportRole.AsObject;
  static toObject(includeInstance: boolean, msg: SupportRole): SupportRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportRole;
  static deserializeBinaryFromReader(message: SupportRole, reader: jspb.BinaryReader): SupportRole;
}

export namespace SupportRole {
  export type AsObject = {
    email: string,
    role: SupportRole.RoleMap[keyof SupportRole.RoleMap],
  }

  export interface RoleMap {
    ROLE_UNSPECIFIED: 0;
    BASIC: 1;
    DEVELOPER: 2;
    OPERATION: 3;
    SITE_RELIABILITY: 4;
  }

  export const Role: RoleMap;
}

export class Comment extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    text: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    author: string,
    name: string,
  }
}

export class IssueTaxonomy extends jspb.Message {
  getCategoriesMap(): jspb.Map<string, IssueTaxonomy.Category>;
  clearCategoriesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueTaxonomy.AsObject;
  static toObject(includeInstance: boolean, msg: IssueTaxonomy): IssueTaxonomy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueTaxonomy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueTaxonomy;
  static deserializeBinaryFromReader(message: IssueTaxonomy, reader: jspb.BinaryReader): IssueTaxonomy;
}

export namespace IssueTaxonomy {
  export type AsObject = {
    categoriesMap: Array<[string, IssueTaxonomy.Category.AsObject]>,
  }

  export class Component extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): void;

    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): void;
    addLanguages(value: string, index?: number): string;

    getTemplate(): string;
    setTemplate(value: string): void;

    clearSubcomponentsList(): void;
    getSubcomponentsList(): Array<IssueTaxonomy.Component>;
    setSubcomponentsList(value: Array<IssueTaxonomy.Component>): void;
    addSubcomponents(value?: IssueTaxonomy.Component, index?: number): IssueTaxonomy.Component;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      displayName: string,
      languagesList: Array<string>,
      template: string,
      subcomponentsList: Array<IssueTaxonomy.Component.AsObject>,
    }
  }

  export class Category extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): void;

    getComponentsMap(): jspb.Map<string, IssueTaxonomy.Component>;
    clearComponentsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
  }

  export namespace Category {
    export type AsObject = {
      displayName: string,
      componentsMap: Array<[string, IssueTaxonomy.Component.AsObject]>,
    }
  }
}

