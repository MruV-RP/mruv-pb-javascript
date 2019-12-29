// package: google.monitoring.v3
// file: google/monitoring/v3/dropped_labels.proto

import * as jspb from "google-protobuf";

export class DroppedLabels extends jspb.Message {
  getLabelMap(): jspb.Map<string, string>;
  clearLabelMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DroppedLabels.AsObject;
  static toObject(includeInstance: boolean, msg: DroppedLabels): DroppedLabels.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DroppedLabels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DroppedLabels;
  static deserializeBinaryFromReader(message: DroppedLabels, reader: jspb.BinaryReader): DroppedLabels;
}

export namespace DroppedLabels {
  export type AsObject = {
    labelMap: Array<[string, string]>,
  }
}

