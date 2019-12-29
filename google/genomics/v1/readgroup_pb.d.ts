// package: google.genomics.v1
// file: google/genomics/v1/readgroup.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ReadGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSampleId(): string;
  setSampleId(value: string): void;

  hasExperiment(): boolean;
  clearExperiment(): void;
  getExperiment(): ReadGroup.Experiment | undefined;
  setExperiment(value?: ReadGroup.Experiment): void;

  getPredictedInsertSize(): number;
  setPredictedInsertSize(value: number): void;

  clearProgramsList(): void;
  getProgramsList(): Array<ReadGroup.Program>;
  setProgramsList(value: Array<ReadGroup.Program>): void;
  addPrograms(value?: ReadGroup.Program, index?: number): ReadGroup.Program;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ReadGroup): ReadGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadGroup;
  static deserializeBinaryFromReader(message: ReadGroup, reader: jspb.BinaryReader): ReadGroup;
}

export namespace ReadGroup {
  export type AsObject = {
    id: string,
    datasetId: string,
    name: string,
    description: string,
    sampleId: string,
    experiment?: ReadGroup.Experiment.AsObject,
    predictedInsertSize: number,
    programsList: Array<ReadGroup.Program.AsObject>,
    referenceSetId: string,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }

  export class Experiment extends jspb.Message {
    getLibraryId(): string;
    setLibraryId(value: string): void;

    getPlatformUnit(): string;
    setPlatformUnit(value: string): void;

    getSequencingCenter(): string;
    setSequencingCenter(value: string): void;

    getInstrumentModel(): string;
    setInstrumentModel(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Experiment.AsObject;
    static toObject(includeInstance: boolean, msg: Experiment): Experiment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Experiment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Experiment;
    static deserializeBinaryFromReader(message: Experiment, reader: jspb.BinaryReader): Experiment;
  }

  export namespace Experiment {
    export type AsObject = {
      libraryId: string,
      platformUnit: string,
      sequencingCenter: string,
      instrumentModel: string,
    }
  }

  export class Program extends jspb.Message {
    getCommandLine(): string;
    setCommandLine(value: string): void;

    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPrevProgramId(): string;
    setPrevProgramId(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Program.AsObject;
    static toObject(includeInstance: boolean, msg: Program): Program.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Program, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Program;
    static deserializeBinaryFromReader(message: Program, reader: jspb.BinaryReader): Program;
  }

  export namespace Program {
    export type AsObject = {
      commandLine: string,
      id: string,
      name: string,
      prevProgramId: string,
      version: string,
    }
  }
}

