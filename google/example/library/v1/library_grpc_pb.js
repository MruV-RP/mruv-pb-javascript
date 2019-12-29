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
var google_example_library_v1_library_pb = require('../../../../google/example/library/v1/library_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_example_library_v1_Book(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.Book)) {
    throw new Error('Expected argument of type google.example.library.v1.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_Book(buffer_arg) {
  return google_example_library_v1_library_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_CreateBookRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.CreateBookRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.CreateBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_CreateBookRequest(buffer_arg) {
  return google_example_library_v1_library_pb.CreateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_CreateShelfRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.CreateShelfRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.CreateShelfRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_CreateShelfRequest(buffer_arg) {
  return google_example_library_v1_library_pb.CreateShelfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_DeleteBookRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.DeleteBookRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.DeleteBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_DeleteBookRequest(buffer_arg) {
  return google_example_library_v1_library_pb.DeleteBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_DeleteShelfRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.DeleteShelfRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.DeleteShelfRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_DeleteShelfRequest(buffer_arg) {
  return google_example_library_v1_library_pb.DeleteShelfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_GetBookRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.GetBookRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.GetBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_GetBookRequest(buffer_arg) {
  return google_example_library_v1_library_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_GetShelfRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.GetShelfRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.GetShelfRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_GetShelfRequest(buffer_arg) {
  return google_example_library_v1_library_pb.GetShelfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_ListBooksRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.ListBooksRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.ListBooksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_ListBooksRequest(buffer_arg) {
  return google_example_library_v1_library_pb.ListBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_ListBooksResponse(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.ListBooksResponse)) {
    throw new Error('Expected argument of type google.example.library.v1.ListBooksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_ListBooksResponse(buffer_arg) {
  return google_example_library_v1_library_pb.ListBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_ListShelvesRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.ListShelvesRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.ListShelvesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_ListShelvesRequest(buffer_arg) {
  return google_example_library_v1_library_pb.ListShelvesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_ListShelvesResponse(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.ListShelvesResponse)) {
    throw new Error('Expected argument of type google.example.library.v1.ListShelvesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_ListShelvesResponse(buffer_arg) {
  return google_example_library_v1_library_pb.ListShelvesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_MergeShelvesRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.MergeShelvesRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.MergeShelvesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_MergeShelvesRequest(buffer_arg) {
  return google_example_library_v1_library_pb.MergeShelvesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_MoveBookRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.MoveBookRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.MoveBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_MoveBookRequest(buffer_arg) {
  return google_example_library_v1_library_pb.MoveBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_Shelf(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.Shelf)) {
    throw new Error('Expected argument of type google.example.library.v1.Shelf');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_Shelf(buffer_arg) {
  return google_example_library_v1_library_pb.Shelf.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_example_library_v1_UpdateBookRequest(arg) {
  if (!(arg instanceof google_example_library_v1_library_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type google.example.library.v1.UpdateBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_example_library_v1_UpdateBookRequest(buffer_arg) {
  return google_example_library_v1_library_pb.UpdateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// This API represents a simple digital library.  It lets you manage Shelf
// resources and Book resources in the library. It defines the following
// resource model:
//
// - The API has a collection of [Shelf][google.example.library.v1.Shelf]
//   resources, named `shelves/*`
//
// - Each Shelf has a collection of [Book][google.example.library.v1.Book]
//   resources, named `shelves/*/books/*`
var LibraryServiceService = exports.LibraryServiceService = {
  // Creates a shelf, and returns the new Shelf.
  createShelf: {
    path: '/google.example.library.v1.LibraryService/CreateShelf',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.CreateShelfRequest,
    responseType: google_example_library_v1_library_pb.Shelf,
    requestSerialize: serialize_google_example_library_v1_CreateShelfRequest,
    requestDeserialize: deserialize_google_example_library_v1_CreateShelfRequest,
    responseSerialize: serialize_google_example_library_v1_Shelf,
    responseDeserialize: deserialize_google_example_library_v1_Shelf,
  },
  // Gets a shelf. Returns NOT_FOUND if the shelf does not exist.
  getShelf: {
    path: '/google.example.library.v1.LibraryService/GetShelf',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.GetShelfRequest,
    responseType: google_example_library_v1_library_pb.Shelf,
    requestSerialize: serialize_google_example_library_v1_GetShelfRequest,
    requestDeserialize: deserialize_google_example_library_v1_GetShelfRequest,
    responseSerialize: serialize_google_example_library_v1_Shelf,
    responseDeserialize: deserialize_google_example_library_v1_Shelf,
  },
  // Lists shelves. The order is unspecified but deterministic. Newly created
  // shelves will not necessarily be added to the end of this list.
  listShelves: {
    path: '/google.example.library.v1.LibraryService/ListShelves',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.ListShelvesRequest,
    responseType: google_example_library_v1_library_pb.ListShelvesResponse,
    requestSerialize: serialize_google_example_library_v1_ListShelvesRequest,
    requestDeserialize: deserialize_google_example_library_v1_ListShelvesRequest,
    responseSerialize: serialize_google_example_library_v1_ListShelvesResponse,
    responseDeserialize: deserialize_google_example_library_v1_ListShelvesResponse,
  },
  // Deletes a shelf. Returns NOT_FOUND if the shelf does not exist.
  deleteShelf: {
    path: '/google.example.library.v1.LibraryService/DeleteShelf',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.DeleteShelfRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_example_library_v1_DeleteShelfRequest,
    requestDeserialize: deserialize_google_example_library_v1_DeleteShelfRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Merges two shelves by adding all books from the shelf named
  // `other_shelf_name` to shelf `name`, and deletes
  // `other_shelf_name`. Returns the updated shelf.
  // The book ids of the moved books may not be the same as the original books.
  //
  // Returns NOT_FOUND if either shelf does not exist.
  // This call is a no-op if the specified shelves are the same.
  mergeShelves: {
    path: '/google.example.library.v1.LibraryService/MergeShelves',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.MergeShelvesRequest,
    responseType: google_example_library_v1_library_pb.Shelf,
    requestSerialize: serialize_google_example_library_v1_MergeShelvesRequest,
    requestDeserialize: deserialize_google_example_library_v1_MergeShelvesRequest,
    responseSerialize: serialize_google_example_library_v1_Shelf,
    responseDeserialize: deserialize_google_example_library_v1_Shelf,
  },
  // Creates a book, and returns the new Book.
  createBook: {
    path: '/google.example.library.v1.LibraryService/CreateBook',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.CreateBookRequest,
    responseType: google_example_library_v1_library_pb.Book,
    requestSerialize: serialize_google_example_library_v1_CreateBookRequest,
    requestDeserialize: deserialize_google_example_library_v1_CreateBookRequest,
    responseSerialize: serialize_google_example_library_v1_Book,
    responseDeserialize: deserialize_google_example_library_v1_Book,
  },
  // Gets a book. Returns NOT_FOUND if the book does not exist.
  getBook: {
    path: '/google.example.library.v1.LibraryService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.GetBookRequest,
    responseType: google_example_library_v1_library_pb.Book,
    requestSerialize: serialize_google_example_library_v1_GetBookRequest,
    requestDeserialize: deserialize_google_example_library_v1_GetBookRequest,
    responseSerialize: serialize_google_example_library_v1_Book,
    responseDeserialize: deserialize_google_example_library_v1_Book,
  },
  // Lists books in a shelf. The order is unspecified but deterministic. Newly
  // created books will not necessarily be added to the end of this list.
  // Returns NOT_FOUND if the shelf does not exist.
  listBooks: {
    path: '/google.example.library.v1.LibraryService/ListBooks',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.ListBooksRequest,
    responseType: google_example_library_v1_library_pb.ListBooksResponse,
    requestSerialize: serialize_google_example_library_v1_ListBooksRequest,
    requestDeserialize: deserialize_google_example_library_v1_ListBooksRequest,
    responseSerialize: serialize_google_example_library_v1_ListBooksResponse,
    responseDeserialize: deserialize_google_example_library_v1_ListBooksResponse,
  },
  // Deletes a book. Returns NOT_FOUND if the book does not exist.
  deleteBook: {
    path: '/google.example.library.v1.LibraryService/DeleteBook',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.DeleteBookRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_example_library_v1_DeleteBookRequest,
    requestDeserialize: deserialize_google_example_library_v1_DeleteBookRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates a book. Returns INVALID_ARGUMENT if the name of the book
  // is non-empty and does not equal the existing name.
  updateBook: {
    path: '/google.example.library.v1.LibraryService/UpdateBook',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.UpdateBookRequest,
    responseType: google_example_library_v1_library_pb.Book,
    requestSerialize: serialize_google_example_library_v1_UpdateBookRequest,
    requestDeserialize: deserialize_google_example_library_v1_UpdateBookRequest,
    responseSerialize: serialize_google_example_library_v1_Book,
    responseDeserialize: deserialize_google_example_library_v1_Book,
  },
  // Moves a book to another shelf, and returns the new book. The book
  // id of the new book may not be the same as the original book.
  moveBook: {
    path: '/google.example.library.v1.LibraryService/MoveBook',
    requestStream: false,
    responseStream: false,
    requestType: google_example_library_v1_library_pb.MoveBookRequest,
    responseType: google_example_library_v1_library_pb.Book,
    requestSerialize: serialize_google_example_library_v1_MoveBookRequest,
    requestDeserialize: deserialize_google_example_library_v1_MoveBookRequest,
    responseSerialize: serialize_google_example_library_v1_Book,
    responseDeserialize: deserialize_google_example_library_v1_Book,
  },
};

exports.LibraryServiceClient = grpc.makeGenericClientConstructor(LibraryServiceService);
