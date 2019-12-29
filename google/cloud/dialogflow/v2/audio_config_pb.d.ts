// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/audio_config.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class InputAudioConfig extends jspb.Message {
  getAudioEncoding(): AudioEncodingMap[keyof AudioEncodingMap];
  setAudioEncoding(value: AudioEncodingMap[keyof AudioEncodingMap]): void;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  clearPhraseHintsList(): void;
  getPhraseHintsList(): Array<string>;
  setPhraseHintsList(value: Array<string>): void;
  addPhraseHints(value: string, index?: number): string;

  getModelVariant(): SpeechModelVariantMap[keyof SpeechModelVariantMap];
  setModelVariant(value: SpeechModelVariantMap[keyof SpeechModelVariantMap]): void;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputAudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputAudioConfig): InputAudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputAudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputAudioConfig;
  static deserializeBinaryFromReader(message: InputAudioConfig, reader: jspb.BinaryReader): InputAudioConfig;
}

export namespace InputAudioConfig {
  export type AsObject = {
    audioEncoding: AudioEncodingMap[keyof AudioEncodingMap],
    sampleRateHertz: number,
    languageCode: string,
    phraseHintsList: Array<string>,
    modelVariant: SpeechModelVariantMap[keyof SpeechModelVariantMap],
    singleUtterance: boolean,
  }
}

export class VoiceSelectionParams extends jspb.Message {
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
    name: string,
    ssmlGender: SsmlVoiceGenderMap[keyof SsmlVoiceGenderMap],
  }
}

export class SynthesizeSpeechConfig extends jspb.Message {
  getSpeakingRate(): number;
  setSpeakingRate(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): void;

  clearEffectsProfileIdList(): void;
  getEffectsProfileIdList(): Array<string>;
  setEffectsProfileIdList(value: Array<string>): void;
  addEffectsProfileId(value: string, index?: number): string;

  hasVoice(): boolean;
  clearVoice(): void;
  getVoice(): VoiceSelectionParams | undefined;
  setVoice(value?: VoiceSelectionParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechConfig): SynthesizeSpeechConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynthesizeSpeechConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechConfig;
  static deserializeBinaryFromReader(message: SynthesizeSpeechConfig, reader: jspb.BinaryReader): SynthesizeSpeechConfig;
}

export namespace SynthesizeSpeechConfig {
  export type AsObject = {
    speakingRate: number,
    pitch: number,
    volumeGainDb: number,
    effectsProfileIdList: Array<string>,
    voice?: VoiceSelectionParams.AsObject,
  }
}

export class OutputAudioConfig extends jspb.Message {
  getAudioEncoding(): OutputAudioEncodingMap[keyof OutputAudioEncodingMap];
  setAudioEncoding(value: OutputAudioEncodingMap[keyof OutputAudioEncodingMap]): void;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  hasSynthesizeSpeechConfig(): boolean;
  clearSynthesizeSpeechConfig(): void;
  getSynthesizeSpeechConfig(): SynthesizeSpeechConfig | undefined;
  setSynthesizeSpeechConfig(value?: SynthesizeSpeechConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputAudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputAudioConfig): OutputAudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputAudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputAudioConfig;
  static deserializeBinaryFromReader(message: OutputAudioConfig, reader: jspb.BinaryReader): OutputAudioConfig;
}

export namespace OutputAudioConfig {
  export type AsObject = {
    audioEncoding: OutputAudioEncodingMap[keyof OutputAudioEncodingMap],
    sampleRateHertz: number,
    synthesizeSpeechConfig?: SynthesizeSpeechConfig.AsObject,
  }
}

export interface AudioEncodingMap {
  AUDIO_ENCODING_UNSPECIFIED: 0;
  AUDIO_ENCODING_LINEAR_16: 1;
  AUDIO_ENCODING_FLAC: 2;
  AUDIO_ENCODING_MULAW: 3;
  AUDIO_ENCODING_AMR: 4;
  AUDIO_ENCODING_AMR_WB: 5;
  AUDIO_ENCODING_OGG_OPUS: 6;
  AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE: 7;
}

export const AudioEncoding: AudioEncodingMap;

export interface SpeechModelVariantMap {
  SPEECH_MODEL_VARIANT_UNSPECIFIED: 0;
  USE_BEST_AVAILABLE: 1;
  USE_STANDARD: 2;
  USE_ENHANCED: 3;
}

export const SpeechModelVariant: SpeechModelVariantMap;

export interface SsmlVoiceGenderMap {
  SSML_VOICE_GENDER_UNSPECIFIED: 0;
  SSML_VOICE_GENDER_MALE: 1;
  SSML_VOICE_GENDER_FEMALE: 2;
  SSML_VOICE_GENDER_NEUTRAL: 3;
}

export const SsmlVoiceGender: SsmlVoiceGenderMap;

export interface OutputAudioEncodingMap {
  OUTPUT_AUDIO_ENCODING_UNSPECIFIED: 0;
  OUTPUT_AUDIO_ENCODING_LINEAR_16: 1;
  OUTPUT_AUDIO_ENCODING_MP3: 2;
  OUTPUT_AUDIO_ENCODING_OGG_OPUS: 3;
}

export const OutputAudioEncoding: OutputAudioEncodingMap;

