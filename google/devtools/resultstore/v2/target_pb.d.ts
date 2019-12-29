// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/target.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";
import * as google_devtools_resultstore_v2_file_pb from "../../../../google/devtools/resultstore/v2/file_pb";

export class Target extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): Target.Id | undefined;
  setId(value?: Target.Id): void;

  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;
  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;

  hasTargetAttributes(): boolean;
  clearTargetAttributes(): void;
  getTargetAttributes(): TargetAttributes | undefined;
  setTargetAttributes(value?: TargetAttributes): void;

  hasTestAttributes(): boolean;
  clearTestAttributes(): void;
  getTestAttributes(): TestAttributes | undefined;
  setTestAttributes(value?: TestAttributes): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  clearFilesList(): void;
  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  getVisible(): boolean;
  setVisible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    name: string,
    id?: Target.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    targetAttributes?: TargetAttributes.AsObject,
    testAttributes?: TestAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    visible: boolean,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

    getTargetId(): string;
    setTargetId(value: string): void;

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
      invocationId: string,
      targetId: string,
    }
  }
}

export class TargetAttributes extends jspb.Message {
  getType(): TargetTypeMap[keyof TargetTypeMap];
  setType(value: TargetTypeMap[keyof TargetTypeMap]): void;

  getLanguage(): google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap];
  setLanguage(value: google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap]): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TargetAttributes): TargetAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetAttributes;
  static deserializeBinaryFromReader(message: TargetAttributes, reader: jspb.BinaryReader): TargetAttributes;
}

export namespace TargetAttributes {
  export type AsObject = {
    type: TargetTypeMap[keyof TargetTypeMap],
    language: google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap],
    tagsList: Array<string>,
  }
}

export class TestAttributes extends jspb.Message {
  getSize(): TestSizeMap[keyof TestSizeMap];
  setSize(value: TestSizeMap[keyof TestSizeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TestAttributes): TestAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestAttributes;
  static deserializeBinaryFromReader(message: TestAttributes, reader: jspb.BinaryReader): TestAttributes;
}

export namespace TestAttributes {
  export type AsObject = {
    size: TestSizeMap[keyof TestSizeMap],
  }
}

export interface TargetTypeMap {
  TARGET_TYPE_UNSPECIFIED: 0;
  APPLICATION: 1;
  BINARY: 2;
  LIBRARY: 3;
  PACKAGE: 4;
  TEST: 5;
}

export const TargetType: TargetTypeMap;

export interface TestSizeMap {
  TEST_SIZE_UNSPECIFIED: 0;
  SMALL: 1;
  MEDIUM: 2;
  LARGE: 3;
  ENORMOUS: 4;
  OTHER_SIZE: 5;
}

export const TestSize: TestSizeMap;

