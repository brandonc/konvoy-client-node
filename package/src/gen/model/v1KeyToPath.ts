/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Maps a string key to a path within a volume.
*/
export class V1KeyToPath {
    /**
    * The key to project.
    */
    'key': string;
    /**
    * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'mode'?: number;
    /**
    * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element \'..\'. May not start with the string \'..\'.
    */
    'path': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1KeyToPath.attributeTypeMap;
    }
}

