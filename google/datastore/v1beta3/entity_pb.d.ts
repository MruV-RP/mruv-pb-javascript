// package: google.datastore.v1beta3
// file: google/datastore/v1beta3/entity.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_latlng_pb from "../../../google/type/latlng_pb";

export class PartitionId extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getNamespaceId(): string;
  setNamespaceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionId.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionId): PartitionId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionId;
  static deserializeBinaryFromReader(message: PartitionId, reader: jspb.BinaryReader): PartitionId;
}

export namespace PartitionId {
  export type AsObject = {
    projectId: string,
    namespaceId: string,
  }
}

export class Key extends jspb.Message {
  hasPartitionId(): boolean;
  clearPartitionId(): void;
  getPartitionId(): PartitionId | undefined;
  setPartitionId(value?: PartitionId): void;

  clearPathList(): void;
  getPathList(): Array<Key.PathElement>;
  setPathList(value: Array<Key.PathElement>): void;
  addPath(value?: Key.PathElement, index?: number): Key.PathElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    partitionId?: PartitionId.AsObject,
    pathList: Array<Key.PathElement.AsObject>,
  }

  export class PathElement extends jspb.Message {
    getKind(): string;
    setKind(value: string): void;

    hasId(): boolean;
    clearId(): void;
    getId(): number;
    setId(value: number): void;

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): void;

    getIdTypeCase(): PathElement.IdTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathElement.AsObject;
    static toObject(includeInstance: boolean, msg: PathElement): PathElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathElement;
    static deserializeBinaryFromReader(message: PathElement, reader: jspb.BinaryReader): PathElement;
  }

  export namespace PathElement {
    export type AsObject = {
      kind: string,
      id: number,
      name: string,
    }

    export enum IdTypeCase {
      ID_TYPE_NOT_SET = 0,
      ID = 2,
      NAME = 3,
    }
  }
}

export class ArrayValue extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export class Value extends jspb.Message {
  hasNullValue(): boolean;
  clearNullValue(): void;
  getNullValue(): google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap];
  setNullValue(value: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap]): void;

  hasBooleanValue(): boolean;
  clearBooleanValue(): void;
  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): void;

  hasIntegerValue(): boolean;
  clearIntegerValue(): void;
  getIntegerValue(): number;
  setIntegerValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasTimestampValue(): boolean;
  clearTimestampValue(): void;
  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasKeyValue(): boolean;
  clearKeyValue(): void;
  getKeyValue(): Key | undefined;
  setKeyValue(value?: Key): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBlobValue(): boolean;
  clearBlobValue(): void;
  getBlobValue(): Uint8Array | string;
  getBlobValue_asU8(): Uint8Array;
  getBlobValue_asB64(): string;
  setBlobValue(value: Uint8Array | string): void;

  hasGeoPointValue(): boolean;
  clearGeoPointValue(): void;
  getGeoPointValue(): google_type_latlng_pb.LatLng | undefined;
  setGeoPointValue(value?: google_type_latlng_pb.LatLng): void;

  hasEntityValue(): boolean;
  clearEntityValue(): void;
  getEntityValue(): Entity | undefined;
  setEntityValue(value?: Entity): void;

  hasArrayValue(): boolean;
  clearArrayValue(): void;
  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): void;

  getMeaning(): number;
  setMeaning(value: number): void;

  getExcludeFromIndexes(): boolean;
  setExcludeFromIndexes(value: boolean): void;

  getValueTypeCase(): Value.ValueTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap],
    booleanValue: boolean,
    integerValue: number,
    doubleValue: number,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    keyValue?: Key.AsObject,
    stringValue: string,
    blobValue: Uint8Array | string,
    geoPointValue?: google_type_latlng_pb.LatLng.AsObject,
    entityValue?: Entity.AsObject,
    arrayValue?: ArrayValue.AsObject,
    meaning: number,
    excludeFromIndexes: boolean,
  }

  export enum ValueTypeCase {
    VALUE_TYPE_NOT_SET = 0,
    NULL_VALUE = 11,
    BOOLEAN_VALUE = 1,
    INTEGER_VALUE = 2,
    DOUBLE_VALUE = 3,
    TIMESTAMP_VALUE = 10,
    KEY_VALUE = 5,
    STRING_VALUE = 17,
    BLOB_VALUE = 18,
    GEO_POINT_VALUE = 8,
    ENTITY_VALUE = 6,
    ARRAY_VALUE = 9,
  }
}

export class Entity extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  getPropertiesMap(): jspb.Map<string, Value>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    key?: Key.AsObject,
    propertiesMap: Array<[string, Value.AsObject]>,
  }
}

