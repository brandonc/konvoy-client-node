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
* AzureMachineOpts is azure specific options for machine
*/
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure {
    'subnetIDs'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subnetIDs",
            "baseName": "subnetIDs",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure.attributeTypeMap;
    }
}

