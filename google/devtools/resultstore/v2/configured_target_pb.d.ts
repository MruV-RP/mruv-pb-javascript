// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/configured_target.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";
import * as google_devtools_resultstore_v2_file_pb from "../../../../google/devtools/resultstore/v2/file_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ConfiguredTarget extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): ConfiguredTarget.Id | undefined;
  setId(value?: ConfiguredTarget.Id): void;

  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;
  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;

  hasTestAttributes(): boolean;
  clearTestAttributes(): void;
  getTestAttributes(): ConfiguredTestAttributes | undefined;
  setTestAttributes(value?: ConfiguredTestAttributes): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  clearFilesList(): void;
  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfiguredTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ConfiguredTarget): ConfiguredTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfiguredTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfiguredTarget;
  static deserializeBinaryFromReader(message: ConfiguredTarget, reader: jspb.BinaryReader): ConfiguredTarget;
}

export namespace ConfiguredTarget {
  export type AsObject = {
    name: string,
    id?: ConfiguredTarget.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    testAttributes?: ConfiguredTestAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

    getTargetId(): string;
    setTargetId(value: string): void;

    getConfigurationId(): string;
    setConfigurationId(value: string): void;

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
      configurationId: string,
    }
  }
}

export class ConfiguredTestAttributes extends jspb.Message {
  getTotalRunCount(): number;
  setTotalRunCount(value: number): void;

  getTotalShardCount(): number;
  setTotalShardCount(value: number): void;

  hasTimeoutDuration(): boolean;
  clearTimeoutDuration(): void;
  getTimeoutDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTimeoutDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfiguredTestAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ConfiguredTestAttributes): ConfiguredTestAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfiguredTestAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfiguredTestAttributes;
  static deserializeBinaryFromReader(message: ConfiguredTestAttributes, reader: jspb.BinaryReader): ConfiguredTestAttributes;
}

export namespace ConfiguredTestAttributes {
  export type AsObject = {
    totalRunCount: number,
    totalShardCount: number,
    timeoutDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

