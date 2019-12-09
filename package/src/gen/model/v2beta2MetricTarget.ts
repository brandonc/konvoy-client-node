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
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export class V2beta2MetricTarget {
    /**
     * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
     */
    'averageUtilization'?: number;
    /**
     * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
     */
    'averageValue'?: string;
    /**
     * type represents whether the metric type is Utilization, Value, or AverageValue
     */
    'type': string;
    /**
     * value is the target value of the metric (as a quantity).
     */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'averageUtilization',
            baseName: 'averageUtilization',
            type: 'number',
        },
        {
            name: 'averageValue',
            baseName: 'averageValue',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'value',
            baseName: 'value',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V2beta2MetricTarget.attributeTypeMap;
    }
}
