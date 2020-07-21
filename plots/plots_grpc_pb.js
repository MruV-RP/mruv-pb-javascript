// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var plots_plots_pb = require('../plots/plots_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_spatial_pb = require('../common/spatial_pb.js');

function serialize_mruv_plots_CreatePlotRequest(arg) {
  if (!(arg instanceof plots_plots_pb.CreatePlotRequest)) {
    throw new Error('Expected argument of type mruv.plots.CreatePlotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_CreatePlotRequest(buffer_arg) {
  return plots_plots_pb.CreatePlotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_CreatePlotResponse(arg) {
  if (!(arg instanceof plots_plots_pb.CreatePlotResponse)) {
    throw new Error('Expected argument of type mruv.plots.CreatePlotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_CreatePlotResponse(buffer_arg) {
  return plots_plots_pb.CreatePlotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_DeletePlotRequest(arg) {
  if (!(arg instanceof plots_plots_pb.DeletePlotRequest)) {
    throw new Error('Expected argument of type mruv.plots.DeletePlotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_DeletePlotRequest(buffer_arg) {
  return plots_plots_pb.DeletePlotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_DeletePlotResponse(arg) {
  if (!(arg instanceof plots_plots_pb.DeletePlotResponse)) {
    throw new Error('Expected argument of type mruv.plots.DeletePlotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_DeletePlotResponse(buffer_arg) {
  return plots_plots_pb.DeletePlotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_GetPlotRequest(arg) {
  if (!(arg instanceof plots_plots_pb.GetPlotRequest)) {
    throw new Error('Expected argument of type mruv.plots.GetPlotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_GetPlotRequest(buffer_arg) {
  return plots_plots_pb.GetPlotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_GetPlotResponse(arg) {
  if (!(arg instanceof plots_plots_pb.GetPlotResponse)) {
    throw new Error('Expected argument of type mruv.plots.GetPlotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_GetPlotResponse(buffer_arg) {
  return plots_plots_pb.GetPlotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_UpdatePlotRequest(arg) {
  if (!(arg instanceof plots_plots_pb.UpdatePlotRequest)) {
    throw new Error('Expected argument of type mruv.plots.UpdatePlotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_UpdatePlotRequest(buffer_arg) {
  return plots_plots_pb.UpdatePlotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_plots_UpdatePlotResponse(arg) {
  if (!(arg instanceof plots_plots_pb.UpdatePlotResponse)) {
    throw new Error('Expected argument of type mruv.plots.UpdatePlotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_plots_UpdatePlotResponse(buffer_arg) {
  return plots_plots_pb.UpdatePlotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV plots service provides procedures for managing buildings plots and other areas.
var MruVPlotsServiceService = exports.MruVPlotsServiceService = {
  // Create a plot.
  createPlot: {
    path: '/mruv.plots.MruVPlotsService/CreatePlot',
    requestStream: false,
    responseStream: false,
    requestType: plots_plots_pb.CreatePlotRequest,
    responseType: plots_plots_pb.CreatePlotResponse,
    requestSerialize: serialize_mruv_plots_CreatePlotRequest,
    requestDeserialize: deserialize_mruv_plots_CreatePlotRequest,
    responseSerialize: serialize_mruv_plots_CreatePlotResponse,
    responseDeserialize: deserialize_mruv_plots_CreatePlotResponse,
  },
  // Get a plot.
  getPlot: {
    path: '/mruv.plots.MruVPlotsService/GetPlot',
    requestStream: false,
    responseStream: false,
    requestType: plots_plots_pb.GetPlotRequest,
    responseType: plots_plots_pb.GetPlotResponse,
    requestSerialize: serialize_mruv_plots_GetPlotRequest,
    requestDeserialize: deserialize_mruv_plots_GetPlotRequest,
    responseSerialize: serialize_mruv_plots_GetPlotResponse,
    responseDeserialize: deserialize_mruv_plots_GetPlotResponse,
  },
  // Update a plot.
  updatePlot: {
    path: '/mruv.plots.MruVPlotsService/UpdatePlot',
    requestStream: false,
    responseStream: false,
    requestType: plots_plots_pb.UpdatePlotRequest,
    responseType: plots_plots_pb.UpdatePlotResponse,
    requestSerialize: serialize_mruv_plots_UpdatePlotRequest,
    requestDeserialize: deserialize_mruv_plots_UpdatePlotRequest,
    responseSerialize: serialize_mruv_plots_UpdatePlotResponse,
    responseDeserialize: deserialize_mruv_plots_UpdatePlotResponse,
  },
  // Delete a plot.
  deletePlot: {
    path: '/mruv.plots.MruVPlotsService/DeletePlot',
    requestStream: false,
    responseStream: false,
    requestType: plots_plots_pb.DeletePlotRequest,
    responseType: plots_plots_pb.DeletePlotResponse,
    requestSerialize: serialize_mruv_plots_DeletePlotRequest,
    requestDeserialize: deserialize_mruv_plots_DeletePlotRequest,
    responseSerialize: serialize_mruv_plots_DeletePlotResponse,
    responseDeserialize: deserialize_mruv_plots_DeletePlotResponse,
  },
};

exports.MruVPlotsServiceClient = grpc.makeGenericClientConstructor(MruVPlotsServiceService);
