// package: google.cloud.irm.v1alpha2
// file: google/cloud/irm/v1alpha2/incidents.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): string;
  setUserId(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  getUserCase(): User.UserCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    email: string,
  }

  export enum UserCase {
    USER_NOT_SET = 0,
    USER_ID = 1,
    EMAIL = 2,
  }
}

export class Signal extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getIncident(): string;
  setIncident(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCloseTime(): boolean;
  clearCloseTime(): void;
  getCloseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDetectTime(): boolean;
  clearDetectTime(): void;
  getDetectTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDetectTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): User | undefined;
  setCreator(value?: User): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContentType(): string;
  setContentType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getSignalState(): Signal.StateMap[keyof Signal.StateMap];
  setSignalState(value: Signal.StateMap[keyof Signal.StateMap]): void;

  clearSignalArtifactsList(): void;
  getSignalArtifactsList(): Array<Signal.SignalArtifact>;
  setSignalArtifactsList(value: Array<Signal.SignalArtifact>): void;
  addSignalArtifacts(value?: Signal.SignalArtifact, index?: number): Signal.SignalArtifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signal.AsObject;
  static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signal;
  static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
  export type AsObject = {
    name: string,
    etag: string,
    incident: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    detectTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creator?: User.AsObject,
    title: string,
    contentType: string,
    content: string,
    signalState: Signal.StateMap[keyof Signal.StateMap],
    signalArtifactsList: Array<Signal.SignalArtifact.AsObject>,
  }

  export class SignalArtifact extends jspb.Message {
    hasUserType(): boolean;
    clearUserType(): void;
    getUserType(): string;
    setUserType(value: string): void;

    getUri(): string;
    setUri(value: string): void;

    getArtifactTypeCase(): SignalArtifact.ArtifactTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalArtifact.AsObject;
    static toObject(includeInstance: boolean, msg: SignalArtifact): SignalArtifact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalArtifact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalArtifact;
    static deserializeBinaryFromReader(message: SignalArtifact, reader: jspb.BinaryReader): SignalArtifact;
  }

  export namespace SignalArtifact {
    export type AsObject = {
      userType: string,
      uri: string,
    }

    export enum ArtifactTypeCase {
      ARTIFACT_TYPE_NOT_SET = 0,
      USER_TYPE = 2,
    }
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_OPEN: 1;
    STATE_CLOSED: 2;
  }

  export const State: StateMap;
}

export class Annotation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): User | undefined;
  setAuthor(value?: User): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContent(): string;
  setContent(value: string): void;

  getContentType(): string;
  setContentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    name: string,
    author?: User.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    contentType: string,
  }
}

export class Tag extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    name: string,
    displayName: string,
  }
}

export class Synopsis extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): User | undefined;
  setAuthor(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Synopsis.AsObject;
  static toObject(includeInstance: boolean, msg: Synopsis): Synopsis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Synopsis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Synopsis;
  static deserializeBinaryFromReader(message: Synopsis, reader: jspb.BinaryReader): Synopsis;
}

export namespace Synopsis {
  export type AsObject = {
    contentType: string,
    content: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    author?: User.AsObject,
  }
}

export class Incident extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getEscalationLevel(): Incident.EscalationLevelMap[keyof Incident.EscalationLevelMap];
  setEscalationLevel(value: Incident.EscalationLevelMap[keyof Incident.EscalationLevelMap]): void;

  getEtag(): string;
  setEtag(value: string): void;

  getSeverity(): Incident.SeverityMap[keyof Incident.SeverityMap];
  setSeverity(value: Incident.SeverityMap[keyof Incident.SeverityMap]): void;

  getStage(): Incident.StageMap[keyof Incident.StageMap];
  setStage(value: Incident.StageMap[keyof Incident.StageMap]): void;

  getDuplicateIncident(): string;
  setDuplicateIncident(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSynopsis(): boolean;
  clearSynopsis(): void;
  getSynopsis(): Synopsis | undefined;
  setSynopsis(value?: Synopsis): void;

  hasCommunicationVenue(): boolean;
  clearCommunicationVenue(): void;
  getCommunicationVenue(): Incident.CommunicationVenue | undefined;
  setCommunicationVenue(value?: Incident.CommunicationVenue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Incident.AsObject;
  static toObject(includeInstance: boolean, msg: Incident): Incident.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Incident, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Incident;
  static deserializeBinaryFromReader(message: Incident, reader: jspb.BinaryReader): Incident;
}

export namespace Incident {
  export type AsObject = {
    name: string,
    title: string,
    escalationLevel: Incident.EscalationLevelMap[keyof Incident.EscalationLevelMap],
    etag: string,
    severity: Incident.SeverityMap[keyof Incident.SeverityMap],
    stage: Incident.StageMap[keyof Incident.StageMap],
    duplicateIncident: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    synopsis?: Synopsis.AsObject,
    communicationVenue?: Incident.CommunicationVenue.AsObject,
  }

  export class CommunicationVenue extends jspb.Message {
    getUri(): string;
    setUri(value: string): void;

    getDisplayName(): string;
    setDisplayName(value: string): void;

    getChannelType(): Incident.CommunicationVenue.ChannelTypeMap[keyof Incident.CommunicationVenue.ChannelTypeMap];
    setChannelType(value: Incident.CommunicationVenue.ChannelTypeMap[keyof Incident.CommunicationVenue.ChannelTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommunicationVenue.AsObject;
    static toObject(includeInstance: boolean, msg: CommunicationVenue): CommunicationVenue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommunicationVenue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommunicationVenue;
    static deserializeBinaryFromReader(message: CommunicationVenue, reader: jspb.BinaryReader): CommunicationVenue;
  }

  export namespace CommunicationVenue {
    export type AsObject = {
      uri: string,
      displayName: string,
      channelType: Incident.CommunicationVenue.ChannelTypeMap[keyof Incident.CommunicationVenue.ChannelTypeMap],
    }

    export interface ChannelTypeMap {
      CHANNEL_TYPE_UNSPECIFIED: 0;
      CHANNEL_TYPE_URI: 1;
      CHANNEL_TYPE_SLACK: 5;
    }

    export const ChannelType: ChannelTypeMap;
  }

  export interface EscalationLevelMap {
    ESCALATION_LEVEL_UNSPECIFIED: 0;
    ESCALATION_LEVEL_ORGANIZATION: 1;
  }

  export const EscalationLevel: EscalationLevelMap;

  export interface SeverityMap {
    SEVERITY_UNSPECIFIED: 0;
    SEVERITY_HUGE: 1;
    SEVERITY_MAJOR: 2;
    SEVERITY_MEDIUM: 3;
    SEVERITY_MINOR: 4;
    SEVERITY_NEGLIGIBLE: 5;
  }

  export const Severity: SeverityMap;

  export interface StageMap {
    STAGE_UNSPECIFIED: 0;
    STAGE_DETECTED: 4;
    STAGE_TRIAGED: 1;
    STAGE_MITIGATED: 2;
    STAGE_RESOLVED: 3;
    STAGE_DOCUMENTED: 5;
    STAGE_DUPLICATE: 6;
  }

  export const Stage: StageMap;
}

export class IncidentRole extends jspb.Message {
  getType(): IncidentRole.TypeMap[keyof IncidentRole.TypeMap];
  setType(value: IncidentRole.TypeMap[keyof IncidentRole.TypeMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncidentRole.AsObject;
  static toObject(includeInstance: boolean, msg: IncidentRole): IncidentRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncidentRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncidentRole;
  static deserializeBinaryFromReader(message: IncidentRole, reader: jspb.BinaryReader): IncidentRole;
}

export namespace IncidentRole {
  export type AsObject = {
    type: IncidentRole.TypeMap[keyof IncidentRole.TypeMap],
    title: string,
    description: string,
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_INCIDENT_COMMANDER: 1;
    TYPE_COMMUNICATIONS_LEAD: 2;
    TYPE_OPERATIONS_LEAD: 3;
    TYPE_EXTERNAL_CUSTOMER_COMMUNICATIONS_LEAD: 4;
    TYPE_PRIMARY_ONCALL: 5;
    TYPE_SECONDARY_ONCALL: 6;
    TYPE_OTHER: 7;
  }

  export const Type: TypeMap;
}

export class IncidentRoleAssignment extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): IncidentRole | undefined;
  setRole(value?: IncidentRole): void;

  hasAssignee(): boolean;
  clearAssignee(): void;
  getAssignee(): User | undefined;
  setAssignee(value?: User): void;

  hasProposedAssignee(): boolean;
  clearProposedAssignee(): void;
  getProposedAssignee(): User | undefined;
  setProposedAssignee(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncidentRoleAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: IncidentRoleAssignment): IncidentRoleAssignment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncidentRoleAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncidentRoleAssignment;
  static deserializeBinaryFromReader(message: IncidentRoleAssignment, reader: jspb.BinaryReader): IncidentRoleAssignment;
}

export namespace IncidentRoleAssignment {
  export type AsObject = {
    name: string,
    etag: string,
    role?: IncidentRole.AsObject,
    assignee?: User.AsObject,
    proposedAssignee?: User.AsObject,
  }
}

export class Artifact extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getType(): Artifact.TypeMap[keyof Artifact.TypeMap];
  setType(value: Artifact.TypeMap[keyof Artifact.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    name: string,
    displayName: string,
    etag: string,
    url: string,
    type: Artifact.TypeMap[keyof Artifact.TypeMap],
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_URL: 1;
    TYPE_JIRA_ISSUE: 4;
  }

  export const Type: TypeMap;
}

export class CommunicationChannel extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): CommunicationChannel.Email | undefined;
  setEmail(value?: CommunicationChannel.Email): void;

  hasNotificationChannel(): boolean;
  clearNotificationChannel(): void;
  getNotificationChannel(): CommunicationChannel.NotificationChannel | undefined;
  setNotificationChannel(value?: CommunicationChannel.NotificationChannel): void;

  getEndpointCase(): CommunicationChannel.EndpointCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationChannel.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationChannel): CommunicationChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationChannel;
  static deserializeBinaryFromReader(message: CommunicationChannel, reader: jspb.BinaryReader): CommunicationChannel;
}

export namespace CommunicationChannel {
  export type AsObject = {
    email?: CommunicationChannel.Email.AsObject,
    notificationChannel?: CommunicationChannel.NotificationChannel.AsObject,
  }

  export class Email extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

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
      address: string,
    }
  }

  export class NotificationChannel extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationChannel.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationChannel): NotificationChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationChannel;
    static deserializeBinaryFromReader(message: NotificationChannel, reader: jspb.BinaryReader): NotificationChannel;
  }

  export namespace NotificationChannel {
    export type AsObject = {
      name: string,
    }
  }

  export enum EndpointCase {
    ENDPOINT_NOT_SET = 0,
    EMAIL = 1,
    NOTIFICATION_CHANNEL = 2,
  }
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  hasSubscriptionChannel(): boolean;
  clearSubscriptionChannel(): void;
  getSubscriptionChannel(): CommunicationChannel | undefined;
  setSubscriptionChannel(value?: CommunicationChannel): void;

  clearEventTypesList(): void;
  getEventTypesList(): Array<Subscription.EventTypeMap[keyof Subscription.EventTypeMap]>;
  setEventTypesList(value: Array<Subscription.EventTypeMap[keyof Subscription.EventTypeMap]>): void;
  addEventTypes(value: Subscription.EventTypeMap[keyof Subscription.EventTypeMap], index?: number): Subscription.EventTypeMap[keyof Subscription.EventTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    name: string,
    etag: string,
    subscriptionChannel?: CommunicationChannel.AsObject,
    eventTypesList: Array<Subscription.EventTypeMap[keyof Subscription.EventTypeMap]>,
  }

  export interface EventTypeMap {
    EVENT_TYPE_UNSPECIFIED: 0;
    EVENT_TYPE_TITLE_CHANGE: 1;
    EVENT_TYPE_SYNOPSIS_CHANGE: 2;
    EVENT_TYPE_STAGE_CHANGE: 3;
    EVENT_TYPE_SEVERITY_CHANGE: 4;
    EVENT_TYPE_ANNOTATION_ADD: 5;
    EVENT_TYPE_ANNOTATION_CHANGE: 6;
  }

  export const EventType: EventTypeMap;
}

