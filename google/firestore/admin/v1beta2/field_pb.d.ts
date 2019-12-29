// package: google.firestore.admin.v1beta2
// file: google/firestore/admin/v1beta2/field.proto

import * as jspb from "google-protobuf";
import * as google_firestore_admin_v1beta2_index_pb from "../../../../google/firestore/admin/v1beta2/index_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Field extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasIndexConfig(): boolean;
  clearIndexConfig(): void;
  getIndexConfig(): Field.IndexConfig | undefined;
  setIndexConfig(value?: Field.IndexConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    name: string,
    indexConfig?: Field.IndexConfig.AsObject,
  }

  export class IndexConfig extends jspb.Message {
    clearIndexesList(): void;
    getIndexesList(): Array<google_firestore_admin_v1beta2_index_pb.Index>;
    setIndexesList(value: Array<google_firestore_admin_v1beta2_index_pb.Index>): void;
    addIndexes(value?: google_firestore_admin_v1beta2_index_pb.Index, index?: number): google_firestore_admin_v1beta2_index_pb.Index;

    getUsesAncestorConfig(): boolean;
    setUsesAncestorConfig(value: boolean): void;

    getAncestorField(): string;
    setAncestorField(value: string): void;

    getReverting(): boolean;
    setReverting(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfig.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfig): IndexConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfig;
    static deserializeBinaryFromReader(message: IndexConfig, reader: jspb.BinaryReader): IndexConfig;
  }

  export namespace IndexConfig {
    export type AsObject = {
      indexesList: Array<google_firestore_admin_v1beta2_index_pb.Index.AsObject>,
      usesAncestorConfig: boolean,
      ancestorField: string,
      reverting: boolean,
    }
  }
}

