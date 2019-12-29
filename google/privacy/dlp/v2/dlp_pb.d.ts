// package: google.privacy.dlp.v2
// file: google/privacy/dlp/v2/dlp.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_privacy_dlp_v2_storage_pb from "../../../../google/privacy/dlp/v2/storage_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as google_type_date_pb from "../../../../google/type/date_pb";
import * as google_type_dayofweek_pb from "../../../../google/type/dayofweek_pb";
import * as google_type_timeofday_pb from "../../../../google/type/timeofday_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class ExcludeInfoTypes extends jspb.Message {
  clearInfoTypesList(): void;
  getInfoTypesList(): Array<google_privacy_dlp_v2_storage_pb.InfoType>;
  setInfoTypesList(value: Array<google_privacy_dlp_v2_storage_pb.InfoType>): void;
  addInfoTypes(value?: google_privacy_dlp_v2_storage_pb.InfoType, index?: number): google_privacy_dlp_v2_storage_pb.InfoType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcludeInfoTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ExcludeInfoTypes): ExcludeInfoTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExcludeInfoTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcludeInfoTypes;
  static deserializeBinaryFromReader(message: ExcludeInfoTypes, reader: jspb.BinaryReader): ExcludeInfoTypes;
}

export namespace ExcludeInfoTypes {
  export type AsObject = {
    infoTypesList: Array<google_privacy_dlp_v2_storage_pb.InfoType.AsObject>,
  }
}

export class ExclusionRule extends jspb.Message {
  hasDictionary(): boolean;
  clearDictionary(): void;
  getDictionary(): google_privacy_dlp_v2_storage_pb.CustomInfoType.Dictionary | undefined;
  setDictionary(value?: google_privacy_dlp_v2_storage_pb.CustomInfoType.Dictionary): void;

  hasRegex(): boolean;
  clearRegex(): void;
  getRegex(): google_privacy_dlp_v2_storage_pb.CustomInfoType.Regex | undefined;
  setRegex(value?: google_privacy_dlp_v2_storage_pb.CustomInfoType.Regex): void;

  hasExcludeInfoTypes(): boolean;
  clearExcludeInfoTypes(): void;
  getExcludeInfoTypes(): ExcludeInfoTypes | undefined;
  setExcludeInfoTypes(value?: ExcludeInfoTypes): void;

  getMatchingType(): MatchingTypeMap[keyof MatchingTypeMap];
  setMatchingType(value: MatchingTypeMap[keyof MatchingTypeMap]): void;

  getTypeCase(): ExclusionRule.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExclusionRule.AsObject;
  static toObject(includeInstance: boolean, msg: ExclusionRule): ExclusionRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExclusionRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExclusionRule;
  static deserializeBinaryFromReader(message: ExclusionRule, reader: jspb.BinaryReader): ExclusionRule;
}

export namespace ExclusionRule {
  export type AsObject = {
    dictionary?: google_privacy_dlp_v2_storage_pb.CustomInfoType.Dictionary.AsObject,
    regex?: google_privacy_dlp_v2_storage_pb.CustomInfoType.Regex.AsObject,
    excludeInfoTypes?: ExcludeInfoTypes.AsObject,
    matchingType: MatchingTypeMap[keyof MatchingTypeMap],
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    DICTIONARY = 1,
    REGEX = 2,
    EXCLUDE_INFO_TYPES = 3,
  }
}

export class InspectionRule extends jspb.Message {
  hasHotwordRule(): boolean;
  clearHotwordRule(): void;
  getHotwordRule(): google_privacy_dlp_v2_storage_pb.CustomInfoType.DetectionRule.HotwordRule | undefined;
  setHotwordRule(value?: google_privacy_dlp_v2_storage_pb.CustomInfoType.DetectionRule.HotwordRule): void;

  hasExclusionRule(): boolean;
  clearExclusionRule(): void;
  getExclusionRule(): ExclusionRule | undefined;
  setExclusionRule(value?: ExclusionRule): void;

  getTypeCase(): InspectionRule.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectionRule.AsObject;
  static toObject(includeInstance: boolean, msg: InspectionRule): InspectionRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectionRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectionRule;
  static deserializeBinaryFromReader(message: InspectionRule, reader: jspb.BinaryReader): InspectionRule;
}

export namespace InspectionRule {
  export type AsObject = {
    hotwordRule?: google_privacy_dlp_v2_storage_pb.CustomInfoType.DetectionRule.HotwordRule.AsObject,
    exclusionRule?: ExclusionRule.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    HOTWORD_RULE = 1,
    EXCLUSION_RULE = 2,
  }
}

export class InspectionRuleSet extends jspb.Message {
  clearInfoTypesList(): void;
  getInfoTypesList(): Array<google_privacy_dlp_v2_storage_pb.InfoType>;
  setInfoTypesList(value: Array<google_privacy_dlp_v2_storage_pb.InfoType>): void;
  addInfoTypes(value?: google_privacy_dlp_v2_storage_pb.InfoType, index?: number): google_privacy_dlp_v2_storage_pb.InfoType;

  clearRulesList(): void;
  getRulesList(): Array<InspectionRule>;
  setRulesList(value: Array<InspectionRule>): void;
  addRules(value?: InspectionRule, index?: number): InspectionRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectionRuleSet.AsObject;
  static toObject(includeInstance: boolean, msg: InspectionRuleSet): InspectionRuleSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectionRuleSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectionRuleSet;
  static deserializeBinaryFromReader(message: InspectionRuleSet, reader: jspb.BinaryReader): InspectionRuleSet;
}

export namespace InspectionRuleSet {
  export type AsObject = {
    infoTypesList: Array<google_privacy_dlp_v2_storage_pb.InfoType.AsObject>,
    rulesList: Array<InspectionRule.AsObject>,
  }
}

export class InspectConfig extends jspb.Message {
  clearInfoTypesList(): void;
  getInfoTypesList(): Array<google_privacy_dlp_v2_storage_pb.InfoType>;
  setInfoTypesList(value: Array<google_privacy_dlp_v2_storage_pb.InfoType>): void;
  addInfoTypes(value?: google_privacy_dlp_v2_storage_pb.InfoType, index?: number): google_privacy_dlp_v2_storage_pb.InfoType;

  getMinLikelihood(): google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap];
  setMinLikelihood(value: google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap]): void;

  hasLimits(): boolean;
  clearLimits(): void;
  getLimits(): InspectConfig.FindingLimits | undefined;
  setLimits(value?: InspectConfig.FindingLimits): void;

  getIncludeQuote(): boolean;
  setIncludeQuote(value: boolean): void;

  getExcludeInfoTypes(): boolean;
  setExcludeInfoTypes(value: boolean): void;

  clearCustomInfoTypesList(): void;
  getCustomInfoTypesList(): Array<google_privacy_dlp_v2_storage_pb.CustomInfoType>;
  setCustomInfoTypesList(value: Array<google_privacy_dlp_v2_storage_pb.CustomInfoType>): void;
  addCustomInfoTypes(value?: google_privacy_dlp_v2_storage_pb.CustomInfoType, index?: number): google_privacy_dlp_v2_storage_pb.CustomInfoType;

  clearContentOptionsList(): void;
  getContentOptionsList(): Array<ContentOptionMap[keyof ContentOptionMap]>;
  setContentOptionsList(value: Array<ContentOptionMap[keyof ContentOptionMap]>): void;
  addContentOptions(value: ContentOptionMap[keyof ContentOptionMap], index?: number): ContentOptionMap[keyof ContentOptionMap];

  clearRuleSetList(): void;
  getRuleSetList(): Array<InspectionRuleSet>;
  setRuleSetList(value: Array<InspectionRuleSet>): void;
  addRuleSet(value?: InspectionRuleSet, index?: number): InspectionRuleSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InspectConfig): InspectConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectConfig;
  static deserializeBinaryFromReader(message: InspectConfig, reader: jspb.BinaryReader): InspectConfig;
}

export namespace InspectConfig {
  export type AsObject = {
    infoTypesList: Array<google_privacy_dlp_v2_storage_pb.InfoType.AsObject>,
    minLikelihood: google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap],
    limits?: InspectConfig.FindingLimits.AsObject,
    includeQuote: boolean,
    excludeInfoTypes: boolean,
    customInfoTypesList: Array<google_privacy_dlp_v2_storage_pb.CustomInfoType.AsObject>,
    contentOptionsList: Array<ContentOptionMap[keyof ContentOptionMap]>,
    ruleSetList: Array<InspectionRuleSet.AsObject>,
  }

  export class FindingLimits extends jspb.Message {
    getMaxFindingsPerItem(): number;
    setMaxFindingsPerItem(value: number): void;

    getMaxFindingsPerRequest(): number;
    setMaxFindingsPerRequest(value: number): void;

    clearMaxFindingsPerInfoTypeList(): void;
    getMaxFindingsPerInfoTypeList(): Array<InspectConfig.FindingLimits.InfoTypeLimit>;
    setMaxFindingsPerInfoTypeList(value: Array<InspectConfig.FindingLimits.InfoTypeLimit>): void;
    addMaxFindingsPerInfoType(value?: InspectConfig.FindingLimits.InfoTypeLimit, index?: number): InspectConfig.FindingLimits.InfoTypeLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindingLimits.AsObject;
    static toObject(includeInstance: boolean, msg: FindingLimits): FindingLimits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindingLimits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindingLimits;
    static deserializeBinaryFromReader(message: FindingLimits, reader: jspb.BinaryReader): FindingLimits;
  }

  export namespace FindingLimits {
    export type AsObject = {
      maxFindingsPerItem: number,
      maxFindingsPerRequest: number,
      maxFindingsPerInfoTypeList: Array<InspectConfig.FindingLimits.InfoTypeLimit.AsObject>,
    }

    export class InfoTypeLimit extends jspb.Message {
      hasInfoType(): boolean;
      clearInfoType(): void;
      getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
      setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

      getMaxFindings(): number;
      setMaxFindings(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InfoTypeLimit.AsObject;
      static toObject(includeInstance: boolean, msg: InfoTypeLimit): InfoTypeLimit.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: InfoTypeLimit, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InfoTypeLimit;
      static deserializeBinaryFromReader(message: InfoTypeLimit, reader: jspb.BinaryReader): InfoTypeLimit;
    }

    export namespace InfoTypeLimit {
      export type AsObject = {
        infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
        maxFindings: number,
      }
    }
  }
}

export class ByteContentItem extends jspb.Message {
  getType(): ByteContentItem.BytesTypeMap[keyof ByteContentItem.BytesTypeMap];
  setType(value: ByteContentItem.BytesTypeMap[keyof ByteContentItem.BytesTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ByteContentItem.AsObject;
  static toObject(includeInstance: boolean, msg: ByteContentItem): ByteContentItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ByteContentItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ByteContentItem;
  static deserializeBinaryFromReader(message: ByteContentItem, reader: jspb.BinaryReader): ByteContentItem;
}

export namespace ByteContentItem {
  export type AsObject = {
    type: ByteContentItem.BytesTypeMap[keyof ByteContentItem.BytesTypeMap],
    data: Uint8Array | string,
  }

  export interface BytesTypeMap {
    BYTES_TYPE_UNSPECIFIED: 0;
    IMAGE: 6;
    IMAGE_JPEG: 1;
    IMAGE_BMP: 2;
    IMAGE_PNG: 3;
    IMAGE_SVG: 4;
    TEXT_UTF8: 5;
    AVRO: 11;
  }

  export const BytesType: BytesTypeMap;
}

export class ContentItem extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  hasTable(): boolean;
  clearTable(): void;
  getTable(): Table | undefined;
  setTable(value?: Table): void;

  hasByteItem(): boolean;
  clearByteItem(): void;
  getByteItem(): ByteContentItem | undefined;
  setByteItem(value?: ByteContentItem): void;

  getDataItemCase(): ContentItem.DataItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentItem.AsObject;
  static toObject(includeInstance: boolean, msg: ContentItem): ContentItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentItem;
  static deserializeBinaryFromReader(message: ContentItem, reader: jspb.BinaryReader): ContentItem;
}

export namespace ContentItem {
  export type AsObject = {
    value: string,
    table?: Table.AsObject,
    byteItem?: ByteContentItem.AsObject,
  }

  export enum DataItemCase {
    DATA_ITEM_NOT_SET = 0,
    VALUE = 3,
    TABLE = 4,
    BYTE_ITEM = 5,
  }
}

export class Table extends jspb.Message {
  clearHeadersList(): void;
  getHeadersList(): Array<google_privacy_dlp_v2_storage_pb.FieldId>;
  setHeadersList(value: Array<google_privacy_dlp_v2_storage_pb.FieldId>): void;
  addHeaders(value?: google_privacy_dlp_v2_storage_pb.FieldId, index?: number): google_privacy_dlp_v2_storage_pb.FieldId;

  clearRowsList(): void;
  getRowsList(): Array<Table.Row>;
  setRowsList(value: Array<Table.Row>): void;
  addRows(value?: Table.Row, index?: number): Table.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    headersList: Array<google_privacy_dlp_v2_storage_pb.FieldId.AsObject>,
    rowsList: Array<Table.Row.AsObject>,
  }

  export class Row extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<Value>;
    setValuesList(value: Array<Value>): void;
    addValues(value?: Value, index?: number): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      valuesList: Array<Value.AsObject>,
    }
  }
}

export class InspectResult extends jspb.Message {
  clearFindingsList(): void;
  getFindingsList(): Array<Finding>;
  setFindingsList(value: Array<Finding>): void;
  addFindings(value?: Finding, index?: number): Finding;

  getFindingsTruncated(): boolean;
  setFindingsTruncated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectResult.AsObject;
  static toObject(includeInstance: boolean, msg: InspectResult): InspectResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectResult;
  static deserializeBinaryFromReader(message: InspectResult, reader: jspb.BinaryReader): InspectResult;
}

export namespace InspectResult {
  export type AsObject = {
    findingsList: Array<Finding.AsObject>,
    findingsTruncated: boolean,
  }
}

export class Finding extends jspb.Message {
  getQuote(): string;
  setQuote(value: string): void;

  hasInfoType(): boolean;
  clearInfoType(): void;
  getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  getLikelihood(): google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap];
  setLikelihood(value: google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap]): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasQuoteInfo(): boolean;
  clearQuoteInfo(): void;
  getQuoteInfo(): QuoteInfo | undefined;
  setQuoteInfo(value?: QuoteInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Finding.AsObject;
  static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Finding;
  static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
}

export namespace Finding {
  export type AsObject = {
    quote: string,
    infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
    likelihood: google_privacy_dlp_v2_storage_pb.LikelihoodMap[keyof google_privacy_dlp_v2_storage_pb.LikelihoodMap],
    location?: Location.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    quoteInfo?: QuoteInfo.AsObject,
  }
}

export class Location extends jspb.Message {
  hasByteRange(): boolean;
  clearByteRange(): void;
  getByteRange(): Range | undefined;
  setByteRange(value?: Range): void;

  hasCodepointRange(): boolean;
  clearCodepointRange(): void;
  getCodepointRange(): Range | undefined;
  setCodepointRange(value?: Range): void;

  clearContentLocationsList(): void;
  getContentLocationsList(): Array<ContentLocation>;
  setContentLocationsList(value: Array<ContentLocation>): void;
  addContentLocations(value?: ContentLocation, index?: number): ContentLocation;

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
    byteRange?: Range.AsObject,
    codepointRange?: Range.AsObject,
    contentLocationsList: Array<ContentLocation.AsObject>,
  }
}

export class ContentLocation extends jspb.Message {
  getContainerName(): string;
  setContainerName(value: string): void;

  hasRecordLocation(): boolean;
  clearRecordLocation(): void;
  getRecordLocation(): RecordLocation | undefined;
  setRecordLocation(value?: RecordLocation): void;

  hasImageLocation(): boolean;
  clearImageLocation(): void;
  getImageLocation(): ImageLocation | undefined;
  setImageLocation(value?: ImageLocation): void;

  hasDocumentLocation(): boolean;
  clearDocumentLocation(): void;
  getDocumentLocation(): DocumentLocation | undefined;
  setDocumentLocation(value?: DocumentLocation): void;

  hasContainerTimestamp(): boolean;
  clearContainerTimestamp(): void;
  getContainerTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setContainerTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContainerVersion(): string;
  setContainerVersion(value: string): void;

  getLocationCase(): ContentLocation.LocationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ContentLocation): ContentLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentLocation;
  static deserializeBinaryFromReader(message: ContentLocation, reader: jspb.BinaryReader): ContentLocation;
}

export namespace ContentLocation {
  export type AsObject = {
    containerName: string,
    recordLocation?: RecordLocation.AsObject,
    imageLocation?: ImageLocation.AsObject,
    documentLocation?: DocumentLocation.AsObject,
    containerTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    containerVersion: string,
  }

  export enum LocationCase {
    LOCATION_NOT_SET = 0,
    RECORD_LOCATION = 2,
    IMAGE_LOCATION = 3,
    DOCUMENT_LOCATION = 5,
  }
}

export class DocumentLocation extends jspb.Message {
  getFileOffset(): number;
  setFileOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentLocation.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentLocation): DocumentLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentLocation;
  static deserializeBinaryFromReader(message: DocumentLocation, reader: jspb.BinaryReader): DocumentLocation;
}

export namespace DocumentLocation {
  export type AsObject = {
    fileOffset: number,
  }
}

export class RecordLocation extends jspb.Message {
  hasRecordKey(): boolean;
  clearRecordKey(): void;
  getRecordKey(): google_privacy_dlp_v2_storage_pb.RecordKey | undefined;
  setRecordKey(value?: google_privacy_dlp_v2_storage_pb.RecordKey): void;

  hasFieldId(): boolean;
  clearFieldId(): void;
  getFieldId(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setFieldId(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  hasTableLocation(): boolean;
  clearTableLocation(): void;
  getTableLocation(): TableLocation | undefined;
  setTableLocation(value?: TableLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordLocation.AsObject;
  static toObject(includeInstance: boolean, msg: RecordLocation): RecordLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordLocation;
  static deserializeBinaryFromReader(message: RecordLocation, reader: jspb.BinaryReader): RecordLocation;
}

export namespace RecordLocation {
  export type AsObject = {
    recordKey?: google_privacy_dlp_v2_storage_pb.RecordKey.AsObject,
    fieldId?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    tableLocation?: TableLocation.AsObject,
  }
}

export class TableLocation extends jspb.Message {
  getRowIndex(): number;
  setRowIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableLocation.AsObject;
  static toObject(includeInstance: boolean, msg: TableLocation): TableLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableLocation;
  static deserializeBinaryFromReader(message: TableLocation, reader: jspb.BinaryReader): TableLocation;
}

export namespace TableLocation {
  export type AsObject = {
    rowIndex: number,
  }
}

export class Range extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    start: number,
    end: number,
  }
}

export class ImageLocation extends jspb.Message {
  clearBoundingBoxesList(): void;
  getBoundingBoxesList(): Array<BoundingBox>;
  setBoundingBoxesList(value: Array<BoundingBox>): void;
  addBoundingBoxes(value?: BoundingBox, index?: number): BoundingBox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageLocation): ImageLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageLocation;
  static deserializeBinaryFromReader(message: ImageLocation, reader: jspb.BinaryReader): ImageLocation;
}

export namespace ImageLocation {
  export type AsObject = {
    boundingBoxesList: Array<BoundingBox.AsObject>,
  }
}

export class BoundingBox extends jspb.Message {
  getTop(): number;
  setTop(value: number): void;

  getLeft(): number;
  setLeft(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBox): BoundingBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBox;
  static deserializeBinaryFromReader(message: BoundingBox, reader: jspb.BinaryReader): BoundingBox;
}

export namespace BoundingBox {
  export type AsObject = {
    top: number,
    left: number,
    width: number,
    height: number,
  }
}

export class RedactImageRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  clearImageRedactionConfigsList(): void;
  getImageRedactionConfigsList(): Array<RedactImageRequest.ImageRedactionConfig>;
  setImageRedactionConfigsList(value: Array<RedactImageRequest.ImageRedactionConfig>): void;
  addImageRedactionConfigs(value?: RedactImageRequest.ImageRedactionConfig, index?: number): RedactImageRequest.ImageRedactionConfig;

  getIncludeFindings(): boolean;
  setIncludeFindings(value: boolean): void;

  hasByteItem(): boolean;
  clearByteItem(): void;
  getByteItem(): ByteContentItem | undefined;
  setByteItem(value?: ByteContentItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedactImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RedactImageRequest): RedactImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedactImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedactImageRequest;
  static deserializeBinaryFromReader(message: RedactImageRequest, reader: jspb.BinaryReader): RedactImageRequest;
}

export namespace RedactImageRequest {
  export type AsObject = {
    parent: string,
    inspectConfig?: InspectConfig.AsObject,
    imageRedactionConfigsList: Array<RedactImageRequest.ImageRedactionConfig.AsObject>,
    includeFindings: boolean,
    byteItem?: ByteContentItem.AsObject,
  }

  export class ImageRedactionConfig extends jspb.Message {
    hasInfoType(): boolean;
    clearInfoType(): void;
    getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
    setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

    hasRedactAllText(): boolean;
    clearRedactAllText(): void;
    getRedactAllText(): boolean;
    setRedactAllText(value: boolean): void;

    hasRedactionColor(): boolean;
    clearRedactionColor(): void;
    getRedactionColor(): Color | undefined;
    setRedactionColor(value?: Color): void;

    getTargetCase(): ImageRedactionConfig.TargetCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageRedactionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ImageRedactionConfig): ImageRedactionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageRedactionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageRedactionConfig;
    static deserializeBinaryFromReader(message: ImageRedactionConfig, reader: jspb.BinaryReader): ImageRedactionConfig;
  }

  export namespace ImageRedactionConfig {
    export type AsObject = {
      infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
      redactAllText: boolean,
      redactionColor?: Color.AsObject,
    }

    export enum TargetCase {
      TARGET_NOT_SET = 0,
      INFO_TYPE = 1,
      REDACT_ALL_TEXT = 2,
    }
  }
}

export class Color extends jspb.Message {
  getRed(): number;
  setRed(value: number): void;

  getGreen(): number;
  setGreen(value: number): void;

  getBlue(): number;
  setBlue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    red: number,
    green: number,
    blue: number,
  }
}

export class RedactImageResponse extends jspb.Message {
  getRedactedImage(): Uint8Array | string;
  getRedactedImage_asU8(): Uint8Array;
  getRedactedImage_asB64(): string;
  setRedactedImage(value: Uint8Array | string): void;

  getExtractedText(): string;
  setExtractedText(value: string): void;

  hasInspectResult(): boolean;
  clearInspectResult(): void;
  getInspectResult(): InspectResult | undefined;
  setInspectResult(value?: InspectResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedactImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RedactImageResponse): RedactImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedactImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedactImageResponse;
  static deserializeBinaryFromReader(message: RedactImageResponse, reader: jspb.BinaryReader): RedactImageResponse;
}

export namespace RedactImageResponse {
  export type AsObject = {
    redactedImage: Uint8Array | string,
    extractedText: string,
    inspectResult?: InspectResult.AsObject,
  }
}

export class DeidentifyContentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasDeidentifyConfig(): boolean;
  clearDeidentifyConfig(): void;
  getDeidentifyConfig(): DeidentifyConfig | undefined;
  setDeidentifyConfig(value?: DeidentifyConfig): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): ContentItem | undefined;
  setItem(value?: ContentItem): void;

  getInspectTemplateName(): string;
  setInspectTemplateName(value: string): void;

  getDeidentifyTemplateName(): string;
  setDeidentifyTemplateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeidentifyContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeidentifyContentRequest): DeidentifyContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeidentifyContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeidentifyContentRequest;
  static deserializeBinaryFromReader(message: DeidentifyContentRequest, reader: jspb.BinaryReader): DeidentifyContentRequest;
}

export namespace DeidentifyContentRequest {
  export type AsObject = {
    parent: string,
    deidentifyConfig?: DeidentifyConfig.AsObject,
    inspectConfig?: InspectConfig.AsObject,
    item?: ContentItem.AsObject,
    inspectTemplateName: string,
    deidentifyTemplateName: string,
  }
}

export class DeidentifyContentResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): ContentItem | undefined;
  setItem(value?: ContentItem): void;

  hasOverview(): boolean;
  clearOverview(): void;
  getOverview(): TransformationOverview | undefined;
  setOverview(value?: TransformationOverview): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeidentifyContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeidentifyContentResponse): DeidentifyContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeidentifyContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeidentifyContentResponse;
  static deserializeBinaryFromReader(message: DeidentifyContentResponse, reader: jspb.BinaryReader): DeidentifyContentResponse;
}

export namespace DeidentifyContentResponse {
  export type AsObject = {
    item?: ContentItem.AsObject,
    overview?: TransformationOverview.AsObject,
  }
}

export class ReidentifyContentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasReidentifyConfig(): boolean;
  clearReidentifyConfig(): void;
  getReidentifyConfig(): DeidentifyConfig | undefined;
  setReidentifyConfig(value?: DeidentifyConfig): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): ContentItem | undefined;
  setItem(value?: ContentItem): void;

  getInspectTemplateName(): string;
  setInspectTemplateName(value: string): void;

  getReidentifyTemplateName(): string;
  setReidentifyTemplateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReidentifyContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReidentifyContentRequest): ReidentifyContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReidentifyContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReidentifyContentRequest;
  static deserializeBinaryFromReader(message: ReidentifyContentRequest, reader: jspb.BinaryReader): ReidentifyContentRequest;
}

export namespace ReidentifyContentRequest {
  export type AsObject = {
    parent: string,
    reidentifyConfig?: DeidentifyConfig.AsObject,
    inspectConfig?: InspectConfig.AsObject,
    item?: ContentItem.AsObject,
    inspectTemplateName: string,
    reidentifyTemplateName: string,
  }
}

export class ReidentifyContentResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): ContentItem | undefined;
  setItem(value?: ContentItem): void;

  hasOverview(): boolean;
  clearOverview(): void;
  getOverview(): TransformationOverview | undefined;
  setOverview(value?: TransformationOverview): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReidentifyContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReidentifyContentResponse): ReidentifyContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReidentifyContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReidentifyContentResponse;
  static deserializeBinaryFromReader(message: ReidentifyContentResponse, reader: jspb.BinaryReader): ReidentifyContentResponse;
}

export namespace ReidentifyContentResponse {
  export type AsObject = {
    item?: ContentItem.AsObject,
    overview?: TransformationOverview.AsObject,
  }
}

export class InspectContentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): ContentItem | undefined;
  setItem(value?: ContentItem): void;

  getInspectTemplateName(): string;
  setInspectTemplateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InspectContentRequest): InspectContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectContentRequest;
  static deserializeBinaryFromReader(message: InspectContentRequest, reader: jspb.BinaryReader): InspectContentRequest;
}

export namespace InspectContentRequest {
  export type AsObject = {
    parent: string,
    inspectConfig?: InspectConfig.AsObject,
    item?: ContentItem.AsObject,
    inspectTemplateName: string,
  }
}

export class InspectContentResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): InspectResult | undefined;
  setResult(value?: InspectResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InspectContentResponse): InspectContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectContentResponse;
  static deserializeBinaryFromReader(message: InspectContentResponse, reader: jspb.BinaryReader): InspectContentResponse;
}

export namespace InspectContentResponse {
  export type AsObject = {
    result?: InspectResult.AsObject,
  }
}

export class OutputStorageConfig extends jspb.Message {
  hasTable(): boolean;
  clearTable(): void;
  getTable(): google_privacy_dlp_v2_storage_pb.BigQueryTable | undefined;
  setTable(value?: google_privacy_dlp_v2_storage_pb.BigQueryTable): void;

  getOutputSchema(): OutputStorageConfig.OutputSchemaMap[keyof OutputStorageConfig.OutputSchemaMap];
  setOutputSchema(value: OutputStorageConfig.OutputSchemaMap[keyof OutputStorageConfig.OutputSchemaMap]): void;

  getTypeCase(): OutputStorageConfig.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputStorageConfig): OutputStorageConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputStorageConfig;
  static deserializeBinaryFromReader(message: OutputStorageConfig, reader: jspb.BinaryReader): OutputStorageConfig;
}

export namespace OutputStorageConfig {
  export type AsObject = {
    table?: google_privacy_dlp_v2_storage_pb.BigQueryTable.AsObject,
    outputSchema: OutputStorageConfig.OutputSchemaMap[keyof OutputStorageConfig.OutputSchemaMap],
  }

  export interface OutputSchemaMap {
    OUTPUT_SCHEMA_UNSPECIFIED: 0;
    BASIC_COLUMNS: 1;
    GCS_COLUMNS: 2;
    DATASTORE_COLUMNS: 3;
    BIG_QUERY_COLUMNS: 4;
    ALL_COLUMNS: 5;
  }

  export const OutputSchema: OutputSchemaMap;

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    TABLE = 1,
  }
}

export class InfoTypeStats extends jspb.Message {
  hasInfoType(): boolean;
  clearInfoType(): void;
  getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoTypeStats.AsObject;
  static toObject(includeInstance: boolean, msg: InfoTypeStats): InfoTypeStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoTypeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoTypeStats;
  static deserializeBinaryFromReader(message: InfoTypeStats, reader: jspb.BinaryReader): InfoTypeStats;
}

export namespace InfoTypeStats {
  export type AsObject = {
    infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
    count: number,
  }
}

export class InspectDataSourceDetails extends jspb.Message {
  hasRequestedOptions(): boolean;
  clearRequestedOptions(): void;
  getRequestedOptions(): InspectDataSourceDetails.RequestedOptions | undefined;
  setRequestedOptions(value?: InspectDataSourceDetails.RequestedOptions): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): InspectDataSourceDetails.Result | undefined;
  setResult(value?: InspectDataSourceDetails.Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectDataSourceDetails.AsObject;
  static toObject(includeInstance: boolean, msg: InspectDataSourceDetails): InspectDataSourceDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectDataSourceDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectDataSourceDetails;
  static deserializeBinaryFromReader(message: InspectDataSourceDetails, reader: jspb.BinaryReader): InspectDataSourceDetails;
}

export namespace InspectDataSourceDetails {
  export type AsObject = {
    requestedOptions?: InspectDataSourceDetails.RequestedOptions.AsObject,
    result?: InspectDataSourceDetails.Result.AsObject,
  }

  export class RequestedOptions extends jspb.Message {
    hasSnapshotInspectTemplate(): boolean;
    clearSnapshotInspectTemplate(): void;
    getSnapshotInspectTemplate(): InspectTemplate | undefined;
    setSnapshotInspectTemplate(value?: InspectTemplate): void;

    hasJobConfig(): boolean;
    clearJobConfig(): void;
    getJobConfig(): InspectJobConfig | undefined;
    setJobConfig(value?: InspectJobConfig): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestedOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RequestedOptions): RequestedOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestedOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestedOptions;
    static deserializeBinaryFromReader(message: RequestedOptions, reader: jspb.BinaryReader): RequestedOptions;
  }

  export namespace RequestedOptions {
    export type AsObject = {
      snapshotInspectTemplate?: InspectTemplate.AsObject,
      jobConfig?: InspectJobConfig.AsObject,
    }
  }

  export class Result extends jspb.Message {
    getProcessedBytes(): number;
    setProcessedBytes(value: number): void;

    getTotalEstimatedBytes(): number;
    setTotalEstimatedBytes(value: number): void;

    clearInfoTypeStatsList(): void;
    getInfoTypeStatsList(): Array<InfoTypeStats>;
    setInfoTypeStatsList(value: Array<InfoTypeStats>): void;
    addInfoTypeStats(value?: InfoTypeStats, index?: number): InfoTypeStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      processedBytes: number,
      totalEstimatedBytes: number,
      infoTypeStatsList: Array<InfoTypeStats.AsObject>,
    }
  }
}

export class InfoTypeDescription extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  clearSupportedByList(): void;
  getSupportedByList(): Array<InfoTypeSupportedByMap[keyof InfoTypeSupportedByMap]>;
  setSupportedByList(value: Array<InfoTypeSupportedByMap[keyof InfoTypeSupportedByMap]>): void;
  addSupportedBy(value: InfoTypeSupportedByMap[keyof InfoTypeSupportedByMap], index?: number): InfoTypeSupportedByMap[keyof InfoTypeSupportedByMap];

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoTypeDescription.AsObject;
  static toObject(includeInstance: boolean, msg: InfoTypeDescription): InfoTypeDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoTypeDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoTypeDescription;
  static deserializeBinaryFromReader(message: InfoTypeDescription, reader: jspb.BinaryReader): InfoTypeDescription;
}

export namespace InfoTypeDescription {
  export type AsObject = {
    name: string,
    displayName: string,
    supportedByList: Array<InfoTypeSupportedByMap[keyof InfoTypeSupportedByMap]>,
    description: string,
  }
}

export class ListInfoTypesRequest extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInfoTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInfoTypesRequest): ListInfoTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInfoTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInfoTypesRequest;
  static deserializeBinaryFromReader(message: ListInfoTypesRequest, reader: jspb.BinaryReader): ListInfoTypesRequest;
}

export namespace ListInfoTypesRequest {
  export type AsObject = {
    languageCode: string,
    filter: string,
  }
}

export class ListInfoTypesResponse extends jspb.Message {
  clearInfoTypesList(): void;
  getInfoTypesList(): Array<InfoTypeDescription>;
  setInfoTypesList(value: Array<InfoTypeDescription>): void;
  addInfoTypes(value?: InfoTypeDescription, index?: number): InfoTypeDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInfoTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInfoTypesResponse): ListInfoTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInfoTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInfoTypesResponse;
  static deserializeBinaryFromReader(message: ListInfoTypesResponse, reader: jspb.BinaryReader): ListInfoTypesResponse;
}

export namespace ListInfoTypesResponse {
  export type AsObject = {
    infoTypesList: Array<InfoTypeDescription.AsObject>,
  }
}

export class RiskAnalysisJobConfig extends jspb.Message {
  hasPrivacyMetric(): boolean;
  clearPrivacyMetric(): void;
  getPrivacyMetric(): PrivacyMetric | undefined;
  setPrivacyMetric(value?: PrivacyMetric): void;

  hasSourceTable(): boolean;
  clearSourceTable(): void;
  getSourceTable(): google_privacy_dlp_v2_storage_pb.BigQueryTable | undefined;
  setSourceTable(value?: google_privacy_dlp_v2_storage_pb.BigQueryTable): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskAnalysisJobConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RiskAnalysisJobConfig): RiskAnalysisJobConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiskAnalysisJobConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskAnalysisJobConfig;
  static deserializeBinaryFromReader(message: RiskAnalysisJobConfig, reader: jspb.BinaryReader): RiskAnalysisJobConfig;
}

export namespace RiskAnalysisJobConfig {
  export type AsObject = {
    privacyMetric?: PrivacyMetric.AsObject,
    sourceTable?: google_privacy_dlp_v2_storage_pb.BigQueryTable.AsObject,
    actionsList: Array<Action.AsObject>,
  }
}

export class QuasiId extends jspb.Message {
  hasField(): boolean;
  clearField(): void;
  getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  hasInfoType(): boolean;
  clearInfoType(): void;
  getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  hasCustomTag(): boolean;
  clearCustomTag(): void;
  getCustomTag(): string;
  setCustomTag(value: string): void;

  hasInferred(): boolean;
  clearInferred(): void;
  getInferred(): google_protobuf_empty_pb.Empty | undefined;
  setInferred(value?: google_protobuf_empty_pb.Empty): void;

  getTagCase(): QuasiId.TagCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuasiId.AsObject;
  static toObject(includeInstance: boolean, msg: QuasiId): QuasiId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuasiId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuasiId;
  static deserializeBinaryFromReader(message: QuasiId, reader: jspb.BinaryReader): QuasiId;
}

export namespace QuasiId {
  export type AsObject = {
    field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
    customTag: string,
    inferred?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum TagCase {
    TAG_NOT_SET = 0,
    INFO_TYPE = 2,
    CUSTOM_TAG = 3,
    INFERRED = 4,
  }
}

export class StatisticalTable extends jspb.Message {
  hasTable(): boolean;
  clearTable(): void;
  getTable(): google_privacy_dlp_v2_storage_pb.BigQueryTable | undefined;
  setTable(value?: google_privacy_dlp_v2_storage_pb.BigQueryTable): void;

  clearQuasiIdsList(): void;
  getQuasiIdsList(): Array<StatisticalTable.QuasiIdentifierField>;
  setQuasiIdsList(value: Array<StatisticalTable.QuasiIdentifierField>): void;
  addQuasiIds(value?: StatisticalTable.QuasiIdentifierField, index?: number): StatisticalTable.QuasiIdentifierField;

  hasRelativeFrequency(): boolean;
  clearRelativeFrequency(): void;
  getRelativeFrequency(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setRelativeFrequency(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticalTable.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticalTable): StatisticalTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticalTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticalTable;
  static deserializeBinaryFromReader(message: StatisticalTable, reader: jspb.BinaryReader): StatisticalTable;
}

export namespace StatisticalTable {
  export type AsObject = {
    table?: google_privacy_dlp_v2_storage_pb.BigQueryTable.AsObject,
    quasiIdsList: Array<StatisticalTable.QuasiIdentifierField.AsObject>,
    relativeFrequency?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
  }

  export class QuasiIdentifierField extends jspb.Message {
    hasField(): boolean;
    clearField(): void;
    getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
    setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

    getCustomTag(): string;
    setCustomTag(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuasiIdentifierField.AsObject;
    static toObject(includeInstance: boolean, msg: QuasiIdentifierField): QuasiIdentifierField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuasiIdentifierField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuasiIdentifierField;
    static deserializeBinaryFromReader(message: QuasiIdentifierField, reader: jspb.BinaryReader): QuasiIdentifierField;
  }

  export namespace QuasiIdentifierField {
    export type AsObject = {
      field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
      customTag: string,
    }
  }
}

export class PrivacyMetric extends jspb.Message {
  hasNumericalStatsConfig(): boolean;
  clearNumericalStatsConfig(): void;
  getNumericalStatsConfig(): PrivacyMetric.NumericalStatsConfig | undefined;
  setNumericalStatsConfig(value?: PrivacyMetric.NumericalStatsConfig): void;

  hasCategoricalStatsConfig(): boolean;
  clearCategoricalStatsConfig(): void;
  getCategoricalStatsConfig(): PrivacyMetric.CategoricalStatsConfig | undefined;
  setCategoricalStatsConfig(value?: PrivacyMetric.CategoricalStatsConfig): void;

  hasKAnonymityConfig(): boolean;
  clearKAnonymityConfig(): void;
  getKAnonymityConfig(): PrivacyMetric.KAnonymityConfig | undefined;
  setKAnonymityConfig(value?: PrivacyMetric.KAnonymityConfig): void;

  hasLDiversityConfig(): boolean;
  clearLDiversityConfig(): void;
  getLDiversityConfig(): PrivacyMetric.LDiversityConfig | undefined;
  setLDiversityConfig(value?: PrivacyMetric.LDiversityConfig): void;

  hasKMapEstimationConfig(): boolean;
  clearKMapEstimationConfig(): void;
  getKMapEstimationConfig(): PrivacyMetric.KMapEstimationConfig | undefined;
  setKMapEstimationConfig(value?: PrivacyMetric.KMapEstimationConfig): void;

  hasDeltaPresenceEstimationConfig(): boolean;
  clearDeltaPresenceEstimationConfig(): void;
  getDeltaPresenceEstimationConfig(): PrivacyMetric.DeltaPresenceEstimationConfig | undefined;
  setDeltaPresenceEstimationConfig(value?: PrivacyMetric.DeltaPresenceEstimationConfig): void;

  getTypeCase(): PrivacyMetric.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivacyMetric.AsObject;
  static toObject(includeInstance: boolean, msg: PrivacyMetric): PrivacyMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrivacyMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivacyMetric;
  static deserializeBinaryFromReader(message: PrivacyMetric, reader: jspb.BinaryReader): PrivacyMetric;
}

export namespace PrivacyMetric {
  export type AsObject = {
    numericalStatsConfig?: PrivacyMetric.NumericalStatsConfig.AsObject,
    categoricalStatsConfig?: PrivacyMetric.CategoricalStatsConfig.AsObject,
    kAnonymityConfig?: PrivacyMetric.KAnonymityConfig.AsObject,
    lDiversityConfig?: PrivacyMetric.LDiversityConfig.AsObject,
    kMapEstimationConfig?: PrivacyMetric.KMapEstimationConfig.AsObject,
    deltaPresenceEstimationConfig?: PrivacyMetric.DeltaPresenceEstimationConfig.AsObject,
  }

  export class NumericalStatsConfig extends jspb.Message {
    hasField(): boolean;
    clearField(): void;
    getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
    setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NumericalStatsConfig.AsObject;
    static toObject(includeInstance: boolean, msg: NumericalStatsConfig): NumericalStatsConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NumericalStatsConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NumericalStatsConfig;
    static deserializeBinaryFromReader(message: NumericalStatsConfig, reader: jspb.BinaryReader): NumericalStatsConfig;
  }

  export namespace NumericalStatsConfig {
    export type AsObject = {
      field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    }
  }

  export class CategoricalStatsConfig extends jspb.Message {
    hasField(): boolean;
    clearField(): void;
    getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
    setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoricalStatsConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CategoricalStatsConfig): CategoricalStatsConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoricalStatsConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoricalStatsConfig;
    static deserializeBinaryFromReader(message: CategoricalStatsConfig, reader: jspb.BinaryReader): CategoricalStatsConfig;
  }

  export namespace CategoricalStatsConfig {
    export type AsObject = {
      field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    }
  }

  export class KAnonymityConfig extends jspb.Message {
    clearQuasiIdsList(): void;
    getQuasiIdsList(): Array<google_privacy_dlp_v2_storage_pb.FieldId>;
    setQuasiIdsList(value: Array<google_privacy_dlp_v2_storage_pb.FieldId>): void;
    addQuasiIds(value?: google_privacy_dlp_v2_storage_pb.FieldId, index?: number): google_privacy_dlp_v2_storage_pb.FieldId;

    hasEntityId(): boolean;
    clearEntityId(): void;
    getEntityId(): google_privacy_dlp_v2_storage_pb.EntityId | undefined;
    setEntityId(value?: google_privacy_dlp_v2_storage_pb.EntityId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KAnonymityConfig.AsObject;
    static toObject(includeInstance: boolean, msg: KAnonymityConfig): KAnonymityConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KAnonymityConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KAnonymityConfig;
    static deserializeBinaryFromReader(message: KAnonymityConfig, reader: jspb.BinaryReader): KAnonymityConfig;
  }

  export namespace KAnonymityConfig {
    export type AsObject = {
      quasiIdsList: Array<google_privacy_dlp_v2_storage_pb.FieldId.AsObject>,
      entityId?: google_privacy_dlp_v2_storage_pb.EntityId.AsObject,
    }
  }

  export class LDiversityConfig extends jspb.Message {
    clearQuasiIdsList(): void;
    getQuasiIdsList(): Array<google_privacy_dlp_v2_storage_pb.FieldId>;
    setQuasiIdsList(value: Array<google_privacy_dlp_v2_storage_pb.FieldId>): void;
    addQuasiIds(value?: google_privacy_dlp_v2_storage_pb.FieldId, index?: number): google_privacy_dlp_v2_storage_pb.FieldId;

    hasSensitiveAttribute(): boolean;
    clearSensitiveAttribute(): void;
    getSensitiveAttribute(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
    setSensitiveAttribute(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LDiversityConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LDiversityConfig): LDiversityConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LDiversityConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LDiversityConfig;
    static deserializeBinaryFromReader(message: LDiversityConfig, reader: jspb.BinaryReader): LDiversityConfig;
  }

  export namespace LDiversityConfig {
    export type AsObject = {
      quasiIdsList: Array<google_privacy_dlp_v2_storage_pb.FieldId.AsObject>,
      sensitiveAttribute?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    }
  }

  export class KMapEstimationConfig extends jspb.Message {
    clearQuasiIdsList(): void;
    getQuasiIdsList(): Array<PrivacyMetric.KMapEstimationConfig.TaggedField>;
    setQuasiIdsList(value: Array<PrivacyMetric.KMapEstimationConfig.TaggedField>): void;
    addQuasiIds(value?: PrivacyMetric.KMapEstimationConfig.TaggedField, index?: number): PrivacyMetric.KMapEstimationConfig.TaggedField;

    getRegionCode(): string;
    setRegionCode(value: string): void;

    clearAuxiliaryTablesList(): void;
    getAuxiliaryTablesList(): Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable>;
    setAuxiliaryTablesList(value: Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable>): void;
    addAuxiliaryTables(value?: PrivacyMetric.KMapEstimationConfig.AuxiliaryTable, index?: number): PrivacyMetric.KMapEstimationConfig.AuxiliaryTable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KMapEstimationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: KMapEstimationConfig): KMapEstimationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KMapEstimationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KMapEstimationConfig;
    static deserializeBinaryFromReader(message: KMapEstimationConfig, reader: jspb.BinaryReader): KMapEstimationConfig;
  }

  export namespace KMapEstimationConfig {
    export type AsObject = {
      quasiIdsList: Array<PrivacyMetric.KMapEstimationConfig.TaggedField.AsObject>,
      regionCode: string,
      auxiliaryTablesList: Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.AsObject>,
    }

    export class TaggedField extends jspb.Message {
      hasField(): boolean;
      clearField(): void;
      getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
      setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

      hasInfoType(): boolean;
      clearInfoType(): void;
      getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
      setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

      hasCustomTag(): boolean;
      clearCustomTag(): void;
      getCustomTag(): string;
      setCustomTag(value: string): void;

      hasInferred(): boolean;
      clearInferred(): void;
      getInferred(): google_protobuf_empty_pb.Empty | undefined;
      setInferred(value?: google_protobuf_empty_pb.Empty): void;

      getTagCase(): TaggedField.TagCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TaggedField.AsObject;
      static toObject(includeInstance: boolean, msg: TaggedField): TaggedField.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TaggedField, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TaggedField;
      static deserializeBinaryFromReader(message: TaggedField, reader: jspb.BinaryReader): TaggedField;
    }

    export namespace TaggedField {
      export type AsObject = {
        field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
        infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
        customTag: string,
        inferred?: google_protobuf_empty_pb.Empty.AsObject,
      }

      export enum TagCase {
        TAG_NOT_SET = 0,
        INFO_TYPE = 2,
        CUSTOM_TAG = 3,
        INFERRED = 4,
      }
    }

    export class AuxiliaryTable extends jspb.Message {
      hasTable(): boolean;
      clearTable(): void;
      getTable(): google_privacy_dlp_v2_storage_pb.BigQueryTable | undefined;
      setTable(value?: google_privacy_dlp_v2_storage_pb.BigQueryTable): void;

      clearQuasiIdsList(): void;
      getQuasiIdsList(): Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField>;
      setQuasiIdsList(value: Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField>): void;
      addQuasiIds(value?: PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField, index?: number): PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField;

      hasRelativeFrequency(): boolean;
      clearRelativeFrequency(): void;
      getRelativeFrequency(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
      setRelativeFrequency(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AuxiliaryTable.AsObject;
      static toObject(includeInstance: boolean, msg: AuxiliaryTable): AuxiliaryTable.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AuxiliaryTable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AuxiliaryTable;
      static deserializeBinaryFromReader(message: AuxiliaryTable, reader: jspb.BinaryReader): AuxiliaryTable;
    }

    export namespace AuxiliaryTable {
      export type AsObject = {
        table?: google_privacy_dlp_v2_storage_pb.BigQueryTable.AsObject,
        quasiIdsList: Array<PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField.AsObject>,
        relativeFrequency?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
      }

      export class QuasiIdField extends jspb.Message {
        hasField(): boolean;
        clearField(): void;
        getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
        setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

        getCustomTag(): string;
        setCustomTag(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QuasiIdField.AsObject;
        static toObject(includeInstance: boolean, msg: QuasiIdField): QuasiIdField.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QuasiIdField, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QuasiIdField;
        static deserializeBinaryFromReader(message: QuasiIdField, reader: jspb.BinaryReader): QuasiIdField;
      }

      export namespace QuasiIdField {
        export type AsObject = {
          field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
          customTag: string,
        }
      }
    }
  }

  export class DeltaPresenceEstimationConfig extends jspb.Message {
    clearQuasiIdsList(): void;
    getQuasiIdsList(): Array<QuasiId>;
    setQuasiIdsList(value: Array<QuasiId>): void;
    addQuasiIds(value?: QuasiId, index?: number): QuasiId;

    getRegionCode(): string;
    setRegionCode(value: string): void;

    clearAuxiliaryTablesList(): void;
    getAuxiliaryTablesList(): Array<StatisticalTable>;
    setAuxiliaryTablesList(value: Array<StatisticalTable>): void;
    addAuxiliaryTables(value?: StatisticalTable, index?: number): StatisticalTable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeltaPresenceEstimationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DeltaPresenceEstimationConfig): DeltaPresenceEstimationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeltaPresenceEstimationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeltaPresenceEstimationConfig;
    static deserializeBinaryFromReader(message: DeltaPresenceEstimationConfig, reader: jspb.BinaryReader): DeltaPresenceEstimationConfig;
  }

  export namespace DeltaPresenceEstimationConfig {
    export type AsObject = {
      quasiIdsList: Array<QuasiId.AsObject>,
      regionCode: string,
      auxiliaryTablesList: Array<StatisticalTable.AsObject>,
    }
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    NUMERICAL_STATS_CONFIG = 1,
    CATEGORICAL_STATS_CONFIG = 2,
    K_ANONYMITY_CONFIG = 3,
    L_DIVERSITY_CONFIG = 4,
    K_MAP_ESTIMATION_CONFIG = 5,
    DELTA_PRESENCE_ESTIMATION_CONFIG = 6,
  }
}

export class AnalyzeDataSourceRiskDetails extends jspb.Message {
  hasRequestedPrivacyMetric(): boolean;
  clearRequestedPrivacyMetric(): void;
  getRequestedPrivacyMetric(): PrivacyMetric | undefined;
  setRequestedPrivacyMetric(value?: PrivacyMetric): void;

  hasRequestedSourceTable(): boolean;
  clearRequestedSourceTable(): void;
  getRequestedSourceTable(): google_privacy_dlp_v2_storage_pb.BigQueryTable | undefined;
  setRequestedSourceTable(value?: google_privacy_dlp_v2_storage_pb.BigQueryTable): void;

  hasNumericalStatsResult(): boolean;
  clearNumericalStatsResult(): void;
  getNumericalStatsResult(): AnalyzeDataSourceRiskDetails.NumericalStatsResult | undefined;
  setNumericalStatsResult(value?: AnalyzeDataSourceRiskDetails.NumericalStatsResult): void;

  hasCategoricalStatsResult(): boolean;
  clearCategoricalStatsResult(): void;
  getCategoricalStatsResult(): AnalyzeDataSourceRiskDetails.CategoricalStatsResult | undefined;
  setCategoricalStatsResult(value?: AnalyzeDataSourceRiskDetails.CategoricalStatsResult): void;

  hasKAnonymityResult(): boolean;
  clearKAnonymityResult(): void;
  getKAnonymityResult(): AnalyzeDataSourceRiskDetails.KAnonymityResult | undefined;
  setKAnonymityResult(value?: AnalyzeDataSourceRiskDetails.KAnonymityResult): void;

  hasLDiversityResult(): boolean;
  clearLDiversityResult(): void;
  getLDiversityResult(): AnalyzeDataSourceRiskDetails.LDiversityResult | undefined;
  setLDiversityResult(value?: AnalyzeDataSourceRiskDetails.LDiversityResult): void;

  hasKMapEstimationResult(): boolean;
  clearKMapEstimationResult(): void;
  getKMapEstimationResult(): AnalyzeDataSourceRiskDetails.KMapEstimationResult | undefined;
  setKMapEstimationResult(value?: AnalyzeDataSourceRiskDetails.KMapEstimationResult): void;

  hasDeltaPresenceEstimationResult(): boolean;
  clearDeltaPresenceEstimationResult(): void;
  getDeltaPresenceEstimationResult(): AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult | undefined;
  setDeltaPresenceEstimationResult(value?: AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult): void;

  getResultCase(): AnalyzeDataSourceRiskDetails.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeDataSourceRiskDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeDataSourceRiskDetails): AnalyzeDataSourceRiskDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnalyzeDataSourceRiskDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeDataSourceRiskDetails;
  static deserializeBinaryFromReader(message: AnalyzeDataSourceRiskDetails, reader: jspb.BinaryReader): AnalyzeDataSourceRiskDetails;
}

export namespace AnalyzeDataSourceRiskDetails {
  export type AsObject = {
    requestedPrivacyMetric?: PrivacyMetric.AsObject,
    requestedSourceTable?: google_privacy_dlp_v2_storage_pb.BigQueryTable.AsObject,
    numericalStatsResult?: AnalyzeDataSourceRiskDetails.NumericalStatsResult.AsObject,
    categoricalStatsResult?: AnalyzeDataSourceRiskDetails.CategoricalStatsResult.AsObject,
    kAnonymityResult?: AnalyzeDataSourceRiskDetails.KAnonymityResult.AsObject,
    lDiversityResult?: AnalyzeDataSourceRiskDetails.LDiversityResult.AsObject,
    kMapEstimationResult?: AnalyzeDataSourceRiskDetails.KMapEstimationResult.AsObject,
    deltaPresenceEstimationResult?: AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.AsObject,
  }

  export class NumericalStatsResult extends jspb.Message {
    hasMinValue(): boolean;
    clearMinValue(): void;
    getMinValue(): Value | undefined;
    setMinValue(value?: Value): void;

    hasMaxValue(): boolean;
    clearMaxValue(): void;
    getMaxValue(): Value | undefined;
    setMaxValue(value?: Value): void;

    clearQuantileValuesList(): void;
    getQuantileValuesList(): Array<Value>;
    setQuantileValuesList(value: Array<Value>): void;
    addQuantileValues(value?: Value, index?: number): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NumericalStatsResult.AsObject;
    static toObject(includeInstance: boolean, msg: NumericalStatsResult): NumericalStatsResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NumericalStatsResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NumericalStatsResult;
    static deserializeBinaryFromReader(message: NumericalStatsResult, reader: jspb.BinaryReader): NumericalStatsResult;
  }

  export namespace NumericalStatsResult {
    export type AsObject = {
      minValue?: Value.AsObject,
      maxValue?: Value.AsObject,
      quantileValuesList: Array<Value.AsObject>,
    }
  }

  export class CategoricalStatsResult extends jspb.Message {
    clearValueFrequencyHistogramBucketsList(): void;
    getValueFrequencyHistogramBucketsList(): Array<AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket>;
    setValueFrequencyHistogramBucketsList(value: Array<AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket>): void;
    addValueFrequencyHistogramBuckets(value?: AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket, index?: number): AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoricalStatsResult.AsObject;
    static toObject(includeInstance: boolean, msg: CategoricalStatsResult): CategoricalStatsResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoricalStatsResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoricalStatsResult;
    static deserializeBinaryFromReader(message: CategoricalStatsResult, reader: jspb.BinaryReader): CategoricalStatsResult;
  }

  export namespace CategoricalStatsResult {
    export type AsObject = {
      valueFrequencyHistogramBucketsList: Array<AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket.AsObject>,
    }

    export class CategoricalStatsHistogramBucket extends jspb.Message {
      getValueFrequencyLowerBound(): number;
      setValueFrequencyLowerBound(value: number): void;

      getValueFrequencyUpperBound(): number;
      setValueFrequencyUpperBound(value: number): void;

      getBucketSize(): number;
      setBucketSize(value: number): void;

      clearBucketValuesList(): void;
      getBucketValuesList(): Array<ValueFrequency>;
      setBucketValuesList(value: Array<ValueFrequency>): void;
      addBucketValues(value?: ValueFrequency, index?: number): ValueFrequency;

      getBucketValueCount(): number;
      setBucketValueCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CategoricalStatsHistogramBucket.AsObject;
      static toObject(includeInstance: boolean, msg: CategoricalStatsHistogramBucket): CategoricalStatsHistogramBucket.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CategoricalStatsHistogramBucket, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CategoricalStatsHistogramBucket;
      static deserializeBinaryFromReader(message: CategoricalStatsHistogramBucket, reader: jspb.BinaryReader): CategoricalStatsHistogramBucket;
    }

    export namespace CategoricalStatsHistogramBucket {
      export type AsObject = {
        valueFrequencyLowerBound: number,
        valueFrequencyUpperBound: number,
        bucketSize: number,
        bucketValuesList: Array<ValueFrequency.AsObject>,
        bucketValueCount: number,
      }
    }
  }

  export class KAnonymityResult extends jspb.Message {
    clearEquivalenceClassHistogramBucketsList(): void;
    getEquivalenceClassHistogramBucketsList(): Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket>;
    setEquivalenceClassHistogramBucketsList(value: Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket>): void;
    addEquivalenceClassHistogramBuckets(value?: AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket, index?: number): AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KAnonymityResult.AsObject;
    static toObject(includeInstance: boolean, msg: KAnonymityResult): KAnonymityResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KAnonymityResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KAnonymityResult;
    static deserializeBinaryFromReader(message: KAnonymityResult, reader: jspb.BinaryReader): KAnonymityResult;
  }

  export namespace KAnonymityResult {
    export type AsObject = {
      equivalenceClassHistogramBucketsList: Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket.AsObject>,
    }

    export class KAnonymityEquivalenceClass extends jspb.Message {
      clearQuasiIdsValuesList(): void;
      getQuasiIdsValuesList(): Array<Value>;
      setQuasiIdsValuesList(value: Array<Value>): void;
      addQuasiIdsValues(value?: Value, index?: number): Value;

      getEquivalenceClassSize(): number;
      setEquivalenceClassSize(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): KAnonymityEquivalenceClass.AsObject;
      static toObject(includeInstance: boolean, msg: KAnonymityEquivalenceClass): KAnonymityEquivalenceClass.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: KAnonymityEquivalenceClass, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): KAnonymityEquivalenceClass;
      static deserializeBinaryFromReader(message: KAnonymityEquivalenceClass, reader: jspb.BinaryReader): KAnonymityEquivalenceClass;
    }

    export namespace KAnonymityEquivalenceClass {
      export type AsObject = {
        quasiIdsValuesList: Array<Value.AsObject>,
        equivalenceClassSize: number,
      }
    }

    export class KAnonymityHistogramBucket extends jspb.Message {
      getEquivalenceClassSizeLowerBound(): number;
      setEquivalenceClassSizeLowerBound(value: number): void;

      getEquivalenceClassSizeUpperBound(): number;
      setEquivalenceClassSizeUpperBound(value: number): void;

      getBucketSize(): number;
      setBucketSize(value: number): void;

      clearBucketValuesList(): void;
      getBucketValuesList(): Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass>;
      setBucketValuesList(value: Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass>): void;
      addBucketValues(value?: AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass, index?: number): AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass;

      getBucketValueCount(): number;
      setBucketValueCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): KAnonymityHistogramBucket.AsObject;
      static toObject(includeInstance: boolean, msg: KAnonymityHistogramBucket): KAnonymityHistogramBucket.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: KAnonymityHistogramBucket, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): KAnonymityHistogramBucket;
      static deserializeBinaryFromReader(message: KAnonymityHistogramBucket, reader: jspb.BinaryReader): KAnonymityHistogramBucket;
    }

    export namespace KAnonymityHistogramBucket {
      export type AsObject = {
        equivalenceClassSizeLowerBound: number,
        equivalenceClassSizeUpperBound: number,
        bucketSize: number,
        bucketValuesList: Array<AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass.AsObject>,
        bucketValueCount: number,
      }
    }
  }

  export class LDiversityResult extends jspb.Message {
    clearSensitiveValueFrequencyHistogramBucketsList(): void;
    getSensitiveValueFrequencyHistogramBucketsList(): Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket>;
    setSensitiveValueFrequencyHistogramBucketsList(value: Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket>): void;
    addSensitiveValueFrequencyHistogramBuckets(value?: AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket, index?: number): AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LDiversityResult.AsObject;
    static toObject(includeInstance: boolean, msg: LDiversityResult): LDiversityResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LDiversityResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LDiversityResult;
    static deserializeBinaryFromReader(message: LDiversityResult, reader: jspb.BinaryReader): LDiversityResult;
  }

  export namespace LDiversityResult {
    export type AsObject = {
      sensitiveValueFrequencyHistogramBucketsList: Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket.AsObject>,
    }

    export class LDiversityEquivalenceClass extends jspb.Message {
      clearQuasiIdsValuesList(): void;
      getQuasiIdsValuesList(): Array<Value>;
      setQuasiIdsValuesList(value: Array<Value>): void;
      addQuasiIdsValues(value?: Value, index?: number): Value;

      getEquivalenceClassSize(): number;
      setEquivalenceClassSize(value: number): void;

      getNumDistinctSensitiveValues(): number;
      setNumDistinctSensitiveValues(value: number): void;

      clearTopSensitiveValuesList(): void;
      getTopSensitiveValuesList(): Array<ValueFrequency>;
      setTopSensitiveValuesList(value: Array<ValueFrequency>): void;
      addTopSensitiveValues(value?: ValueFrequency, index?: number): ValueFrequency;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LDiversityEquivalenceClass.AsObject;
      static toObject(includeInstance: boolean, msg: LDiversityEquivalenceClass): LDiversityEquivalenceClass.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LDiversityEquivalenceClass, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LDiversityEquivalenceClass;
      static deserializeBinaryFromReader(message: LDiversityEquivalenceClass, reader: jspb.BinaryReader): LDiversityEquivalenceClass;
    }

    export namespace LDiversityEquivalenceClass {
      export type AsObject = {
        quasiIdsValuesList: Array<Value.AsObject>,
        equivalenceClassSize: number,
        numDistinctSensitiveValues: number,
        topSensitiveValuesList: Array<ValueFrequency.AsObject>,
      }
    }

    export class LDiversityHistogramBucket extends jspb.Message {
      getSensitiveValueFrequencyLowerBound(): number;
      setSensitiveValueFrequencyLowerBound(value: number): void;

      getSensitiveValueFrequencyUpperBound(): number;
      setSensitiveValueFrequencyUpperBound(value: number): void;

      getBucketSize(): number;
      setBucketSize(value: number): void;

      clearBucketValuesList(): void;
      getBucketValuesList(): Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass>;
      setBucketValuesList(value: Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass>): void;
      addBucketValues(value?: AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass, index?: number): AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass;

      getBucketValueCount(): number;
      setBucketValueCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LDiversityHistogramBucket.AsObject;
      static toObject(includeInstance: boolean, msg: LDiversityHistogramBucket): LDiversityHistogramBucket.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LDiversityHistogramBucket, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LDiversityHistogramBucket;
      static deserializeBinaryFromReader(message: LDiversityHistogramBucket, reader: jspb.BinaryReader): LDiversityHistogramBucket;
    }

    export namespace LDiversityHistogramBucket {
      export type AsObject = {
        sensitiveValueFrequencyLowerBound: number,
        sensitiveValueFrequencyUpperBound: number,
        bucketSize: number,
        bucketValuesList: Array<AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass.AsObject>,
        bucketValueCount: number,
      }
    }
  }

  export class KMapEstimationResult extends jspb.Message {
    clearKMapEstimationHistogramList(): void;
    getKMapEstimationHistogramList(): Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket>;
    setKMapEstimationHistogramList(value: Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket>): void;
    addKMapEstimationHistogram(value?: AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket, index?: number): AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KMapEstimationResult.AsObject;
    static toObject(includeInstance: boolean, msg: KMapEstimationResult): KMapEstimationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KMapEstimationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KMapEstimationResult;
    static deserializeBinaryFromReader(message: KMapEstimationResult, reader: jspb.BinaryReader): KMapEstimationResult;
  }

  export namespace KMapEstimationResult {
    export type AsObject = {
      kMapEstimationHistogramList: Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket.AsObject>,
    }

    export class KMapEstimationQuasiIdValues extends jspb.Message {
      clearQuasiIdsValuesList(): void;
      getQuasiIdsValuesList(): Array<Value>;
      setQuasiIdsValuesList(value: Array<Value>): void;
      addQuasiIdsValues(value?: Value, index?: number): Value;

      getEstimatedAnonymity(): number;
      setEstimatedAnonymity(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): KMapEstimationQuasiIdValues.AsObject;
      static toObject(includeInstance: boolean, msg: KMapEstimationQuasiIdValues): KMapEstimationQuasiIdValues.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: KMapEstimationQuasiIdValues, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): KMapEstimationQuasiIdValues;
      static deserializeBinaryFromReader(message: KMapEstimationQuasiIdValues, reader: jspb.BinaryReader): KMapEstimationQuasiIdValues;
    }

    export namespace KMapEstimationQuasiIdValues {
      export type AsObject = {
        quasiIdsValuesList: Array<Value.AsObject>,
        estimatedAnonymity: number,
      }
    }

    export class KMapEstimationHistogramBucket extends jspb.Message {
      getMinAnonymity(): number;
      setMinAnonymity(value: number): void;

      getMaxAnonymity(): number;
      setMaxAnonymity(value: number): void;

      getBucketSize(): number;
      setBucketSize(value: number): void;

      clearBucketValuesList(): void;
      getBucketValuesList(): Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues>;
      setBucketValuesList(value: Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues>): void;
      addBucketValues(value?: AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues, index?: number): AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues;

      getBucketValueCount(): number;
      setBucketValueCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): KMapEstimationHistogramBucket.AsObject;
      static toObject(includeInstance: boolean, msg: KMapEstimationHistogramBucket): KMapEstimationHistogramBucket.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: KMapEstimationHistogramBucket, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): KMapEstimationHistogramBucket;
      static deserializeBinaryFromReader(message: KMapEstimationHistogramBucket, reader: jspb.BinaryReader): KMapEstimationHistogramBucket;
    }

    export namespace KMapEstimationHistogramBucket {
      export type AsObject = {
        minAnonymity: number,
        maxAnonymity: number,
        bucketSize: number,
        bucketValuesList: Array<AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues.AsObject>,
        bucketValueCount: number,
      }
    }
  }

  export class DeltaPresenceEstimationResult extends jspb.Message {
    clearDeltaPresenceEstimationHistogramList(): void;
    getDeltaPresenceEstimationHistogramList(): Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationHistogramBucket>;
    setDeltaPresenceEstimationHistogramList(value: Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationHistogramBucket>): void;
    addDeltaPresenceEstimationHistogram(value?: AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationHistogramBucket, index?: number): AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationHistogramBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeltaPresenceEstimationResult.AsObject;
    static toObject(includeInstance: boolean, msg: DeltaPresenceEstimationResult): DeltaPresenceEstimationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeltaPresenceEstimationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeltaPresenceEstimationResult;
    static deserializeBinaryFromReader(message: DeltaPresenceEstimationResult, reader: jspb.BinaryReader): DeltaPresenceEstimationResult;
  }

  export namespace DeltaPresenceEstimationResult {
    export type AsObject = {
      deltaPresenceEstimationHistogramList: Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationHistogramBucket.AsObject>,
    }

    export class DeltaPresenceEstimationQuasiIdValues extends jspb.Message {
      clearQuasiIdsValuesList(): void;
      getQuasiIdsValuesList(): Array<Value>;
      setQuasiIdsValuesList(value: Array<Value>): void;
      addQuasiIdsValues(value?: Value, index?: number): Value;

      getEstimatedProbability(): number;
      setEstimatedProbability(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeltaPresenceEstimationQuasiIdValues.AsObject;
      static toObject(includeInstance: boolean, msg: DeltaPresenceEstimationQuasiIdValues): DeltaPresenceEstimationQuasiIdValues.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeltaPresenceEstimationQuasiIdValues, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeltaPresenceEstimationQuasiIdValues;
      static deserializeBinaryFromReader(message: DeltaPresenceEstimationQuasiIdValues, reader: jspb.BinaryReader): DeltaPresenceEstimationQuasiIdValues;
    }

    export namespace DeltaPresenceEstimationQuasiIdValues {
      export type AsObject = {
        quasiIdsValuesList: Array<Value.AsObject>,
        estimatedProbability: number,
      }
    }

    export class DeltaPresenceEstimationHistogramBucket extends jspb.Message {
      getMinProbability(): number;
      setMinProbability(value: number): void;

      getMaxProbability(): number;
      setMaxProbability(value: number): void;

      getBucketSize(): number;
      setBucketSize(value: number): void;

      clearBucketValuesList(): void;
      getBucketValuesList(): Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationQuasiIdValues>;
      setBucketValuesList(value: Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationQuasiIdValues>): void;
      addBucketValues(value?: AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationQuasiIdValues, index?: number): AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationQuasiIdValues;

      getBucketValueCount(): number;
      setBucketValueCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeltaPresenceEstimationHistogramBucket.AsObject;
      static toObject(includeInstance: boolean, msg: DeltaPresenceEstimationHistogramBucket): DeltaPresenceEstimationHistogramBucket.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeltaPresenceEstimationHistogramBucket, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeltaPresenceEstimationHistogramBucket;
      static deserializeBinaryFromReader(message: DeltaPresenceEstimationHistogramBucket, reader: jspb.BinaryReader): DeltaPresenceEstimationHistogramBucket;
    }

    export namespace DeltaPresenceEstimationHistogramBucket {
      export type AsObject = {
        minProbability: number,
        maxProbability: number,
        bucketSize: number,
        bucketValuesList: Array<AnalyzeDataSourceRiskDetails.DeltaPresenceEstimationResult.DeltaPresenceEstimationQuasiIdValues.AsObject>,
        bucketValueCount: number,
      }
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    NUMERICAL_STATS_RESULT = 3,
    CATEGORICAL_STATS_RESULT = 4,
    K_ANONYMITY_RESULT = 5,
    L_DIVERSITY_RESULT = 6,
    K_MAP_ESTIMATION_RESULT = 7,
    DELTA_PRESENCE_ESTIMATION_RESULT = 9,
  }
}

export class ValueFrequency extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueFrequency.AsObject;
  static toObject(includeInstance: boolean, msg: ValueFrequency): ValueFrequency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueFrequency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueFrequency;
  static deserializeBinaryFromReader(message: ValueFrequency, reader: jspb.BinaryReader): ValueFrequency;
}

export namespace ValueFrequency {
  export type AsObject = {
    value?: Value.AsObject,
    count: number,
  }
}

export class Value extends jspb.Message {
  hasIntegerValue(): boolean;
  clearIntegerValue(): void;
  getIntegerValue(): number;
  setIntegerValue(value: number): void;

  hasFloatValue(): boolean;
  clearFloatValue(): void;
  getFloatValue(): number;
  setFloatValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBooleanValue(): boolean;
  clearBooleanValue(): void;
  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): void;

  hasTimestampValue(): boolean;
  clearTimestampValue(): void;
  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeValue(): boolean;
  clearTimeValue(): void;
  getTimeValue(): google_type_timeofday_pb.TimeOfDay | undefined;
  setTimeValue(value?: google_type_timeofday_pb.TimeOfDay): void;

  hasDateValue(): boolean;
  clearDateValue(): void;
  getDateValue(): google_type_date_pb.Date | undefined;
  setDateValue(value?: google_type_date_pb.Date): void;

  hasDayOfWeekValue(): boolean;
  clearDayOfWeekValue(): void;
  getDayOfWeekValue(): google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap];
  setDayOfWeekValue(value: google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap]): void;

  getTypeCase(): Value.TypeCase;
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
    integerValue: number,
    floatValue: number,
    stringValue: string,
    booleanValue: boolean,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeValue?: google_type_timeofday_pb.TimeOfDay.AsObject,
    dateValue?: google_type_date_pb.Date.AsObject,
    dayOfWeekValue: google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap],
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    INTEGER_VALUE = 1,
    FLOAT_VALUE = 2,
    STRING_VALUE = 3,
    BOOLEAN_VALUE = 4,
    TIMESTAMP_VALUE = 5,
    TIME_VALUE = 6,
    DATE_VALUE = 7,
    DAY_OF_WEEK_VALUE = 8,
  }
}

export class QuoteInfo extends jspb.Message {
  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): DateTime | undefined;
  setDateTime(value?: DateTime): void;

  getParsedQuoteCase(): QuoteInfo.ParsedQuoteCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteInfo): QuoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteInfo;
  static deserializeBinaryFromReader(message: QuoteInfo, reader: jspb.BinaryReader): QuoteInfo;
}

export namespace QuoteInfo {
  export type AsObject = {
    dateTime?: DateTime.AsObject,
  }

  export enum ParsedQuoteCase {
    PARSED_QUOTE_NOT_SET = 0,
    DATE_TIME = 2,
  }
}

export class DateTime extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_type_date_pb.Date | undefined;
  setDate(value?: google_type_date_pb.Date): void;

  getDayOfWeek(): google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap];
  setDayOfWeek(value: google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_type_timeofday_pb.TimeOfDay | undefined;
  setTime(value?: google_type_timeofday_pb.TimeOfDay): void;

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): DateTime.TimeZone | undefined;
  setTimeZone(value?: DateTime.TimeZone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTime.AsObject;
  static toObject(includeInstance: boolean, msg: DateTime): DateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTime;
  static deserializeBinaryFromReader(message: DateTime, reader: jspb.BinaryReader): DateTime;
}

export namespace DateTime {
  export type AsObject = {
    date?: google_type_date_pb.Date.AsObject,
    dayOfWeek: google_type_dayofweek_pb.DayOfWeekMap[keyof google_type_dayofweek_pb.DayOfWeekMap],
    time?: google_type_timeofday_pb.TimeOfDay.AsObject,
    timeZone?: DateTime.TimeZone.AsObject,
  }

  export class TimeZone extends jspb.Message {
    getOffsetMinutes(): number;
    setOffsetMinutes(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeZone.AsObject;
    static toObject(includeInstance: boolean, msg: TimeZone): TimeZone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeZone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeZone;
    static deserializeBinaryFromReader(message: TimeZone, reader: jspb.BinaryReader): TimeZone;
  }

  export namespace TimeZone {
    export type AsObject = {
      offsetMinutes: number,
    }
  }
}

export class DeidentifyConfig extends jspb.Message {
  hasInfoTypeTransformations(): boolean;
  clearInfoTypeTransformations(): void;
  getInfoTypeTransformations(): InfoTypeTransformations | undefined;
  setInfoTypeTransformations(value?: InfoTypeTransformations): void;

  hasRecordTransformations(): boolean;
  clearRecordTransformations(): void;
  getRecordTransformations(): RecordTransformations | undefined;
  setRecordTransformations(value?: RecordTransformations): void;

  getTransformationCase(): DeidentifyConfig.TransformationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeidentifyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeidentifyConfig): DeidentifyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeidentifyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeidentifyConfig;
  static deserializeBinaryFromReader(message: DeidentifyConfig, reader: jspb.BinaryReader): DeidentifyConfig;
}

export namespace DeidentifyConfig {
  export type AsObject = {
    infoTypeTransformations?: InfoTypeTransformations.AsObject,
    recordTransformations?: RecordTransformations.AsObject,
  }

  export enum TransformationCase {
    TRANSFORMATION_NOT_SET = 0,
    INFO_TYPE_TRANSFORMATIONS = 1,
    RECORD_TRANSFORMATIONS = 2,
  }
}

export class PrimitiveTransformation extends jspb.Message {
  hasReplaceConfig(): boolean;
  clearReplaceConfig(): void;
  getReplaceConfig(): ReplaceValueConfig | undefined;
  setReplaceConfig(value?: ReplaceValueConfig): void;

  hasRedactConfig(): boolean;
  clearRedactConfig(): void;
  getRedactConfig(): RedactConfig | undefined;
  setRedactConfig(value?: RedactConfig): void;

  hasCharacterMaskConfig(): boolean;
  clearCharacterMaskConfig(): void;
  getCharacterMaskConfig(): CharacterMaskConfig | undefined;
  setCharacterMaskConfig(value?: CharacterMaskConfig): void;

  hasCryptoReplaceFfxFpeConfig(): boolean;
  clearCryptoReplaceFfxFpeConfig(): void;
  getCryptoReplaceFfxFpeConfig(): CryptoReplaceFfxFpeConfig | undefined;
  setCryptoReplaceFfxFpeConfig(value?: CryptoReplaceFfxFpeConfig): void;

  hasFixedSizeBucketingConfig(): boolean;
  clearFixedSizeBucketingConfig(): void;
  getFixedSizeBucketingConfig(): FixedSizeBucketingConfig | undefined;
  setFixedSizeBucketingConfig(value?: FixedSizeBucketingConfig): void;

  hasBucketingConfig(): boolean;
  clearBucketingConfig(): void;
  getBucketingConfig(): BucketingConfig | undefined;
  setBucketingConfig(value?: BucketingConfig): void;

  hasReplaceWithInfoTypeConfig(): boolean;
  clearReplaceWithInfoTypeConfig(): void;
  getReplaceWithInfoTypeConfig(): ReplaceWithInfoTypeConfig | undefined;
  setReplaceWithInfoTypeConfig(value?: ReplaceWithInfoTypeConfig): void;

  hasTimePartConfig(): boolean;
  clearTimePartConfig(): void;
  getTimePartConfig(): TimePartConfig | undefined;
  setTimePartConfig(value?: TimePartConfig): void;

  hasCryptoHashConfig(): boolean;
  clearCryptoHashConfig(): void;
  getCryptoHashConfig(): CryptoHashConfig | undefined;
  setCryptoHashConfig(value?: CryptoHashConfig): void;

  hasDateShiftConfig(): boolean;
  clearDateShiftConfig(): void;
  getDateShiftConfig(): DateShiftConfig | undefined;
  setDateShiftConfig(value?: DateShiftConfig): void;

  hasCryptoDeterministicConfig(): boolean;
  clearCryptoDeterministicConfig(): void;
  getCryptoDeterministicConfig(): CryptoDeterministicConfig | undefined;
  setCryptoDeterministicConfig(value?: CryptoDeterministicConfig): void;

  getTransformationCase(): PrimitiveTransformation.TransformationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveTransformation.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveTransformation): PrimitiveTransformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveTransformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveTransformation;
  static deserializeBinaryFromReader(message: PrimitiveTransformation, reader: jspb.BinaryReader): PrimitiveTransformation;
}

export namespace PrimitiveTransformation {
  export type AsObject = {
    replaceConfig?: ReplaceValueConfig.AsObject,
    redactConfig?: RedactConfig.AsObject,
    characterMaskConfig?: CharacterMaskConfig.AsObject,
    cryptoReplaceFfxFpeConfig?: CryptoReplaceFfxFpeConfig.AsObject,
    fixedSizeBucketingConfig?: FixedSizeBucketingConfig.AsObject,
    bucketingConfig?: BucketingConfig.AsObject,
    replaceWithInfoTypeConfig?: ReplaceWithInfoTypeConfig.AsObject,
    timePartConfig?: TimePartConfig.AsObject,
    cryptoHashConfig?: CryptoHashConfig.AsObject,
    dateShiftConfig?: DateShiftConfig.AsObject,
    cryptoDeterministicConfig?: CryptoDeterministicConfig.AsObject,
  }

  export enum TransformationCase {
    TRANSFORMATION_NOT_SET = 0,
    REPLACE_CONFIG = 1,
    REDACT_CONFIG = 2,
    CHARACTER_MASK_CONFIG = 3,
    CRYPTO_REPLACE_FFX_FPE_CONFIG = 4,
    FIXED_SIZE_BUCKETING_CONFIG = 5,
    BUCKETING_CONFIG = 6,
    REPLACE_WITH_INFO_TYPE_CONFIG = 7,
    TIME_PART_CONFIG = 8,
    CRYPTO_HASH_CONFIG = 9,
    DATE_SHIFT_CONFIG = 11,
    CRYPTO_DETERMINISTIC_CONFIG = 12,
  }
}

export class TimePartConfig extends jspb.Message {
  getPartToExtract(): TimePartConfig.TimePartMap[keyof TimePartConfig.TimePartMap];
  setPartToExtract(value: TimePartConfig.TimePartMap[keyof TimePartConfig.TimePartMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimePartConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TimePartConfig): TimePartConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimePartConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimePartConfig;
  static deserializeBinaryFromReader(message: TimePartConfig, reader: jspb.BinaryReader): TimePartConfig;
}

export namespace TimePartConfig {
  export type AsObject = {
    partToExtract: TimePartConfig.TimePartMap[keyof TimePartConfig.TimePartMap],
  }

  export interface TimePartMap {
    TIME_PART_UNSPECIFIED: 0;
    YEAR: 1;
    MONTH: 2;
    DAY_OF_MONTH: 3;
    DAY_OF_WEEK: 4;
    WEEK_OF_YEAR: 5;
    HOUR_OF_DAY: 6;
  }

  export const TimePart: TimePartMap;
}

export class CryptoHashConfig extends jspb.Message {
  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): CryptoKey | undefined;
  setCryptoKey(value?: CryptoKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoHashConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoHashConfig): CryptoHashConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoHashConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoHashConfig;
  static deserializeBinaryFromReader(message: CryptoHashConfig, reader: jspb.BinaryReader): CryptoHashConfig;
}

export namespace CryptoHashConfig {
  export type AsObject = {
    cryptoKey?: CryptoKey.AsObject,
  }
}

export class CryptoDeterministicConfig extends jspb.Message {
  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): CryptoKey | undefined;
  setCryptoKey(value?: CryptoKey): void;

  hasSurrogateInfoType(): boolean;
  clearSurrogateInfoType(): void;
  getSurrogateInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setSurrogateInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setContext(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeterministicConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeterministicConfig): CryptoDeterministicConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoDeterministicConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeterministicConfig;
  static deserializeBinaryFromReader(message: CryptoDeterministicConfig, reader: jspb.BinaryReader): CryptoDeterministicConfig;
}

export namespace CryptoDeterministicConfig {
  export type AsObject = {
    cryptoKey?: CryptoKey.AsObject,
    surrogateInfoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
    context?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
  }
}

export class ReplaceValueConfig extends jspb.Message {
  hasNewValue(): boolean;
  clearNewValue(): void;
  getNewValue(): Value | undefined;
  setNewValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceValueConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceValueConfig): ReplaceValueConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceValueConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceValueConfig;
  static deserializeBinaryFromReader(message: ReplaceValueConfig, reader: jspb.BinaryReader): ReplaceValueConfig;
}

export namespace ReplaceValueConfig {
  export type AsObject = {
    newValue?: Value.AsObject,
  }
}

export class ReplaceWithInfoTypeConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceWithInfoTypeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceWithInfoTypeConfig): ReplaceWithInfoTypeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceWithInfoTypeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceWithInfoTypeConfig;
  static deserializeBinaryFromReader(message: ReplaceWithInfoTypeConfig, reader: jspb.BinaryReader): ReplaceWithInfoTypeConfig;
}

export namespace ReplaceWithInfoTypeConfig {
  export type AsObject = {
  }
}

export class RedactConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedactConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RedactConfig): RedactConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedactConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedactConfig;
  static deserializeBinaryFromReader(message: RedactConfig, reader: jspb.BinaryReader): RedactConfig;
}

export namespace RedactConfig {
  export type AsObject = {
  }
}

export class CharsToIgnore extends jspb.Message {
  hasCharactersToSkip(): boolean;
  clearCharactersToSkip(): void;
  getCharactersToSkip(): string;
  setCharactersToSkip(value: string): void;

  hasCommonCharactersToIgnore(): boolean;
  clearCommonCharactersToIgnore(): void;
  getCommonCharactersToIgnore(): CharsToIgnore.CommonCharsToIgnoreMap[keyof CharsToIgnore.CommonCharsToIgnoreMap];
  setCommonCharactersToIgnore(value: CharsToIgnore.CommonCharsToIgnoreMap[keyof CharsToIgnore.CommonCharsToIgnoreMap]): void;

  getCharactersCase(): CharsToIgnore.CharactersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharsToIgnore.AsObject;
  static toObject(includeInstance: boolean, msg: CharsToIgnore): CharsToIgnore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharsToIgnore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharsToIgnore;
  static deserializeBinaryFromReader(message: CharsToIgnore, reader: jspb.BinaryReader): CharsToIgnore;
}

export namespace CharsToIgnore {
  export type AsObject = {
    charactersToSkip: string,
    commonCharactersToIgnore: CharsToIgnore.CommonCharsToIgnoreMap[keyof CharsToIgnore.CommonCharsToIgnoreMap],
  }

  export interface CommonCharsToIgnoreMap {
    COMMON_CHARS_TO_IGNORE_UNSPECIFIED: 0;
    NUMERIC: 1;
    ALPHA_UPPER_CASE: 2;
    ALPHA_LOWER_CASE: 3;
    PUNCTUATION: 4;
    WHITESPACE: 5;
  }

  export const CommonCharsToIgnore: CommonCharsToIgnoreMap;

  export enum CharactersCase {
    CHARACTERS_NOT_SET = 0,
    CHARACTERS_TO_SKIP = 1,
    COMMON_CHARACTERS_TO_IGNORE = 2,
  }
}

export class CharacterMaskConfig extends jspb.Message {
  getMaskingCharacter(): string;
  setMaskingCharacter(value: string): void;

  getNumberToMask(): number;
  setNumberToMask(value: number): void;

  getReverseOrder(): boolean;
  setReverseOrder(value: boolean): void;

  clearCharactersToIgnoreList(): void;
  getCharactersToIgnoreList(): Array<CharsToIgnore>;
  setCharactersToIgnoreList(value: Array<CharsToIgnore>): void;
  addCharactersToIgnore(value?: CharsToIgnore, index?: number): CharsToIgnore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterMaskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterMaskConfig): CharacterMaskConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharacterMaskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterMaskConfig;
  static deserializeBinaryFromReader(message: CharacterMaskConfig, reader: jspb.BinaryReader): CharacterMaskConfig;
}

export namespace CharacterMaskConfig {
  export type AsObject = {
    maskingCharacter: string,
    numberToMask: number,
    reverseOrder: boolean,
    charactersToIgnoreList: Array<CharsToIgnore.AsObject>,
  }
}

export class FixedSizeBucketingConfig extends jspb.Message {
  hasLowerBound(): boolean;
  clearLowerBound(): void;
  getLowerBound(): Value | undefined;
  setLowerBound(value?: Value): void;

  hasUpperBound(): boolean;
  clearUpperBound(): void;
  getUpperBound(): Value | undefined;
  setUpperBound(value?: Value): void;

  getBucketSize(): number;
  setBucketSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixedSizeBucketingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FixedSizeBucketingConfig): FixedSizeBucketingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FixedSizeBucketingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixedSizeBucketingConfig;
  static deserializeBinaryFromReader(message: FixedSizeBucketingConfig, reader: jspb.BinaryReader): FixedSizeBucketingConfig;
}

export namespace FixedSizeBucketingConfig {
  export type AsObject = {
    lowerBound?: Value.AsObject,
    upperBound?: Value.AsObject,
    bucketSize: number,
  }
}

export class BucketingConfig extends jspb.Message {
  clearBucketsList(): void;
  getBucketsList(): Array<BucketingConfig.Bucket>;
  setBucketsList(value: Array<BucketingConfig.Bucket>): void;
  addBuckets(value?: BucketingConfig.Bucket, index?: number): BucketingConfig.Bucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BucketingConfig): BucketingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BucketingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketingConfig;
  static deserializeBinaryFromReader(message: BucketingConfig, reader: jspb.BinaryReader): BucketingConfig;
}

export namespace BucketingConfig {
  export type AsObject = {
    bucketsList: Array<BucketingConfig.Bucket.AsObject>,
  }

  export class Bucket extends jspb.Message {
    hasMin(): boolean;
    clearMin(): void;
    getMin(): Value | undefined;
    setMin(value?: Value): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): Value | undefined;
    setMax(value?: Value): void;

    hasReplacementValue(): boolean;
    clearReplacementValue(): void;
    getReplacementValue(): Value | undefined;
    setReplacementValue(value?: Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bucket.AsObject;
    static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bucket;
    static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
  }

  export namespace Bucket {
    export type AsObject = {
      min?: Value.AsObject,
      max?: Value.AsObject,
      replacementValue?: Value.AsObject,
    }
  }
}

export class CryptoReplaceFfxFpeConfig extends jspb.Message {
  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): CryptoKey | undefined;
  setCryptoKey(value?: CryptoKey): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setContext(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  hasCommonAlphabet(): boolean;
  clearCommonAlphabet(): void;
  getCommonAlphabet(): CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap[keyof CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap];
  setCommonAlphabet(value: CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap[keyof CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap]): void;

  hasCustomAlphabet(): boolean;
  clearCustomAlphabet(): void;
  getCustomAlphabet(): string;
  setCustomAlphabet(value: string): void;

  hasRadix(): boolean;
  clearRadix(): void;
  getRadix(): number;
  setRadix(value: number): void;

  hasSurrogateInfoType(): boolean;
  clearSurrogateInfoType(): void;
  getSurrogateInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setSurrogateInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  getAlphabetCase(): CryptoReplaceFfxFpeConfig.AlphabetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoReplaceFfxFpeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoReplaceFfxFpeConfig): CryptoReplaceFfxFpeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoReplaceFfxFpeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoReplaceFfxFpeConfig;
  static deserializeBinaryFromReader(message: CryptoReplaceFfxFpeConfig, reader: jspb.BinaryReader): CryptoReplaceFfxFpeConfig;
}

export namespace CryptoReplaceFfxFpeConfig {
  export type AsObject = {
    cryptoKey?: CryptoKey.AsObject,
    context?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    commonAlphabet: CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap[keyof CryptoReplaceFfxFpeConfig.FfxCommonNativeAlphabetMap],
    customAlphabet: string,
    radix: number,
    surrogateInfoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
  }

  export interface FfxCommonNativeAlphabetMap {
    FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED: 0;
    NUMERIC: 1;
    HEXADECIMAL: 2;
    UPPER_CASE_ALPHA_NUMERIC: 3;
    ALPHA_NUMERIC: 4;
  }

  export const FfxCommonNativeAlphabet: FfxCommonNativeAlphabetMap;

  export enum AlphabetCase {
    ALPHABET_NOT_SET = 0,
    COMMON_ALPHABET = 4,
    CUSTOM_ALPHABET = 5,
    RADIX = 6,
  }
}

export class CryptoKey extends jspb.Message {
  hasTransient(): boolean;
  clearTransient(): void;
  getTransient(): TransientCryptoKey | undefined;
  setTransient(value?: TransientCryptoKey): void;

  hasUnwrapped(): boolean;
  clearUnwrapped(): void;
  getUnwrapped(): UnwrappedCryptoKey | undefined;
  setUnwrapped(value?: UnwrappedCryptoKey): void;

  hasKmsWrapped(): boolean;
  clearKmsWrapped(): void;
  getKmsWrapped(): KmsWrappedCryptoKey | undefined;
  setKmsWrapped(value?: KmsWrappedCryptoKey): void;

  getSourceCase(): CryptoKey.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKey): CryptoKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKey;
  static deserializeBinaryFromReader(message: CryptoKey, reader: jspb.BinaryReader): CryptoKey;
}

export namespace CryptoKey {
  export type AsObject = {
    pb_transient?: TransientCryptoKey.AsObject,
    unwrapped?: UnwrappedCryptoKey.AsObject,
    kmsWrapped?: KmsWrappedCryptoKey.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    TRANSIENT = 1,
    UNWRAPPED = 2,
    KMS_WRAPPED = 3,
  }
}

export class TransientCryptoKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransientCryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: TransientCryptoKey): TransientCryptoKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransientCryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransientCryptoKey;
  static deserializeBinaryFromReader(message: TransientCryptoKey, reader: jspb.BinaryReader): TransientCryptoKey;
}

export namespace TransientCryptoKey {
  export type AsObject = {
    name: string,
  }
}

export class UnwrappedCryptoKey extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnwrappedCryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: UnwrappedCryptoKey): UnwrappedCryptoKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnwrappedCryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnwrappedCryptoKey;
  static deserializeBinaryFromReader(message: UnwrappedCryptoKey, reader: jspb.BinaryReader): UnwrappedCryptoKey;
}

export namespace UnwrappedCryptoKey {
  export type AsObject = {
    key: Uint8Array | string,
  }
}

export class KmsWrappedCryptoKey extends jspb.Message {
  getWrappedKey(): Uint8Array | string;
  getWrappedKey_asU8(): Uint8Array;
  getWrappedKey_asB64(): string;
  setWrappedKey(value: Uint8Array | string): void;

  getCryptoKeyName(): string;
  setCryptoKeyName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KmsWrappedCryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: KmsWrappedCryptoKey): KmsWrappedCryptoKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KmsWrappedCryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KmsWrappedCryptoKey;
  static deserializeBinaryFromReader(message: KmsWrappedCryptoKey, reader: jspb.BinaryReader): KmsWrappedCryptoKey;
}

export namespace KmsWrappedCryptoKey {
  export type AsObject = {
    wrappedKey: Uint8Array | string,
    cryptoKeyName: string,
  }
}

export class DateShiftConfig extends jspb.Message {
  getUpperBoundDays(): number;
  setUpperBoundDays(value: number): void;

  getLowerBoundDays(): number;
  setLowerBoundDays(value: number): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setContext(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): CryptoKey | undefined;
  setCryptoKey(value?: CryptoKey): void;

  getMethodCase(): DateShiftConfig.MethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateShiftConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DateShiftConfig): DateShiftConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateShiftConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateShiftConfig;
  static deserializeBinaryFromReader(message: DateShiftConfig, reader: jspb.BinaryReader): DateShiftConfig;
}

export namespace DateShiftConfig {
  export type AsObject = {
    upperBoundDays: number,
    lowerBoundDays: number,
    context?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    cryptoKey?: CryptoKey.AsObject,
  }

  export enum MethodCase {
    METHOD_NOT_SET = 0,
    CRYPTO_KEY = 4,
  }
}

export class InfoTypeTransformations extends jspb.Message {
  clearTransformationsList(): void;
  getTransformationsList(): Array<InfoTypeTransformations.InfoTypeTransformation>;
  setTransformationsList(value: Array<InfoTypeTransformations.InfoTypeTransformation>): void;
  addTransformations(value?: InfoTypeTransformations.InfoTypeTransformation, index?: number): InfoTypeTransformations.InfoTypeTransformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoTypeTransformations.AsObject;
  static toObject(includeInstance: boolean, msg: InfoTypeTransformations): InfoTypeTransformations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoTypeTransformations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoTypeTransformations;
  static deserializeBinaryFromReader(message: InfoTypeTransformations, reader: jspb.BinaryReader): InfoTypeTransformations;
}

export namespace InfoTypeTransformations {
  export type AsObject = {
    transformationsList: Array<InfoTypeTransformations.InfoTypeTransformation.AsObject>,
  }

  export class InfoTypeTransformation extends jspb.Message {
    clearInfoTypesList(): void;
    getInfoTypesList(): Array<google_privacy_dlp_v2_storage_pb.InfoType>;
    setInfoTypesList(value: Array<google_privacy_dlp_v2_storage_pb.InfoType>): void;
    addInfoTypes(value?: google_privacy_dlp_v2_storage_pb.InfoType, index?: number): google_privacy_dlp_v2_storage_pb.InfoType;

    hasPrimitiveTransformation(): boolean;
    clearPrimitiveTransformation(): void;
    getPrimitiveTransformation(): PrimitiveTransformation | undefined;
    setPrimitiveTransformation(value?: PrimitiveTransformation): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfoTypeTransformation.AsObject;
    static toObject(includeInstance: boolean, msg: InfoTypeTransformation): InfoTypeTransformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfoTypeTransformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfoTypeTransformation;
    static deserializeBinaryFromReader(message: InfoTypeTransformation, reader: jspb.BinaryReader): InfoTypeTransformation;
  }

  export namespace InfoTypeTransformation {
    export type AsObject = {
      infoTypesList: Array<google_privacy_dlp_v2_storage_pb.InfoType.AsObject>,
      primitiveTransformation?: PrimitiveTransformation.AsObject,
    }
  }
}

export class FieldTransformation extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<google_privacy_dlp_v2_storage_pb.FieldId>;
  setFieldsList(value: Array<google_privacy_dlp_v2_storage_pb.FieldId>): void;
  addFields(value?: google_privacy_dlp_v2_storage_pb.FieldId, index?: number): google_privacy_dlp_v2_storage_pb.FieldId;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): RecordCondition | undefined;
  setCondition(value?: RecordCondition): void;

  hasPrimitiveTransformation(): boolean;
  clearPrimitiveTransformation(): void;
  getPrimitiveTransformation(): PrimitiveTransformation | undefined;
  setPrimitiveTransformation(value?: PrimitiveTransformation): void;

  hasInfoTypeTransformations(): boolean;
  clearInfoTypeTransformations(): void;
  getInfoTypeTransformations(): InfoTypeTransformations | undefined;
  setInfoTypeTransformations(value?: InfoTypeTransformations): void;

  getTransformationCase(): FieldTransformation.TransformationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldTransformation.AsObject;
  static toObject(includeInstance: boolean, msg: FieldTransformation): FieldTransformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldTransformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldTransformation;
  static deserializeBinaryFromReader(message: FieldTransformation, reader: jspb.BinaryReader): FieldTransformation;
}

export namespace FieldTransformation {
  export type AsObject = {
    fieldsList: Array<google_privacy_dlp_v2_storage_pb.FieldId.AsObject>,
    condition?: RecordCondition.AsObject,
    primitiveTransformation?: PrimitiveTransformation.AsObject,
    infoTypeTransformations?: InfoTypeTransformations.AsObject,
  }

  export enum TransformationCase {
    TRANSFORMATION_NOT_SET = 0,
    PRIMITIVE_TRANSFORMATION = 4,
    INFO_TYPE_TRANSFORMATIONS = 5,
  }
}

export class RecordTransformations extends jspb.Message {
  clearFieldTransformationsList(): void;
  getFieldTransformationsList(): Array<FieldTransformation>;
  setFieldTransformationsList(value: Array<FieldTransformation>): void;
  addFieldTransformations(value?: FieldTransformation, index?: number): FieldTransformation;

  clearRecordSuppressionsList(): void;
  getRecordSuppressionsList(): Array<RecordSuppression>;
  setRecordSuppressionsList(value: Array<RecordSuppression>): void;
  addRecordSuppressions(value?: RecordSuppression, index?: number): RecordSuppression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordTransformations.AsObject;
  static toObject(includeInstance: boolean, msg: RecordTransformations): RecordTransformations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordTransformations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordTransformations;
  static deserializeBinaryFromReader(message: RecordTransformations, reader: jspb.BinaryReader): RecordTransformations;
}

export namespace RecordTransformations {
  export type AsObject = {
    fieldTransformationsList: Array<FieldTransformation.AsObject>,
    recordSuppressionsList: Array<RecordSuppression.AsObject>,
  }
}

export class RecordSuppression extends jspb.Message {
  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): RecordCondition | undefined;
  setCondition(value?: RecordCondition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordSuppression.AsObject;
  static toObject(includeInstance: boolean, msg: RecordSuppression): RecordSuppression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordSuppression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordSuppression;
  static deserializeBinaryFromReader(message: RecordSuppression, reader: jspb.BinaryReader): RecordSuppression;
}

export namespace RecordSuppression {
  export type AsObject = {
    condition?: RecordCondition.AsObject,
  }
}

export class RecordCondition extends jspb.Message {
  hasExpressions(): boolean;
  clearExpressions(): void;
  getExpressions(): RecordCondition.Expressions | undefined;
  setExpressions(value?: RecordCondition.Expressions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordCondition.AsObject;
  static toObject(includeInstance: boolean, msg: RecordCondition): RecordCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordCondition;
  static deserializeBinaryFromReader(message: RecordCondition, reader: jspb.BinaryReader): RecordCondition;
}

export namespace RecordCondition {
  export type AsObject = {
    expressions?: RecordCondition.Expressions.AsObject,
  }

  export class Condition extends jspb.Message {
    hasField(): boolean;
    clearField(): void;
    getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
    setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

    getOperator(): RelationalOperatorMap[keyof RelationalOperatorMap];
    setOperator(value: RelationalOperatorMap[keyof RelationalOperatorMap]): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Value | undefined;
    setValue(value?: Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
  }

  export namespace Condition {
    export type AsObject = {
      field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
      operator: RelationalOperatorMap[keyof RelationalOperatorMap],
      value?: Value.AsObject,
    }
  }

  export class Conditions extends jspb.Message {
    clearConditionsList(): void;
    getConditionsList(): Array<RecordCondition.Condition>;
    setConditionsList(value: Array<RecordCondition.Condition>): void;
    addConditions(value?: RecordCondition.Condition, index?: number): RecordCondition.Condition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Conditions.AsObject;
    static toObject(includeInstance: boolean, msg: Conditions): Conditions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Conditions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Conditions;
    static deserializeBinaryFromReader(message: Conditions, reader: jspb.BinaryReader): Conditions;
  }

  export namespace Conditions {
    export type AsObject = {
      conditionsList: Array<RecordCondition.Condition.AsObject>,
    }
  }

  export class Expressions extends jspb.Message {
    getLogicalOperator(): RecordCondition.Expressions.LogicalOperatorMap[keyof RecordCondition.Expressions.LogicalOperatorMap];
    setLogicalOperator(value: RecordCondition.Expressions.LogicalOperatorMap[keyof RecordCondition.Expressions.LogicalOperatorMap]): void;

    hasConditions(): boolean;
    clearConditions(): void;
    getConditions(): RecordCondition.Conditions | undefined;
    setConditions(value?: RecordCondition.Conditions): void;

    getTypeCase(): Expressions.TypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Expressions.AsObject;
    static toObject(includeInstance: boolean, msg: Expressions): Expressions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Expressions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Expressions;
    static deserializeBinaryFromReader(message: Expressions, reader: jspb.BinaryReader): Expressions;
  }

  export namespace Expressions {
    export type AsObject = {
      logicalOperator: RecordCondition.Expressions.LogicalOperatorMap[keyof RecordCondition.Expressions.LogicalOperatorMap],
      conditions?: RecordCondition.Conditions.AsObject,
    }

    export interface LogicalOperatorMap {
      LOGICAL_OPERATOR_UNSPECIFIED: 0;
      AND: 1;
    }

    export const LogicalOperator: LogicalOperatorMap;

    export enum TypeCase {
      TYPE_NOT_SET = 0,
      CONDITIONS = 3,
    }
  }
}

export class TransformationOverview extends jspb.Message {
  getTransformedBytes(): number;
  setTransformedBytes(value: number): void;

  clearTransformationSummariesList(): void;
  getTransformationSummariesList(): Array<TransformationSummary>;
  setTransformationSummariesList(value: Array<TransformationSummary>): void;
  addTransformationSummaries(value?: TransformationSummary, index?: number): TransformationSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformationOverview.AsObject;
  static toObject(includeInstance: boolean, msg: TransformationOverview): TransformationOverview.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformationOverview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformationOverview;
  static deserializeBinaryFromReader(message: TransformationOverview, reader: jspb.BinaryReader): TransformationOverview;
}

export namespace TransformationOverview {
  export type AsObject = {
    transformedBytes: number,
    transformationSummariesList: Array<TransformationSummary.AsObject>,
  }
}

export class TransformationSummary extends jspb.Message {
  hasInfoType(): boolean;
  clearInfoType(): void;
  getInfoType(): google_privacy_dlp_v2_storage_pb.InfoType | undefined;
  setInfoType(value?: google_privacy_dlp_v2_storage_pb.InfoType): void;

  hasField(): boolean;
  clearField(): void;
  getField(): google_privacy_dlp_v2_storage_pb.FieldId | undefined;
  setField(value?: google_privacy_dlp_v2_storage_pb.FieldId): void;

  hasTransformation(): boolean;
  clearTransformation(): void;
  getTransformation(): PrimitiveTransformation | undefined;
  setTransformation(value?: PrimitiveTransformation): void;

  clearFieldTransformationsList(): void;
  getFieldTransformationsList(): Array<FieldTransformation>;
  setFieldTransformationsList(value: Array<FieldTransformation>): void;
  addFieldTransformations(value?: FieldTransformation, index?: number): FieldTransformation;

  hasRecordSuppress(): boolean;
  clearRecordSuppress(): void;
  getRecordSuppress(): RecordSuppression | undefined;
  setRecordSuppress(value?: RecordSuppression): void;

  clearResultsList(): void;
  getResultsList(): Array<TransformationSummary.SummaryResult>;
  setResultsList(value: Array<TransformationSummary.SummaryResult>): void;
  addResults(value?: TransformationSummary.SummaryResult, index?: number): TransformationSummary.SummaryResult;

  getTransformedBytes(): number;
  setTransformedBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformationSummary.AsObject;
  static toObject(includeInstance: boolean, msg: TransformationSummary): TransformationSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformationSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformationSummary;
  static deserializeBinaryFromReader(message: TransformationSummary, reader: jspb.BinaryReader): TransformationSummary;
}

export namespace TransformationSummary {
  export type AsObject = {
    infoType?: google_privacy_dlp_v2_storage_pb.InfoType.AsObject,
    field?: google_privacy_dlp_v2_storage_pb.FieldId.AsObject,
    transformation?: PrimitiveTransformation.AsObject,
    fieldTransformationsList: Array<FieldTransformation.AsObject>,
    recordSuppress?: RecordSuppression.AsObject,
    resultsList: Array<TransformationSummary.SummaryResult.AsObject>,
    transformedBytes: number,
  }

  export class SummaryResult extends jspb.Message {
    getCount(): number;
    setCount(value: number): void;

    getCode(): TransformationSummary.TransformationResultCodeMap[keyof TransformationSummary.TransformationResultCodeMap];
    setCode(value: TransformationSummary.TransformationResultCodeMap[keyof TransformationSummary.TransformationResultCodeMap]): void;

    getDetails(): string;
    setDetails(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SummaryResult.AsObject;
    static toObject(includeInstance: boolean, msg: SummaryResult): SummaryResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SummaryResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SummaryResult;
    static deserializeBinaryFromReader(message: SummaryResult, reader: jspb.BinaryReader): SummaryResult;
  }

  export namespace SummaryResult {
    export type AsObject = {
      count: number,
      code: TransformationSummary.TransformationResultCodeMap[keyof TransformationSummary.TransformationResultCodeMap],
      details: string,
    }
  }

  export interface TransformationResultCodeMap {
    TRANSFORMATION_RESULT_CODE_UNSPECIFIED: 0;
    SUCCESS: 1;
    ERROR: 2;
  }

  export const TransformationResultCode: TransformationResultCodeMap;
}

export class Schedule extends jspb.Message {
  hasRecurrencePeriodDuration(): boolean;
  clearRecurrencePeriodDuration(): void;
  getRecurrencePeriodDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRecurrencePeriodDuration(value?: google_protobuf_duration_pb.Duration): void;

  getOptionCase(): Schedule.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    recurrencePeriodDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    RECURRENCE_PERIOD_DURATION = 1,
  }
}

export class InspectTemplate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: InspectTemplate): InspectTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectTemplate;
  static deserializeBinaryFromReader(message: InspectTemplate, reader: jspb.BinaryReader): InspectTemplate;
}

export namespace InspectTemplate {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inspectConfig?: InspectConfig.AsObject,
  }
}

export class DeidentifyTemplate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeidentifyConfig(): boolean;
  clearDeidentifyConfig(): void;
  getDeidentifyConfig(): DeidentifyConfig | undefined;
  setDeidentifyConfig(value?: DeidentifyConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeidentifyTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: DeidentifyTemplate): DeidentifyTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeidentifyTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeidentifyTemplate;
  static deserializeBinaryFromReader(message: DeidentifyTemplate, reader: jspb.BinaryReader): DeidentifyTemplate;
}

export namespace DeidentifyTemplate {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deidentifyConfig?: DeidentifyConfig.AsObject,
  }
}

export class Error extends jspb.Message {
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): google_rpc_status_pb.Status | undefined;
  setDetails(value?: google_rpc_status_pb.Status): void;

  clearTimestampsList(): void;
  getTimestampsList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setTimestampsList(value: Array<google_protobuf_timestamp_pb.Timestamp>): void;
  addTimestamps(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    details?: google_rpc_status_pb.Status.AsObject,
    timestampsList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }
}

export class JobTrigger extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasInspectJob(): boolean;
  clearInspectJob(): void;
  getInspectJob(): InspectJobConfig | undefined;
  setInspectJob(value?: InspectJobConfig): void;

  clearTriggersList(): void;
  getTriggersList(): Array<JobTrigger.Trigger>;
  setTriggersList(value: Array<JobTrigger.Trigger>): void;
  addTriggers(value?: JobTrigger.Trigger, index?: number): JobTrigger.Trigger;

  clearErrorsList(): void;
  getErrorsList(): Array<Error>;
  setErrorsList(value: Array<Error>): void;
  addErrors(value?: Error, index?: number): Error;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastRunTime(): boolean;
  clearLastRunTime(): void;
  getLastRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): JobTrigger.StatusMap[keyof JobTrigger.StatusMap];
  setStatus(value: JobTrigger.StatusMap[keyof JobTrigger.StatusMap]): void;

  getJobCase(): JobTrigger.JobCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: JobTrigger): JobTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobTrigger;
  static deserializeBinaryFromReader(message: JobTrigger, reader: jspb.BinaryReader): JobTrigger;
}

export namespace JobTrigger {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    inspectJob?: InspectJobConfig.AsObject,
    triggersList: Array<JobTrigger.Trigger.AsObject>,
    errorsList: Array<Error.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastRunTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: JobTrigger.StatusMap[keyof JobTrigger.StatusMap],
  }

  export class Trigger extends jspb.Message {
    hasSchedule(): boolean;
    clearSchedule(): void;
    getSchedule(): Schedule | undefined;
    setSchedule(value?: Schedule): void;

    getTriggerCase(): Trigger.TriggerCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trigger.AsObject;
    static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trigger;
    static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
  }

  export namespace Trigger {
    export type AsObject = {
      schedule?: Schedule.AsObject,
    }

    export enum TriggerCase {
      TRIGGER_NOT_SET = 0,
      SCHEDULE = 1,
    }
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    HEALTHY: 1;
    PAUSED: 2;
    CANCELLED: 3;
  }

  export const Status: StatusMap;

  export enum JobCase {
    JOB_NOT_SET = 0,
    INSPECT_JOB = 4,
  }
}

export class Action extends jspb.Message {
  hasSaveFindings(): boolean;
  clearSaveFindings(): void;
  getSaveFindings(): Action.SaveFindings | undefined;
  setSaveFindings(value?: Action.SaveFindings): void;

  hasPubSub(): boolean;
  clearPubSub(): void;
  getPubSub(): Action.PublishToPubSub | undefined;
  setPubSub(value?: Action.PublishToPubSub): void;

  hasPublishSummaryToCscc(): boolean;
  clearPublishSummaryToCscc(): void;
  getPublishSummaryToCscc(): Action.PublishSummaryToCscc | undefined;
  setPublishSummaryToCscc(value?: Action.PublishSummaryToCscc): void;

  hasPublishFindingsToCloudDataCatalog(): boolean;
  clearPublishFindingsToCloudDataCatalog(): void;
  getPublishFindingsToCloudDataCatalog(): Action.PublishFindingsToCloudDataCatalog | undefined;
  setPublishFindingsToCloudDataCatalog(value?: Action.PublishFindingsToCloudDataCatalog): void;

  hasJobNotificationEmails(): boolean;
  clearJobNotificationEmails(): void;
  getJobNotificationEmails(): Action.JobNotificationEmails | undefined;
  setJobNotificationEmails(value?: Action.JobNotificationEmails): void;

  hasPublishToStackdriver(): boolean;
  clearPublishToStackdriver(): void;
  getPublishToStackdriver(): Action.PublishToStackdriver | undefined;
  setPublishToStackdriver(value?: Action.PublishToStackdriver): void;

  getActionCase(): Action.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    saveFindings?: Action.SaveFindings.AsObject,
    pubSub?: Action.PublishToPubSub.AsObject,
    publishSummaryToCscc?: Action.PublishSummaryToCscc.AsObject,
    publishFindingsToCloudDataCatalog?: Action.PublishFindingsToCloudDataCatalog.AsObject,
    jobNotificationEmails?: Action.JobNotificationEmails.AsObject,
    publishToStackdriver?: Action.PublishToStackdriver.AsObject,
  }

  export class SaveFindings extends jspb.Message {
    hasOutputConfig(): boolean;
    clearOutputConfig(): void;
    getOutputConfig(): OutputStorageConfig | undefined;
    setOutputConfig(value?: OutputStorageConfig): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveFindings.AsObject;
    static toObject(includeInstance: boolean, msg: SaveFindings): SaveFindings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveFindings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveFindings;
    static deserializeBinaryFromReader(message: SaveFindings, reader: jspb.BinaryReader): SaveFindings;
  }

  export namespace SaveFindings {
    export type AsObject = {
      outputConfig?: OutputStorageConfig.AsObject,
    }
  }

  export class PublishToPubSub extends jspb.Message {
    getTopic(): string;
    setTopic(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishToPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: PublishToPubSub): PublishToPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishToPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishToPubSub;
    static deserializeBinaryFromReader(message: PublishToPubSub, reader: jspb.BinaryReader): PublishToPubSub;
  }

  export namespace PublishToPubSub {
    export type AsObject = {
      topic: string,
    }
  }

  export class PublishSummaryToCscc extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishSummaryToCscc.AsObject;
    static toObject(includeInstance: boolean, msg: PublishSummaryToCscc): PublishSummaryToCscc.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishSummaryToCscc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishSummaryToCscc;
    static deserializeBinaryFromReader(message: PublishSummaryToCscc, reader: jspb.BinaryReader): PublishSummaryToCscc;
  }

  export namespace PublishSummaryToCscc {
    export type AsObject = {
    }
  }

  export class PublishFindingsToCloudDataCatalog extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishFindingsToCloudDataCatalog.AsObject;
    static toObject(includeInstance: boolean, msg: PublishFindingsToCloudDataCatalog): PublishFindingsToCloudDataCatalog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishFindingsToCloudDataCatalog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishFindingsToCloudDataCatalog;
    static deserializeBinaryFromReader(message: PublishFindingsToCloudDataCatalog, reader: jspb.BinaryReader): PublishFindingsToCloudDataCatalog;
  }

  export namespace PublishFindingsToCloudDataCatalog {
    export type AsObject = {
    }
  }

  export class JobNotificationEmails extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JobNotificationEmails.AsObject;
    static toObject(includeInstance: boolean, msg: JobNotificationEmails): JobNotificationEmails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JobNotificationEmails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JobNotificationEmails;
    static deserializeBinaryFromReader(message: JobNotificationEmails, reader: jspb.BinaryReader): JobNotificationEmails;
  }

  export namespace JobNotificationEmails {
    export type AsObject = {
    }
  }

  export class PublishToStackdriver extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishToStackdriver.AsObject;
    static toObject(includeInstance: boolean, msg: PublishToStackdriver): PublishToStackdriver.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishToStackdriver, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishToStackdriver;
    static deserializeBinaryFromReader(message: PublishToStackdriver, reader: jspb.BinaryReader): PublishToStackdriver;
  }

  export namespace PublishToStackdriver {
    export type AsObject = {
    }
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    SAVE_FINDINGS = 1,
    PUB_SUB = 2,
    PUBLISH_SUMMARY_TO_CSCC = 3,
    PUBLISH_FINDINGS_TO_CLOUD_DATA_CATALOG = 5,
    JOB_NOTIFICATION_EMAILS = 8,
    PUBLISH_TO_STACKDRIVER = 9,
  }
}

export class CreateInspectTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInspectTemplate(): boolean;
  clearInspectTemplate(): void;
  getInspectTemplate(): InspectTemplate | undefined;
  setInspectTemplate(value?: InspectTemplate): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInspectTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInspectTemplateRequest): CreateInspectTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInspectTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInspectTemplateRequest;
  static deserializeBinaryFromReader(message: CreateInspectTemplateRequest, reader: jspb.BinaryReader): CreateInspectTemplateRequest;
}

export namespace CreateInspectTemplateRequest {
  export type AsObject = {
    parent: string,
    inspectTemplate?: InspectTemplate.AsObject,
    templateId: string,
  }
}

export class UpdateInspectTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasInspectTemplate(): boolean;
  clearInspectTemplate(): void;
  getInspectTemplate(): InspectTemplate | undefined;
  setInspectTemplate(value?: InspectTemplate): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInspectTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInspectTemplateRequest): UpdateInspectTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInspectTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInspectTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateInspectTemplateRequest, reader: jspb.BinaryReader): UpdateInspectTemplateRequest;
}

export namespace UpdateInspectTemplateRequest {
  export type AsObject = {
    name: string,
    inspectTemplate?: InspectTemplate.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetInspectTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInspectTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInspectTemplateRequest): GetInspectTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInspectTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInspectTemplateRequest;
  static deserializeBinaryFromReader(message: GetInspectTemplateRequest, reader: jspb.BinaryReader): GetInspectTemplateRequest;
}

export namespace GetInspectTemplateRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListInspectTemplatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInspectTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInspectTemplatesRequest): ListInspectTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInspectTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInspectTemplatesRequest;
  static deserializeBinaryFromReader(message: ListInspectTemplatesRequest, reader: jspb.BinaryReader): ListInspectTemplatesRequest;
}

export namespace ListInspectTemplatesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    orderBy: string,
  }
}

export class ListInspectTemplatesResponse extends jspb.Message {
  clearInspectTemplatesList(): void;
  getInspectTemplatesList(): Array<InspectTemplate>;
  setInspectTemplatesList(value: Array<InspectTemplate>): void;
  addInspectTemplates(value?: InspectTemplate, index?: number): InspectTemplate;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInspectTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInspectTemplatesResponse): ListInspectTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInspectTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInspectTemplatesResponse;
  static deserializeBinaryFromReader(message: ListInspectTemplatesResponse, reader: jspb.BinaryReader): ListInspectTemplatesResponse;
}

export namespace ListInspectTemplatesResponse {
  export type AsObject = {
    inspectTemplatesList: Array<InspectTemplate.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteInspectTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInspectTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInspectTemplateRequest): DeleteInspectTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInspectTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInspectTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteInspectTemplateRequest, reader: jspb.BinaryReader): DeleteInspectTemplateRequest;
}

export namespace DeleteInspectTemplateRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateJobTriggerRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasJobTrigger(): boolean;
  clearJobTrigger(): void;
  getJobTrigger(): JobTrigger | undefined;
  setJobTrigger(value?: JobTrigger): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobTriggerRequest): CreateJobTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobTriggerRequest;
  static deserializeBinaryFromReader(message: CreateJobTriggerRequest, reader: jspb.BinaryReader): CreateJobTriggerRequest;
}

export namespace CreateJobTriggerRequest {
  export type AsObject = {
    parent: string,
    jobTrigger?: JobTrigger.AsObject,
    triggerId: string,
  }
}

export class ActivateJobTriggerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateJobTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateJobTriggerRequest): ActivateJobTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateJobTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateJobTriggerRequest;
  static deserializeBinaryFromReader(message: ActivateJobTriggerRequest, reader: jspb.BinaryReader): ActivateJobTriggerRequest;
}

export namespace ActivateJobTriggerRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateJobTriggerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasJobTrigger(): boolean;
  clearJobTrigger(): void;
  getJobTrigger(): JobTrigger | undefined;
  setJobTrigger(value?: JobTrigger): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobTriggerRequest): UpdateJobTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobTriggerRequest;
  static deserializeBinaryFromReader(message: UpdateJobTriggerRequest, reader: jspb.BinaryReader): UpdateJobTriggerRequest;
}

export namespace UpdateJobTriggerRequest {
  export type AsObject = {
    name: string,
    jobTrigger?: JobTrigger.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetJobTriggerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobTriggerRequest): GetJobTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobTriggerRequest;
  static deserializeBinaryFromReader(message: GetJobTriggerRequest, reader: jspb.BinaryReader): GetJobTriggerRequest;
}

export namespace GetJobTriggerRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDlpJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInspectJob(): boolean;
  clearInspectJob(): void;
  getInspectJob(): InspectJobConfig | undefined;
  setInspectJob(value?: InspectJobConfig): void;

  hasRiskJob(): boolean;
  clearRiskJob(): void;
  getRiskJob(): RiskAnalysisJobConfig | undefined;
  setRiskJob(value?: RiskAnalysisJobConfig): void;

  getJobId(): string;
  setJobId(value: string): void;

  getJobCase(): CreateDlpJobRequest.JobCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDlpJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDlpJobRequest): CreateDlpJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDlpJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDlpJobRequest;
  static deserializeBinaryFromReader(message: CreateDlpJobRequest, reader: jspb.BinaryReader): CreateDlpJobRequest;
}

export namespace CreateDlpJobRequest {
  export type AsObject = {
    parent: string,
    inspectJob?: InspectJobConfig.AsObject,
    riskJob?: RiskAnalysisJobConfig.AsObject,
    jobId: string,
  }

  export enum JobCase {
    JOB_NOT_SET = 0,
    INSPECT_JOB = 2,
    RISK_JOB = 3,
  }
}

export class ListJobTriggersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobTriggersRequest): ListJobTriggersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobTriggersRequest;
  static deserializeBinaryFromReader(message: ListJobTriggersRequest, reader: jspb.BinaryReader): ListJobTriggersRequest;
}

export namespace ListJobTriggersRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    orderBy: string,
    filter: string,
  }
}

export class ListJobTriggersResponse extends jspb.Message {
  clearJobTriggersList(): void;
  getJobTriggersList(): Array<JobTrigger>;
  setJobTriggersList(value: Array<JobTrigger>): void;
  addJobTriggers(value?: JobTrigger, index?: number): JobTrigger;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobTriggersResponse): ListJobTriggersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobTriggersResponse;
  static deserializeBinaryFromReader(message: ListJobTriggersResponse, reader: jspb.BinaryReader): ListJobTriggersResponse;
}

export namespace ListJobTriggersResponse {
  export type AsObject = {
    jobTriggersList: Array<JobTrigger.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteJobTriggerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteJobTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteJobTriggerRequest): DeleteJobTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteJobTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteJobTriggerRequest;
  static deserializeBinaryFromReader(message: DeleteJobTriggerRequest, reader: jspb.BinaryReader): DeleteJobTriggerRequest;
}

export namespace DeleteJobTriggerRequest {
  export type AsObject = {
    name: string,
  }
}

export class InspectJobConfig extends jspb.Message {
  hasStorageConfig(): boolean;
  clearStorageConfig(): void;
  getStorageConfig(): google_privacy_dlp_v2_storage_pb.StorageConfig | undefined;
  setStorageConfig(value?: google_privacy_dlp_v2_storage_pb.StorageConfig): void;

  hasInspectConfig(): boolean;
  clearInspectConfig(): void;
  getInspectConfig(): InspectConfig | undefined;
  setInspectConfig(value?: InspectConfig): void;

  getInspectTemplateName(): string;
  setInspectTemplateName(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectJobConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InspectJobConfig): InspectJobConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InspectJobConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectJobConfig;
  static deserializeBinaryFromReader(message: InspectJobConfig, reader: jspb.BinaryReader): InspectJobConfig;
}

export namespace InspectJobConfig {
  export type AsObject = {
    storageConfig?: google_privacy_dlp_v2_storage_pb.StorageConfig.AsObject,
    inspectConfig?: InspectConfig.AsObject,
    inspectTemplateName: string,
    actionsList: Array<Action.AsObject>,
  }
}

export class DlpJob extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): DlpJobTypeMap[keyof DlpJobTypeMap];
  setType(value: DlpJobTypeMap[keyof DlpJobTypeMap]): void;

  getState(): DlpJob.JobStateMap[keyof DlpJob.JobStateMap];
  setState(value: DlpJob.JobStateMap[keyof DlpJob.JobStateMap]): void;

  hasRiskDetails(): boolean;
  clearRiskDetails(): void;
  getRiskDetails(): AnalyzeDataSourceRiskDetails | undefined;
  setRiskDetails(value?: AnalyzeDataSourceRiskDetails): void;

  hasInspectDetails(): boolean;
  clearInspectDetails(): void;
  getInspectDetails(): InspectDataSourceDetails | undefined;
  setInspectDetails(value?: InspectDataSourceDetails): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getJobTriggerName(): string;
  setJobTriggerName(value: string): void;

  clearErrorsList(): void;
  getErrorsList(): Array<Error>;
  setErrorsList(value: Array<Error>): void;
  addErrors(value?: Error, index?: number): Error;

  getDetailsCase(): DlpJob.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DlpJob.AsObject;
  static toObject(includeInstance: boolean, msg: DlpJob): DlpJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DlpJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DlpJob;
  static deserializeBinaryFromReader(message: DlpJob, reader: jspb.BinaryReader): DlpJob;
}

export namespace DlpJob {
  export type AsObject = {
    name: string,
    type: DlpJobTypeMap[keyof DlpJobTypeMap],
    state: DlpJob.JobStateMap[keyof DlpJob.JobStateMap],
    riskDetails?: AnalyzeDataSourceRiskDetails.AsObject,
    inspectDetails?: InspectDataSourceDetails.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    jobTriggerName: string,
    errorsList: Array<Error.AsObject>,
  }

  export interface JobStateMap {
    JOB_STATE_UNSPECIFIED: 0;
    PENDING: 1;
    RUNNING: 2;
    DONE: 3;
    CANCELED: 4;
    FAILED: 5;
  }

  export const JobState: JobStateMap;

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    RISK_DETAILS = 4,
    INSPECT_DETAILS = 5,
  }
}

export class GetDlpJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDlpJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDlpJobRequest): GetDlpJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDlpJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDlpJobRequest;
  static deserializeBinaryFromReader(message: GetDlpJobRequest, reader: jspb.BinaryReader): GetDlpJobRequest;
}

export namespace GetDlpJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDlpJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getType(): DlpJobTypeMap[keyof DlpJobTypeMap];
  setType(value: DlpJobTypeMap[keyof DlpJobTypeMap]): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDlpJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDlpJobsRequest): ListDlpJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDlpJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDlpJobsRequest;
  static deserializeBinaryFromReader(message: ListDlpJobsRequest, reader: jspb.BinaryReader): ListDlpJobsRequest;
}

export namespace ListDlpJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    type: DlpJobTypeMap[keyof DlpJobTypeMap],
    orderBy: string,
  }
}

export class ListDlpJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<DlpJob>;
  setJobsList(value: Array<DlpJob>): void;
  addJobs(value?: DlpJob, index?: number): DlpJob;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDlpJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDlpJobsResponse): ListDlpJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDlpJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDlpJobsResponse;
  static deserializeBinaryFromReader(message: ListDlpJobsResponse, reader: jspb.BinaryReader): ListDlpJobsResponse;
}

export namespace ListDlpJobsResponse {
  export type AsObject = {
    jobsList: Array<DlpJob.AsObject>,
    nextPageToken: string,
  }
}

export class CancelDlpJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelDlpJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelDlpJobRequest): CancelDlpJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelDlpJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelDlpJobRequest;
  static deserializeBinaryFromReader(message: CancelDlpJobRequest, reader: jspb.BinaryReader): CancelDlpJobRequest;
}

export namespace CancelDlpJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteDlpJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDlpJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDlpJobRequest): DeleteDlpJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDlpJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDlpJobRequest;
  static deserializeBinaryFromReader(message: DeleteDlpJobRequest, reader: jspb.BinaryReader): DeleteDlpJobRequest;
}

export namespace DeleteDlpJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDeidentifyTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasDeidentifyTemplate(): boolean;
  clearDeidentifyTemplate(): void;
  getDeidentifyTemplate(): DeidentifyTemplate | undefined;
  setDeidentifyTemplate(value?: DeidentifyTemplate): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeidentifyTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeidentifyTemplateRequest): CreateDeidentifyTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeidentifyTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeidentifyTemplateRequest;
  static deserializeBinaryFromReader(message: CreateDeidentifyTemplateRequest, reader: jspb.BinaryReader): CreateDeidentifyTemplateRequest;
}

export namespace CreateDeidentifyTemplateRequest {
  export type AsObject = {
    parent: string,
    deidentifyTemplate?: DeidentifyTemplate.AsObject,
    templateId: string,
  }
}

export class UpdateDeidentifyTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDeidentifyTemplate(): boolean;
  clearDeidentifyTemplate(): void;
  getDeidentifyTemplate(): DeidentifyTemplate | undefined;
  setDeidentifyTemplate(value?: DeidentifyTemplate): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeidentifyTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeidentifyTemplateRequest): UpdateDeidentifyTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeidentifyTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeidentifyTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateDeidentifyTemplateRequest, reader: jspb.BinaryReader): UpdateDeidentifyTemplateRequest;
}

export namespace UpdateDeidentifyTemplateRequest {
  export type AsObject = {
    name: string,
    deidentifyTemplate?: DeidentifyTemplate.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDeidentifyTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeidentifyTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeidentifyTemplateRequest): GetDeidentifyTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeidentifyTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeidentifyTemplateRequest;
  static deserializeBinaryFromReader(message: GetDeidentifyTemplateRequest, reader: jspb.BinaryReader): GetDeidentifyTemplateRequest;
}

export namespace GetDeidentifyTemplateRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDeidentifyTemplatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeidentifyTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeidentifyTemplatesRequest): ListDeidentifyTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeidentifyTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeidentifyTemplatesRequest;
  static deserializeBinaryFromReader(message: ListDeidentifyTemplatesRequest, reader: jspb.BinaryReader): ListDeidentifyTemplatesRequest;
}

export namespace ListDeidentifyTemplatesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    orderBy: string,
  }
}

export class ListDeidentifyTemplatesResponse extends jspb.Message {
  clearDeidentifyTemplatesList(): void;
  getDeidentifyTemplatesList(): Array<DeidentifyTemplate>;
  setDeidentifyTemplatesList(value: Array<DeidentifyTemplate>): void;
  addDeidentifyTemplates(value?: DeidentifyTemplate, index?: number): DeidentifyTemplate;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeidentifyTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeidentifyTemplatesResponse): ListDeidentifyTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeidentifyTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeidentifyTemplatesResponse;
  static deserializeBinaryFromReader(message: ListDeidentifyTemplatesResponse, reader: jspb.BinaryReader): ListDeidentifyTemplatesResponse;
}

export namespace ListDeidentifyTemplatesResponse {
  export type AsObject = {
    deidentifyTemplatesList: Array<DeidentifyTemplate.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteDeidentifyTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeidentifyTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeidentifyTemplateRequest): DeleteDeidentifyTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeidentifyTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeidentifyTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteDeidentifyTemplateRequest, reader: jspb.BinaryReader): DeleteDeidentifyTemplateRequest;
}

export namespace DeleteDeidentifyTemplateRequest {
  export type AsObject = {
    name: string,
  }
}

export class LargeCustomDictionaryConfig extends jspb.Message {
  hasOutputPath(): boolean;
  clearOutputPath(): void;
  getOutputPath(): google_privacy_dlp_v2_storage_pb.CloudStoragePath | undefined;
  setOutputPath(value?: google_privacy_dlp_v2_storage_pb.CloudStoragePath): void;

  hasCloudStorageFileSet(): boolean;
  clearCloudStorageFileSet(): void;
  getCloudStorageFileSet(): google_privacy_dlp_v2_storage_pb.CloudStorageFileSet | undefined;
  setCloudStorageFileSet(value?: google_privacy_dlp_v2_storage_pb.CloudStorageFileSet): void;

  hasBigQueryField(): boolean;
  clearBigQueryField(): void;
  getBigQueryField(): google_privacy_dlp_v2_storage_pb.BigQueryField | undefined;
  setBigQueryField(value?: google_privacy_dlp_v2_storage_pb.BigQueryField): void;

  getSourceCase(): LargeCustomDictionaryConfig.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LargeCustomDictionaryConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LargeCustomDictionaryConfig): LargeCustomDictionaryConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LargeCustomDictionaryConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LargeCustomDictionaryConfig;
  static deserializeBinaryFromReader(message: LargeCustomDictionaryConfig, reader: jspb.BinaryReader): LargeCustomDictionaryConfig;
}

export namespace LargeCustomDictionaryConfig {
  export type AsObject = {
    outputPath?: google_privacy_dlp_v2_storage_pb.CloudStoragePath.AsObject,
    cloudStorageFileSet?: google_privacy_dlp_v2_storage_pb.CloudStorageFileSet.AsObject,
    bigQueryField?: google_privacy_dlp_v2_storage_pb.BigQueryField.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    CLOUD_STORAGE_FILE_SET = 2,
    BIG_QUERY_FIELD = 3,
  }
}

export class LargeCustomDictionaryStats extends jspb.Message {
  getApproxNumPhrases(): number;
  setApproxNumPhrases(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LargeCustomDictionaryStats.AsObject;
  static toObject(includeInstance: boolean, msg: LargeCustomDictionaryStats): LargeCustomDictionaryStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LargeCustomDictionaryStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LargeCustomDictionaryStats;
  static deserializeBinaryFromReader(message: LargeCustomDictionaryStats, reader: jspb.BinaryReader): LargeCustomDictionaryStats;
}

export namespace LargeCustomDictionaryStats {
  export type AsObject = {
    approxNumPhrases: number,
  }
}

export class StoredInfoTypeConfig extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasLargeCustomDictionary(): boolean;
  clearLargeCustomDictionary(): void;
  getLargeCustomDictionary(): LargeCustomDictionaryConfig | undefined;
  setLargeCustomDictionary(value?: LargeCustomDictionaryConfig): void;

  getTypeCase(): StoredInfoTypeConfig.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredInfoTypeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StoredInfoTypeConfig): StoredInfoTypeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoredInfoTypeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredInfoTypeConfig;
  static deserializeBinaryFromReader(message: StoredInfoTypeConfig, reader: jspb.BinaryReader): StoredInfoTypeConfig;
}

export namespace StoredInfoTypeConfig {
  export type AsObject = {
    displayName: string,
    description: string,
    largeCustomDictionary?: LargeCustomDictionaryConfig.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    LARGE_CUSTOM_DICTIONARY = 3,
  }
}

export class StoredInfoTypeStats extends jspb.Message {
  hasLargeCustomDictionary(): boolean;
  clearLargeCustomDictionary(): void;
  getLargeCustomDictionary(): LargeCustomDictionaryStats | undefined;
  setLargeCustomDictionary(value?: LargeCustomDictionaryStats): void;

  getTypeCase(): StoredInfoTypeStats.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredInfoTypeStats.AsObject;
  static toObject(includeInstance: boolean, msg: StoredInfoTypeStats): StoredInfoTypeStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoredInfoTypeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredInfoTypeStats;
  static deserializeBinaryFromReader(message: StoredInfoTypeStats, reader: jspb.BinaryReader): StoredInfoTypeStats;
}

export namespace StoredInfoTypeStats {
  export type AsObject = {
    largeCustomDictionary?: LargeCustomDictionaryStats.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    LARGE_CUSTOM_DICTIONARY = 1,
  }
}

export class StoredInfoTypeVersion extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StoredInfoTypeConfig | undefined;
  setConfig(value?: StoredInfoTypeConfig): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): StoredInfoTypeStateMap[keyof StoredInfoTypeStateMap];
  setState(value: StoredInfoTypeStateMap[keyof StoredInfoTypeStateMap]): void;

  clearErrorsList(): void;
  getErrorsList(): Array<Error>;
  setErrorsList(value: Array<Error>): void;
  addErrors(value?: Error, index?: number): Error;

  hasStats(): boolean;
  clearStats(): void;
  getStats(): StoredInfoTypeStats | undefined;
  setStats(value?: StoredInfoTypeStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredInfoTypeVersion.AsObject;
  static toObject(includeInstance: boolean, msg: StoredInfoTypeVersion): StoredInfoTypeVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoredInfoTypeVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredInfoTypeVersion;
  static deserializeBinaryFromReader(message: StoredInfoTypeVersion, reader: jspb.BinaryReader): StoredInfoTypeVersion;
}

export namespace StoredInfoTypeVersion {
  export type AsObject = {
    config?: StoredInfoTypeConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: StoredInfoTypeStateMap[keyof StoredInfoTypeStateMap],
    errorsList: Array<Error.AsObject>,
    stats?: StoredInfoTypeStats.AsObject,
  }
}

export class StoredInfoType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCurrentVersion(): boolean;
  clearCurrentVersion(): void;
  getCurrentVersion(): StoredInfoTypeVersion | undefined;
  setCurrentVersion(value?: StoredInfoTypeVersion): void;

  clearPendingVersionsList(): void;
  getPendingVersionsList(): Array<StoredInfoTypeVersion>;
  setPendingVersionsList(value: Array<StoredInfoTypeVersion>): void;
  addPendingVersions(value?: StoredInfoTypeVersion, index?: number): StoredInfoTypeVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredInfoType.AsObject;
  static toObject(includeInstance: boolean, msg: StoredInfoType): StoredInfoType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoredInfoType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredInfoType;
  static deserializeBinaryFromReader(message: StoredInfoType, reader: jspb.BinaryReader): StoredInfoType;
}

export namespace StoredInfoType {
  export type AsObject = {
    name: string,
    currentVersion?: StoredInfoTypeVersion.AsObject,
    pendingVersionsList: Array<StoredInfoTypeVersion.AsObject>,
  }
}

export class CreateStoredInfoTypeRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StoredInfoTypeConfig | undefined;
  setConfig(value?: StoredInfoTypeConfig): void;

  getStoredInfoTypeId(): string;
  setStoredInfoTypeId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStoredInfoTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStoredInfoTypeRequest): CreateStoredInfoTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStoredInfoTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStoredInfoTypeRequest;
  static deserializeBinaryFromReader(message: CreateStoredInfoTypeRequest, reader: jspb.BinaryReader): CreateStoredInfoTypeRequest;
}

export namespace CreateStoredInfoTypeRequest {
  export type AsObject = {
    parent: string,
    config?: StoredInfoTypeConfig.AsObject,
    storedInfoTypeId: string,
  }
}

export class UpdateStoredInfoTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StoredInfoTypeConfig | undefined;
  setConfig(value?: StoredInfoTypeConfig): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStoredInfoTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStoredInfoTypeRequest): UpdateStoredInfoTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStoredInfoTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStoredInfoTypeRequest;
  static deserializeBinaryFromReader(message: UpdateStoredInfoTypeRequest, reader: jspb.BinaryReader): UpdateStoredInfoTypeRequest;
}

export namespace UpdateStoredInfoTypeRequest {
  export type AsObject = {
    name: string,
    config?: StoredInfoTypeConfig.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetStoredInfoTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoredInfoTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoredInfoTypeRequest): GetStoredInfoTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStoredInfoTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoredInfoTypeRequest;
  static deserializeBinaryFromReader(message: GetStoredInfoTypeRequest, reader: jspb.BinaryReader): GetStoredInfoTypeRequest;
}

export namespace GetStoredInfoTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListStoredInfoTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStoredInfoTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStoredInfoTypesRequest): ListStoredInfoTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStoredInfoTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStoredInfoTypesRequest;
  static deserializeBinaryFromReader(message: ListStoredInfoTypesRequest, reader: jspb.BinaryReader): ListStoredInfoTypesRequest;
}

export namespace ListStoredInfoTypesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    orderBy: string,
  }
}

export class ListStoredInfoTypesResponse extends jspb.Message {
  clearStoredInfoTypesList(): void;
  getStoredInfoTypesList(): Array<StoredInfoType>;
  setStoredInfoTypesList(value: Array<StoredInfoType>): void;
  addStoredInfoTypes(value?: StoredInfoType, index?: number): StoredInfoType;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStoredInfoTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStoredInfoTypesResponse): ListStoredInfoTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStoredInfoTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStoredInfoTypesResponse;
  static deserializeBinaryFromReader(message: ListStoredInfoTypesResponse, reader: jspb.BinaryReader): ListStoredInfoTypesResponse;
}

export namespace ListStoredInfoTypesResponse {
  export type AsObject = {
    storedInfoTypesList: Array<StoredInfoType.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteStoredInfoTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStoredInfoTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStoredInfoTypeRequest): DeleteStoredInfoTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStoredInfoTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStoredInfoTypeRequest;
  static deserializeBinaryFromReader(message: DeleteStoredInfoTypeRequest, reader: jspb.BinaryReader): DeleteStoredInfoTypeRequest;
}

export namespace DeleteStoredInfoTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export interface ContentOptionMap {
  CONTENT_UNSPECIFIED: 0;
  CONTENT_TEXT: 1;
  CONTENT_IMAGE: 2;
}

export const ContentOption: ContentOptionMap;

export interface MatchingTypeMap {
  MATCHING_TYPE_UNSPECIFIED: 0;
  MATCHING_TYPE_FULL_MATCH: 1;
  MATCHING_TYPE_PARTIAL_MATCH: 2;
  MATCHING_TYPE_INVERSE_MATCH: 3;
}

export const MatchingType: MatchingTypeMap;

export interface InfoTypeSupportedByMap {
  ENUM_TYPE_UNSPECIFIED: 0;
  INSPECT: 1;
  RISK_ANALYSIS: 2;
}

export const InfoTypeSupportedBy: InfoTypeSupportedByMap;

export interface RelationalOperatorMap {
  RELATIONAL_OPERATOR_UNSPECIFIED: 0;
  EQUAL_TO: 1;
  NOT_EQUAL_TO: 2;
  GREATER_THAN: 3;
  LESS_THAN: 4;
  GREATER_THAN_OR_EQUALS: 5;
  LESS_THAN_OR_EQUALS: 6;
  EXISTS: 7;
}

export const RelationalOperator: RelationalOperatorMap;

export interface DlpJobTypeMap {
  DLP_JOB_TYPE_UNSPECIFIED: 0;
  INSPECT_JOB: 1;
  RISK_ANALYSIS_JOB: 2;
}

export const DlpJobType: DlpJobTypeMap;

export interface StoredInfoTypeStateMap {
  STORED_INFO_TYPE_STATE_UNSPECIFIED: 0;
  PENDING: 1;
  READY: 2;
  FAILED: 3;
  INVALID: 4;
}

export const StoredInfoTypeState: StoredInfoTypeStateMap;

