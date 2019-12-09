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
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export class V1beta1APIServiceCondition {
    /**
     * Last time the condition transitioned from one status to another.
     */
    'lastTransitionTime'?: Date;
    /**
     * Human-readable message indicating details about last transition.
     */
    'message'?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition\'s last transition.
     */
    'reason'?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown.
     */
    'status': string;
    /**
     * Type is the type of the condition.
     */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'lastTransitionTime',
            baseName: 'lastTransitionTime',
            type: 'Date',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'reason',
            baseName: 'reason',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1APIServiceCondition.attributeTypeMap;
    }
}
