// package: mruv.business
// file: business/business.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class Business extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearEstateIdsList(): void;
  getEstateIdsList(): Array<number>;
  setEstateIdsList(value: Array<number>): void;
  addEstateIds(value: number, index?: number): number;

  getProductId(): number;
  setProductId(value: number): void;

  getOwnerType(): OwnerTypeMap[keyof OwnerTypeMap];
  setOwnerType(value: OwnerTypeMap[keyof OwnerTypeMap]): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  clearBusinessItemsList(): void;
  getBusinessItemsList(): Array<number>;
  setBusinessItemsList(value: Array<number>): void;
  addBusinessItems(value: number, index?: number): number;

  getBusinessGroup(): number;
  setBusinessGroup(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Business.AsObject;
  static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Business;
  static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
  export type AsObject = {
    name: string,
    description: string,
    estateIdsList: Array<number>,
    productId: number,
    ownerType: OwnerTypeMap[keyof OwnerTypeMap],
    ownerId: number,
    businessItemsList: Array<number>,
    businessGroup: number,
  }
}

export class CreateBusinessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProductId(): number;
  setProductId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessRequest): CreateBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessRequest;
  static deserializeBinaryFromReader(message: CreateBusinessRequest, reader: jspb.BinaryReader): CreateBusinessRequest;
}

export namespace CreateBusinessRequest {
  export type AsObject = {
    name: string,
    description: string,
    productId: number,
  }
}

export class CreateBusinessResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessResponse): CreateBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessResponse;
  static deserializeBinaryFromReader(message: CreateBusinessResponse, reader: jspb.BinaryReader): CreateBusinessResponse;
}

export namespace CreateBusinessResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetBusinessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessRequest): GetBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessRequest;
  static deserializeBinaryFromReader(message: GetBusinessRequest, reader: jspb.BinaryReader): GetBusinessRequest;
}

export namespace GetBusinessRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessResponse): GetBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessResponse;
  static deserializeBinaryFromReader(message: GetBusinessResponse, reader: jspb.BinaryReader): GetBusinessResponse;
}

export namespace GetBusinessResponse {
  export type AsObject = {
  }
}

export class UpdateBusinessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessRequest): UpdateBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessRequest, reader: jspb.BinaryReader): UpdateBusinessRequest;
}

export namespace UpdateBusinessRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessResponse): UpdateBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessResponse, reader: jspb.BinaryReader): UpdateBusinessResponse;
}

export namespace UpdateBusinessResponse {
  export type AsObject = {
  }
}

export class DeleteBusinessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessRequest): DeleteBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessRequest, reader: jspb.BinaryReader): DeleteBusinessRequest;
}

export namespace DeleteBusinessRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessResponse): DeleteBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessResponse;
  static deserializeBinaryFromReader(message: DeleteBusinessResponse, reader: jspb.BinaryReader): DeleteBusinessResponse;
}

export namespace DeleteBusinessResponse {
  export type AsObject = {
  }
}

export class AssignOwnerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignOwnerRequest): AssignOwnerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignOwnerRequest;
  static deserializeBinaryFromReader(message: AssignOwnerRequest, reader: jspb.BinaryReader): AssignOwnerRequest;
}

export namespace AssignOwnerRequest {
  export type AsObject = {
    id: number,
  }
}

export class AssignOwnerResponse extends jspb.Message {
  getOwnerType(): OwnerTypeMap[keyof OwnerTypeMap];
  setOwnerType(value: OwnerTypeMap[keyof OwnerTypeMap]): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignOwnerResponse): AssignOwnerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignOwnerResponse;
  static deserializeBinaryFromReader(message: AssignOwnerResponse, reader: jspb.BinaryReader): AssignOwnerResponse;
}

export namespace AssignOwnerResponse {
  export type AsObject = {
    ownerType: OwnerTypeMap[keyof OwnerTypeMap],
    ownerId: number,
  }
}

export class AssignEstateRequest extends jspb.Message {
  getBusinessId(): number;
  setBusinessId(value: number): void;

  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignEstateRequest): AssignEstateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignEstateRequest;
  static deserializeBinaryFromReader(message: AssignEstateRequest, reader: jspb.BinaryReader): AssignEstateRequest;
}

export namespace AssignEstateRequest {
  export type AsObject = {
    businessId: number,
    estateId: number,
  }
}

export class AssignEstateResponse extends jspb.Message {
  getEstateCount(): number;
  setEstateCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignEstateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignEstateResponse): AssignEstateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignEstateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignEstateResponse;
  static deserializeBinaryFromReader(message: AssignEstateResponse, reader: jspb.BinaryReader): AssignEstateResponse;
}

export namespace AssignEstateResponse {
  export type AsObject = {
    estateCount: number,
  }
}

export class UnassignEstateRequest extends jspb.Message {
  getBusinessId(): number;
  setBusinessId(value: number): void;

  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignEstateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignEstateRequest): UnassignEstateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignEstateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignEstateRequest;
  static deserializeBinaryFromReader(message: UnassignEstateRequest, reader: jspb.BinaryReader): UnassignEstateRequest;
}

export namespace UnassignEstateRequest {
  export type AsObject = {
    businessId: number,
    estateId: number,
  }
}

export class UnassignEstateResponse extends jspb.Message {
  getEstateCount(): number;
  setEstateCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignEstateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignEstateResponse): UnassignEstateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignEstateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignEstateResponse;
  static deserializeBinaryFromReader(message: UnassignEstateResponse, reader: jspb.BinaryReader): UnassignEstateResponse;
}

export namespace UnassignEstateResponse {
  export type AsObject = {
    estateCount: number,
  }
}

export class BuyBusinessRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBuyerType(): OwnerTypeMap[keyof OwnerTypeMap];
  setBuyerType(value: OwnerTypeMap[keyof OwnerTypeMap]): void;

  getBuyerId(): number;
  setBuyerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuyBusinessRequest): BuyBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyBusinessRequest;
  static deserializeBinaryFromReader(message: BuyBusinessRequest, reader: jspb.BinaryReader): BuyBusinessRequest;
}

export namespace BuyBusinessRequest {
  export type AsObject = {
    id: number,
    buyerType: OwnerTypeMap[keyof OwnerTypeMap],
    buyerId: number,
  }
}

export class BuyBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuyBusinessResponse): BuyBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyBusinessResponse;
  static deserializeBinaryFromReader(message: BuyBusinessResponse, reader: jspb.BinaryReader): BuyBusinessResponse;
}

export namespace BuyBusinessResponse {
  export type AsObject = {
  }
}

export class WatchBusinessRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBusinessRequest): WatchBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBusinessRequest;
  static deserializeBinaryFromReader(message: WatchBusinessRequest, reader: jspb.BinaryReader): WatchBusinessRequest;
}

export namespace WatchBusinessRequest {
  export type AsObject = {
  }
}

export class WatchBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBusinessResponse): WatchBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBusinessResponse;
  static deserializeBinaryFromReader(message: WatchBusinessResponse, reader: jspb.BinaryReader): WatchBusinessResponse;
}

export namespace WatchBusinessResponse {
  export type AsObject = {
  }
}

export class WatchBusinessesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBusinessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBusinessesRequest): WatchBusinessesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBusinessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBusinessesRequest;
  static deserializeBinaryFromReader(message: WatchBusinessesRequest, reader: jspb.BinaryReader): WatchBusinessesRequest;
}

export namespace WatchBusinessesRequest {
  export type AsObject = {
  }
}

export class WatchBusinessesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBusinessesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBusinessesResponse): WatchBusinessesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchBusinessesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBusinessesResponse;
  static deserializeBinaryFromReader(message: WatchBusinessesResponse, reader: jspb.BinaryReader): WatchBusinessesResponse;
}

export namespace WatchBusinessesResponse {
  export type AsObject = {
  }
}

export interface OwnerTypeMap {
  UNKNOWN: 0;
  PLAYER: 1;
  GROUP: 2;
  SYSTEM: 3;
}

export const OwnerType: OwnerTypeMap;

