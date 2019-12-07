// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var items_items_pb = require('../items/items_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var items_items_model_pb = require('../items/items_model_pb.js');
var common_spatial_pb = require('../common/spatial_pb.js');

function serialize_mruv_Container(arg) {
  if (!(arg instanceof items_items_model_pb.Container)) {
    throw new Error('Expected argument of type mruv.Container');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_Container(buffer_arg) {
  return items_items_model_pb.Container.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ContainerID(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerID)) {
    throw new Error('Expected argument of type mruv.ContainerID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ContainerID(buffer_arg) {
  return items_items_model_pb.ContainerID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ContainerType(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerType)) {
    throw new Error('Expected argument of type mruv.ContainerType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ContainerType(buffer_arg) {
  return items_items_model_pb.ContainerType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ContainerTypeID(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerTypeID)) {
    throw new Error('Expected argument of type mruv.ContainerTypeID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ContainerTypeID(buffer_arg) {
  return items_items_model_pb.ContainerTypeID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainerItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainerItemsRequest)) {
    throw new Error('Expected argument of type mruv.GetContainerItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainerItemsRequest(buffer_arg) {
  return items_items_pb.GetContainerItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainerItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainerItemsResponse)) {
    throw new Error('Expected argument of type mruv.GetContainerItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainerItemsResponse(buffer_arg) {
  return items_items_pb.GetContainerItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainerTypesRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainerTypesRequest)) {
    throw new Error('Expected argument of type mruv.GetContainerTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainerTypesRequest(buffer_arg) {
  return items_items_pb.GetContainerTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainerTypesResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainerTypesResponse)) {
    throw new Error('Expected argument of type mruv.GetContainerTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainerTypesResponse(buffer_arg) {
  return items_items_pb.GetContainerTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainersRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainersRequest)) {
    throw new Error('Expected argument of type mruv.GetContainersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainersRequest(buffer_arg) {
  return items_items_pb.GetContainersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetContainersResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainersResponse)) {
    throw new Error('Expected argument of type mruv.GetContainersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetContainersResponse(buffer_arg) {
  return items_items_pb.GetContainersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemTypesRequest(arg) {
  if (!(arg instanceof items_items_pb.GetItemTypesRequest)) {
    throw new Error('Expected argument of type mruv.GetItemTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemTypesRequest(buffer_arg) {
  return items_items_pb.GetItemTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemTypesResponse(arg) {
  if (!(arg instanceof items_items_pb.GetItemTypesResponse)) {
    throw new Error('Expected argument of type mruv.GetItemTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemTypesResponse(buffer_arg) {
  return items_items_pb.GetItemTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetItemsRequest)) {
    throw new Error('Expected argument of type mruv.GetItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemsRequest(buffer_arg) {
  return items_items_pb.GetItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetItemsResponse)) {
    throw new Error('Expected argument of type mruv.GetItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemsResponse(buffer_arg) {
  return items_items_pb.GetItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetNearestItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetNearestItemsRequest)) {
    throw new Error('Expected argument of type mruv.GetNearestItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetNearestItemsRequest(buffer_arg) {
  return items_items_pb.GetNearestItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetNearestItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetNearestItemsResponse)) {
    throw new Error('Expected argument of type mruv.GetNearestItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetNearestItemsResponse(buffer_arg) {
  return items_items_pb.GetNearestItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_Item(arg) {
  if (!(arg instanceof items_items_model_pb.Item)) {
    throw new Error('Expected argument of type mruv.Item');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_Item(buffer_arg) {
  return items_items_model_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ItemID(arg) {
  if (!(arg instanceof items_items_model_pb.ItemID)) {
    throw new Error('Expected argument of type mruv.ItemID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ItemID(buffer_arg) {
  return items_items_model_pb.ItemID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ItemType(arg) {
  if (!(arg instanceof items_items_model_pb.ItemType)) {
    throw new Error('Expected argument of type mruv.ItemType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ItemType(buffer_arg) {
  return items_items_model_pb.ItemType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ItemTypeID(arg) {
  if (!(arg instanceof items_items_model_pb.ItemTypeID)) {
    throw new Error('Expected argument of type mruv.ItemTypeID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ItemTypeID(buffer_arg) {
  return items_items_model_pb.ItemTypeID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_PullItemRequest(arg) {
  if (!(arg instanceof items_items_pb.PullItemRequest)) {
    throw new Error('Expected argument of type mruv.PullItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_PullItemRequest(buffer_arg) {
  return items_items_pb.PullItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_PutItemRequest(arg) {
  if (!(arg instanceof items_items_pb.PutItemRequest)) {
    throw new Error('Expected argument of type mruv.PutItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_PutItemRequest(buffer_arg) {
  return items_items_pb.PutItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_SortItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.SortItemsRequest)) {
    throw new Error('Expected argument of type mruv.SortItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_SortItemsRequest(buffer_arg) {
  return items_items_pb.SortItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_SortItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.SortItemsResponse)) {
    throw new Error('Expected argument of type mruv.SortItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_SortItemsResponse(buffer_arg) {
  return items_items_pb.SortItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UseItemRequest(arg) {
  if (!(arg instanceof items_items_pb.UseItemRequest)) {
    throw new Error('Expected argument of type mruv.UseItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UseItemRequest(buffer_arg) {
  return items_items_pb.UseItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UseItemResponse(arg) {
  if (!(arg instanceof items_items_pb.UseItemResponse)) {
    throw new Error('Expected argument of type mruv.UseItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UseItemResponse(buffer_arg) {
  return items_items_pb.UseItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV items service provides procedures for managing items and containers
var MruVItemServiceService = exports.MruVItemServiceService = {
  // Create new item.
  createItem: {
    path: '/mruv.MruVItemService/CreateItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.Item,
    responseType: items_items_model_pb.ItemID,
    requestSerialize: serialize_mruv_Item,
    requestDeserialize: deserialize_mruv_Item,
    responseSerialize: serialize_mruv_ItemID,
    responseDeserialize: deserialize_mruv_ItemID,
  },
  // Get item by id.
  getItem: {
    path: '/mruv.MruVItemService/GetItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemID,
    responseType: items_items_model_pb.Item,
    requestSerialize: serialize_mruv_ItemID,
    requestDeserialize: deserialize_mruv_ItemID,
    responseSerialize: serialize_mruv_Item,
    responseDeserialize: deserialize_mruv_Item,
  },
  // Delete item by id.
  deleteItem: {
    path: '/mruv.MruVItemService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemID,
    responseType: items_items_model_pb.ItemID,
    requestSerialize: serialize_mruv_ItemID,
    requestDeserialize: deserialize_mruv_ItemID,
    responseSerialize: serialize_mruv_ItemID,
    responseDeserialize: deserialize_mruv_ItemID,
  },
  // Gets all items.
  getItems: {
    path: '/mruv.MruVItemService/GetItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetItemsRequest,
    responseType: items_items_pb.GetItemsResponse,
    requestSerialize: serialize_mruv_GetItemsRequest,
    requestDeserialize: deserialize_mruv_GetItemsRequest,
    responseSerialize: serialize_mruv_GetItemsResponse,
    responseDeserialize: deserialize_mruv_GetItemsResponse,
  },
  // Create item type.
  createItemType: {
    path: '/mruv.MruVItemService/CreateItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemType,
    responseType: items_items_model_pb.ItemTypeID,
    requestSerialize: serialize_mruv_ItemType,
    requestDeserialize: deserialize_mruv_ItemType,
    responseSerialize: serialize_mruv_ItemTypeID,
    responseDeserialize: deserialize_mruv_ItemTypeID,
  },
  // Get item type by id.
  getItemType: {
    path: '/mruv.MruVItemService/GetItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemTypeID,
    responseType: items_items_model_pb.ItemType,
    requestSerialize: serialize_mruv_ItemTypeID,
    requestDeserialize: deserialize_mruv_ItemTypeID,
    responseSerialize: serialize_mruv_ItemType,
    responseDeserialize: deserialize_mruv_ItemType,
  },
  // Delete item type by id.
  deleteItemType: {
    path: '/mruv.MruVItemService/DeleteItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemTypeID,
    responseType: items_items_model_pb.ItemTypeID,
    requestSerialize: serialize_mruv_ItemTypeID,
    requestDeserialize: deserialize_mruv_ItemTypeID,
    responseSerialize: serialize_mruv_ItemTypeID,
    responseDeserialize: deserialize_mruv_ItemTypeID,
  },
  // Gets all item types.
  getItemTypes: {
    path: '/mruv.MruVItemService/GetItemTypes',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetItemTypesRequest,
    responseType: items_items_pb.GetItemTypesResponse,
    requestSerialize: serialize_mruv_GetItemTypesRequest,
    requestDeserialize: deserialize_mruv_GetItemTypesRequest,
    responseSerialize: serialize_mruv_GetItemTypesResponse,
    responseDeserialize: deserialize_mruv_GetItemTypesResponse,
  },
  // Create container.
  createContainer: {
    path: '/mruv.MruVItemService/CreateContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.Container,
    responseType: items_items_model_pb.ContainerID,
    requestSerialize: serialize_mruv_Container,
    requestDeserialize: deserialize_mruv_Container,
    responseSerialize: serialize_mruv_ContainerID,
    responseDeserialize: deserialize_mruv_ContainerID,
  },
  // Get container by id.
  getContainer: {
    path: '/mruv.MruVItemService/GetContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerID,
    responseType: items_items_model_pb.Container,
    requestSerialize: serialize_mruv_ContainerID,
    requestDeserialize: deserialize_mruv_ContainerID,
    responseSerialize: serialize_mruv_Container,
    responseDeserialize: deserialize_mruv_Container,
  },
  // Delete container by id.
  deleteContainer: {
    path: '/mruv.MruVItemService/DeleteContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerID,
    responseType: items_items_model_pb.ContainerID,
    requestSerialize: serialize_mruv_ContainerID,
    requestDeserialize: deserialize_mruv_ContainerID,
    responseSerialize: serialize_mruv_ContainerID,
    responseDeserialize: deserialize_mruv_ContainerID,
  },
  // Get all containers.
  getContainers: {
    path: '/mruv.MruVItemService/GetContainers',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainersRequest,
    responseType: items_items_pb.GetContainersResponse,
    requestSerialize: serialize_mruv_GetContainersRequest,
    requestDeserialize: deserialize_mruv_GetContainersRequest,
    responseSerialize: serialize_mruv_GetContainersResponse,
    responseDeserialize: deserialize_mruv_GetContainersResponse,
  },
  // Create container type.
  createContainerType: {
    path: '/mruv.MruVItemService/CreateContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerType,
    responseType: items_items_model_pb.ContainerTypeID,
    requestSerialize: serialize_mruv_ContainerType,
    requestDeserialize: deserialize_mruv_ContainerType,
    responseSerialize: serialize_mruv_ContainerTypeID,
    responseDeserialize: deserialize_mruv_ContainerTypeID,
  },
  // Get container type by id.
  getContainerType: {
    path: '/mruv.MruVItemService/GetContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerTypeID,
    responseType: items_items_model_pb.ContainerType,
    requestSerialize: serialize_mruv_ContainerTypeID,
    requestDeserialize: deserialize_mruv_ContainerTypeID,
    responseSerialize: serialize_mruv_ContainerType,
    responseDeserialize: deserialize_mruv_ContainerType,
  },
  // Detele container type by id.
  deleteContainerType: {
    path: '/mruv.MruVItemService/DeleteContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerTypeID,
    responseType: items_items_model_pb.ContainerTypeID,
    requestSerialize: serialize_mruv_ContainerTypeID,
    requestDeserialize: deserialize_mruv_ContainerTypeID,
    responseSerialize: serialize_mruv_ContainerTypeID,
    responseDeserialize: deserialize_mruv_ContainerTypeID,
  },
  // Get all container types.
  getContainerTypes: {
    path: '/mruv.MruVItemService/GetContainerTypes',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainerTypesRequest,
    responseType: items_items_pb.GetContainerTypesResponse,
    requestSerialize: serialize_mruv_GetContainerTypesRequest,
    requestDeserialize: deserialize_mruv_GetContainerTypesRequest,
    responseSerialize: serialize_mruv_GetContainerTypesResponse,
    responseDeserialize: deserialize_mruv_GetContainerTypesResponse,
  },
  // Get items inside a container.
  getContainerItems: {
    path: '/mruv.MruVItemService/GetContainerItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainerItemsRequest,
    responseType: items_items_pb.GetContainerItemsResponse,
    requestSerialize: serialize_mruv_GetContainerItemsRequest,
    requestDeserialize: deserialize_mruv_GetContainerItemsRequest,
    responseSerialize: serialize_mruv_GetContainerItemsResponse,
    responseDeserialize: deserialize_mruv_GetContainerItemsResponse,
  },
  // Pull item from container.
  pullItem: {
    path: '/mruv.MruVItemService/PullItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.PullItemRequest,
    responseType: items_items_model_pb.Item,
    requestSerialize: serialize_mruv_PullItemRequest,
    requestDeserialize: deserialize_mruv_PullItemRequest,
    responseSerialize: serialize_mruv_Item,
    responseDeserialize: deserialize_mruv_Item,
  },
  // Put item into container.
  putItem: {
    path: '/mruv.MruVItemService/PutItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.PutItemRequest,
    responseType: items_items_model_pb.ItemID,
    requestSerialize: serialize_mruv_PutItemRequest,
    requestDeserialize: deserialize_mruv_PutItemRequest,
    responseSerialize: serialize_mruv_ItemID,
    responseDeserialize: deserialize_mruv_ItemID,
  },
  // Sort items inside container.
  // This procedure change order of items inside container.
  sortItems: {
    path: '/mruv.MruVItemService/SortItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.SortItemsRequest,
    responseType: items_items_pb.SortItemsResponse,
    requestSerialize: serialize_mruv_SortItemsRequest,
    requestDeserialize: deserialize_mruv_SortItemsRequest,
    responseSerialize: serialize_mruv_SortItemsResponse,
    responseDeserialize: deserialize_mruv_SortItemsResponse,
  },
  // Retrieves from the container the list of items nearest to the given position.
  getNearestItems: {
    path: '/mruv.MruVItemService/GetNearestItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetNearestItemsRequest,
    responseType: items_items_pb.GetNearestItemsResponse,
    requestSerialize: serialize_mruv_GetNearestItemsRequest,
    requestDeserialize: deserialize_mruv_GetNearestItemsRequest,
    responseSerialize: serialize_mruv_GetNearestItemsResponse,
    responseDeserialize: deserialize_mruv_GetNearestItemsResponse,
  },
  // Trigger action associated with the item usage.
  useItem: {
    path: '/mruv.MruVItemService/UseItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.UseItemRequest,
    responseType: items_items_pb.UseItemResponse,
    requestSerialize: serialize_mruv_UseItemRequest,
    requestDeserialize: deserialize_mruv_UseItemRequest,
    responseSerialize: serialize_mruv_UseItemResponse,
    responseDeserialize: deserialize_mruv_UseItemResponse,
  },
  // Get service health status.
  getServiceStatus: {
    path: '/mruv.MruVItemService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_ServiceStatusRequest,
    responseSerialize: serialize_mruv_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_ServiceStatusResponse,
  },
  // Get service current version.
  getServiceVersion: {
    path: '/mruv.MruVItemService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_VersionRequest,
    requestDeserialize: deserialize_mruv_VersionRequest,
    responseSerialize: serialize_mruv_VersionResponse,
    responseDeserialize: deserialize_mruv_VersionResponse,
  },
};

exports.MruVItemServiceClient = grpc.makeGenericClientConstructor(MruVItemServiceService);
