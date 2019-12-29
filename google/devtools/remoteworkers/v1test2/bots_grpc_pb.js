// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_devtools_remoteworkers_v1test2_bots_pb = require('../../../../google/devtools/remoteworkers/v1test2/bots_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_devtools_remoteworkers_v1test2_worker_pb = require('../../../../google/devtools/remoteworkers/v1test2/worker_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_devtools_remoteworkers_v1test2_BotSession(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_bots_pb.BotSession)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.BotSession');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_BotSession(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_bots_pb.BotSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_CreateBotSessionRequest(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.CreateBotSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_CreateBotSessionRequest(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_remoteworkers_v1test2_UpdateBotSessionRequest(arg) {
  if (!(arg instanceof google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest)) {
    throw new Error('Expected argument of type google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_remoteworkers_v1test2_UpdateBotSessionRequest(buffer_arg) {
  return google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Design doc: https://goo.gl/oojM5H
//
// Loosely speaking, the Bots interface monitors a collection of workers (think
// of them as "computers" for a moment). This collection is known as a "farm,"
// and its purpose is to perform work on behalf of a client.
//
// Each worker runs a small program known as a "bot" that allows it to be
// controlled by the server. This interface contains only methods that are
// called by the bots themselves; admin functionality is out of scope for this
// interface.
//
// More precisely, we use the term "worker" to refer to the physical "thing"
// running the bot. We use the term "worker," and not "machine" or "computer,"
// since a worker may consist of more than one machine - e.g., a computer with
// multiple attached devices, or even a cluster of computers, with only one of
// them running the bot. Conversely, a single machine may host several bots, in
// which case each bot has a "worker" corresponding to the slice of the machine
// being managed by that bot.
//
// The main resource in the Bots interface is not, surprisingly, a Bot - it is a
// BotSession, which represents a period of time in which a bot is in continuous
// contact with the server (see the BotSession message for more information).
// The parent of a bot session can be thought of as an instance of a farm. That
// is, one endpoint may be able to manage many farms for many users. For
// example, for a farm managed through GCP, the parent resource will typically
// take the form "projects/{project_id}". This is referred to below as "the farm
// resource."
var BotsService = exports.BotsService = {
  // CreateBotSession is called when the bot first joins the farm, and
  // establishes a session ID to ensure that multiple machines do not register
  // using the same name accidentally.
  createBotSession: {
    path: '/google.devtools.remoteworkers.v1test2.Bots/CreateBotSession',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest,
    responseType: google_devtools_remoteworkers_v1test2_bots_pb.BotSession,
    requestSerialize: serialize_google_devtools_remoteworkers_v1test2_CreateBotSessionRequest,
    requestDeserialize: deserialize_google_devtools_remoteworkers_v1test2_CreateBotSessionRequest,
    responseSerialize: serialize_google_devtools_remoteworkers_v1test2_BotSession,
    responseDeserialize: deserialize_google_devtools_remoteworkers_v1test2_BotSession,
  },
  // UpdateBotSession must be called periodically by the bot (on a schedule
  // determined by the server) to let the server know about its status, and to
  // pick up new lease requests from the server.
  updateBotSession: {
    path: '/google.devtools.remoteworkers.v1test2.Bots/UpdateBotSession',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest,
    responseType: google_devtools_remoteworkers_v1test2_bots_pb.BotSession,
    requestSerialize: serialize_google_devtools_remoteworkers_v1test2_UpdateBotSessionRequest,
    requestDeserialize: deserialize_google_devtools_remoteworkers_v1test2_UpdateBotSessionRequest,
    responseSerialize: serialize_google_devtools_remoteworkers_v1test2_BotSession,
    responseDeserialize: deserialize_google_devtools_remoteworkers_v1test2_BotSession,
  },
};

exports.BotsClient = grpc.makeGenericClientConstructor(BotsService);
