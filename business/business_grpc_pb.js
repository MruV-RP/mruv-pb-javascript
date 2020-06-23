// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var business_business_pb = require('../business/business_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_business_AssignEstateRequest(arg) {
  if (!(arg instanceof business_business_pb.AssignEstateRequest)) {
    throw new Error('Expected argument of type mruv.business.AssignEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_AssignEstateRequest(buffer_arg) {
  return business_business_pb.AssignEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_AssignEstateResponse(arg) {
  if (!(arg instanceof business_business_pb.AssignEstateResponse)) {
    throw new Error('Expected argument of type mruv.business.AssignEstateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_AssignEstateResponse(buffer_arg) {
  return business_business_pb.AssignEstateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_AssignOwnerRequest(arg) {
  if (!(arg instanceof business_business_pb.AssignOwnerRequest)) {
    throw new Error('Expected argument of type mruv.business.AssignOwnerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_AssignOwnerRequest(buffer_arg) {
  return business_business_pb.AssignOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_AssignOwnerResponse(arg) {
  if (!(arg instanceof business_business_pb.AssignOwnerResponse)) {
    throw new Error('Expected argument of type mruv.business.AssignOwnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_AssignOwnerResponse(buffer_arg) {
  return business_business_pb.AssignOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_Business(arg) {
  if (!(arg instanceof business_business_pb.Business)) {
    throw new Error('Expected argument of type mruv.business.Business');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_Business(buffer_arg) {
  return business_business_pb.Business.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_BuyBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.BuyBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.BuyBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_BuyBusinessRequest(buffer_arg) {
  return business_business_pb.BuyBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_BuyBusinessResponse(arg) {
  if (!(arg instanceof business_business_pb.BuyBusinessResponse)) {
    throw new Error('Expected argument of type mruv.business.BuyBusinessResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_BuyBusinessResponse(buffer_arg) {
  return business_business_pb.BuyBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_CreateBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.CreateBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.CreateBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_CreateBusinessRequest(buffer_arg) {
  return business_business_pb.CreateBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_CreateBusinessResponse(arg) {
  if (!(arg instanceof business_business_pb.CreateBusinessResponse)) {
    throw new Error('Expected argument of type mruv.business.CreateBusinessResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_CreateBusinessResponse(buffer_arg) {
  return business_business_pb.CreateBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_DeleteBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.DeleteBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.DeleteBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_DeleteBusinessRequest(buffer_arg) {
  return business_business_pb.DeleteBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_DeleteBusinessResponse(arg) {
  if (!(arg instanceof business_business_pb.DeleteBusinessResponse)) {
    throw new Error('Expected argument of type mruv.business.DeleteBusinessResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_DeleteBusinessResponse(buffer_arg) {
  return business_business_pb.DeleteBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_GetBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.GetBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.GetBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_GetBusinessRequest(buffer_arg) {
  return business_business_pb.GetBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_UnassignEstateRequest(arg) {
  if (!(arg instanceof business_business_pb.UnassignEstateRequest)) {
    throw new Error('Expected argument of type mruv.business.UnassignEstateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_UnassignEstateRequest(buffer_arg) {
  return business_business_pb.UnassignEstateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_UnassignEstateResponse(arg) {
  if (!(arg instanceof business_business_pb.UnassignEstateResponse)) {
    throw new Error('Expected argument of type mruv.business.UnassignEstateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_UnassignEstateResponse(buffer_arg) {
  return business_business_pb.UnassignEstateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_UpdateBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.UpdateBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.UpdateBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_UpdateBusinessRequest(buffer_arg) {
  return business_business_pb.UpdateBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_WatchBusinessRequest(arg) {
  if (!(arg instanceof business_business_pb.WatchBusinessRequest)) {
    throw new Error('Expected argument of type mruv.business.WatchBusinessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_WatchBusinessRequest(buffer_arg) {
  return business_business_pb.WatchBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_WatchBusinessResponse(arg) {
  if (!(arg instanceof business_business_pb.WatchBusinessResponse)) {
    throw new Error('Expected argument of type mruv.business.WatchBusinessResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_WatchBusinessResponse(buffer_arg) {
  return business_business_pb.WatchBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_WatchBusinessesRequest(arg) {
  if (!(arg instanceof business_business_pb.WatchBusinessesRequest)) {
    throw new Error('Expected argument of type mruv.business.WatchBusinessesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_WatchBusinessesRequest(buffer_arg) {
  return business_business_pb.WatchBusinessesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_business_WatchBusinessesResponse(arg) {
  if (!(arg instanceof business_business_pb.WatchBusinessesResponse)) {
    throw new Error('Expected argument of type mruv.business.WatchBusinessesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_business_WatchBusinessesResponse(buffer_arg) {
  return business_business_pb.WatchBusinessesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV business service provides procedures for managing businesses.
// Business can be owned by a player or organisation. Every business have it's own group and products to sell.
// Business can have rights to an estates.
// Every business has its own type and depends on it, business provides different services.
var MruVBusinessServiceService = exports.MruVBusinessServiceService = {
  // Create a business.
  createBusiness: {
    path: '/mruv.business.MruVBusinessService/CreateBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.CreateBusinessRequest,
    responseType: business_business_pb.CreateBusinessResponse,
    requestSerialize: serialize_mruv_business_CreateBusinessRequest,
    requestDeserialize: deserialize_mruv_business_CreateBusinessRequest,
    responseSerialize: serialize_mruv_business_CreateBusinessResponse,
    responseDeserialize: deserialize_mruv_business_CreateBusinessResponse,
  },
  // Get a business.
  getBusiness: {
    path: '/mruv.business.MruVBusinessService/GetBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.GetBusinessRequest,
    responseType: business_business_pb.Business,
    requestSerialize: serialize_mruv_business_GetBusinessRequest,
    requestDeserialize: deserialize_mruv_business_GetBusinessRequest,
    responseSerialize: serialize_mruv_business_Business,
    responseDeserialize: deserialize_mruv_business_Business,
  },
  // Update a business.
  updateBusiness: {
    path: '/mruv.business.MruVBusinessService/UpdateBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.UpdateBusinessRequest,
    responseType: business_business_pb.Business,
    requestSerialize: serialize_mruv_business_UpdateBusinessRequest,
    requestDeserialize: deserialize_mruv_business_UpdateBusinessRequest,
    responseSerialize: serialize_mruv_business_Business,
    responseDeserialize: deserialize_mruv_business_Business,
  },
  // Delete a business.
  deleteBusiness: {
    path: '/mruv.business.MruVBusinessService/DeleteBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.DeleteBusinessRequest,
    responseType: business_business_pb.DeleteBusinessResponse,
    requestSerialize: serialize_mruv_business_DeleteBusinessRequest,
    requestDeserialize: deserialize_mruv_business_DeleteBusinessRequest,
    responseSerialize: serialize_mruv_business_DeleteBusinessResponse,
    responseDeserialize: deserialize_mruv_business_DeleteBusinessResponse,
  },
  // Assign a business owner.
  assignOwner: {
    path: '/mruv.business.MruVBusinessService/AssignOwner',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.AssignOwnerRequest,
    responseType: business_business_pb.AssignOwnerResponse,
    requestSerialize: serialize_mruv_business_AssignOwnerRequest,
    requestDeserialize: deserialize_mruv_business_AssignOwnerRequest,
    responseSerialize: serialize_mruv_business_AssignOwnerResponse,
    responseDeserialize: deserialize_mruv_business_AssignOwnerResponse,
  },
  // Assign an estate to a business.
  assignEstate: {
    path: '/mruv.business.MruVBusinessService/AssignEstate',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.AssignEstateRequest,
    responseType: business_business_pb.AssignEstateResponse,
    requestSerialize: serialize_mruv_business_AssignEstateRequest,
    requestDeserialize: deserialize_mruv_business_AssignEstateRequest,
    responseSerialize: serialize_mruv_business_AssignEstateResponse,
    responseDeserialize: deserialize_mruv_business_AssignEstateResponse,
  },
  //
  unassignEstate: {
    path: '/mruv.business.MruVBusinessService/UnassignEstate',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.UnassignEstateRequest,
    responseType: business_business_pb.UnassignEstateResponse,
    requestSerialize: serialize_mruv_business_UnassignEstateRequest,
    requestDeserialize: deserialize_mruv_business_UnassignEstateRequest,
    responseSerialize: serialize_mruv_business_UnassignEstateResponse,
    responseDeserialize: deserialize_mruv_business_UnassignEstateResponse,
  },
  // Buy a business.
  buyBusiness: {
    path: '/mruv.business.MruVBusinessService/BuyBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_business_pb.BuyBusinessRequest,
    responseType: business_business_pb.BuyBusinessResponse,
    requestSerialize: serialize_mruv_business_BuyBusinessRequest,
    requestDeserialize: deserialize_mruv_business_BuyBusinessRequest,
    responseSerialize: serialize_mruv_business_BuyBusinessResponse,
    responseDeserialize: deserialize_mruv_business_BuyBusinessResponse,
  },
  // Subscribe to business events.
  watchBusiness: {
    path: '/mruv.business.MruVBusinessService/WatchBusiness',
    requestStream: false,
    responseStream: true,
    requestType: business_business_pb.WatchBusinessRequest,
    responseType: business_business_pb.WatchBusinessResponse,
    requestSerialize: serialize_mruv_business_WatchBusinessRequest,
    requestDeserialize: deserialize_mruv_business_WatchBusinessRequest,
    responseSerialize: serialize_mruv_business_WatchBusinessResponse,
    responseDeserialize: deserialize_mruv_business_WatchBusinessResponse,
  },
  // Subscribe to all businesses events.
  watchBusinesses: {
    path: '/mruv.business.MruVBusinessService/WatchBusinesses',
    requestStream: false,
    responseStream: true,
    requestType: business_business_pb.WatchBusinessesRequest,
    responseType: business_business_pb.WatchBusinessesResponse,
    requestSerialize: serialize_mruv_business_WatchBusinessesRequest,
    requestDeserialize: deserialize_mruv_business_WatchBusinessesRequest,
    responseSerialize: serialize_mruv_business_WatchBusinessesResponse,
    responseDeserialize: deserialize_mruv_business_WatchBusinessesResponse,
  },
};

exports.MruVBusinessServiceClient = grpc.makeGenericClientConstructor(MruVBusinessServiceService);
