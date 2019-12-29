// package: google.cloud.vision.v1p3beta1
// file: google/cloud/vision/v1p3beta1/product_search.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_vision_v1p3beta1_geometry_pb from "../../../../google/cloud/vision/v1p3beta1/geometry_pb";
import * as google_cloud_vision_v1p3beta1_product_search_service_pb from "../../../../google/cloud/vision/v1p3beta1/product_search_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ProductSearchParams extends jspb.Message {
  getCatalogName(): string;
  setCatalogName(value: string): void;

  getCategory(): ProductSearchCategoryMap[keyof ProductSearchCategoryMap];
  setCategory(value: ProductSearchCategoryMap[keyof ProductSearchCategoryMap]): void;

  getProductCategory(): string;
  setProductCategory(value: string): void;

  hasNormalizedBoundingPoly(): boolean;
  clearNormalizedBoundingPoly(): void;
  getNormalizedBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.NormalizedBoundingPoly | undefined;
  setNormalizedBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.NormalizedBoundingPoly): void;

  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;
  getBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): void;

  getView(): ProductSearchResultsViewMap[keyof ProductSearchResultsViewMap];
  setView(value: ProductSearchResultsViewMap[keyof ProductSearchResultsViewMap]): void;

  getProductSet(): string;
  setProductSet(value: string): void;

  clearProductCategoriesList(): void;
  getProductCategoriesList(): Array<string>;
  setProductCategoriesList(value: Array<string>): void;
  addProductCategories(value: string, index?: number): string;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSearchParams.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSearchParams): ProductSearchParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductSearchParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSearchParams;
  static deserializeBinaryFromReader(message: ProductSearchParams, reader: jspb.BinaryReader): ProductSearchParams;
}

export namespace ProductSearchParams {
  export type AsObject = {
    catalogName: string,
    category: ProductSearchCategoryMap[keyof ProductSearchCategoryMap],
    productCategory: string,
    normalizedBoundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.NormalizedBoundingPoly.AsObject,
    boundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
    view: ProductSearchResultsViewMap[keyof ProductSearchResultsViewMap],
    productSet: string,
    productCategoriesList: Array<string>,
    filter: string,
  }
}

export class ProductSearchResults extends jspb.Message {
  getCategory(): ProductSearchCategoryMap[keyof ProductSearchCategoryMap];
  setCategory(value: ProductSearchCategoryMap[keyof ProductSearchCategoryMap]): void;

  getProductCategory(): string;
  setProductCategory(value: string): void;

  hasIndexTime(): boolean;
  clearIndexTime(): void;
  getIndexTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIndexTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearProductsList(): void;
  getProductsList(): Array<ProductSearchResults.ProductInfo>;
  setProductsList(value: Array<ProductSearchResults.ProductInfo>): void;
  addProducts(value?: ProductSearchResults.ProductInfo, index?: number): ProductSearchResults.ProductInfo;

  clearResultsList(): void;
  getResultsList(): Array<ProductSearchResults.Result>;
  setResultsList(value: Array<ProductSearchResults.Result>): void;
  addResults(value?: ProductSearchResults.Result, index?: number): ProductSearchResults.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSearchResults.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSearchResults): ProductSearchResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductSearchResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSearchResults;
  static deserializeBinaryFromReader(message: ProductSearchResults, reader: jspb.BinaryReader): ProductSearchResults;
}

export namespace ProductSearchResults {
  export type AsObject = {
    category: ProductSearchCategoryMap[keyof ProductSearchCategoryMap],
    productCategory: string,
    indexTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    productsList: Array<ProductSearchResults.ProductInfo.AsObject>,
    resultsList: Array<ProductSearchResults.Result.AsObject>,
  }

  export class ProductInfo extends jspb.Message {
    getProductId(): string;
    setProductId(value: string): void;

    getImageUri(): string;
    setImageUri(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProductInfo): ProductInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductInfo;
    static deserializeBinaryFromReader(message: ProductInfo, reader: jspb.BinaryReader): ProductInfo;
  }

  export namespace ProductInfo {
    export type AsObject = {
      productId: string,
      imageUri: string,
      score: number,
    }
  }

  export class Result extends jspb.Message {
    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): google_cloud_vision_v1p3beta1_product_search_service_pb.Product | undefined;
    setProduct(value?: google_cloud_vision_v1p3beta1_product_search_service_pb.Product): void;

    getScore(): number;
    setScore(value: number): void;

    getImage(): string;
    setImage(value: string): void;

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
      product?: google_cloud_vision_v1p3beta1_product_search_service_pb.Product.AsObject,
      score: number,
      image: string,
    }
  }
}

export interface ProductSearchCategoryMap {
  PRODUCT_SEARCH_CATEGORY_UNSPECIFIED: 0;
  SHOES: 1;
  BAGS: 2;
}

export const ProductSearchCategory: ProductSearchCategoryMap;

export interface ProductSearchResultsViewMap {
  BASIC: 0;
  FULL: 1;
}

export const ProductSearchResultsView: ProductSearchResultsViewMap;

