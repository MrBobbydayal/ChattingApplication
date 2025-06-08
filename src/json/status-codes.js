export default {
  "100": {
    statusCode: 100,
    statusMessage: "Continue",
    description: "The initial part of the request has been received, and the client should proceed with the rest of the request.",
    category: "Informational"
  },
  "101": {
    statusCode: 101,
    statusMessage: "Switching Protocols",
    description: "The server agrees to switch protocols specified in the Upgrade header field of the request.",
    category: "Informational"
  },
  "102": {
    statusCode: 102,
    statusMessage: "Processing",
    description: "The server has received and is processing the request but has not yet completed the process.",
    category: "Informational"
  },
  "103": {
    statusCode: 103,
    statusMessage: "Early Hints",
    description: "The server is sending some hints to the client even before the final response is available.",
    category: "Informational"
  },
  "200": {
    statusCode: 200,
    statusMessage: "OK",
    description: "The request has succeeded, and the requested resource is returned as the response.",
    category: "Success"
  },
  "201": {
    statusCode: 201,
    statusMessage: "Created",
    description: "The request has been fulfilled, and a new resource has been created as a result.",
    category: "Success"
  },
  "202": {
    statusCode: 202,
    statusMessage: "Accepted",
    description: "The request has been accepted for processing, but the processing is not complete.",
    category: "Success"
  },
  "203": {
    statusCode: 203,
    statusMessage: "Non-Authoritative Information",
    description: "The server is a transforming proxy that has received the request but has modified the response.",
    category: "Success"
  },
  "204": {
    statusCode: 204,
    statusMessage: "No Content",
    description: "The server has successfully processed the request, but there is no content to return.",
    category: "Success"
  },
  "205": {
    statusCode: 205,
    statusMessage: "Reset Content",
    description: "The server instructs the client to reset the current resource.",
    category: "Success"
  },
  "206": {
    statusCode: 206,
    statusMessage: "Partial Content",
    description: "The server has fulfilled the partial GET request for the resource.",
    category: "Success"
  },
  "207": {
    statusCode: 207,
    statusMessage: "Multi-Status",
    description: "The response status is a collection of independent responses, potentially differing in status.",
    category: "Success"
  },
  "208": {
    statusCode: 208,
    statusMessage: "Already Reported",
    description: "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
    category: "Success"
  },
  "218": {
    statusCode: 218,
    statusMessage: "This Is Fine",
    description: "Used as an Easter egg or joke, indicating that the server is returning a response despite encountering an error or problematic situation.",
    category: "Unofficial"
  },
  "226": {
    statusCode: 226,
    statusMessage: "IM Used",
    description: "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    category: "Success"
  },
  // CONTINUE THE SAME WAY FOR THE REST OF THE CODES...
};
