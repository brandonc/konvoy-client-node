/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
 * ELB contains details for the kube-apiserver ELB
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb {
    'internal'?: boolean;
    'subnetIDs'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'internal',
            baseName: 'internal',
            type: 'boolean',
        },
        {
            name: 'subnetIDs',
            baseName: 'subnetIDs',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb.attributeTypeMap;
    }
}
