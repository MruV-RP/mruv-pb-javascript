// GENERATED CODE -- DO NOT EDIT!

// package: mruv.devtools
// file: devtools/devtools.proto

import * as devtools_devtools_pb from "../devtools/devtools_pb";
import * as common_health_pb from "../common/health_pb";
import * as grpc from "grpc";

interface IMruVDevToolsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPositions: grpc.MethodDefinition<devtools_devtools_pb.GetPositionsRequest, devtools_devtools_pb.GetPositionsResponse>;
  savePosition: grpc.MethodDefinition<devtools_devtools_pb.SavePositionRequest, devtools_devtools_pb.SavePositionResponse>;
  deletePosition: grpc.MethodDefinition<devtools_devtools_pb.DeletePositionRequest, devtools_devtools_pb.DeletePositionResponse>;
  getOutfits: grpc.MethodDefinition<devtools_devtools_pb.GetOutfitsRequest, devtools_devtools_pb.GetOutfitsResponse>;
  saveOutfit: grpc.MethodDefinition<devtools_devtools_pb.SaveOutfitRequest, devtools_devtools_pb.SaveOutfitResponse>;
  getAnimations: grpc.MethodDefinition<devtools_devtools_pb.GetAnimationsRequest, devtools_devtools_pb.GetAnimationsResponse>;
  getAnimation: grpc.MethodDefinition<devtools_devtools_pb.GetAnimationRequest, devtools_devtools_pb.GetAnimationResponse>;
  saveAnimation: grpc.MethodDefinition<devtools_devtools_pb.SaveAnimationRequest, devtools_devtools_pb.SaveAnimationResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVDevToolsServiceService: IMruVDevToolsServiceService;

export class MruVDevToolsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPositions(argument: devtools_devtools_pb.GetPositionsRequest, callback: grpc.requestCallback<devtools_devtools_pb.GetPositionsResponse>): grpc.ClientUnaryCall;
  getPositions(argument: devtools_devtools_pb.GetPositionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetPositionsResponse>): grpc.ClientUnaryCall;
  getPositions(argument: devtools_devtools_pb.GetPositionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetPositionsResponse>): grpc.ClientUnaryCall;
  savePosition(argument: devtools_devtools_pb.SavePositionRequest, callback: grpc.requestCallback<devtools_devtools_pb.SavePositionResponse>): grpc.ClientUnaryCall;
  savePosition(argument: devtools_devtools_pb.SavePositionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SavePositionResponse>): grpc.ClientUnaryCall;
  savePosition(argument: devtools_devtools_pb.SavePositionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SavePositionResponse>): grpc.ClientUnaryCall;
  deletePosition(argument: devtools_devtools_pb.DeletePositionRequest, callback: grpc.requestCallback<devtools_devtools_pb.DeletePositionResponse>): grpc.ClientUnaryCall;
  deletePosition(argument: devtools_devtools_pb.DeletePositionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.DeletePositionResponse>): grpc.ClientUnaryCall;
  deletePosition(argument: devtools_devtools_pb.DeletePositionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.DeletePositionResponse>): grpc.ClientUnaryCall;
  getOutfits(argument: devtools_devtools_pb.GetOutfitsRequest, callback: grpc.requestCallback<devtools_devtools_pb.GetOutfitsResponse>): grpc.ClientUnaryCall;
  getOutfits(argument: devtools_devtools_pb.GetOutfitsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetOutfitsResponse>): grpc.ClientUnaryCall;
  getOutfits(argument: devtools_devtools_pb.GetOutfitsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetOutfitsResponse>): grpc.ClientUnaryCall;
  saveOutfit(argument: devtools_devtools_pb.SaveOutfitRequest, callback: grpc.requestCallback<devtools_devtools_pb.SaveOutfitResponse>): grpc.ClientUnaryCall;
  saveOutfit(argument: devtools_devtools_pb.SaveOutfitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SaveOutfitResponse>): grpc.ClientUnaryCall;
  saveOutfit(argument: devtools_devtools_pb.SaveOutfitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SaveOutfitResponse>): grpc.ClientUnaryCall;
  getAnimations(argument: devtools_devtools_pb.GetAnimationsRequest, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationsResponse>): grpc.ClientUnaryCall;
  getAnimations(argument: devtools_devtools_pb.GetAnimationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationsResponse>): grpc.ClientUnaryCall;
  getAnimations(argument: devtools_devtools_pb.GetAnimationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationsResponse>): grpc.ClientUnaryCall;
  getAnimation(argument: devtools_devtools_pb.GetAnimationRequest, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationResponse>): grpc.ClientUnaryCall;
  getAnimation(argument: devtools_devtools_pb.GetAnimationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationResponse>): grpc.ClientUnaryCall;
  getAnimation(argument: devtools_devtools_pb.GetAnimationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.GetAnimationResponse>): grpc.ClientUnaryCall;
  saveAnimation(argument: devtools_devtools_pb.SaveAnimationRequest, callback: grpc.requestCallback<devtools_devtools_pb.SaveAnimationResponse>): grpc.ClientUnaryCall;
  saveAnimation(argument: devtools_devtools_pb.SaveAnimationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SaveAnimationResponse>): grpc.ClientUnaryCall;
  saveAnimation(argument: devtools_devtools_pb.SaveAnimationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<devtools_devtools_pb.SaveAnimationResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
