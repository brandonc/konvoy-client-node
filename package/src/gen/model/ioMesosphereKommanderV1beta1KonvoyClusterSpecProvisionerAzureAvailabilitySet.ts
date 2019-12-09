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
* AvailabilitySet contains the availability_set information
*/
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAzureAvailabilitySet {
    'faultDomainCount'?: number;
    'updateDomainCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "faultDomainCount",
            "baseName": "faultDomainCount",
            "type": "number"
        },
        {
            "name": "updateDomainCount",
            "baseName": "updateDomainCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAzureAvailabilitySet.attributeTypeMap;
    }
}

