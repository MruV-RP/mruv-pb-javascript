// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/test_suite.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";
import * as google_devtools_resultstore_v2_file_pb from "../../../../google/devtools/resultstore/v2/file_pb";

export class TestSuite extends jspb.Message {
  getSuiteName(): string;
  setSuiteName(value: string): void;

  clearTestsList(): void;
  getTestsList(): Array<Test>;
  setTestsList(value: Array<Test>): void;
  addTests(value?: Test, index?: number): Test;

  clearFailuresList(): void;
  getFailuresList(): Array<TestFailure>;
  setFailuresList(value: Array<TestFailure>): void;
  addFailures(value?: TestFailure, index?: number): TestFailure;

  clearErrorsList(): void;
  getErrorsList(): Array<TestError>;
  setErrorsList(value: Array<TestError>): void;
  addErrors(value?: TestError, index?: number): TestError;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  clearFilesList(): void;
  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: TestSuite): TestSuite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSuite;
  static deserializeBinaryFromReader(message: TestSuite, reader: jspb.BinaryReader): TestSuite;
}

export namespace TestSuite {
  export type AsObject = {
    suiteName: string,
    testsList: Array<Test.AsObject>,
    failuresList: Array<TestFailure.AsObject>,
    errorsList: Array<TestError.AsObject>,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }
}

export class Test extends jspb.Message {
  hasTestCase(): boolean;
  clearTestCase(): void;
  getTestCase(): TestCase | undefined;
  setTestCase(value?: TestCase): void;

  hasTestSuite(): boolean;
  clearTestSuite(): void;
  getTestSuite(): TestSuite | undefined;
  setTestSuite(value?: TestSuite): void;

  getTestTypeCase(): Test.TestTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    testCase?: TestCase.AsObject,
    testSuite?: TestSuite.AsObject,
  }

  export enum TestTypeCase {
    TEST_TYPE_NOT_SET = 0,
    TEST_CASE = 1,
    TEST_SUITE = 2,
  }
}

export class TestCase extends jspb.Message {
  getCaseName(): string;
  setCaseName(value: string): void;

  getClassName(): string;
  setClassName(value: string): void;

  getResult(): TestCase.ResultMap[keyof TestCase.ResultMap];
  setResult(value: TestCase.ResultMap[keyof TestCase.ResultMap]): void;

  clearFailuresList(): void;
  getFailuresList(): Array<TestFailure>;
  setFailuresList(value: Array<TestFailure>): void;
  addFailures(value?: TestFailure, index?: number): TestFailure;

  clearErrorsList(): void;
  getErrorsList(): Array<TestError>;
  setErrorsList(value: Array<TestError>): void;
  addErrors(value?: TestError, index?: number): TestError;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  clearFilesList(): void;
  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestCase.AsObject;
  static toObject(includeInstance: boolean, msg: TestCase): TestCase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestCase;
  static deserializeBinaryFromReader(message: TestCase, reader: jspb.BinaryReader): TestCase;
}

export namespace TestCase {
  export type AsObject = {
    caseName: string,
    className: string,
    result: TestCase.ResultMap[keyof TestCase.ResultMap],
    failuresList: Array<TestFailure.AsObject>,
    errorsList: Array<TestError.AsObject>,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }

  export interface ResultMap {
    RESULT_UNSPECIFIED: 0;
    COMPLETED: 1;
    INTERRUPTED: 2;
    CANCELLED: 3;
    FILTERED: 4;
    SKIPPED: 5;
    SUPPRESSED: 6;
  }

  export const Result: ResultMap;
}

export class TestFailure extends jspb.Message {
  getFailureMessage(): string;
  setFailureMessage(value: string): void;

  getExceptionType(): string;
  setExceptionType(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  clearExpectedList(): void;
  getExpectedList(): Array<string>;
  setExpectedList(value: Array<string>): void;
  addExpected(value: string, index?: number): string;

  clearActualList(): void;
  getActualList(): Array<string>;
  setActualList(value: Array<string>): void;
  addActual(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestFailure.AsObject;
  static toObject(includeInstance: boolean, msg: TestFailure): TestFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestFailure;
  static deserializeBinaryFromReader(message: TestFailure, reader: jspb.BinaryReader): TestFailure;
}

export namespace TestFailure {
  export type AsObject = {
    failureMessage: string,
    exceptionType: string,
    stackTrace: string,
    expectedList: Array<string>,
    actualList: Array<string>,
  }
}

export class TestError extends jspb.Message {
  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getExceptionType(): string;
  setExceptionType(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestError.AsObject;
  static toObject(includeInstance: boolean, msg: TestError): TestError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestError;
  static deserializeBinaryFromReader(message: TestError, reader: jspb.BinaryReader): TestError;
}

export namespace TestError {
  export type AsObject = {
    errorMessage: string,
    exceptionType: string,
    stackTrace: string,
  }
}

