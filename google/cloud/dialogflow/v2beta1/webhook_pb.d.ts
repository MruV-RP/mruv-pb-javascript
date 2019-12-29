// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/webhook.proto

import * as jspb from "google-protobuf";
import * as google_cloud_dialogflow_v2beta1_context_pb from "../../../../google/cloud/dialogflow/v2beta1/context_pb";
import * as google_cloud_dialogflow_v2beta1_intent_pb from "../../../../google/cloud/dialogflow/v2beta1/intent_pb";
import * as google_cloud_dialogflow_v2beta1_session_pb from "../../../../google/cloud/dialogflow/v2beta1/session_pb";
import * as google_cloud_dialogflow_v2beta1_session_entity_type_pb from "../../../../google/cloud/dialogflow/v2beta1/session_entity_type_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class WebhookRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getResponseId(): string;
  setResponseId(value: string): void;

  hasQueryResult(): boolean;
  clearQueryResult(): void;
  getQueryResult(): google_cloud_dialogflow_v2beta1_session_pb.QueryResult | undefined;
  setQueryResult(value?: google_cloud_dialogflow_v2beta1_session_pb.QueryResult): void;

  clearAlternativeQueryResultsList(): void;
  getAlternativeQueryResultsList(): Array<google_cloud_dialogflow_v2beta1_session_pb.QueryResult>;
  setAlternativeQueryResultsList(value: Array<google_cloud_dialogflow_v2beta1_session_pb.QueryResult>): void;
  addAlternativeQueryResults(value?: google_cloud_dialogflow_v2beta1_session_pb.QueryResult, index?: number): google_cloud_dialogflow_v2beta1_session_pb.QueryResult;

  hasOriginalDetectIntentRequest(): boolean;
  clearOriginalDetectIntentRequest(): void;
  getOriginalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
  setOriginalDetectIntentRequest(value?: OriginalDetectIntentRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookRequest;
  static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
  export type AsObject = {
    session: string,
    responseId: string,
    queryResult?: google_cloud_dialogflow_v2beta1_session_pb.QueryResult.AsObject,
    alternativeQueryResultsList: Array<google_cloud_dialogflow_v2beta1_session_pb.QueryResult.AsObject>,
    originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject,
  }
}

export class WebhookResponse extends jspb.Message {
  getFulfillmentText(): string;
  setFulfillmentText(value: string): void;

  clearFulfillmentMessagesList(): void;
  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message>): void;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message;

  getSource(): string;
  setSource(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  clearOutputContextsList(): void;
  getOutputContextsList(): Array<google_cloud_dialogflow_v2beta1_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2beta1_context_pb.Context>): void;
  addOutputContexts(value?: google_cloud_dialogflow_v2beta1_context_pb.Context, index?: number): google_cloud_dialogflow_v2beta1_context_pb.Context;

  hasFollowupEventInput(): boolean;
  clearFollowupEventInput(): void;
  getFollowupEventInput(): google_cloud_dialogflow_v2beta1_session_pb.EventInput | undefined;
  setFollowupEventInput(value?: google_cloud_dialogflow_v2beta1_session_pb.EventInput): void;

  getEndInteraction(): boolean;
  setEndInteraction(value: boolean): void;

  clearSessionEntityTypesList(): void;
  getSessionEntityTypesList(): Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>;
  setSessionEntityTypesList(value: Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): void;
  addSessionEntityTypes(value?: google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType, index?: number): google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookResponse;
  static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
  export type AsObject = {
    fulfillmentText: string,
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message.AsObject>,
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2beta1_context_pb.Context.AsObject>,
    followupEventInput?: google_cloud_dialogflow_v2beta1_session_pb.EventInput.AsObject,
    endInteraction: boolean,
    sessionEntityTypesList: Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType.AsObject>,
  }
}

export class OriginalDetectIntentRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalDetectIntentRequest): OriginalDetectIntentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
  static deserializeBinaryFromReader(message: OriginalDetectIntentRequest, reader: jspb.BinaryReader): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
  export type AsObject = {
    source: string,
    version: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

