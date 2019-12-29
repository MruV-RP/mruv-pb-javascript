// package: grafeas.v1beta1.package
// file: google/devtools/containeranalysis/v1beta1/package/package.proto

import * as jspb from "google-protobuf";

export class Distribution extends jspb.Message {
  getCpeUri(): string;
  setCpeUri(value: string): void;

  getArchitecture(): ArchitectureMap[keyof ArchitectureMap];
  setArchitecture(value: ArchitectureMap[keyof ArchitectureMap]): void;

  hasLatestVersion(): boolean;
  clearLatestVersion(): void;
  getLatestVersion(): Version | undefined;
  setLatestVersion(value?: Version): void;

  getMaintainer(): string;
  setMaintainer(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
    cpeUri: string,
    architecture: ArchitectureMap[keyof ArchitectureMap],
    latestVersion?: Version.AsObject,
    maintainer: string,
    url: string,
    description: string,
  }
}

export class Location extends jspb.Message {
  getCpeUri(): string;
  setCpeUri(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): Version | undefined;
  setVersion(value?: Version): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    cpeUri: string,
    version?: Version.AsObject,
    path: string,
  }
}

export class Package extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDistributionList(): void;
  getDistributionList(): Array<Distribution>;
  setDistributionList(value: Array<Distribution>): void;
  addDistribution(value?: Distribution, index?: number): Distribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    name: string,
    distributionList: Array<Distribution.AsObject>,
  }
}

export class Details extends jspb.Message {
  hasInstallation(): boolean;
  clearInstallation(): void;
  getInstallation(): Installation | undefined;
  setInstallation(value?: Installation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    installation?: Installation.AsObject,
  }
}

export class Installation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearLocationList(): void;
  getLocationList(): Array<Location>;
  setLocationList(value: Array<Location>): void;
  addLocation(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Installation.AsObject;
  static toObject(includeInstance: boolean, msg: Installation): Installation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Installation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Installation;
  static deserializeBinaryFromReader(message: Installation, reader: jspb.BinaryReader): Installation;
}

export namespace Installation {
  export type AsObject = {
    name: string,
    locationList: Array<Location.AsObject>,
  }
}

export class Version extends jspb.Message {
  getEpoch(): number;
  setEpoch(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRevision(): string;
  setRevision(value: string): void;

  getKind(): Version.VersionKindMap[keyof Version.VersionKindMap];
  setKind(value: Version.VersionKindMap[keyof Version.VersionKindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    epoch: number,
    name: string,
    revision: string,
    kind: Version.VersionKindMap[keyof Version.VersionKindMap],
  }

  export interface VersionKindMap {
    VERSION_KIND_UNSPECIFIED: 0;
    NORMAL: 1;
    MINIMUM: 2;
    MAXIMUM: 3;
  }

  export const VersionKind: VersionKindMap;
}

export interface ArchitectureMap {
  ARCHITECTURE_UNSPECIFIED: 0;
  X86: 1;
  X64: 2;
}

export const Architecture: ArchitectureMap;

