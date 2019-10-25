// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: items/items.proto

import * as items_items_pb from "../items/items_pb";
import * as common_health_pb from "../common/health_pb";
import * as items_items_model_pb from "../items/items_model_pb";
import * as grpc from "grpc";

interface IMruVItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createItem: grpc.MethodDefinition<items_items_model_pb.Item, items_items_pb.ItemID>;
  getItem: grpc.MethodDefinition<items_items_pb.ItemID, items_items_model_pb.Item>;
  updateItem: grpc.MethodDefinition<items_items_model_pb.Item, items_items_pb.ItemID>;
  deleteItem: grpc.MethodDefinition<items_items_pb.ItemID, items_items_pb.ItemID>;
  getItems: grpc.MethodDefinition<items_items_pb.GetItemsRequest, items_items_pb.GetItemsResponse>;
  createItemType: grpc.MethodDefinition<items_items_model_pb.ItemType, items_items_pb.ItemTypeID>;
  getItemType: grpc.MethodDefinition<items_items_pb.ItemTypeID, items_items_model_pb.ItemType>;
  updateItemType: grpc.MethodDefinition<items_items_model_pb.ItemType, items_items_pb.ItemTypeID>;
  deleteItemType: grpc.MethodDefinition<items_items_pb.ItemTypeID, items_items_pb.ItemTypeID>;
  getItemTypes: grpc.MethodDefinition<items_items_pb.GetItemTypesRequest, items_items_pb.GetItemTypesResponse>;
  createContainer: grpc.MethodDefinition<items_items_model_pb.Container, items_items_pb.ContainerID>;
  getContainer: grpc.MethodDefinition<items_items_pb.ContainerID, items_items_model_pb.Container>;
  updateContainer: grpc.MethodDefinition<items_items_model_pb.Container, items_items_pb.ContainerID>;
  deleteContainer: grpc.MethodDefinition<items_items_pb.ContainerID, items_items_pb.ContainerID>;
  getContainers: grpc.MethodDefinition<items_items_pb.GetContainersRequest, items_items_pb.GetContainersResponse>;
  getContainerItems: grpc.MethodDefinition<items_items_pb.ContainerID, items_items_pb.GetContainerItemsResponse>;
  removeContainerItem: grpc.MethodDefinition<items_items_pb.RemoveItemRequest, items_items_model_pb.Item>;
  putItem: grpc.MethodDefinition<items_items_pb.PutItemRequest, items_items_pb.ItemID>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVItemServiceService: IMruVItemServiceService;

export class MruVItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createItem(argument: items_items_model_pb.Item, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  createItem(argument: items_items_model_pb.Item, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  createItem(argument: items_items_model_pb.Item, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  getItem(argument: items_items_pb.ItemID, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: items_items_pb.ItemID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: items_items_pb.ItemID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  updateItem(argument: items_items_model_pb.Item, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  updateItem(argument: items_items_model_pb.Item, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  updateItem(argument: items_items_model_pb.Item, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_pb.ItemID, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_pb.ItemID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  deleteItem(argument: items_items_pb.ItemID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  getItems(argument: items_items_pb.GetItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemsResponse>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  createItemType(argument: items_items_model_pb.ItemType, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_pb.ItemTypeID, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_pb.ItemTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  getItemType(argument: items_items_pb.ItemTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.ItemType>): grpc.ClientUnaryCall;
  updateItemType(argument: items_items_model_pb.ItemType, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  updateItemType(argument: items_items_model_pb.ItemType, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  updateItemType(argument: items_items_model_pb.ItemType, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_pb.ItemTypeID, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_pb.ItemTypeID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  deleteItemType(argument: items_items_pb.ItemTypeID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemTypeID>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  getItemTypes(argument: items_items_pb.GetItemTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemTypesResponse>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  createContainer(argument: items_items_model_pb.Container, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_pb.ContainerID, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_pb.ContainerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  getContainer(argument: items_items_pb.ContainerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Container>): grpc.ClientUnaryCall;
  updateContainer(argument: items_items_model_pb.Container, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  updateContainer(argument: items_items_model_pb.Container, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  updateContainer(argument: items_items_model_pb.Container, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_pb.ContainerID, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_pb.ContainerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  deleteContainer(argument: items_items_pb.ContainerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ContainerID>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  getContainers(argument: items_items_pb.GetContainersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainersResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.ContainerID, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.ContainerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  getContainerItems(argument: items_items_pb.ContainerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetContainerItemsResponse>): grpc.ClientUnaryCall;
  removeContainerItem(argument: items_items_pb.RemoveItemRequest, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  removeContainerItem(argument: items_items_pb.RemoveItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  removeContainerItem(argument: items_items_pb.RemoveItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_model_pb.Item>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  putItem(argument: items_items_pb.PutItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.ItemID>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
