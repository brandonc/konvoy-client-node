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

import { V1PodAffinityTerm } from './v1PodAffinityTerm';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export class V1WeightedPodAffinityTerm {
    'podAffinityTerm': V1PodAffinityTerm;
    /**
     * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
     */
    'weight': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'podAffinityTerm',
            baseName: 'podAffinityTerm',
            type: 'V1PodAffinityTerm',
        },
        {
            name: 'weight',
            baseName: 'weight',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return V1WeightedPodAffinityTerm.attributeTypeMap;
    }
}
