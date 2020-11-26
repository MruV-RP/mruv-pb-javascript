// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var devtools_devtools_pb = require('../devtools/devtools_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var devtools_devtools_model_pb = require('../devtools/devtools_model_pb.js');

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

function serialize_mruv_devtools_DeletePositionRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.DeletePositionRequest)) {
    throw new Error('Expected argument of type mruv.devtools.DeletePositionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_DeletePositionRequest(buffer_arg) {
  return devtools_devtools_pb.DeletePositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_DeletePositionResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.DeletePositionResponse)) {
    throw new Error('Expected argument of type mruv.devtools.DeletePositionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_DeletePositionResponse(buffer_arg) {
  return devtools_devtools_pb.DeletePositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetAnimationRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetAnimationRequest)) {
    throw new Error('Expected argument of type mruv.devtools.GetAnimationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetAnimationRequest(buffer_arg) {
  return devtools_devtools_pb.GetAnimationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetAnimationResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetAnimationResponse)) {
    throw new Error('Expected argument of type mruv.devtools.GetAnimationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetAnimationResponse(buffer_arg) {
  return devtools_devtools_pb.GetAnimationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetAnimationsRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetAnimationsRequest)) {
    throw new Error('Expected argument of type mruv.devtools.GetAnimationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetAnimationsRequest(buffer_arg) {
  return devtools_devtools_pb.GetAnimationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetAnimationsResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetAnimationsResponse)) {
    throw new Error('Expected argument of type mruv.devtools.GetAnimationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetAnimationsResponse(buffer_arg) {
  return devtools_devtools_pb.GetAnimationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetOutfitsRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetOutfitsRequest)) {
    throw new Error('Expected argument of type mruv.devtools.GetOutfitsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetOutfitsRequest(buffer_arg) {
  return devtools_devtools_pb.GetOutfitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetOutfitsResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetOutfitsResponse)) {
    throw new Error('Expected argument of type mruv.devtools.GetOutfitsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetOutfitsResponse(buffer_arg) {
  return devtools_devtools_pb.GetOutfitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetPositionsRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetPositionsRequest)) {
    throw new Error('Expected argument of type mruv.devtools.GetPositionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetPositionsRequest(buffer_arg) {
  return devtools_devtools_pb.GetPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_GetPositionsResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.GetPositionsResponse)) {
    throw new Error('Expected argument of type mruv.devtools.GetPositionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_GetPositionsResponse(buffer_arg) {
  return devtools_devtools_pb.GetPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SaveAnimationRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.SaveAnimationRequest)) {
    throw new Error('Expected argument of type mruv.devtools.SaveAnimationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SaveAnimationRequest(buffer_arg) {
  return devtools_devtools_pb.SaveAnimationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SaveAnimationResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.SaveAnimationResponse)) {
    throw new Error('Expected argument of type mruv.devtools.SaveAnimationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SaveAnimationResponse(buffer_arg) {
  return devtools_devtools_pb.SaveAnimationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SaveOutfitRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.SaveOutfitRequest)) {
    throw new Error('Expected argument of type mruv.devtools.SaveOutfitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SaveOutfitRequest(buffer_arg) {
  return devtools_devtools_pb.SaveOutfitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SaveOutfitResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.SaveOutfitResponse)) {
    throw new Error('Expected argument of type mruv.devtools.SaveOutfitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SaveOutfitResponse(buffer_arg) {
  return devtools_devtools_pb.SaveOutfitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SavePositionRequest(arg) {
  if (!(arg instanceof devtools_devtools_pb.SavePositionRequest)) {
    throw new Error('Expected argument of type mruv.devtools.SavePositionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SavePositionRequest(buffer_arg) {
  return devtools_devtools_pb.SavePositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_devtools_SavePositionResponse(arg) {
  if (!(arg instanceof devtools_devtools_pb.SavePositionResponse)) {
    throw new Error('Expected argument of type mruv.devtools.SavePositionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_devtools_SavePositionResponse(buffer_arg) {
  return devtools_devtools_pb.SavePositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV developer tools service for mruv-devtools package.
var MruVDevToolsServiceService = exports.MruVDevToolsServiceService = {
  // Get saved positions.
  getPositions: {
    path: '/mruv.devtools.MruVDevToolsService/GetPositions',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.GetPositionsRequest,
    responseType: devtools_devtools_pb.GetPositionsResponse,
    requestSerialize: serialize_mruv_devtools_GetPositionsRequest,
    requestDeserialize: deserialize_mruv_devtools_GetPositionsRequest,
    responseSerialize: serialize_mruv_devtools_GetPositionsResponse,
    responseDeserialize: deserialize_mruv_devtools_GetPositionsResponse,
  },
  // Save position.
  savePosition: {
    path: '/mruv.devtools.MruVDevToolsService/SavePosition',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.SavePositionRequest,
    responseType: devtools_devtools_pb.SavePositionResponse,
    requestSerialize: serialize_mruv_devtools_SavePositionRequest,
    requestDeserialize: deserialize_mruv_devtools_SavePositionRequest,
    responseSerialize: serialize_mruv_devtools_SavePositionResponse,
    responseDeserialize: deserialize_mruv_devtools_SavePositionResponse,
  },
  // Delete position.
  deletePosition: {
    path: '/mruv.devtools.MruVDevToolsService/DeletePosition',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.DeletePositionRequest,
    responseType: devtools_devtools_pb.DeletePositionResponse,
    requestSerialize: serialize_mruv_devtools_DeletePositionRequest,
    requestDeserialize: deserialize_mruv_devtools_DeletePositionRequest,
    responseSerialize: serialize_mruv_devtools_DeletePositionResponse,
    responseDeserialize: deserialize_mruv_devtools_DeletePositionResponse,
  },
  // Get saved outfit.
  getOutfits: {
    path: '/mruv.devtools.MruVDevToolsService/GetOutfits',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.GetOutfitsRequest,
    responseType: devtools_devtools_pb.GetOutfitsResponse,
    requestSerialize: serialize_mruv_devtools_GetOutfitsRequest,
    requestDeserialize: deserialize_mruv_devtools_GetOutfitsRequest,
    responseSerialize: serialize_mruv_devtools_GetOutfitsResponse,
    responseDeserialize: deserialize_mruv_devtools_GetOutfitsResponse,
  },
  // Save outfit.
  saveOutfit: {
    path: '/mruv.devtools.MruVDevToolsService/SaveOutfit',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.SaveOutfitRequest,
    responseType: devtools_devtools_pb.SaveOutfitResponse,
    requestSerialize: serialize_mruv_devtools_SaveOutfitRequest,
    requestDeserialize: deserialize_mruv_devtools_SaveOutfitRequest,
    responseSerialize: serialize_mruv_devtools_SaveOutfitResponse,
    responseDeserialize: deserialize_mruv_devtools_SaveOutfitResponse,
  },
  // Get all saved animations.
  getAnimations: {
    path: '/mruv.devtools.MruVDevToolsService/GetAnimations',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.GetAnimationsRequest,
    responseType: devtools_devtools_pb.GetAnimationsResponse,
    requestSerialize: serialize_mruv_devtools_GetAnimationsRequest,
    requestDeserialize: deserialize_mruv_devtools_GetAnimationsRequest,
    responseSerialize: serialize_mruv_devtools_GetAnimationsResponse,
    responseDeserialize: deserialize_mruv_devtools_GetAnimationsResponse,
  },
  // Get saved animation by name.
  getAnimation: {
    path: '/mruv.devtools.MruVDevToolsService/GetAnimation',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.GetAnimationRequest,
    responseType: devtools_devtools_pb.GetAnimationResponse,
    requestSerialize: serialize_mruv_devtools_GetAnimationRequest,
    requestDeserialize: deserialize_mruv_devtools_GetAnimationRequest,
    responseSerialize: serialize_mruv_devtools_GetAnimationResponse,
    responseDeserialize: deserialize_mruv_devtools_GetAnimationResponse,
  },
  // Save animation.
  saveAnimation: {
    path: '/mruv.devtools.MruVDevToolsService/SaveAnimation',
    requestStream: false,
    responseStream: false,
    requestType: devtools_devtools_pb.SaveAnimationRequest,
    responseType: devtools_devtools_pb.SaveAnimationResponse,
    requestSerialize: serialize_mruv_devtools_SaveAnimationRequest,
    requestDeserialize: deserialize_mruv_devtools_SaveAnimationRequest,
    responseSerialize: serialize_mruv_devtools_SaveAnimationResponse,
    responseDeserialize: deserialize_mruv_devtools_SaveAnimationResponse,
  },
  // Get service status.
  getServiceStatus: {
    path: '/mruv.devtools.MruVDevToolsService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_common_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_common_ServiceStatusRequest,
    responseSerialize: serialize_mruv_common_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_common_ServiceStatusResponse,
  },
  // Get service version.
  getServiceVersion: {
    path: '/mruv.devtools.MruVDevToolsService/GetServiceVersion',
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

exports.MruVDevToolsServiceClient = grpc.makeGenericClientConstructor(MruVDevToolsServiceService);
