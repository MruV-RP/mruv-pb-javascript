// package: google.cloud.bigquery.datatransfer.v1
// file: google/cloud/bigquery/datatransfer/v1/datasource.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_cloud_bigquery_datatransfer_v1_datatransfer_pb from "../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb";
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from "../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class ImportedDataInfo extends jspb.Message {
  getSql(): string;
  setSql(value: string): void;

  getDestinationTableId(): string;
  setDestinationTableId(value: string): void;

  getDestinationTableDescription(): string;
  setDestinationTableDescription(value: string): void;

  clearTableDefsList(): void;
  getTableDefsList(): Array<ImportedDataInfo.TableDefinition>;
  setTableDefsList(value: Array<ImportedDataInfo.TableDefinition>): void;
  addTableDefs(value?: ImportedDataInfo.TableDefinition, index?: number): ImportedDataInfo.TableDefinition;

  clearUserDefinedFunctionsList(): void;
  getUserDefinedFunctionsList(): Array<string>;
  setUserDefinedFunctionsList(value: Array<string>): void;
  addUserDefinedFunctions(value: string, index?: number): string;

  getWriteDisposition(): WriteDispositionMap[keyof WriteDispositionMap];
  setWriteDisposition(value: WriteDispositionMap[keyof WriteDispositionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportedDataInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImportedDataInfo): ImportedDataInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportedDataInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportedDataInfo;
  static deserializeBinaryFromReader(message: ImportedDataInfo, reader: jspb.BinaryReader): ImportedDataInfo;
}

export namespace ImportedDataInfo {
  export type AsObject = {
    sql: string,
    destinationTableId: string,
    destinationTableDescription: string,
    tableDefsList: Array<ImportedDataInfo.TableDefinition.AsObject>,
    userDefinedFunctionsList: Array<string>,
    writeDisposition: WriteDispositionMap[keyof WriteDispositionMap],
  }

  export class FieldSchema extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    getType(): ImportedDataInfo.FieldSchema.TypeMap[keyof ImportedDataInfo.FieldSchema.TypeMap];
    setType(value: ImportedDataInfo.FieldSchema.TypeMap[keyof ImportedDataInfo.FieldSchema.TypeMap]): void;

    getIsRepeated(): boolean;
    setIsRepeated(value: boolean): void;

    getDescription(): string;
    setDescription(value: string): void;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): ImportedDataInfo.RecordSchema | undefined;
    setSchema(value?: ImportedDataInfo.RecordSchema): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldSchema.AsObject;
    static toObject(includeInstance: boolean, msg: FieldSchema): FieldSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldSchema;
    static deserializeBinaryFromReader(message: FieldSchema, reader: jspb.BinaryReader): FieldSchema;
  }

  export namespace FieldSchema {
    export type AsObject = {
      fieldName: string,
      type: ImportedDataInfo.FieldSchema.TypeMap[keyof ImportedDataInfo.FieldSchema.TypeMap],
      isRepeated: boolean,
      description: string,
      schema?: ImportedDataInfo.RecordSchema.AsObject,
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      STRING: 1;
      INTEGER: 2;
      FLOAT: 3;
      RECORD: 4;
      BYTES: 5;
      BOOLEAN: 6;
      TIMESTAMP: 7;
      DATE: 8;
      TIME: 9;
      DATETIME: 10;
      NUMERIC: 11;
      GEOGRAPHY: 12;
    }

    export const Type: TypeMap;
  }

  export class RecordSchema extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<ImportedDataInfo.FieldSchema>;
    setFieldsList(value: Array<ImportedDataInfo.FieldSchema>): void;
    addFields(value?: ImportedDataInfo.FieldSchema, index?: number): ImportedDataInfo.FieldSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSchema.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSchema): RecordSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSchema;
    static deserializeBinaryFromReader(message: RecordSchema, reader: jspb.BinaryReader): RecordSchema;
  }

  export namespace RecordSchema {
    export type AsObject = {
      fieldsList: Array<ImportedDataInfo.FieldSchema.AsObject>,
    }
  }

  export class TableDefinition extends jspb.Message {
    getTableId(): string;
    setTableId(value: string): void;

    clearSourceUrisList(): void;
    getSourceUrisList(): Array<string>;
    setSourceUrisList(value: Array<string>): void;
    addSourceUris(value: string, index?: number): string;

    getFormat(): ImportedDataInfo.FormatMap[keyof ImportedDataInfo.FormatMap];
    setFormat(value: ImportedDataInfo.FormatMap[keyof ImportedDataInfo.FormatMap]): void;

    getMaxBadRecords(): number;
    setMaxBadRecords(value: number): void;

    getEncoding(): ImportedDataInfo.EncodingMap[keyof ImportedDataInfo.EncodingMap];
    setEncoding(value: ImportedDataInfo.EncodingMap[keyof ImportedDataInfo.EncodingMap]): void;

    hasCsvOptions(): boolean;
    clearCsvOptions(): void;
    getCsvOptions(): ImportedDataInfo.TableDefinition.CsvOptions | undefined;
    setCsvOptions(value?: ImportedDataInfo.TableDefinition.CsvOptions): void;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): ImportedDataInfo.RecordSchema | undefined;
    setSchema(value?: ImportedDataInfo.RecordSchema): void;

    hasIgnoreUnknownValues(): boolean;
    clearIgnoreUnknownValues(): void;
    getIgnoreUnknownValues(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIgnoreUnknownValues(value?: google_protobuf_wrappers_pb.BoolValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: TableDefinition): TableDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableDefinition;
    static deserializeBinaryFromReader(message: TableDefinition, reader: jspb.BinaryReader): TableDefinition;
  }

  export namespace TableDefinition {
    export type AsObject = {
      tableId: string,
      sourceUrisList: Array<string>,
      format: ImportedDataInfo.FormatMap[keyof ImportedDataInfo.FormatMap],
      maxBadRecords: number,
      encoding: ImportedDataInfo.EncodingMap[keyof ImportedDataInfo.EncodingMap],
      csvOptions?: ImportedDataInfo.TableDefinition.CsvOptions.AsObject,
      schema?: ImportedDataInfo.RecordSchema.AsObject,
      ignoreUnknownValues?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export class CsvOptions extends jspb.Message {
      hasFieldDelimiter(): boolean;
      clearFieldDelimiter(): void;
      getFieldDelimiter(): google_protobuf_wrappers_pb.StringValue | undefined;
      setFieldDelimiter(value?: google_protobuf_wrappers_pb.StringValue): void;

      hasAllowQuotedNewlines(): boolean;
      clearAllowQuotedNewlines(): void;
      getAllowQuotedNewlines(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setAllowQuotedNewlines(value?: google_protobuf_wrappers_pb.BoolValue): void;

      hasQuoteChar(): boolean;
      clearQuoteChar(): void;
      getQuoteChar(): google_protobuf_wrappers_pb.StringValue | undefined;
      setQuoteChar(value?: google_protobuf_wrappers_pb.StringValue): void;

      hasSkipLeadingRows(): boolean;
      clearSkipLeadingRows(): void;
      getSkipLeadingRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setSkipLeadingRows(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasAllowJaggedRows(): boolean;
      clearAllowJaggedRows(): void;
      getAllowJaggedRows(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setAllowJaggedRows(value?: google_protobuf_wrappers_pb.BoolValue): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CsvOptions.AsObject;
      static toObject(includeInstance: boolean, msg: CsvOptions): CsvOptions.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CsvOptions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CsvOptions;
      static deserializeBinaryFromReader(message: CsvOptions, reader: jspb.BinaryReader): CsvOptions;
    }

    export namespace CsvOptions {
      export type AsObject = {
        fieldDelimiter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allowQuotedNewlines?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        quoteChar?: google_protobuf_wrappers_pb.StringValue.AsObject,
        skipLeadingRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        allowJaggedRows?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      }
    }
  }

  export interface FormatMap {
    FORMAT_UNSPECIFIED: 0;
    CSV: 1;
    JSON: 2;
    AVRO: 3;
    RECORDIO: 4;
    COLUMNIO: 5;
    CAPACITOR: 6;
    PARQUET: 7;
    ORC: 8;
  }

  export const Format: FormatMap;

  export interface EncodingMap {
    ENCODING_UNSPECIFIED: 0;
    ISO_8859_1: 1;
    UTF8: 2;
  }

  export const Encoding: EncodingMap;
}

export class UpdateTransferRunRequest extends jspb.Message {
  hasTransferRun(): boolean;
  clearTransferRun(): void;
  getTransferRun(): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun | undefined;
  setTransferRun(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferRunRequest): UpdateTransferRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTransferRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferRunRequest;
  static deserializeBinaryFromReader(message: UpdateTransferRunRequest, reader: jspb.BinaryReader): UpdateTransferRunRequest;
}

export namespace UpdateTransferRunRequest {
  export type AsObject = {
    transferRun?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class LogTransferRunMessagesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearTransferMessagesList(): void;
  getTransferMessagesList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>;
  setTransferMessagesList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>): void;
  addTransferMessages(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogTransferRunMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogTransferRunMessagesRequest): LogTransferRunMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogTransferRunMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogTransferRunMessagesRequest;
  static deserializeBinaryFromReader(message: LogTransferRunMessagesRequest, reader: jspb.BinaryReader): LogTransferRunMessagesRequest;
}

export namespace LogTransferRunMessagesRequest {
  export type AsObject = {
    name: string,
    transferMessagesList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.AsObject>,
  }
}

export class StartBigQueryJobsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearImportedDataList(): void;
  getImportedDataList(): Array<ImportedDataInfo>;
  setImportedDataList(value: Array<ImportedDataInfo>): void;
  addImportedData(value?: ImportedDataInfo, index?: number): ImportedDataInfo;

  getUserCredentials(): Uint8Array | string;
  getUserCredentials_asU8(): Uint8Array;
  getUserCredentials_asB64(): string;
  setUserCredentials(value: Uint8Array | string): void;

  getMaxParallelism(): number;
  setMaxParallelism(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBigQueryJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartBigQueryJobsRequest): StartBigQueryJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBigQueryJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBigQueryJobsRequest;
  static deserializeBinaryFromReader(message: StartBigQueryJobsRequest, reader: jspb.BinaryReader): StartBigQueryJobsRequest;
}

export namespace StartBigQueryJobsRequest {
  export type AsObject = {
    name: string,
    importedDataList: Array<ImportedDataInfo.AsObject>,
    userCredentials: Uint8Array | string,
    maxParallelism: number,
  }
}

export class FinishRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishRunRequest): FinishRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinishRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishRunRequest;
  static deserializeBinaryFromReader(message: FinishRunRequest, reader: jspb.BinaryReader): FinishRunRequest;
}

export namespace FinishRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDataSourceDefinitionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasDataSourceDefinition(): boolean;
  clearDataSourceDefinition(): void;
  getDataSourceDefinition(): DataSourceDefinition | undefined;
  setDataSourceDefinition(value?: DataSourceDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataSourceDefinitionRequest): CreateDataSourceDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateDataSourceDefinitionRequest, reader: jspb.BinaryReader): CreateDataSourceDefinitionRequest;
}

export namespace CreateDataSourceDefinitionRequest {
  export type AsObject = {
    parent: string,
    dataSourceDefinition?: DataSourceDefinition.AsObject,
  }
}

export class UpdateDataSourceDefinitionRequest extends jspb.Message {
  hasDataSourceDefinition(): boolean;
  clearDataSourceDefinition(): void;
  getDataSourceDefinition(): DataSourceDefinition | undefined;
  setDataSourceDefinition(value?: DataSourceDefinition): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataSourceDefinitionRequest): UpdateDataSourceDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateDataSourceDefinitionRequest, reader: jspb.BinaryReader): UpdateDataSourceDefinitionRequest;
}

export namespace UpdateDataSourceDefinitionRequest {
  export type AsObject = {
    dataSourceDefinition?: DataSourceDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDataSourceDefinitionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataSourceDefinitionRequest): DeleteDataSourceDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteDataSourceDefinitionRequest, reader: jspb.BinaryReader): DeleteDataSourceDefinitionRequest;
}

export namespace DeleteDataSourceDefinitionRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetDataSourceDefinitionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceDefinitionRequest): GetDataSourceDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: GetDataSourceDefinitionRequest, reader: jspb.BinaryReader): GetDataSourceDefinitionRequest;
}

export namespace GetDataSourceDefinitionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDataSourceDefinitionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceDefinitionsRequest): ListDataSourceDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataSourceDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListDataSourceDefinitionsRequest, reader: jspb.BinaryReader): ListDataSourceDefinitionsRequest;
}

export namespace ListDataSourceDefinitionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListDataSourceDefinitionsResponse extends jspb.Message {
  clearDataSourceDefinitionsList(): void;
  getDataSourceDefinitionsList(): Array<DataSourceDefinition>;
  setDataSourceDefinitionsList(value: Array<DataSourceDefinition>): void;
  addDataSourceDefinitions(value?: DataSourceDefinition, index?: number): DataSourceDefinition;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceDefinitionsResponse): ListDataSourceDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataSourceDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListDataSourceDefinitionsResponse, reader: jspb.BinaryReader): ListDataSourceDefinitionsResponse;
}

export namespace ListDataSourceDefinitionsResponse {
  export type AsObject = {
    dataSourceDefinitionsList: Array<DataSourceDefinition.AsObject>,
    nextPageToken: string,
  }
}

export class DataSourceDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDataSource(): boolean;
  clearDataSource(): void;
  getDataSource(): google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource | undefined;
  setDataSource(value?: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource): void;

  getTransferRunPubsubTopic(): string;
  setTransferRunPubsubTopic(value: string): void;

  hasRunTimeOffset(): boolean;
  clearRunTimeOffset(): void;
  getRunTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setRunTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  getSupportEmail(): string;
  setSupportEmail(value: string): void;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getTransferConfigPubsubTopic(): string;
  setTransferConfigPubsubTopic(value: string): void;

  clearSupportedLocationIdsList(): void;
  getSupportedLocationIdsList(): Array<string>;
  setSupportedLocationIdsList(value: Array<string>): void;
  addSupportedLocationIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceDefinition): DataSourceDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceDefinition;
  static deserializeBinaryFromReader(message: DataSourceDefinition, reader: jspb.BinaryReader): DataSourceDefinition;
}

export namespace DataSourceDefinition {
  export type AsObject = {
    name: string,
    dataSource?: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource.AsObject,
    transferRunPubsubTopic: string,
    runTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    supportEmail: string,
    serviceAccount: string,
    disabled: boolean,
    transferConfigPubsubTopic: string,
    supportedLocationIdsList: Array<string>,
  }
}

export interface WriteDispositionMap {
  WRITE_DISPOSITION_UNSPECIFIED: 0;
  WRITE_TRUNCATE: 1;
  WRITE_APPEND: 2;
}

export const WriteDisposition: WriteDispositionMap;

