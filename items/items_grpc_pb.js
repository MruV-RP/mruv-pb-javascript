// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var items_items_pb = require('../items/items_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var items_items_model_pb = require('../items/items_model_pb.js');
var common_spatial_pb = require('../common/spatial_pb.js');

function serialize_mruv_common_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.common.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.common.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_Container(arg) {
  if (!(arg instanceof items_items_model_pb.Container)) {
    throw new Error('Expected argument of type mruv.items.Container');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_Container(buffer_arg) {
  return items_items_model_pb.Container.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ContainerID(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerID)) {
    throw new Error('Expected argument of type mruv.items.ContainerID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ContainerID(buffer_arg) {
  return items_items_model_pb.ContainerID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ContainerType(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerType)) {
    throw new Error('Expected argument of type mruv.items.ContainerType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ContainerType(buffer_arg) {
  return items_items_model_pb.ContainerType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ContainerTypeID(arg) {
  if (!(arg instanceof items_items_model_pb.ContainerTypeID)) {
    throw new Error('Expected argument of type mruv.items.ContainerTypeID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ContainerTypeID(buffer_arg) {
  return items_items_model_pb.ContainerTypeID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainerItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainerItemsRequest)) {
    throw new Error('Expected argument of type mruv.items.GetContainerItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainerItemsRequest(buffer_arg) {
  return items_items_pb.GetContainerItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainerItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainerItemsResponse)) {
    throw new Error('Expected argument of type mruv.items.GetContainerItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainerItemsResponse(buffer_arg) {
  return items_items_pb.GetContainerItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainerTypesRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainerTypesRequest)) {
    throw new Error('Expected argument of type mruv.items.GetContainerTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainerTypesRequest(buffer_arg) {
  return items_items_pb.GetContainerTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainerTypesResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainerTypesResponse)) {
    throw new Error('Expected argument of type mruv.items.GetContainerTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainerTypesResponse(buffer_arg) {
  return items_items_pb.GetContainerTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainersRequest(arg) {
  if (!(arg instanceof items_items_pb.GetContainersRequest)) {
    throw new Error('Expected argument of type mruv.items.GetContainersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainersRequest(buffer_arg) {
  return items_items_pb.GetContainersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetContainersResponse(arg) {
  if (!(arg instanceof items_items_pb.GetContainersResponse)) {
    throw new Error('Expected argument of type mruv.items.GetContainersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetContainersResponse(buffer_arg) {
  return items_items_pb.GetContainersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetItemTypesRequest(arg) {
  if (!(arg instanceof items_items_pb.GetItemTypesRequest)) {
    throw new Error('Expected argument of type mruv.items.GetItemTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetItemTypesRequest(buffer_arg) {
  return items_items_pb.GetItemTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetItemTypesResponse(arg) {
  if (!(arg instanceof items_items_pb.GetItemTypesResponse)) {
    throw new Error('Expected argument of type mruv.items.GetItemTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetItemTypesResponse(buffer_arg) {
  return items_items_pb.GetItemTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetItemsRequest)) {
    throw new Error('Expected argument of type mruv.items.GetItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetItemsRequest(buffer_arg) {
  return items_items_pb.GetItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetItemsResponse)) {
    throw new Error('Expected argument of type mruv.items.GetItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetItemsResponse(buffer_arg) {
  return items_items_pb.GetItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetNearestItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.GetNearestItemsRequest)) {
    throw new Error('Expected argument of type mruv.items.GetNearestItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetNearestItemsRequest(buffer_arg) {
  return items_items_pb.GetNearestItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_GetNearestItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.GetNearestItemsResponse)) {
    throw new Error('Expected argument of type mruv.items.GetNearestItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_GetNearestItemsResponse(buffer_arg) {
  return items_items_pb.GetNearestItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_Item(arg) {
  if (!(arg instanceof items_items_model_pb.Item)) {
    throw new Error('Expected argument of type mruv.items.Item');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_Item(buffer_arg) {
  return items_items_model_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ItemID(arg) {
  if (!(arg instanceof items_items_model_pb.ItemID)) {
    throw new Error('Expected argument of type mruv.items.ItemID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ItemID(buffer_arg) {
  return items_items_model_pb.ItemID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ItemType(arg) {
  if (!(arg instanceof items_items_model_pb.ItemType)) {
    throw new Error('Expected argument of type mruv.items.ItemType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ItemType(buffer_arg) {
  return items_items_model_pb.ItemType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_ItemTypeID(arg) {
  if (!(arg instanceof items_items_model_pb.ItemTypeID)) {
    throw new Error('Expected argument of type mruv.items.ItemTypeID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_ItemTypeID(buffer_arg) {
  return items_items_model_pb.ItemTypeID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_PullItemRequest(arg) {
  if (!(arg instanceof items_items_pb.PullItemRequest)) {
    throw new Error('Expected argument of type mruv.items.PullItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_PullItemRequest(buffer_arg) {
  return items_items_pb.PullItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_PutItemRequest(arg) {
  if (!(arg instanceof items_items_pb.PutItemRequest)) {
    throw new Error('Expected argument of type mruv.items.PutItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_PutItemRequest(buffer_arg) {
  return items_items_pb.PutItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_PutItemResponse(arg) {
  if (!(arg instanceof items_items_pb.PutItemResponse)) {
    throw new Error('Expected argument of type mruv.items.PutItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_PutItemResponse(buffer_arg) {
  return items_items_pb.PutItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_SortItemsRequest(arg) {
  if (!(arg instanceof items_items_pb.SortItemsRequest)) {
    throw new Error('Expected argument of type mruv.items.SortItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_SortItemsRequest(buffer_arg) {
  return items_items_pb.SortItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_SortItemsResponse(arg) {
  if (!(arg instanceof items_items_pb.SortItemsResponse)) {
    throw new Error('Expected argument of type mruv.items.SortItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_SortItemsResponse(buffer_arg) {
  return items_items_pb.SortItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_UseItemRequest(arg) {
  if (!(arg instanceof items_items_pb.UseItemRequest)) {
    throw new Error('Expected argument of type mruv.items.UseItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_UseItemRequest(buffer_arg) {
  return items_items_pb.UseItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_items_UseItemResponse(arg) {
  if (!(arg instanceof items_items_pb.UseItemResponse)) {
    throw new Error('Expected argument of type mruv.items.UseItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_items_UseItemResponse(buffer_arg) {
  return items_items_pb.UseItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV items service provides procedures for managing items and containers
var MruVItemServiceService = exports.MruVItemServiceService = {
  // Create new item.
  createItem: {
    path: '/mruv.items.MruVItemService/CreateItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.Item,
    responseType: items_items_model_pb.ItemID,
    requestSerialize: serialize_mruv_items_Item,
    requestDeserialize: deserialize_mruv_items_Item,
    responseSerialize: serialize_mruv_items_ItemID,
    responseDeserialize: deserialize_mruv_items_ItemID,
  },
  // Get item by id.
  getItem: {
    path: '/mruv.items.MruVItemService/GetItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemID,
    responseType: items_items_model_pb.Item,
    requestSerialize: serialize_mruv_items_ItemID,
    requestDeserialize: deserialize_mruv_items_ItemID,
    responseSerialize: serialize_mruv_items_Item,
    responseDeserialize: deserialize_mruv_items_Item,
  },
  // Delete item by id.
  deleteItem: {
    path: '/mruv.items.MruVItemService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemID,
    responseType: items_items_model_pb.ItemID,
    requestSerialize: serialize_mruv_items_ItemID,
    requestDeserialize: deserialize_mruv_items_ItemID,
    responseSerialize: serialize_mruv_items_ItemID,
    responseDeserialize: deserialize_mruv_items_ItemID,
  },
  // Gets all items.
  getItems: {
    path: '/mruv.items.MruVItemService/GetItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetItemsRequest,
    responseType: items_items_pb.GetItemsResponse,
    requestSerialize: serialize_mruv_items_GetItemsRequest,
    requestDeserialize: deserialize_mruv_items_GetItemsRequest,
    responseSerialize: serialize_mruv_items_GetItemsResponse,
    responseDeserialize: deserialize_mruv_items_GetItemsResponse,
  },
  // Create item type.
  createItemType: {
    path: '/mruv.items.MruVItemService/CreateItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemType,
    responseType: items_items_model_pb.ItemTypeID,
    requestSerialize: serialize_mruv_items_ItemType,
    requestDeserialize: deserialize_mruv_items_ItemType,
    responseSerialize: serialize_mruv_items_ItemTypeID,
    responseDeserialize: deserialize_mruv_items_ItemTypeID,
  },
  // Get item type by id.
  getItemType: {
    path: '/mruv.items.MruVItemService/GetItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemTypeID,
    responseType: items_items_model_pb.ItemType,
    requestSerialize: serialize_mruv_items_ItemTypeID,
    requestDeserialize: deserialize_mruv_items_ItemTypeID,
    responseSerialize: serialize_mruv_items_ItemType,
    responseDeserialize: deserialize_mruv_items_ItemType,
  },
  // Delete item type by id.
  deleteItemType: {
    path: '/mruv.items.MruVItemService/DeleteItemType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ItemTypeID,
    responseType: items_items_model_pb.ItemTypeID,
    requestSerialize: serialize_mruv_items_ItemTypeID,
    requestDeserialize: deserialize_mruv_items_ItemTypeID,
    responseSerialize: serialize_mruv_items_ItemTypeID,
    responseDeserialize: deserialize_mruv_items_ItemTypeID,
  },
  // Gets all item types.
  getItemTypes: {
    path: '/mruv.items.MruVItemService/GetItemTypes',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetItemTypesRequest,
    responseType: items_items_pb.GetItemTypesResponse,
    requestSerialize: serialize_mruv_items_GetItemTypesRequest,
    requestDeserialize: deserialize_mruv_items_GetItemTypesRequest,
    responseSerialize: serialize_mruv_items_GetItemTypesResponse,
    responseDeserialize: deserialize_mruv_items_GetItemTypesResponse,
  },
  // Create container.
  createContainer: {
    path: '/mruv.items.MruVItemService/CreateContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.Container,
    responseType: items_items_model_pb.ContainerID,
    requestSerialize: serialize_mruv_items_Container,
    requestDeserialize: deserialize_mruv_items_Container,
    responseSerialize: serialize_mruv_items_ContainerID,
    responseDeserialize: deserialize_mruv_items_ContainerID,
  },
  // Get container by id.
  getContainer: {
    path: '/mruv.items.MruVItemService/GetContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerID,
    responseType: items_items_model_pb.Container,
    requestSerialize: serialize_mruv_items_ContainerID,
    requestDeserialize: deserialize_mruv_items_ContainerID,
    responseSerialize: serialize_mruv_items_Container,
    responseDeserialize: deserialize_mruv_items_Container,
  },
  // Delete container by id.
  deleteContainer: {
    path: '/mruv.items.MruVItemService/DeleteContainer',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerID,
    responseType: items_items_model_pb.ContainerID,
    requestSerialize: serialize_mruv_items_ContainerID,
    requestDeserialize: deserialize_mruv_items_ContainerID,
    responseSerialize: serialize_mruv_items_ContainerID,
    responseDeserialize: deserialize_mruv_items_ContainerID,
  },
  // Get all containers.
  getContainers: {
    path: '/mruv.items.MruVItemService/GetContainers',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainersRequest,
    responseType: items_items_pb.GetContainersResponse,
    requestSerialize: serialize_mruv_items_GetContainersRequest,
    requestDeserialize: deserialize_mruv_items_GetContainersRequest,
    responseSerialize: serialize_mruv_items_GetContainersResponse,
    responseDeserialize: deserialize_mruv_items_GetContainersResponse,
  },
  // Create a container type.
  createContainerType: {
    path: '/mruv.items.MruVItemService/CreateContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerType,
    responseType: items_items_model_pb.ContainerTypeID,
    requestSerialize: serialize_mruv_items_ContainerType,
    requestDeserialize: deserialize_mruv_items_ContainerType,
    responseSerialize: serialize_mruv_items_ContainerTypeID,
    responseDeserialize: deserialize_mruv_items_ContainerTypeID,
  },
  // Get a container type by id.
  getContainerType: {
    path: '/mruv.items.MruVItemService/GetContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerTypeID,
    responseType: items_items_model_pb.ContainerType,
    requestSerialize: serialize_mruv_items_ContainerTypeID,
    requestDeserialize: deserialize_mruv_items_ContainerTypeID,
    responseSerialize: serialize_mruv_items_ContainerType,
    responseDeserialize: deserialize_mruv_items_ContainerType,
  },
  // Delete a container type by id.
  deleteContainerType: {
    path: '/mruv.items.MruVItemService/DeleteContainerType',
    requestStream: false,
    responseStream: false,
    requestType: items_items_model_pb.ContainerTypeID,
    responseType: items_items_model_pb.ContainerTypeID,
    requestSerialize: serialize_mruv_items_ContainerTypeID,
    requestDeserialize: deserialize_mruv_items_ContainerTypeID,
    responseSerialize: serialize_mruv_items_ContainerTypeID,
    responseDeserialize: deserialize_mruv_items_ContainerTypeID,
  },
  // Get all container types.
  getContainerTypes: {
    path: '/mruv.items.MruVItemService/GetContainerTypes',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainerTypesRequest,
    responseType: items_items_pb.GetContainerTypesResponse,
    requestSerialize: serialize_mruv_items_GetContainerTypesRequest,
    requestDeserialize: deserialize_mruv_items_GetContainerTypesRequest,
    responseSerialize: serialize_mruv_items_GetContainerTypesResponse,
    responseDeserialize: deserialize_mruv_items_GetContainerTypesResponse,
  },
  // Get items inside a container.
  getContainerItems: {
    path: '/mruv.items.MruVItemService/GetContainerItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetContainerItemsRequest,
    responseType: items_items_pb.GetContainerItemsResponse,
    requestSerialize: serialize_mruv_items_GetContainerItemsRequest,
    requestDeserialize: deserialize_mruv_items_GetContainerItemsRequest,
    responseSerialize: serialize_mruv_items_GetContainerItemsResponse,
    responseDeserialize: deserialize_mruv_items_GetContainerItemsResponse,
  },
  // Pull an item from container.
  pullItem: {
    path: '/mruv.items.MruVItemService/PullItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.PullItemRequest,
    responseType: items_items_model_pb.Item,
    requestSerialize: serialize_mruv_items_PullItemRequest,
    requestDeserialize: deserialize_mruv_items_PullItemRequest,
    responseSerialize: serialize_mruv_items_Item,
    responseDeserialize: deserialize_mruv_items_Item,
  },
  // Put an item into container.
  putItem: {
    path: '/mruv.items.MruVItemService/PutItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.PutItemRequest,
    responseType: items_items_pb.PutItemResponse,
    requestSerialize: serialize_mruv_items_PutItemRequest,
    requestDeserialize: deserialize_mruv_items_PutItemRequest,
    responseSerialize: serialize_mruv_items_PutItemResponse,
    responseDeserialize: deserialize_mruv_items_PutItemResponse,
  },
  // Sort items inside container.
  // This procedure change order of items inside container.
  sortItems: {
    path: '/mruv.items.MruVItemService/SortItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.SortItemsRequest,
    responseType: items_items_pb.SortItemsResponse,
    requestSerialize: serialize_mruv_items_SortItemsRequest,
    requestDeserialize: deserialize_mruv_items_SortItemsRequest,
    responseSerialize: serialize_mruv_items_SortItemsResponse,
    responseDeserialize: deserialize_mruv_items_SortItemsResponse,
  },
  // Retrieves from the container the list of items nearest to the given position.
  getNearestItems: {
    path: '/mruv.items.MruVItemService/GetNearestItems',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.GetNearestItemsRequest,
    responseType: items_items_pb.GetNearestItemsResponse,
    requestSerialize: serialize_mruv_items_GetNearestItemsRequest,
    requestDeserialize: deserialize_mruv_items_GetNearestItemsRequest,
    responseSerialize: serialize_mruv_items_GetNearestItemsResponse,
    responseDeserialize: deserialize_mruv_items_GetNearestItemsResponse,
  },
  // Trigger action associated with the item usage.
  useItem: {
    path: '/mruv.items.MruVItemService/UseItem',
    requestStream: false,
    responseStream: false,
    requestType: items_items_pb.UseItemRequest,
    responseType: items_items_pb.UseItemResponse,
    requestSerialize: serialize_mruv_items_UseItemRequest,
    requestDeserialize: deserialize_mruv_items_UseItemRequest,
    responseSerialize: serialize_mruv_items_UseItemResponse,
    responseDeserialize: deserialize_mruv_items_UseItemResponse,
  },
  // Get service health status.
  getServiceStatus: {
    path: '/mruv.items.MruVItemService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_common_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_common_ServiceStatusRequest,
    responseSerialize: serialize_mruv_common_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_common_ServiceStatusResponse,
  },
  // Get service current version.
  getServiceVersion: {
    path: '/mruv.items.MruVItemService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_common_VersionRequest,
    requestDeserialize: deserialize_mruv_common_VersionRequest,
    responseSerialize: serialize_mruv_common_VersionResponse,
    responseDeserialize: deserialize_mruv_common_VersionResponse,
  },
};

exports.MruVItemServiceClient = grpc.makeGenericClientConstructor(MruVItemServiceService);
