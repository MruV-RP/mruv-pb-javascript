// package: google.cloud.securitycenter.v1
// file: google/cloud/securitycenter/v1/organization_settings.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class OrganizationSettings extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEnableAssetDiscovery(): boolean;
  setEnableAssetDiscovery(value: boolean): void;

  hasAssetDiscoveryConfig(): boolean;
  clearAssetDiscoveryConfig(): void;
  getAssetDiscoveryConfig(): OrganizationSettings.AssetDiscoveryConfig | undefined;
  setAssetDiscoveryConfig(value?: OrganizationSettings.AssetDiscoveryConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationSettings.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationSettings): OrganizationSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationSettings;
  static deserializeBinaryFromReader(message: OrganizationSettings, reader: jspb.BinaryReader): OrganizationSettings;
}

export namespace OrganizationSettings {
  export type AsObject = {
    name: string,
    enableAssetDiscovery: boolean,
    assetDiscoveryConfig?: OrganizationSettings.AssetDiscoveryConfig.AsObject,
  }

  export class AssetDiscoveryConfig extends jspb.Message {
    clearProjectIdsList(): void;
    getProjectIdsList(): Array<string>;
    setProjectIdsList(value: Array<string>): void;
    addProjectIds(value: string, index?: number): string;

    getInclusionMode(): OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap[keyof OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap];
    setInclusionMode(value: OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap[keyof OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetDiscoveryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AssetDiscoveryConfig): AssetDiscoveryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetDiscoveryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetDiscoveryConfig;
    static deserializeBinaryFromReader(message: AssetDiscoveryConfig, reader: jspb.BinaryReader): AssetDiscoveryConfig;
  }

  export namespace AssetDiscoveryConfig {
    export type AsObject = {
      projectIdsList: Array<string>,
      inclusionMode: OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap[keyof OrganizationSettings.AssetDiscoveryConfig.InclusionModeMap],
    }

    export interface InclusionModeMap {
      INCLUSION_MODE_UNSPECIFIED: 0;
      INCLUDE_ONLY: 1;
      EXCLUDE: 2;
    }

    export const InclusionMode: InclusionModeMap;
  }
}

