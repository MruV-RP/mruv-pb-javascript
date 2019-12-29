// package: google.devtools.containeranalysis.v1alpha1
// file: google/devtools/containeranalysis/v1alpha1/bill_of_materials.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb from "../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb";

export class PackageManager extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageManager.AsObject;
  static toObject(includeInstance: boolean, msg: PackageManager): PackageManager.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackageManager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageManager;
  static deserializeBinaryFromReader(message: PackageManager, reader: jspb.BinaryReader): PackageManager;
}

export namespace PackageManager {
  export type AsObject = {
  }

  export class Distribution extends jspb.Message {
    getCpeUri(): string;
    setCpeUri(value: string): void;

    getArchitecture(): PackageManager.ArchitectureMap[keyof PackageManager.ArchitectureMap];
    setArchitecture(value: PackageManager.ArchitectureMap[keyof PackageManager.ArchitectureMap]): void;

    hasLatestVersion(): boolean;
    clearLatestVersion(): void;
    getLatestVersion(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version | undefined;
    setLatestVersion(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version): void;

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
      architecture: PackageManager.ArchitectureMap[keyof PackageManager.ArchitectureMap],
      latestVersion?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version.AsObject,
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
    getVersion(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version | undefined;
    setVersion(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version): void;

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
      version?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version.AsObject,
      path: string,
    }
  }

  export class Package extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearDistributionList(): void;
    getDistributionList(): Array<PackageManager.Distribution>;
    setDistributionList(value: Array<PackageManager.Distribution>): void;
    addDistribution(value?: PackageManager.Distribution, index?: number): PackageManager.Distribution;

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
      distributionList: Array<PackageManager.Distribution.AsObject>,
    }
  }

  export class Installation extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearLocationList(): void;
    getLocationList(): Array<PackageManager.Location>;
    setLocationList(value: Array<PackageManager.Location>): void;
    addLocation(value?: PackageManager.Location, index?: number): PackageManager.Location;

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
      locationList: Array<PackageManager.Location.AsObject>,
    }
  }

  export interface ArchitectureMap {
    ARCHITECTURE_UNSPECIFIED: 0;
    X86: 1;
    X64: 2;
  }

  export const Architecture: ArchitectureMap;
}

