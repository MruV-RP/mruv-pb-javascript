// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.recommender.v1beta1
// file: google/cloud/recommender/v1beta1/recommender_service.proto

import * as google_cloud_recommender_v1beta1_recommender_service_pb from "../../../../google/cloud/recommender/v1beta1/recommender_service_pb";
import * as google_cloud_recommender_v1beta1_recommendation_pb from "../../../../google/cloud/recommender/v1beta1/recommendation_pb";
import * as grpc from "grpc";

interface IRecommenderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listRecommendations: grpc.MethodDefinition<google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest, google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse>;
  getRecommendation: grpc.MethodDefinition<google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest, google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>;
  markRecommendationClaimed: grpc.MethodDefinition<google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest, google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>;
  markRecommendationSucceeded: grpc.MethodDefinition<google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest, google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>;
  markRecommendationFailed: grpc.MethodDefinition<google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest, google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>;
}

export const RecommenderService: IRecommenderService;

export class RecommenderClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listRecommendations(argument: google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse>): grpc.ClientUnaryCall;
  listRecommendations(argument: google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse>): grpc.ClientUnaryCall;
  listRecommendations(argument: google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse>): grpc.ClientUnaryCall;
  getRecommendation(argument: google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  getRecommendation(argument: google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  getRecommendation(argument: google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationClaimed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationClaimed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationClaimed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationSucceeded(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationSucceeded(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationSucceeded(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationFailed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationFailed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
  markRecommendationFailed(argument: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recommender_v1beta1_recommendation_pb.Recommendation>): grpc.ClientUnaryCall;
}
