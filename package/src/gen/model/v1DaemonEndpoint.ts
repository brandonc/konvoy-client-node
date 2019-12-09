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
* DaemonEndpoint contains information about a single Daemon endpoint.
*/
export class V1DaemonEndpoint {
    /**
    * Port number of the given endpoint.
    */
    'Port': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Port",
            "baseName": "Port",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonEndpoint.attributeTypeMap;
    }
}

