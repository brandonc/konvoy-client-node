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
* GPU represents an object that contains details of user defined GPU info
*/
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterGpu {
    /**
    * Nvidia defines the user configuration of Nvidia specific info
    */
    'nvidia'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nvidia",
            "baseName": "nvidia",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterGpu.attributeTypeMap;
    }
}

