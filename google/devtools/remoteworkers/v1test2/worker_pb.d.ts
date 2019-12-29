// package: google.devtools.remoteworkers.v1test2
// file: google/devtools/remoteworkers/v1test2/worker.proto

import * as jspb from "google-protobuf";

export class Worker extends jspb.Message {
  clearDevicesList(): void;
  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): void;
  addDevices(value?: Device, index?: number): Device;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Worker.Property>;
  setPropertiesList(value: Array<Worker.Property>): void;
  addProperties(value?: Worker.Property, index?: number): Worker.Property;

  clearConfigsList(): void;
  getConfigsList(): Array<Worker.Config>;
  setConfigsList(value: Array<Worker.Config>): void;
  addConfigs(value?: Worker.Config, index?: number): Worker.Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    devicesList: Array<Device.AsObject>,
    propertiesList: Array<Worker.Property.AsObject>,
    configsList: Array<Worker.Config.AsObject>,
  }

  export class Property extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      key: string,
      value: string,
    }
  }

  export class Config extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      key: string,
      value: string,
    }
  }
}

export class Device extends jspb.Message {
  getHandle(): string;
  setHandle(value: string): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Device.Property>;
  setPropertiesList(value: Array<Device.Property>): void;
  addProperties(value?: Device.Property, index?: number): Device.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    handle: string,
    propertiesList: Array<Device.Property.AsObject>,
  }

  export class Property extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      key: string,
      value: string,
    }
  }
}

