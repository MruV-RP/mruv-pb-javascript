// GENERATED CODE -- DO NOT EDIT!

// package: google.example.library.v1
// file: google/example/library/v1/library.proto

import * as google_example_library_v1_library_pb from "../../../../google/example/library/v1/library_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ILibraryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createShelf: grpc.MethodDefinition<google_example_library_v1_library_pb.CreateShelfRequest, google_example_library_v1_library_pb.Shelf>;
  getShelf: grpc.MethodDefinition<google_example_library_v1_library_pb.GetShelfRequest, google_example_library_v1_library_pb.Shelf>;
  listShelves: grpc.MethodDefinition<google_example_library_v1_library_pb.ListShelvesRequest, google_example_library_v1_library_pb.ListShelvesResponse>;
  deleteShelf: grpc.MethodDefinition<google_example_library_v1_library_pb.DeleteShelfRequest, google_protobuf_empty_pb.Empty>;
  mergeShelves: grpc.MethodDefinition<google_example_library_v1_library_pb.MergeShelvesRequest, google_example_library_v1_library_pb.Shelf>;
  createBook: grpc.MethodDefinition<google_example_library_v1_library_pb.CreateBookRequest, google_example_library_v1_library_pb.Book>;
  getBook: grpc.MethodDefinition<google_example_library_v1_library_pb.GetBookRequest, google_example_library_v1_library_pb.Book>;
  listBooks: grpc.MethodDefinition<google_example_library_v1_library_pb.ListBooksRequest, google_example_library_v1_library_pb.ListBooksResponse>;
  deleteBook: grpc.MethodDefinition<google_example_library_v1_library_pb.DeleteBookRequest, google_protobuf_empty_pb.Empty>;
  updateBook: grpc.MethodDefinition<google_example_library_v1_library_pb.UpdateBookRequest, google_example_library_v1_library_pb.Book>;
  moveBook: grpc.MethodDefinition<google_example_library_v1_library_pb.MoveBookRequest, google_example_library_v1_library_pb.Book>;
}

export const LibraryServiceService: ILibraryServiceService;

export class LibraryServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createShelf(argument: google_example_library_v1_library_pb.CreateShelfRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  createShelf(argument: google_example_library_v1_library_pb.CreateShelfRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  createShelf(argument: google_example_library_v1_library_pb.CreateShelfRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  getShelf(argument: google_example_library_v1_library_pb.GetShelfRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  getShelf(argument: google_example_library_v1_library_pb.GetShelfRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  getShelf(argument: google_example_library_v1_library_pb.GetShelfRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  listShelves(argument: google_example_library_v1_library_pb.ListShelvesRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListShelvesResponse>): grpc.ClientUnaryCall;
  listShelves(argument: google_example_library_v1_library_pb.ListShelvesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListShelvesResponse>): grpc.ClientUnaryCall;
  listShelves(argument: google_example_library_v1_library_pb.ListShelvesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListShelvesResponse>): grpc.ClientUnaryCall;
  deleteShelf(argument: google_example_library_v1_library_pb.DeleteShelfRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteShelf(argument: google_example_library_v1_library_pb.DeleteShelfRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteShelf(argument: google_example_library_v1_library_pb.DeleteShelfRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mergeShelves(argument: google_example_library_v1_library_pb.MergeShelvesRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  mergeShelves(argument: google_example_library_v1_library_pb.MergeShelvesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  mergeShelves(argument: google_example_library_v1_library_pb.MergeShelvesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Shelf>): grpc.ClientUnaryCall;
  createBook(argument: google_example_library_v1_library_pb.CreateBookRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  createBook(argument: google_example_library_v1_library_pb.CreateBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  createBook(argument: google_example_library_v1_library_pb.CreateBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  getBook(argument: google_example_library_v1_library_pb.GetBookRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  getBook(argument: google_example_library_v1_library_pb.GetBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  getBook(argument: google_example_library_v1_library_pb.GetBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  listBooks(argument: google_example_library_v1_library_pb.ListBooksRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: google_example_library_v1_library_pb.ListBooksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: google_example_library_v1_library_pb.ListBooksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  deleteBook(argument: google_example_library_v1_library_pb.DeleteBookRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBook(argument: google_example_library_v1_library_pb.DeleteBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBook(argument: google_example_library_v1_library_pb.DeleteBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateBook(argument: google_example_library_v1_library_pb.UpdateBookRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  updateBook(argument: google_example_library_v1_library_pb.UpdateBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  updateBook(argument: google_example_library_v1_library_pb.UpdateBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  moveBook(argument: google_example_library_v1_library_pb.MoveBookRequest, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  moveBook(argument: google_example_library_v1_library_pb.MoveBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
  moveBook(argument: google_example_library_v1_library_pb.MoveBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_example_library_v1_library_pb.Book>): grpc.ClientUnaryCall;
}
