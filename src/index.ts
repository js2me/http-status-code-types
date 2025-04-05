export type HttpInformationalStatusCode =
  // 1xx Informational
  | /** 100 Continue - Client should send request body */ 100
  | /** 101 Switching Protocols - Protocol upgrade accepted */ 101
  | /** 102 Processing (WebDAV) - Request received, processing continues */ 102;

export type HttpSuccessStatusCode =
  // 2xx Success
  | /** 200 OK - Standard successful response */ 200
  | /** 201 Created - Resource successfully created */ 201
  | /** 202 Accepted - Request accepted, processing pending */ 202
  | /** 203 Non-Authoritative Information - Modified response from proxy */ 203
  | /** 204 No Content - Successful request with no body */ 204
  | /** 205 Reset Content - Success, reset document view */ 205
  | /** 206 Partial Content - Range request successful */ 206
  | /** 207 Multi-Status (WebDAV) - Multiple status responses */ 207
  | /** 208 Already Reported (WebDAV) - Members already listed */ 208
  | /** 226 IM Used - Instance manipulation applied */ 226;

export type HttpRedirectionStatusCode =
  // 3xx Redirection
  | /** 300 Multiple Choices - Multiple representations available */ 300
  | /** 301 Moved Permanently - Permanent redirect */ 301
  | /** 302 Found - Temporary redirect (historical) */ 302
  | /** 303 See Other - Redirect with GET */ 303
  | /** 304 Not Modified - Cached version valid */ 304
  | /** 305 Use Proxy - Must use proxy (deprecated) */ 305
  | /** 306 Switch Proxy - No longer used */ 306
  | /** 307 Temporary Redirect - Temporary redirect, method preserved */ 307
  | /** 308 Permanent Redirect - Permanent redirect, method preserved */ 308;

export type HttpClientErrorStatusCode =
  // 4xx Client Errors
  | /** 400 Bad Request - Invalid request format */ 400
  | /** 401 Unauthorized - Authentication required */ 401
  | /** 402 Payment Required - Reserved for future use */ 402
  | /** 403 Forbidden - Access denied */ 403
  | /** 404 Not Found - Resource not found */ 404
  | /** 405 Method Not Allowed - Method not supported */ 405
  | /** 406 Not Acceptable - Unacceptable content type */ 406
  | /** 407 Proxy Authentication Required - Proxy auth needed */ 407
  | /** 408 Request Timeout - Server timeout waiting for request */ 408
  | /** 409 Conflict - Request conflict */ 409
  | /** 410 Gone - Resource permanently removed */ 410
  | /** 411 Length Required - Content-Length missing */ 411
  | /** 412 Precondition Failed - Preconditions not met */ 412
  | /** 413 Payload Too Large - Request too large */ 413
  | /** 414 URI Too Long - URI exceeds length limits */ 414
  | /** 415 Unsupported Media Type - Unsupported format */ 415
  | /** 416 Range Not Satisfiable - Invalid range request */ 416
  | /** 417 Expectation Failed - Expect header failed */ 417
  | /** 418 I'm a Teapot - RFC 2324 joke status */ 418
  | /** 421 Misdirected Request - Wrong server instance */ 421
  | /** 422 Unprocessable Entity - Semantic errors */ 422
  | /** 423 Locked - Resource locked (WebDAV) */ 423
  | /** 424 Failed Dependency - Dependent request failed */ 424
  | /** 426 Upgrade Required - Protocol upgrade required */ 426
  | /** 428 Precondition Required - Requires conditional request */ 428
  | /** 429 Too Many Requests - Rate limit exceeded */ 429
  | /** 431 Request Header Fields Too Large - Headers too big */ 431
  | /** 451 Unavailable For Legal Reasons - Legal restriction */ 451;

export type HttpServerErrorStatusCode =
  // 5xx Server Errors
  | /** 500 Internal Server Error - Generic server error */ 500
  | /** 501 Not Implemented - Unsupported request method */ 501
  | /** 502 Bad Gateway - Invalid upstream response */ 502
  | /** 503 Service Unavailable - Server temporarily down */ 503
  | /** 504 Gateway Timeout - Upstream response timeout */ 504
  | /** 505 HTTP Version Not Supported - Unsupported HTTP version */ 505
  | /** 506 Variant Also Negotiates - Transparent content error */ 506
  | /** 507 Insufficient Storage - Storage limit exceeded */ 507
  | /** 508 Loop Detected - Infinite loop detected */ 508
  | /** 510 Not Extended - Missing required extension */ 510
  | /** 511 Network Authentication Required - Captive portal */ 511;

export type HttpStatusCode =
  | HttpInformationalStatusCode
  | HttpSuccessStatusCode
  | HttpRedirectionStatusCode
  | HttpClientErrorStatusCode
  | HttpServerErrorStatusCode;
