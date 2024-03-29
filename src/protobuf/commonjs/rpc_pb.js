// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.training.rpc.Restaurant', null, global);
goog.exportSymbol('proto.training.rpc.Restaurant.Location', null, global);
goog.exportSymbol('proto.training.rpc.Restaurant.Location.Coordinate', null, global);
goog.exportSymbol('proto.training.rpc.RpcResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.training.rpc.Restaurant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.training.rpc.Restaurant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.training.rpc.Restaurant.displayName = 'proto.training.rpc.Restaurant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.training.rpc.Restaurant.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.training.rpc.Restaurant.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.training.rpc.Restaurant.Location.displayName = 'proto.training.rpc.Restaurant.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.training.rpc.Restaurant.Location.Coordinate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.training.rpc.Restaurant.Location.Coordinate.repeatedFields_, null);
};
goog.inherits(proto.training.rpc.Restaurant.Location.Coordinate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.training.rpc.Restaurant.Location.Coordinate.displayName = 'proto.training.rpc.Restaurant.Location.Coordinate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.training.rpc.RpcResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.training.rpc.RpcResponse.repeatedFields_, null);
};
goog.inherits(proto.training.rpc.RpcResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.training.rpc.RpcResponse.displayName = 'proto.training.rpc.RpcResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.training.rpc.Restaurant.prototype.toObject = function(opt_includeInstance) {
  return proto.training.rpc.Restaurant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.training.rpc.Restaurant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.training.rpc.Restaurant.Location.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    id: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.training.rpc.Restaurant}
 */
proto.training.rpc.Restaurant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.training.rpc.Restaurant;
  return proto.training.rpc.Restaurant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.training.rpc.Restaurant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.training.rpc.Restaurant}
 */
proto.training.rpc.Restaurant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.training.rpc.Restaurant.Location;
      reader.readMessage(value,proto.training.rpc.Restaurant.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.training.rpc.Restaurant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.training.rpc.Restaurant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.training.rpc.Restaurant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.training.rpc.Restaurant.Location.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.training.rpc.Restaurant.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.training.rpc.Restaurant.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.training.rpc.Restaurant.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    coordinate: (f = msg.getCoordinate()) && proto.training.rpc.Restaurant.Location.Coordinate.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.training.rpc.Restaurant.Location}
 */
proto.training.rpc.Restaurant.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.training.rpc.Restaurant.Location;
  return proto.training.rpc.Restaurant.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.training.rpc.Restaurant.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.training.rpc.Restaurant.Location}
 */
proto.training.rpc.Restaurant.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.training.rpc.Restaurant.Location.Coordinate;
      reader.readMessage(value,proto.training.rpc.Restaurant.Location.Coordinate.deserializeBinaryFromReader);
      msg.setCoordinate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.training.rpc.Restaurant.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.training.rpc.Restaurant.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.training.rpc.Restaurant.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoordinate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.training.rpc.Restaurant.Location.Coordinate.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.training.rpc.Restaurant.Location.Coordinate.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.toObject = function(opt_includeInstance) {
  return proto.training.rpc.Restaurant.Location.Coordinate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.training.rpc.Restaurant.Location.Coordinate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.Location.Coordinate.toObject = function(includeInstance, msg) {
  var f, obj = {
    latlngList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.training.rpc.Restaurant.Location.Coordinate}
 */
proto.training.rpc.Restaurant.Location.Coordinate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.training.rpc.Restaurant.Location.Coordinate;
  return proto.training.rpc.Restaurant.Location.Coordinate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.training.rpc.Restaurant.Location.Coordinate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.training.rpc.Restaurant.Location.Coordinate}
 */
proto.training.rpc.Restaurant.Location.Coordinate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setLatlngList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.training.rpc.Restaurant.Location.Coordinate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.training.rpc.Restaurant.Location.Coordinate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.Restaurant.Location.Coordinate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatlngList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float latLng = 1;
 * @return {!Array<number>}
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.getLatlngList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.training.rpc.Restaurant.Location.Coordinate} returns this
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.setLatlngList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.training.rpc.Restaurant.Location.Coordinate} returns this
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.addLatlng = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.training.rpc.Restaurant.Location.Coordinate} returns this
 */
proto.training.rpc.Restaurant.Location.Coordinate.prototype.clearLatlngList = function() {
  return this.setLatlngList([]);
};


/**
 * optional Coordinate coordinate = 2;
 * @return {?proto.training.rpc.Restaurant.Location.Coordinate}
 */
proto.training.rpc.Restaurant.Location.prototype.getCoordinate = function() {
  return /** @type{?proto.training.rpc.Restaurant.Location.Coordinate} */ (
    jspb.Message.getWrapperField(this, proto.training.rpc.Restaurant.Location.Coordinate, 2));
};


/**
 * @param {?proto.training.rpc.Restaurant.Location.Coordinate|undefined} value
 * @return {!proto.training.rpc.Restaurant.Location} returns this
*/
proto.training.rpc.Restaurant.Location.prototype.setCoordinate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.training.rpc.Restaurant.Location} returns this
 */
proto.training.rpc.Restaurant.Location.prototype.clearCoordinate = function() {
  return this.setCoordinate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.training.rpc.Restaurant.Location.prototype.hasCoordinate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.training.rpc.Restaurant.Location.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.training.rpc.Restaurant.Location} returns this
 */
proto.training.rpc.Restaurant.Location.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Location location = 4;
 * @return {?proto.training.rpc.Restaurant.Location}
 */
proto.training.rpc.Restaurant.prototype.getLocation = function() {
  return /** @type{?proto.training.rpc.Restaurant.Location} */ (
    jspb.Message.getWrapperField(this, proto.training.rpc.Restaurant.Location, 4));
};


/**
 * @param {?proto.training.rpc.Restaurant.Location|undefined} value
 * @return {!proto.training.rpc.Restaurant} returns this
*/
proto.training.rpc.Restaurant.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.training.rpc.Restaurant} returns this
 */
proto.training.rpc.Restaurant.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.training.rpc.Restaurant.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.training.rpc.Restaurant.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.training.rpc.Restaurant} returns this
 */
proto.training.rpc.Restaurant.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string _id = 6;
 * @return {string}
 */
proto.training.rpc.Restaurant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.training.rpc.Restaurant} returns this
 */
proto.training.rpc.Restaurant.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.training.rpc.RpcResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.training.rpc.RpcResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.training.rpc.RpcResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.training.rpc.RpcResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.RpcResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    restaurantsList: jspb.Message.toObjectList(msg.getRestaurantsList(),
    proto.training.rpc.Restaurant.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.training.rpc.RpcResponse}
 */
proto.training.rpc.RpcResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.training.rpc.RpcResponse;
  return proto.training.rpc.RpcResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.training.rpc.RpcResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.training.rpc.RpcResponse}
 */
proto.training.rpc.RpcResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.training.rpc.Restaurant;
      reader.readMessage(value,proto.training.rpc.Restaurant.deserializeBinaryFromReader);
      msg.addRestaurants(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.training.rpc.RpcResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.training.rpc.RpcResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.training.rpc.RpcResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.training.rpc.RpcResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestaurantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.training.rpc.Restaurant.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Restaurant restaurants = 6;
 * @return {!Array<!proto.training.rpc.Restaurant>}
 */
proto.training.rpc.RpcResponse.prototype.getRestaurantsList = function() {
  return /** @type{!Array<!proto.training.rpc.Restaurant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.training.rpc.Restaurant, 6));
};


/**
 * @param {!Array<!proto.training.rpc.Restaurant>} value
 * @return {!proto.training.rpc.RpcResponse} returns this
*/
proto.training.rpc.RpcResponse.prototype.setRestaurantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.training.rpc.Restaurant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.training.rpc.Restaurant}
 */
proto.training.rpc.RpcResponse.prototype.addRestaurants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.training.rpc.Restaurant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.training.rpc.RpcResponse} returns this
 */
proto.training.rpc.RpcResponse.prototype.clearRestaurantsList = function() {
  return this.setRestaurantsList([]);
};


goog.object.extend(exports, proto.training.rpc);
