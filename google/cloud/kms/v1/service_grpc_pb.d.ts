// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.kms.v1
// file: google/cloud/kms/v1/service.proto

import * as google_cloud_kms_v1_service_pb from "../../../../google/cloud/kms/v1/service_pb";
import * as google_cloud_kms_v1_resources_pb from "../../../../google/cloud/kms/v1/resources_pb";
import * as grpc from "grpc";

interface IKeyManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listKeyRings: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.ListKeyRingsRequest, google_cloud_kms_v1_service_pb.ListKeyRingsResponse>;
  listCryptoKeys: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.ListCryptoKeysRequest, google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>;
  listCryptoKeyVersions: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest, google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>;
  listImportJobs: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.ListImportJobsRequest, google_cloud_kms_v1_service_pb.ListImportJobsResponse>;
  getKeyRing: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.GetKeyRingRequest, google_cloud_kms_v1_resources_pb.KeyRing>;
  getCryptoKey: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.GetCryptoKeyRequest, google_cloud_kms_v1_resources_pb.CryptoKey>;
  getCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  getPublicKey: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.GetPublicKeyRequest, google_cloud_kms_v1_resources_pb.PublicKey>;
  getImportJob: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.GetImportJobRequest, google_cloud_kms_v1_resources_pb.ImportJob>;
  createKeyRing: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.CreateKeyRingRequest, google_cloud_kms_v1_resources_pb.KeyRing>;
  createCryptoKey: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest, google_cloud_kms_v1_resources_pb.CryptoKey>;
  createCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  importCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  createImportJob: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.CreateImportJobRequest, google_cloud_kms_v1_resources_pb.ImportJob>;
  updateCryptoKey: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest, google_cloud_kms_v1_resources_pb.CryptoKey>;
  updateCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  encrypt: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.EncryptRequest, google_cloud_kms_v1_service_pb.EncryptResponse>;
  decrypt: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.DecryptRequest, google_cloud_kms_v1_service_pb.DecryptResponse>;
  asymmetricSign: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.AsymmetricSignRequest, google_cloud_kms_v1_service_pb.AsymmetricSignResponse>;
  asymmetricDecrypt: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest, google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse>;
  updateCryptoKeyPrimaryVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKey>;
  destroyCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  restoreCryptoKeyVersion: grpc.MethodDefinition<google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest, google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
}

export const KeyManagementServiceService: IKeyManagementServiceService;

export class KeyManagementServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listKeyRings(argument: google_cloud_kms_v1_service_pb.ListKeyRingsRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListKeyRingsResponse>): grpc.ClientUnaryCall;
  listKeyRings(argument: google_cloud_kms_v1_service_pb.ListKeyRingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListKeyRingsResponse>): grpc.ClientUnaryCall;
  listKeyRings(argument: google_cloud_kms_v1_service_pb.ListKeyRingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListKeyRingsResponse>): grpc.ClientUnaryCall;
  listCryptoKeys(argument: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>): grpc.ClientUnaryCall;
  listCryptoKeys(argument: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>): grpc.ClientUnaryCall;
  listCryptoKeys(argument: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>): grpc.ClientUnaryCall;
  listCryptoKeyVersions(argument: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>): grpc.ClientUnaryCall;
  listCryptoKeyVersions(argument: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>): grpc.ClientUnaryCall;
  listCryptoKeyVersions(argument: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>): grpc.ClientUnaryCall;
  listImportJobs(argument: google_cloud_kms_v1_service_pb.ListImportJobsRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListImportJobsResponse>): grpc.ClientUnaryCall;
  listImportJobs(argument: google_cloud_kms_v1_service_pb.ListImportJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListImportJobsResponse>): grpc.ClientUnaryCall;
  listImportJobs(argument: google_cloud_kms_v1_service_pb.ListImportJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.ListImportJobsResponse>): grpc.ClientUnaryCall;
  getKeyRing(argument: google_cloud_kms_v1_service_pb.GetKeyRingRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  getKeyRing(argument: google_cloud_kms_v1_service_pb.GetKeyRingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  getKeyRing(argument: google_cloud_kms_v1_service_pb.GetKeyRingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  getCryptoKey(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  getCryptoKey(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  getCryptoKey(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  getCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  getCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  getCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  getPublicKey(argument: google_cloud_kms_v1_service_pb.GetPublicKeyRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.PublicKey>): grpc.ClientUnaryCall;
  getPublicKey(argument: google_cloud_kms_v1_service_pb.GetPublicKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.PublicKey>): grpc.ClientUnaryCall;
  getPublicKey(argument: google_cloud_kms_v1_service_pb.GetPublicKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.PublicKey>): grpc.ClientUnaryCall;
  getImportJob(argument: google_cloud_kms_v1_service_pb.GetImportJobRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  getImportJob(argument: google_cloud_kms_v1_service_pb.GetImportJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  getImportJob(argument: google_cloud_kms_v1_service_pb.GetImportJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  createKeyRing(argument: google_cloud_kms_v1_service_pb.CreateKeyRingRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  createKeyRing(argument: google_cloud_kms_v1_service_pb.CreateKeyRingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  createKeyRing(argument: google_cloud_kms_v1_service_pb.CreateKeyRingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.KeyRing>): grpc.ClientUnaryCall;
  createCryptoKey(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  createCryptoKey(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  createCryptoKey(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  createCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  createCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  createCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  importCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  importCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  importCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  createImportJob(argument: google_cloud_kms_v1_service_pb.CreateImportJobRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  createImportJob(argument: google_cloud_kms_v1_service_pb.CreateImportJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  createImportJob(argument: google_cloud_kms_v1_service_pb.CreateImportJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.ImportJob>): grpc.ClientUnaryCall;
  updateCryptoKey(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  updateCryptoKey(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  updateCryptoKey(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  updateCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  updateCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  updateCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  encrypt(argument: google_cloud_kms_v1_service_pb.EncryptRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.EncryptResponse>): grpc.ClientUnaryCall;
  encrypt(argument: google_cloud_kms_v1_service_pb.EncryptRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.EncryptResponse>): grpc.ClientUnaryCall;
  encrypt(argument: google_cloud_kms_v1_service_pb.EncryptRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.EncryptResponse>): grpc.ClientUnaryCall;
  decrypt(argument: google_cloud_kms_v1_service_pb.DecryptRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.DecryptResponse>): grpc.ClientUnaryCall;
  decrypt(argument: google_cloud_kms_v1_service_pb.DecryptRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.DecryptResponse>): grpc.ClientUnaryCall;
  decrypt(argument: google_cloud_kms_v1_service_pb.DecryptRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.DecryptResponse>): grpc.ClientUnaryCall;
  asymmetricSign(argument: google_cloud_kms_v1_service_pb.AsymmetricSignRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricSignResponse>): grpc.ClientUnaryCall;
  asymmetricSign(argument: google_cloud_kms_v1_service_pb.AsymmetricSignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricSignResponse>): grpc.ClientUnaryCall;
  asymmetricSign(argument: google_cloud_kms_v1_service_pb.AsymmetricSignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricSignResponse>): grpc.ClientUnaryCall;
  asymmetricDecrypt(argument: google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse>): grpc.ClientUnaryCall;
  asymmetricDecrypt(argument: google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse>): grpc.ClientUnaryCall;
  asymmetricDecrypt(argument: google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse>): grpc.ClientUnaryCall;
  updateCryptoKeyPrimaryVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  updateCryptoKeyPrimaryVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  updateCryptoKeyPrimaryVersion(argument: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKey>): grpc.ClientUnaryCall;
  destroyCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  destroyCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  destroyCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  restoreCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  restoreCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
  restoreCryptoKeyVersion(argument: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): grpc.ClientUnaryCall;
}
