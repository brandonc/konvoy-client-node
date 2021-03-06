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
 * PreflightChecks describes the set of preflight checks to be performed.
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks {
    'errorsToIgnore'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'errorsToIgnore',
            baseName: 'errorsToIgnore',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks.attributeTypeMap;
    }
}
