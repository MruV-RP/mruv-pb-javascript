// GENERATED CODE -- DO NOT EDIT!

// package: mruv.items
// file: items/items.proto

import * as items_items_pb from "../items/items_pb";
import * as common_health_pb from "../common/health_pb";
import * as items_items_model_pb from "../items/items_model_pb";
import * as grpc from "grpc";

interface IMruVItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createItem: grpc.MethodDefinition<items_items_model_pb.Item, items_items_model_pb.ItemID>;
  getItem: grpc.MethodDefinition<items_items_model_pb.ItemID, items_items_model_pb.Item>;
  deleteItem: grpc.MethodDefinition<items_items_model_pb.ItemID, items_items_model_pb.ItemID>;
  getItems: grpc.MethodDefinition<items_items_pb.GetItemsRequest, items_items_pb.GetItemsResponse>;
  createItemType: grpc.MethodDefinition<items_items_model_pb.ItemType, items_items_model_pb.ItemTypeID>;
  getItemType: grpc.MethodDefinition<items_items_model_pb.ItemTypeID, items_items_model_pb.ItemType>;
  deleteItemType: grpc.MethodDefinition<items_items_model_pb.ItemTypeID, items_items_model_pb.ItemTypeID>;
  getItemTypes: grpc.MethodDefinition<items_items_pb.GetItemTypesRequest, items_items_pb.GetItemTypesResponse>;
  createContainer: grpc.MethodDefinition<items_items_model_pb.Container, items_items_model_pb.ContainerID>;
  getContainer: grpc.MethodDefinition<items_items_model_pb.ContainerID, items_items_model_pb.Container>;
  deleteContainer: grpc.MethodDefinition<items_items_model_pb.ContainerID, items_items_model_pb.ContainerID>;
  getContainers: grpc.MethodDefinition<items_items_pb.GetContainersRequest, items_items_pb.GetContainersResponse>;
  createContainerType: grpc.MethodDefinition<items_items_model_pb.ContainerType, items_items_model_pb.ContainerTypeID>;
  getContainerType: grpc.MethodDefinition<items_items_model_pb.ContainerTypeID, items_items_model_pb.ContainerType>;
  deleteContainerType: grpc.MethodDefinition<items_items_model_pb.ContainerTypeID, items_items_model_pb.ContainerTypeID>;
  getContainerTypes: grpc.MethodDefinition<items_items_pb.GetContainerTypesRequest, items_items_pb.GetContainerTypesResponse>;
  getContainerItems: grpc.MethodDefinition<items_items_pb.GetContainerItemsRequest, items_items_pb.GetContainerItemsResponse>;
  pullItem: grpc.MethodDefinition<items_items_pb.PullItemRequest, items_items_model_pb.Item>;
  putItem: grpc.MethodDefinition<items_items_pb.PutItemRequest, items_items_pb.PutItemResponse>;
  sortItems: grpc.MethodDefinition<items_items_pb.SortItemsRequest, items_items_pb.SortItemsResponse>;
  getNearestItems: grpc.MethodDefinition<items_items_pb.GetNearestItemsRequest, items_items_pb.GetNearestItemsResponse>;
  useItem: grpc.MethodDefinition<items_items_pb.UseItemRequest, items_items_pb.UseItemResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVItemServiceService: IMruVItemServiceService;

export class MruVItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createItem(argument: items_items_model_pb.Item, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  createItem(argument: items_items_model_pb.Item, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  createItem(argument: items_items_model_pb.Item, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  getItem(argument: items_items_model_pb.ItemID, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: items_items_model_pb.ItemID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: items_items_model_pb.ItemID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_model_pb.ItemID, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_model_pb.ItemID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_model_pb.ItemID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemID>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_model_pb.ItemTypeID, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_model_pb.ItemTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_model_pb.ItemTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_model_pb.ItemTypeID, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_model_pb.ItemTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_model_pb.ItemTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemTypeID>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_model_pb.ContainerID, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_model_pb.ContainerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_model_pb.ContainerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_model_pb.ContainerID, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_model_pb.ContainerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_model_pb.ContainerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerID>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  createContainerType(argument: items_items_model_pb.ContainerType, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  createContainerType(argument: items_items_model_pb.ContainerType, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  createContainerType(argument: items_items_model_pb.ContainerType, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  getContainerType(argument: items_items_model_pb.ContainerTypeID, callback: grpc.requestCallback<items_items_model_pb.ContainerType>): grpc.ClientUnaryCall;
  getContainerType(argument: items_items_model_pb.ContainerTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerType>): grpc.ClientUnaryCall;
  getContainerType(argument: items_items_model_pb.ContainerTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerType>): grpc.ClientUnaryCall;
  deleteContainerType(argument: items_items_model_pb.ContainerTypeID, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  deleteContainerType(argument: items_items_model_pb.ContainerTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  deleteContainerType(argument: items_items_model_pb.ContainerTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ContainerTypeID>): grpc.ClientUnaryCall;
  getContainerTypes(argument: items_items_pb.GetContainerTypesRequest, callback: grpc.requestCallback<items_items_pb.GetContainerTypesResponse>): grpc.ClientUnaryCall;
  getContainerTypes(argument: items_items_pb.GetContainerTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerTypesResponse>): grpc.ClientUnaryCall;
  getContainerTypes(argument: items_items_pb.GetContainerTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerTypesResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.GetContainerItemsRequest, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.GetContainerItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.GetContainerItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  pullItem(argument: items_items_pb.PullItemRequest, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  pullItem(argument: items_items_pb.PullItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  pullItem(argument: items_items_pb.PullItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, callback: grpc.requestCallback<items_items_pb.PutItemResponse>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.PutItemResponse>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.PutItemResponse>): grpc.ClientUnaryCall;
  sortItems(argument: items_items_pb.SortItemsRequest, callback: grpc.requestCallback<items_items_pb.SortItemsResponse>): grpc.ClientUnaryCall;
  sortItems(argument: items_items_pb.SortItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.SortItemsResponse>): grpc.ClientUnaryCall;
  sortItems(argument: items_items_pb.SortItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.SortItemsResponse>): grpc.ClientUnaryCall;
  getNearestItems(argument: items_items_pb.GetNearestItemsRequest, callback: grpc.requestCallback<items_items_pb.GetNearestItemsResponse>): grpc.ClientUnaryCall;
  getNearestItems(argument: items_items_pb.GetNearestItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetNearestItemsResponse>): grpc.ClientUnaryCall;
  getNearestItems(argument: items_items_pb.GetNearestItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetNearestItemsResponse>): grpc.ClientUnaryCall;
  useItem(argument: items_items_pb.UseItemRequest, callback: grpc.requestCallback<items_items_pb.UseItemResponse>): grpc.ClientUnaryCall;
  useItem(argument: items_items_pb.UseItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.UseItemResponse>): grpc.ClientUnaryCall;
  useItem(argument: items_items_pb.UseItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.UseItemResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
