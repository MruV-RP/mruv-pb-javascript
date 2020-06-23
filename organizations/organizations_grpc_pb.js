// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var organizations_organizations_pb = require('../organizations/organizations_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_organizations_AssignLeaderRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.AssignLeaderRequest)) {
    throw new Error('Expected argument of type mruv.organizations.AssignLeaderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_AssignLeaderRequest(buffer_arg) {
  return organizations_organizations_pb.AssignLeaderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_AssignLeaderResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.AssignLeaderResponse)) {
    throw new Error('Expected argument of type mruv.organizations.AssignLeaderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_AssignLeaderResponse(buffer_arg) {
  return organizations_organizations_pb.AssignLeaderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_CreateOrganizationRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type mruv.organizations.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_CreateOrganizationRequest(buffer_arg) {
  return organizations_organizations_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_CreateOrganizationResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type mruv.organizations.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_CreateOrganizationResponse(buffer_arg) {
  return organizations_organizations_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type mruv.organizations.DeleteOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_DeleteOrganizationRequest(buffer_arg) {
  return organizations_organizations_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_DeleteOrganizationResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.DeleteOrganizationResponse)) {
    throw new Error('Expected argument of type mruv.organizations.DeleteOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_DeleteOrganizationResponse(buffer_arg) {
  return organizations_organizations_pb.DeleteOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_GetOrganizationRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type mruv.organizations.GetOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_GetOrganizationRequest(buffer_arg) {
  return organizations_organizations_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_GetOrganizationResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type mruv.organizations.GetOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_GetOrganizationResponse(buffer_arg) {
  return organizations_organizations_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_UnassignLeaderRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.UnassignLeaderRequest)) {
    throw new Error('Expected argument of type mruv.organizations.UnassignLeaderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_UnassignLeaderRequest(buffer_arg) {
  return organizations_organizations_pb.UnassignLeaderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_UnassignLeaderResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.UnassignLeaderResponse)) {
    throw new Error('Expected argument of type mruv.organizations.UnassignLeaderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_UnassignLeaderResponse(buffer_arg) {
  return organizations_organizations_pb.UnassignLeaderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof organizations_organizations_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type mruv.organizations.UpdateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_UpdateOrganizationRequest(buffer_arg) {
  return organizations_organizations_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_organizations_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof organizations_organizations_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type mruv.organizations.UpdateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_organizations_UpdateOrganizationResponse(buffer_arg) {
  return organizations_organizations_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV jobs service provides procedures for managing organizations and fractions.
var MruVOrganizationsServiceService = exports.MruVOrganizationsServiceService = {
  // Create a organization.
  createOrganization: {
    path: '/mruv.organizations.MruVOrganizationsService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.CreateOrganizationRequest,
    responseType: organizations_organizations_pb.CreateOrganizationResponse,
    requestSerialize: serialize_mruv_organizations_CreateOrganizationRequest,
    requestDeserialize: deserialize_mruv_organizations_CreateOrganizationRequest,
    responseSerialize: serialize_mruv_organizations_CreateOrganizationResponse,
    responseDeserialize: deserialize_mruv_organizations_CreateOrganizationResponse,
  },
  // Get organization.
  getOrganization: {
    path: '/mruv.organizations.MruVOrganizationsService/GetOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.GetOrganizationRequest,
    responseType: organizations_organizations_pb.GetOrganizationResponse,
    requestSerialize: serialize_mruv_organizations_GetOrganizationRequest,
    requestDeserialize: deserialize_mruv_organizations_GetOrganizationRequest,
    responseSerialize: serialize_mruv_organizations_GetOrganizationResponse,
    responseDeserialize: deserialize_mruv_organizations_GetOrganizationResponse,
  },
  // Update organization.
  updateOrganization: {
    path: '/mruv.organizations.MruVOrganizationsService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.UpdateOrganizationRequest,
    responseType: organizations_organizations_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_mruv_organizations_UpdateOrganizationRequest,
    requestDeserialize: deserialize_mruv_organizations_UpdateOrganizationRequest,
    responseSerialize: serialize_mruv_organizations_UpdateOrganizationResponse,
    responseDeserialize: deserialize_mruv_organizations_UpdateOrganizationResponse,
  },
  // Delete organization.
  deleteOrganization: {
    path: '/mruv.organizations.MruVOrganizationsService/DeleteOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.DeleteOrganizationRequest,
    responseType: organizations_organizations_pb.DeleteOrganizationResponse,
    requestSerialize: serialize_mruv_organizations_DeleteOrganizationRequest,
    requestDeserialize: deserialize_mruv_organizations_DeleteOrganizationRequest,
    responseSerialize: serialize_mruv_organizations_DeleteOrganizationResponse,
    responseDeserialize: deserialize_mruv_organizations_DeleteOrganizationResponse,
  },
  // Assign an organization leader. Leader is a main administrator of a organization, have all rights to manage organization.
  // If the organization leader already exists, the leader will be overwritten.
  assignLeader: {
    path: '/mruv.organizations.MruVOrganizationsService/AssignLeader',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.AssignLeaderRequest,
    responseType: organizations_organizations_pb.AssignLeaderResponse,
    requestSerialize: serialize_mruv_organizations_AssignLeaderRequest,
    requestDeserialize: deserialize_mruv_organizations_AssignLeaderRequest,
    responseSerialize: serialize_mruv_organizations_AssignLeaderResponse,
    responseDeserialize: deserialize_mruv_organizations_AssignLeaderResponse,
  },
  //
  unassignLeader: {
    path: '/mruv.organizations.MruVOrganizationsService/UnassignLeader',
    requestStream: false,
    responseStream: false,
    requestType: organizations_organizations_pb.UnassignLeaderRequest,
    responseType: organizations_organizations_pb.UnassignLeaderResponse,
    requestSerialize: serialize_mruv_organizations_UnassignLeaderRequest,
    requestDeserialize: deserialize_mruv_organizations_UnassignLeaderRequest,
    responseSerialize: serialize_mruv_organizations_UnassignLeaderResponse,
    responseDeserialize: deserialize_mruv_organizations_UnassignLeaderResponse,
  },
};

exports.MruVOrganizationsServiceClient = grpc.makeGenericClientConstructor(MruVOrganizationsServiceService);
