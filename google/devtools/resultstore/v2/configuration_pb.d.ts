// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/configuration.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";

export class Configuration extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): Configuration.Id | undefined;
  setId(value?: Configuration.Id): void;

  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;
  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;

  hasConfigurationAttributes(): boolean;
  clearConfigurationAttributes(): void;
  getConfigurationAttributes(): ConfigurationAttributes | undefined;
  setConfigurationAttributes(value?: ConfigurationAttributes): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    name: string,
    id?: Configuration.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    configurationAttributes?: ConfigurationAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    displayName: string,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

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
      configurationId: string,
    }
  }
}

export class ConfigurationAttributes extends jspb.Message {
  getCpu(): string;
  setCpu(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigurationAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigurationAttributes): ConfigurationAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigurationAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigurationAttributes;
  static deserializeBinaryFromReader(message: ConfigurationAttributes, reader: jspb.BinaryReader): ConfigurationAttributes;
}

export namespace ConfigurationAttributes {
  export type AsObject = {
    cpu: string,
  }
}

