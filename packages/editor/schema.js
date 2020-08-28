const MAPVALUE = {
  value(schema) {
    return schema["schema-value"];
  },
  object(schema) {
    const keys = Object.keys(schema).filter((key) => !/^schema-/.test(key));
    const objectValue = {};
    keys.forEach((key) => {
      objectValue[key] = mapSchemaValue(schema[key]);
    });
    return objectValue;
  },
  array(schema) {
    const arrayValue = [];
    schema["schema-value"].forEach((valItem) => {
      const childValue = mapSchemaValue(valItem);
      return arrayValue.push(childValue);
    });
    return arrayValue;
  },
};

export function mapSchemaValue(schema) {
  switch (schema["schema-type"]) {
    case "array":
      return MAPVALUE[schema["schema-type"]](schema);
    case "object":
    case null:
    case undefined:
      return MAPVALUE["object"](schema);
    default:
      return MAPVALUE["value"](schema);
  }
}

export function mapSchemaDefault(schema) {
  const keys = Object.keys(schema).filter((key) => !/^schema-/.test(key));
  console.log(keys);
  return {};
}

export function lintSchema(schema) {
  const keys = Object.keys(schema).filter((key) => !/^schema-/.test(key));
  console.log(keys);
  return {};
}
