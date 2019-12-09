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

import { V1LabelSelector } from './v1LabelSelector';

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export class V2beta1PodsMetricStatus {
    /**
     * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     */
    'currentAverageValue': string;
    /**
     * metricName is the name of the metric in question
     */
    'metricName': string;
    'selector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currentAverageValue',
            baseName: 'currentAverageValue',
            type: 'string',
        },
        {
            name: 'metricName',
            baseName: 'metricName',
            type: 'string',
        },
        {
            name: 'selector',
            baseName: 'selector',
            type: 'V1LabelSelector',
        },
    ];

    static getAttributeTypeMap() {
        return V2beta1PodsMetricStatus.attributeTypeMap;
    }
}
