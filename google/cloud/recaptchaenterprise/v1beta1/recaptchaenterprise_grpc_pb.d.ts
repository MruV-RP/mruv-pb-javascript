// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.recaptchaenterprise.v1beta1
// file: google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto

import * as google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb from "../../../../google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise_pb";
import * as grpc from "grpc";

interface IRecaptchaEnterpriseServiceV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAssessment: grpc.MethodDefinition<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.CreateAssessmentRequest, google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.Assessment>;
  annotateAssessment: grpc.MethodDefinition<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentRequest, google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentResponse>;
}

export const RecaptchaEnterpriseServiceV1Beta1Service: IRecaptchaEnterpriseServiceV1Beta1Service;

export class RecaptchaEnterpriseServiceV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.CreateAssessmentRequest, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.Assessment>): grpc.ClientUnaryCall;
  createAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.CreateAssessmentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.Assessment>): grpc.ClientUnaryCall;
  createAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.CreateAssessmentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.Assessment>): grpc.ClientUnaryCall;
  annotateAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentRequest, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentResponse>): grpc.ClientUnaryCall;
  annotateAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentResponse>): grpc.ClientUnaryCall;
  annotateAssessment(argument: google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_recaptchaenterprise_v1beta1_recaptchaenterprise_pb.AnnotateAssessmentResponse>): grpc.ClientUnaryCall;
}
