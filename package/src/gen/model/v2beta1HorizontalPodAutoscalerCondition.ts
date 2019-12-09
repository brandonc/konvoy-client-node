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
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
*/
export class V2beta1HorizontalPodAutoscalerCondition {
    /**
    * lastTransitionTime is the last time the condition transitioned from one status to another
    */
    'lastTransitionTime'?: Date;
    /**
    * message is a human-readable explanation containing details about the transition
    */
    'message'?: string;
    /**
    * reason is the reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * status is the status of the condition (True, False, Unknown)
    */
    'status': string;
    /**
    * type describes the current condition
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1HorizontalPodAutoscalerCondition.attributeTypeMap;
    }
}

