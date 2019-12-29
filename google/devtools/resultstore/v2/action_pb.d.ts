// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/action.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";
import * as google_devtools_resultstore_v2_coverage_pb from "../../../../google/devtools/resultstore/v2/coverage_pb";
import * as google_devtools_resultstore_v2_file_pb from "../../../../google/devtools/resultstore/v2/file_pb";
import * as google_devtools_resultstore_v2_file_processing_error_pb from "../../../../google/devtools/resultstore/v2/file_processing_error_pb";
import * as google_devtools_resultstore_v2_test_suite_pb from "../../../../google/devtools/resultstore/v2/test_suite_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Action extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): Action.Id | undefined;
  setId(value?: Action.Id): void;

  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;
  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;

  hasBuildAction(): boolean;
  clearBuildAction(): void;
  getBuildAction(): BuildAction | undefined;
  setBuildAction(value?: BuildAction): void;

  hasTestAction(): boolean;
  clearTestAction(): void;
  getTestAction(): TestAction | undefined;
  setTestAction(value?: TestAction): void;

  hasActionAttributes(): boolean;
  clearActionAttributes(): void;
  getActionAttributes(): ActionAttributes | undefined;
  setActionAttributes(value?: ActionAttributes): void;

  clearActionDependenciesList(): void;
  getActionDependenciesList(): Array<google_devtools_resultstore_v2_common_pb.Dependency>;
  setActionDependenciesList(value: Array<google_devtools_resultstore_v2_common_pb.Dependency>): void;
  addActionDependencies(value?: google_devtools_resultstore_v2_common_pb.Dependency, index?: number): google_devtools_resultstore_v2_common_pb.Dependency;

  clearPropertiesList(): void;
  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  clearFilesList(): void;
  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  clearFileSetsList(): void;
  getFileSetsList(): Array<string>;
  setFileSetsList(value: Array<string>): void;
  addFileSets(value: string, index?: number): string;

  hasCoverage(): boolean;
  clearCoverage(): void;
  getCoverage(): google_devtools_resultstore_v2_coverage_pb.ActionCoverage | undefined;
  setCoverage(value?: google_devtools_resultstore_v2_coverage_pb.ActionCoverage): void;

  clearFileProcessingErrorsList(): void;
  getFileProcessingErrorsList(): Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors>;
  setFileProcessingErrorsList(value: Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors>): void;
  addFileProcessingErrors(value?: google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors, index?: number): google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors;

  getActionTypeCase(): Action.ActionTypeCase;
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
    name: string,
    id?: Action.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    buildAction?: BuildAction.AsObject,
    testAction?: TestAction.AsObject,
    actionAttributes?: ActionAttributes.AsObject,
    actionDependenciesList: Array<google_devtools_resultstore_v2_common_pb.Dependency.AsObject>,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    fileSetsList: Array<string>,
    coverage?: google_devtools_resultstore_v2_coverage_pb.ActionCoverage.AsObject,
    fileProcessingErrorsList: Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

    getTargetId(): string;
    setTargetId(value: string): void;

    getConfigurationId(): string;
    setConfigurationId(value: string): void;

    getActionId(): string;
    setActionId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
      targetId: string,
      configurationId: string,
      actionId: string,
    }
  }

  export enum ActionTypeCase {
    ACTION_TYPE_NOT_SET = 0,
    BUILD_ACTION = 9,
    TEST_ACTION = 10,
  }
}

export class BuildAction extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPrimaryInputPath(): string;
  setPrimaryInputPath(value: string): void;

  getPrimaryOutputPath(): string;
  setPrimaryOutputPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildAction.AsObject;
  static toObject(includeInstance: boolean, msg: BuildAction): BuildAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildAction;
  static deserializeBinaryFromReader(message: BuildAction, reader: jspb.BinaryReader): BuildAction;
}

export namespace BuildAction {
  export type AsObject = {
    type: string,
    primaryInputPath: string,
    primaryOutputPath: string,
  }
}

export class TestAction extends jspb.Message {
  hasTestTiming(): boolean;
  clearTestTiming(): void;
  getTestTiming(): TestTiming | undefined;
  setTestTiming(value?: TestTiming): void;

  getShardNumber(): number;
  setShardNumber(value: number): void;

  getRunNumber(): number;
  setRunNumber(value: number): void;

  getAttemptNumber(): number;
  setAttemptNumber(value: number): void;

  hasTestSuite(): boolean;
  clearTestSuite(): void;
  getTestSuite(): google_devtools_resultstore_v2_test_suite_pb.TestSuite | undefined;
  setTestSuite(value?: google_devtools_resultstore_v2_test_suite_pb.TestSuite): void;

  clearWarningsList(): void;
  getWarningsList(): Array<TestWarning>;
  setWarningsList(value: Array<TestWarning>): void;
  addWarnings(value?: TestWarning, index?: number): TestWarning;

  getEstimatedMemoryBytes(): number;
  setEstimatedMemoryBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestAction.AsObject;
  static toObject(includeInstance: boolean, msg: TestAction): TestAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestAction;
  static deserializeBinaryFromReader(message: TestAction, reader: jspb.BinaryReader): TestAction;
}

export namespace TestAction {
  export type AsObject = {
    testTiming?: TestTiming.AsObject,
    shardNumber: number,
    runNumber: number,
    attemptNumber: number,
    testSuite?: google_devtools_resultstore_v2_test_suite_pb.TestSuite.AsObject,
    warningsList: Array<TestWarning.AsObject>,
    estimatedMemoryBytes: number,
  }
}

export class ActionAttributes extends jspb.Message {
  getExecutionStrategy(): ExecutionStrategyMap[keyof ExecutionStrategyMap];
  setExecutionStrategy(value: ExecutionStrategyMap[keyof ExecutionStrategyMap]): void;

  getExitCode(): number;
  setExitCode(value: number): void;

  getHostname(): string;
  setHostname(value: string): void;

  hasInputFileInfo(): boolean;
  clearInputFileInfo(): void;
  getInputFileInfo(): InputFileInfo | undefined;
  setInputFileInfo(value?: InputFileInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ActionAttributes): ActionAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionAttributes;
  static deserializeBinaryFromReader(message: ActionAttributes, reader: jspb.BinaryReader): ActionAttributes;
}

export namespace ActionAttributes {
  export type AsObject = {
    executionStrategy: ExecutionStrategyMap[keyof ExecutionStrategyMap],
    exitCode: number,
    hostname: string,
    inputFileInfo?: InputFileInfo.AsObject,
  }
}

export class InputFileInfo extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getDistinctCount(): number;
  setDistinctCount(value: number): void;

  getCountLimit(): number;
  setCountLimit(value: number): void;

  getDistinctBytes(): number;
  setDistinctBytes(value: number): void;

  getDistinctByteLimit(): number;
  setDistinctByteLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InputFileInfo): InputFileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputFileInfo;
  static deserializeBinaryFromReader(message: InputFileInfo, reader: jspb.BinaryReader): InputFileInfo;
}

export namespace InputFileInfo {
  export type AsObject = {
    count: number,
    distinctCount: number,
    countLimit: number,
    distinctBytes: number,
    distinctByteLimit: number,
  }
}

export class LocalTestTiming extends jspb.Message {
  hasTestProcessDuration(): boolean;
  clearTestProcessDuration(): void;
  getTestProcessDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTestProcessDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalTestTiming.AsObject;
  static toObject(includeInstance: boolean, msg: LocalTestTiming): LocalTestTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalTestTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalTestTiming;
  static deserializeBinaryFromReader(message: LocalTestTiming, reader: jspb.BinaryReader): LocalTestTiming;
}

export namespace LocalTestTiming {
  export type AsObject = {
    testProcessDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RemoteTestAttemptTiming extends jspb.Message {
  hasQueueDuration(): boolean;
  clearQueueDuration(): void;
  getQueueDuration(): google_protobuf_duration_pb.Duration | undefined;
  setQueueDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasUploadDuration(): boolean;
  clearUploadDuration(): void;
  getUploadDuration(): google_protobuf_duration_pb.Duration | undefined;
  setUploadDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMachineSetupDuration(): boolean;
  clearMachineSetupDuration(): void;
  getMachineSetupDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMachineSetupDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasTestProcessDuration(): boolean;
  clearTestProcessDuration(): void;
  getTestProcessDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTestProcessDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasDownloadDuration(): boolean;
  clearDownloadDuration(): void;
  getDownloadDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDownloadDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteTestAttemptTiming.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteTestAttemptTiming): RemoteTestAttemptTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteTestAttemptTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteTestAttemptTiming;
  static deserializeBinaryFromReader(message: RemoteTestAttemptTiming, reader: jspb.BinaryReader): RemoteTestAttemptTiming;
}

export namespace RemoteTestAttemptTiming {
  export type AsObject = {
    queueDuration?: google_protobuf_duration_pb.Duration.AsObject,
    uploadDuration?: google_protobuf_duration_pb.Duration.AsObject,
    machineSetupDuration?: google_protobuf_duration_pb.Duration.AsObject,
    testProcessDuration?: google_protobuf_duration_pb.Duration.AsObject,
    downloadDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class RemoteTestTiming extends jspb.Message {
  hasLocalAnalysisDuration(): boolean;
  clearLocalAnalysisDuration(): void;
  getLocalAnalysisDuration(): google_protobuf_duration_pb.Duration | undefined;
  setLocalAnalysisDuration(value?: google_protobuf_duration_pb.Duration): void;

  clearAttemptsList(): void;
  getAttemptsList(): Array<RemoteTestAttemptTiming>;
  setAttemptsList(value: Array<RemoteTestAttemptTiming>): void;
  addAttempts(value?: RemoteTestAttemptTiming, index?: number): RemoteTestAttemptTiming;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteTestTiming.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteTestTiming): RemoteTestTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteTestTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteTestTiming;
  static deserializeBinaryFromReader(message: RemoteTestTiming, reader: jspb.BinaryReader): RemoteTestTiming;
}

export namespace RemoteTestTiming {
  export type AsObject = {
    localAnalysisDuration?: google_protobuf_duration_pb.Duration.AsObject,
    attemptsList: Array<RemoteTestAttemptTiming.AsObject>,
  }
}

export class TestTiming extends jspb.Message {
  hasLocal(): boolean;
  clearLocal(): void;
  getLocal(): LocalTestTiming | undefined;
  setLocal(value?: LocalTestTiming): void;

  hasRemote(): boolean;
  clearRemote(): void;
  getRemote(): RemoteTestTiming | undefined;
  setRemote(value?: RemoteTestTiming): void;

  hasSystemTimeDuration(): boolean;
  clearSystemTimeDuration(): void;
  getSystemTimeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setSystemTimeDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasUserTimeDuration(): boolean;
  clearUserTimeDuration(): void;
  getUserTimeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setUserTimeDuration(value?: google_protobuf_duration_pb.Duration): void;

  getTestCaching(): TestCachingMap[keyof TestCachingMap];
  setTestCaching(value: TestCachingMap[keyof TestCachingMap]): void;

  getLocationCase(): TestTiming.LocationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestTiming.AsObject;
  static toObject(includeInstance: boolean, msg: TestTiming): TestTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestTiming;
  static deserializeBinaryFromReader(message: TestTiming, reader: jspb.BinaryReader): TestTiming;
}

export namespace TestTiming {
  export type AsObject = {
    local?: LocalTestTiming.AsObject,
    remote?: RemoteTestTiming.AsObject,
    systemTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    userTimeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    testCaching: TestCachingMap[keyof TestCachingMap],
  }

  export enum LocationCase {
    LOCATION_NOT_SET = 0,
    LOCAL = 1,
    REMOTE = 2,
  }
}

export class TestWarning extends jspb.Message {
  getWarningMessage(): string;
  setWarningMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestWarning.AsObject;
  static toObject(includeInstance: boolean, msg: TestWarning): TestWarning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestWarning;
  static deserializeBinaryFromReader(message: TestWarning, reader: jspb.BinaryReader): TestWarning;
}

export namespace TestWarning {
  export type AsObject = {
    warningMessage: string,
  }
}

export interface ExecutionStrategyMap {
  EXECUTION_STRATEGY_UNSPECIFIED: 0;
  OTHER_ENVIRONMENT: 1;
  REMOTE_SERVICE: 2;
  LOCAL_PARALLEL: 3;
  LOCAL_SEQUENTIAL: 4;
}

export const ExecutionStrategy: ExecutionStrategyMap;

export interface TestCachingMap {
  TEST_CACHING_UNSPECIFIED: 0;
  LOCAL_CACHE_HIT: 1;
  REMOTE_CACHE_HIT: 2;
  CACHE_MISS: 3;
}

export const TestCaching: TestCachingMap;

