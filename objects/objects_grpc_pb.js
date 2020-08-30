// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var objects_objects_pb = require('../objects/objects_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_objects_AddObjectMaterialRequest(arg) {
  if (!(arg instanceof objects_objects_pb.AddObjectMaterialRequest)) {
    throw new Error('Expected argument of type mruv.objects.AddObjectMaterialRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddObjectMaterialRequest(buffer_arg) {
  return objects_objects_pb.AddObjectMaterialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_AddObjectMaterialResponse(arg) {
  if (!(arg instanceof objects_objects_pb.AddObjectMaterialResponse)) {
    throw new Error('Expected argument of type mruv.objects.AddObjectMaterialResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddObjectMaterialResponse(buffer_arg) {
  return objects_objects_pb.AddObjectMaterialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_AddObjectMaterialTextRequest(arg) {
  if (!(arg instanceof objects_objects_pb.AddObjectMaterialTextRequest)) {
    throw new Error('Expected argument of type mruv.objects.AddObjectMaterialTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddObjectMaterialTextRequest(buffer_arg) {
  return objects_objects_pb.AddObjectMaterialTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_AddObjectMaterialTextResponse(arg) {
  if (!(arg instanceof objects_objects_pb.AddObjectMaterialTextResponse)) {
    throw new Error('Expected argument of type mruv.objects.AddObjectMaterialTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddObjectMaterialTextResponse(buffer_arg) {
  return objects_objects_pb.AddObjectMaterialTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_AddRemoveBuildingRequest(arg) {
  if (!(arg instanceof objects_objects_pb.AddRemoveBuildingRequest)) {
    throw new Error('Expected argument of type mruv.objects.AddRemoveBuildingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddRemoveBuildingRequest(buffer_arg) {
  return objects_objects_pb.AddRemoveBuildingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_AddRemoveBuildingResponse(arg) {
  if (!(arg instanceof objects_objects_pb.AddRemoveBuildingResponse)) {
    throw new Error('Expected argument of type mruv.objects.AddRemoveBuildingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_AddRemoveBuildingResponse(buffer_arg) {
  return objects_objects_pb.AddRemoveBuildingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_CreateObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.CreateObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectRequest(buffer_arg) {
  return objects_objects_pb.CreateObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_CreateObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.CreateObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.CreateObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_CreateObjectResponse(buffer_arg) {
  return objects_objects_pb.CreateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectMaterialRequest(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectMaterialRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectMaterialRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectMaterialRequest(buffer_arg) {
  return objects_objects_pb.DeleteObjectMaterialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectMaterialResponse(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectMaterialResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectMaterialResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectMaterialResponse(buffer_arg) {
  return objects_objects_pb.DeleteObjectMaterialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectMaterialTextRequest(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectMaterialTextRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectMaterialTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectMaterialTextRequest(buffer_arg) {
  return objects_objects_pb.DeleteObjectMaterialTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectMaterialTextResponse(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectMaterialTextResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectMaterialTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectMaterialTextResponse(buffer_arg) {
  return objects_objects_pb.DeleteObjectMaterialTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectRequest(buffer_arg) {
  return objects_objects_pb.DeleteObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteObjectResponse(buffer_arg) {
  return objects_objects_pb.DeleteObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteRemoveBuildingRequest(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteRemoveBuildingRequest)) {
    throw new Error('Expected argument of type mruv.objects.DeleteRemoveBuildingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteRemoveBuildingRequest(buffer_arg) {
  return objects_objects_pb.DeleteRemoveBuildingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_DeleteRemoveBuildingResponse(arg) {
  if (!(arg instanceof objects_objects_pb.DeleteRemoveBuildingResponse)) {
    throw new Error('Expected argument of type mruv.objects.DeleteRemoveBuildingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_DeleteRemoveBuildingResponse(buffer_arg) {
  return objects_objects_pb.DeleteRemoveBuildingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_FetchAllRequest(arg) {
  if (!(arg instanceof objects_objects_pb.FetchAllRequest)) {
    throw new Error('Expected argument of type mruv.objects.FetchAllRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_FetchAllRequest(buffer_arg) {
  return objects_objects_pb.FetchAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_FetchAllResponse(arg) {
  if (!(arg instanceof objects_objects_pb.FetchAllResponse)) {
    throw new Error('Expected argument of type mruv.objects.FetchAllResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_FetchAllResponse(buffer_arg) {
  return objects_objects_pb.FetchAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectMaterialTextsRequest(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectMaterialTextsRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectMaterialTextsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectMaterialTextsRequest(buffer_arg) {
  return objects_objects_pb.GetObjectMaterialTextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectMaterialTextsResponse(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectMaterialTextsResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectMaterialTextsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectMaterialTextsResponse(buffer_arg) {
  return objects_objects_pb.GetObjectMaterialTextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectMaterialsRequest(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectMaterialsRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectMaterialsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectMaterialsRequest(buffer_arg) {
  return objects_objects_pb.GetObjectMaterialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectMaterialsResponse(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectMaterialsResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectMaterialsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectMaterialsResponse(buffer_arg) {
  return objects_objects_pb.GetObjectMaterialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectRequest(buffer_arg) {
  return objects_objects_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetObjectResponse(buffer_arg) {
  return objects_objects_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetRemovedBuildingsRequest(arg) {
  if (!(arg instanceof objects_objects_pb.GetRemovedBuildingsRequest)) {
    throw new Error('Expected argument of type mruv.objects.GetRemovedBuildingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetRemovedBuildingsRequest(buffer_arg) {
  return objects_objects_pb.GetRemovedBuildingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_GetRemovedBuildingsResponse(arg) {
  if (!(arg instanceof objects_objects_pb.GetRemovedBuildingsResponse)) {
    throw new Error('Expected argument of type mruv.objects.GetRemovedBuildingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_GetRemovedBuildingsResponse(buffer_arg) {
  return objects_objects_pb.GetRemovedBuildingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectRequest(arg) {
  if (!(arg instanceof objects_objects_pb.UpdateObjectRequest)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectRequest(buffer_arg) {
  return objects_objects_pb.UpdateObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_objects_UpdateObjectResponse(arg) {
  if (!(arg instanceof objects_objects_pb.UpdateObjectResponse)) {
    throw new Error('Expected argument of type mruv.objects.UpdateObjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_objects_UpdateObjectResponse(buffer_arg) {
  return objects_objects_pb.UpdateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV objects service provides procedures for game objects.
var MruVObjectsServiceService = exports.MruVObjectsServiceService = {
  // Create an object.
  createObject: {
    path: '/mruv.objects.MruVObjectsService/CreateObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.CreateObjectRequest,
    responseType: objects_objects_pb.CreateObjectResponse,
    requestSerialize: serialize_mruv_objects_CreateObjectRequest,
    requestDeserialize: deserialize_mruv_objects_CreateObjectRequest,
    responseSerialize: serialize_mruv_objects_CreateObjectResponse,
    responseDeserialize: deserialize_mruv_objects_CreateObjectResponse,
  },
  // Get an object.
  getObject: {
    path: '/mruv.objects.MruVObjectsService/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.GetObjectRequest,
    responseType: objects_objects_pb.GetObjectResponse,
    requestSerialize: serialize_mruv_objects_GetObjectRequest,
    requestDeserialize: deserialize_mruv_objects_GetObjectRequest,
    responseSerialize: serialize_mruv_objects_GetObjectResponse,
    responseDeserialize: deserialize_mruv_objects_GetObjectResponse,
  },
  // Update an object.
  updateObject: {
    path: '/mruv.objects.MruVObjectsService/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.UpdateObjectRequest,
    responseType: objects_objects_pb.UpdateObjectResponse,
    requestSerialize: serialize_mruv_objects_UpdateObjectRequest,
    requestDeserialize: deserialize_mruv_objects_UpdateObjectRequest,
    responseSerialize: serialize_mruv_objects_UpdateObjectResponse,
    responseDeserialize: deserialize_mruv_objects_UpdateObjectResponse,
  },
  // Delete an object.
  deleteObject: {
    path: '/mruv.objects.MruVObjectsService/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.DeleteObjectRequest,
    responseType: objects_objects_pb.DeleteObjectResponse,
    requestSerialize: serialize_mruv_objects_DeleteObjectRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteObjectRequest,
    responseSerialize: serialize_mruv_objects_DeleteObjectResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteObjectResponse,
  },
  // Add a material to existing object.
  addObjectMaterial: {
    path: '/mruv.objects.MruVObjectsService/AddObjectMaterial',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.AddObjectMaterialRequest,
    responseType: objects_objects_pb.AddObjectMaterialResponse,
    requestSerialize: serialize_mruv_objects_AddObjectMaterialRequest,
    requestDeserialize: deserialize_mruv_objects_AddObjectMaterialRequest,
    responseSerialize: serialize_mruv_objects_AddObjectMaterialResponse,
    responseDeserialize: deserialize_mruv_objects_AddObjectMaterialResponse,
  },
  // Get all object materials.
  getObjectMaterials: {
    path: '/mruv.objects.MruVObjectsService/GetObjectMaterials',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.GetObjectMaterialsRequest,
    responseType: objects_objects_pb.GetObjectMaterialsResponse,
    requestSerialize: serialize_mruv_objects_GetObjectMaterialsRequest,
    requestDeserialize: deserialize_mruv_objects_GetObjectMaterialsRequest,
    responseSerialize: serialize_mruv_objects_GetObjectMaterialsResponse,
    responseDeserialize: deserialize_mruv_objects_GetObjectMaterialsResponse,
  },
  // Delete a material assigned to an object.
  deleteObjectMaterial: {
    path: '/mruv.objects.MruVObjectsService/DeleteObjectMaterial',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.DeleteObjectMaterialRequest,
    responseType: objects_objects_pb.DeleteObjectMaterialResponse,
    requestSerialize: serialize_mruv_objects_DeleteObjectMaterialRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteObjectMaterialRequest,
    responseSerialize: serialize_mruv_objects_DeleteObjectMaterialResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteObjectMaterialResponse,
  },
  // Add a material text to existing object.
  addObjectMaterialText: {
    path: '/mruv.objects.MruVObjectsService/AddObjectMaterialText',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.AddObjectMaterialTextRequest,
    responseType: objects_objects_pb.AddObjectMaterialTextResponse,
    requestSerialize: serialize_mruv_objects_AddObjectMaterialTextRequest,
    requestDeserialize: deserialize_mruv_objects_AddObjectMaterialTextRequest,
    responseSerialize: serialize_mruv_objects_AddObjectMaterialTextResponse,
    responseDeserialize: deserialize_mruv_objects_AddObjectMaterialTextResponse,
  },
  // Get all object material texts.
  getObjectMaterialTexts: {
    path: '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.GetObjectMaterialTextsRequest,
    responseType: objects_objects_pb.GetObjectMaterialTextsResponse,
    requestSerialize: serialize_mruv_objects_GetObjectMaterialTextsRequest,
    requestDeserialize: deserialize_mruv_objects_GetObjectMaterialTextsRequest,
    responseSerialize: serialize_mruv_objects_GetObjectMaterialTextsResponse,
    responseDeserialize: deserialize_mruv_objects_GetObjectMaterialTextsResponse,
  },
  // Delete a material text assigned to an object.
  deleteObjectMaterialText: {
    path: '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.DeleteObjectMaterialTextRequest,
    responseType: objects_objects_pb.DeleteObjectMaterialTextResponse,
    requestSerialize: serialize_mruv_objects_DeleteObjectMaterialTextRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteObjectMaterialTextRequest,
    responseSerialize: serialize_mruv_objects_DeleteObjectMaterialTextResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteObjectMaterialTextResponse,
  },
  // Removes a object from GTA SA map.
  addRemoveBuilding: {
    path: '/mruv.objects.MruVObjectsService/AddRemoveBuilding',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.AddRemoveBuildingRequest,
    responseType: objects_objects_pb.AddRemoveBuildingResponse,
    requestSerialize: serialize_mruv_objects_AddRemoveBuildingRequest,
    requestDeserialize: deserialize_mruv_objects_AddRemoveBuildingRequest,
    responseSerialize: serialize_mruv_objects_AddRemoveBuildingResponse,
    responseDeserialize: deserialize_mruv_objects_AddRemoveBuildingResponse,
  },
  // Get all removed objects.
  getRemovedBuildings: {
    path: '/mruv.objects.MruVObjectsService/GetRemovedBuildings',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.GetRemovedBuildingsRequest,
    responseType: objects_objects_pb.GetRemovedBuildingsResponse,
    requestSerialize: serialize_mruv_objects_GetRemovedBuildingsRequest,
    requestDeserialize: deserialize_mruv_objects_GetRemovedBuildingsRequest,
    responseSerialize: serialize_mruv_objects_GetRemovedBuildingsResponse,
    responseDeserialize: deserialize_mruv_objects_GetRemovedBuildingsResponse,
  },
  // Delete removed buildings.
  deleteRemoveBuilding: {
    path: '/mruv.objects.MruVObjectsService/DeleteRemoveBuilding',
    requestStream: false,
    responseStream: false,
    requestType: objects_objects_pb.DeleteRemoveBuildingRequest,
    responseType: objects_objects_pb.DeleteRemoveBuildingResponse,
    requestSerialize: serialize_mruv_objects_DeleteRemoveBuildingRequest,
    requestDeserialize: deserialize_mruv_objects_DeleteRemoveBuildingRequest,
    responseSerialize: serialize_mruv_objects_DeleteRemoveBuildingResponse,
    responseDeserialize: deserialize_mruv_objects_DeleteRemoveBuildingResponse,
  },
  // Fetch all existing objects.
  fetchAll: {
    path: '/mruv.objects.MruVObjectsService/FetchAll',
    requestStream: false,
    responseStream: true,
    requestType: objects_objects_pb.FetchAllRequest,
    responseType: objects_objects_pb.FetchAllResponse,
    requestSerialize: serialize_mruv_objects_FetchAllRequest,
    requestDeserialize: deserialize_mruv_objects_FetchAllRequest,
    responseSerialize: serialize_mruv_objects_FetchAllResponse,
    responseDeserialize: deserialize_mruv_objects_FetchAllResponse,
  },
};

exports.MruVObjectsServiceClient = grpc.makeGenericClientConstructor(MruVObjectsServiceService);
