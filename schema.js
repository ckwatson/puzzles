{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "puzzleName": {
      "type": "string",
      "pattern": "^[\\w,\\s-]+$" 
    },
    "reactions": {
      "type": "array",
      "minItems": 1, 
      "items": { 
        "type": "array",
        "items": { 
          "type": "string",
          "pattern": "^\\w*$" 
        },
        "minItems": 4, 
        "maxItems": 4  
      }
    },
    "speciesNames": {
      "type": "array",
      "minItems": 1, 
      "items": { 
        "type": "string",
        "pattern": "^\\w*$" 
      }
    },
    "speciesIfReactants": {
      "type": "array",
      "minItems": 1, 
      "items": { 
        "type": "boolean"
      }
    },
    "speciesEnergies": {
      "type": "array",
      "minItems": 1, 
      "items": { 
        "type": "number"
      }
    },
    "reagentPERs": {
      "type": "object",
      "minItems": 1, 
      "additionalProperties" : {
        "type": "array",
        "minItems": 1, 
        "items": { 
          "type": "boolean"
        }
      }
    }
  },
  "required": [
    "puzzleName",
    "reactions",
    "speciesNames",
    "speciesIfReactants", 
    "speciesEnergies",
    "reagentPERs"
  ]
}