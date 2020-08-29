// GENERATED CODE -- DO NOT EDIT!

// package: mruv.objects
// file: objects/objects.proto

import * as objects_objects_pb from "../objects/objects_pb";
import * as grpc from "grpc";

interface IMruVObjectsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createObject: grpc.MethodDefinition<objects_objects_pb.CreateObjectRequest, objects_objects_pb.CreateObjectResponse>;
  getObject: grpc.MethodDefinition<objects_objects_pb.GetObjectRequest, objects_objects_pb.GetObjectResponse>;
  updateObject: grpc.MethodDefinition<objects_objects_pb.UpdateObjectRequest, objects_objects_pb.UpdateObjectResponse>;
  deleteObject: grpc.MethodDefinition<objects_objects_pb.DeleteObjectRequest, objects_objects_pb.DeleteObjectResponse>;
  addObjectMaterial: grpc.MethodDefinition<objects_objects_pb.AddObjectMaterialRequest, objects_objects_pb.AddObjectMaterialResponse>;
  getObjectMaterials: grpc.MethodDefinition<objects_objects_pb.GetObjectMaterialsRequest, objects_objects_pb.GetObjectMaterialsResponse>;
  deleteObjectMaterial: grpc.MethodDefinition<objects_objects_pb.DeleteObjectMaterialRequest, objects_objects_pb.DeleteObjectMaterialResponse>;
  addObjectMaterialText: grpc.MethodDefinition<objects_objects_pb.AddObjectMaterialTextRequest, objects_objects_pb.AddObjectMaterialTextResponse>;
  getObjectMaterialTexts: grpc.MethodDefinition<objects_objects_pb.GetObjectMaterialTextsRequest, objects_objects_pb.GetObjectMaterialTextsResponse>;
  deleteObjectMaterialText: grpc.MethodDefinition<objects_objects_pb.DeleteObjectMaterialTextRequest, objects_objects_pb.DeleteObjectMaterialTextResponse>;
  addRemoveBuilding: grpc.MethodDefinition<objects_objects_pb.AddRemoveBuildingRequest, objects_objects_pb.AddRemoveBuildingResponse>;
  getRemovedBuildings: grpc.MethodDefinition<objects_objects_pb.GetRemovedBuildingsRequest, objects_objects_pb.GetRemovedBuildingsResponse>;
  deleteRemoveBuilding: grpc.MethodDefinition<objects_objects_pb.DeleteRemoveBuildingRequest, objects_objects_pb.DeleteRemoveBuildingResponse>;
  fetchAll: grpc.MethodDefinition<objects_objects_pb.FetchAllRequest, objects_objects_pb.FetchAllResponse>;
}

export const MruVObjectsServiceService: IMruVObjectsServiceService;

export class MruVObjectsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createObject(argument: objects_objects_pb.CreateObjectRequest, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  createObject(argument: objects_objects_pb.CreateObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  createObject(argument: objects_objects_pb.CreateObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  addObjectMaterial(argument: objects_objects_pb.AddObjectMaterialRequest, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialResponse>): grpc.ClientUnaryCall;
  addObjectMaterial(argument: objects_objects_pb.AddObjectMaterialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialResponse>): grpc.ClientUnaryCall;
  addObjectMaterial(argument: objects_objects_pb.AddObjectMaterialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialResponse>): grpc.ClientUnaryCall;
  getObjectMaterials(argument: objects_objects_pb.GetObjectMaterialsRequest, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialsResponse>): grpc.ClientUnaryCall;
  getObjectMaterials(argument: objects_objects_pb.GetObjectMaterialsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialsResponse>): grpc.ClientUnaryCall;
  getObjectMaterials(argument: objects_objects_pb.GetObjectMaterialsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialsResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterial(argument: objects_objects_pb.DeleteObjectMaterialRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterial(argument: objects_objects_pb.DeleteObjectMaterialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterial(argument: objects_objects_pb.DeleteObjectMaterialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialResponse>): grpc.ClientUnaryCall;
  addObjectMaterialText(argument: objects_objects_pb.AddObjectMaterialTextRequest, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  addObjectMaterialText(argument: objects_objects_pb.AddObjectMaterialTextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  addObjectMaterialText(argument: objects_objects_pb.AddObjectMaterialTextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  getObjectMaterialTexts(argument: objects_objects_pb.GetObjectMaterialTextsRequest, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialTextsResponse>): grpc.ClientUnaryCall;
  getObjectMaterialTexts(argument: objects_objects_pb.GetObjectMaterialTextsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialTextsResponse>): grpc.ClientUnaryCall;
  getObjectMaterialTexts(argument: objects_objects_pb.GetObjectMaterialTextsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectMaterialTextsResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterialText(argument: objects_objects_pb.DeleteObjectMaterialTextRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterialText(argument: objects_objects_pb.DeleteObjectMaterialTextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  deleteObjectMaterialText(argument: objects_objects_pb.DeleteObjectMaterialTextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectMaterialTextResponse>): grpc.ClientUnaryCall;
  addRemoveBuilding(argument: objects_objects_pb.AddRemoveBuildingRequest, callback: grpc.requestCallback<objects_objects_pb.AddRemoveBuildingResponse>): grpc.ClientUnaryCall;
  addRemoveBuilding(argument: objects_objects_pb.AddRemoveBuildingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddRemoveBuildingResponse>): grpc.ClientUnaryCall;
  addRemoveBuilding(argument: objects_objects_pb.AddRemoveBuildingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.AddRemoveBuildingResponse>): grpc.ClientUnaryCall;
  getRemovedBuildings(argument: objects_objects_pb.GetRemovedBuildingsRequest, callback: grpc.requestCallback<objects_objects_pb.GetRemovedBuildingsResponse>): grpc.ClientUnaryCall;
  getRemovedBuildings(argument: objects_objects_pb.GetRemovedBuildingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetRemovedBuildingsResponse>): grpc.ClientUnaryCall;
  getRemovedBuildings(argument: objects_objects_pb.GetRemovedBuildingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetRemovedBuildingsResponse>): grpc.ClientUnaryCall;
  deleteRemoveBuilding(argument: objects_objects_pb.DeleteRemoveBuildingRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteRemoveBuildingResponse>): grpc.ClientUnaryCall;
  deleteRemoveBuilding(argument: objects_objects_pb.DeleteRemoveBuildingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteRemoveBuildingResponse>): grpc.ClientUnaryCall;
  deleteRemoveBuilding(argument: objects_objects_pb.DeleteRemoveBuildingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteRemoveBuildingResponse>): grpc.ClientUnaryCall;
  fetchAll(argument: objects_objects_pb.FetchAllRequest, callback: grpc.requestCallback<objects_objects_pb.FetchAllResponse>): grpc.ClientUnaryCall;
  fetchAll(argument: objects_objects_pb.FetchAllRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.FetchAllResponse>): grpc.ClientUnaryCall;
  fetchAll(argument: objects_objects_pb.FetchAllRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.FetchAllResponse>): grpc.ClientUnaryCall;
}
