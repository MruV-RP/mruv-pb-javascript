// package: google.cloud.texttospeech.v1beta1
// file: google/cloud/texttospeech/v1beta1/cloud_tts.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";

export class ListVoicesRequest extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoicesRequest): ListVoicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoicesRequest;
  static deserializeBinaryFromReader(message: ListVoicesRequest, reader: jspb.BinaryReader): ListVoicesRequest;
}

export namespace ListVoicesRequest {
  export type AsObject = {
    languageCode: string,
  }
}

export class ListVoicesResponse extends jspb.Message {
  clearVoicesList(): void;
  getVoicesList(): Array<Voice>;
  setVoicesList(value: Array<Voice>): void;
  addVoices(value?: Voice, index?: number): Voice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoicesResponse): ListVoicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoicesResponse;
  static deserializeBinaryFromReader(message: ListVoicesResponse, reader: jspb.BinaryReader): ListVoicesResponse;
}

export namespace ListVoicesResponse {
  export type AsObject = {
    voicesList: Array<Voice.AsObject>,
  }
}

export class Voice extends jspb.Message {
  clearLanguageCodesList(): void;
  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): void;
  addLanguageCodes(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  getSsmlGender(): SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap];
  setSsmlGender(value: SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap]): void;

  getNaturalSampleRateHertz(): number;
  setNaturalSampleRateHertz(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Voice.AsObject;
  static toObject(includeInstance: boolean, msg: Voice): Voice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Voice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Voice;
  static deserializeBinaryFromReader(message: Voice, reader: jspb.BinaryReader): Voice;
}

export namespace Voice {
  export type AsObject = {
    languageCodesList: Array<string>,
    name: string,
    ssmlGender: SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap],
    naturalSampleRateHertz: number,
  }
}

export class SynthesizeSpeechRequest extends jspb.Message {
  hasInput(): boolean;
  clearInput(): void;
  getInput(): SynthesisInput | undefined;
  setInput(value?: SynthesisInput): void;

  hasVoice(): boolean;
  clearVoice(): void;
  getVoice(): VoiceSelectionParams | undefined;
  setVoice(value?: VoiceSelectionParams): void;

  hasAudioConfig(): boolean;
  clearAudioConfig(): void;
  getAudioConfig(): AudioConfig | undefined;
  setAudioConfig(value?: AudioConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechRequest): SynthesizeSpeechRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynthesizeSpeechRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechRequest;
  static deserializeBinaryFromReader(message: SynthesizeSpeechRequest, reader: jspb.BinaryReader): SynthesizeSpeechRequest;
}

export namespace SynthesizeSpeechRequest {
  export type AsObject = {
    input?: SynthesisInput.AsObject,
    voice?: VoiceSelectionParams.AsObject,
    audioConfig?: AudioConfig.AsObject,
  }
}

export class SynthesisInput extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasSsml(): boolean;
  clearSsml(): void;
  getSsml(): string;
  setSsml(value: string): void;

  getInputSourceCase(): SynthesisInput.InputSourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesisInput.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesisInput): SynthesisInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynthesisInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesisInput;
  static deserializeBinaryFromReader(message: SynthesisInput, reader: jspb.BinaryReader): SynthesisInput;
}

export namespace SynthesisInput {
  export type AsObject = {
    text: string,
    ssml: string,
  }

  export enum InputSourceCase {
    INPUT_SOURCE_NOT_SET = 0,
    TEXT = 1,
    SSML = 2,
  }
}

export class VoiceSelectionParams extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSsmlGender(): SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap];
  setSsmlGender(value: SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceSelectionParams.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceSelectionParams): VoiceSelectionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceSelectionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceSelectionParams;
  static deserializeBinaryFromReader(message: VoiceSelectionParams, reader: jspb.BinaryReader): VoiceSelectionParams;
}

export namespace VoiceSelectionParams {
  export type AsObject = {
    languageCode: string,
    name: string,
    ssmlGender: SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap],
  }
}

export class AudioConfig extends jspb.Message {
  getAudioEncoding(): AudioEncodingMap[keyof AudioEncodingMap];
  setAudioEncoding(value: AudioEncodingMap[keyof AudioEncodingMap]): void;

  getSpeakingRate(): number;
  setSpeakingRate(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): void;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  clearEffectsProfileIdList(): void;
  getEffectsProfileIdList(): Array<string>;
  setEffectsProfileIdList(value: Array<string>): void;
  addEffectsProfileId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    audioEncoding: AudioEncodingMap[keyof AudioEncodingMap],
    speakingRate: number,
    pitch: number,
    volumeGainDb: number,
    sampleRateHertz: number,
    effectsProfileIdList: Array<string>,
  }
}

export class SynthesizeSpeechResponse extends jspb.Message {
  getAudioContent(): Uint8Array | string;
  getAudioContent_asU8(): Uint8Array;
  getAudioContent_asB64(): string;
  setAudioContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechResponse): SynthesizeSpeechResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynthesizeSpeechResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechResponse;
  static deserializeBinaryFromReader(message: SynthesizeSpeechResponse, reader: jspb.BinaryReader): SynthesizeSpeechResponse;
}

export namespace SynthesizeSpeechResponse {
  export type AsObject = {
    audioContent: Uint8Array | string,
  }
}

export interface SsmlVoiceGenderMap {
  SSML_VOICE_GENDER_UNSPECIFIED: 0;
  MALE: 1;
  FEMALE: 2;
  NEUTRAL: 3;
}

export const SsmlVoiceGender: SsmlVoiceGenderMap;

export interface AudioEncodingMap {
  AUDIO_ENCODING_UNSPECIFIED: 0;
  LINEAR16: 1;
  MP3: 2;
  OGG_OPUS: 3;
}

export const AudioEncoding: AudioEncodingMap;

