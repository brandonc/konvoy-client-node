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
* ProjectStatus is information about the current status of a Project
*/
export class IoMesosphereKommanderV1beta1ProjectStatus {
    'phase'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1ProjectStatus.attributeTypeMap;
    }
}

