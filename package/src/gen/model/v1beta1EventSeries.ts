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
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class V1beta1EventSeries {
    /**
     * Number of occurrences in this series up to the last heartbeat time
     */
    'count': number;
    /**
     * Time when last Event from the series was seen before last heartbeat.
     */
    'lastObservedTime': Date;
    /**
     * Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18
     */
    'state': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'lastObservedTime',
            baseName: 'lastObservedTime',
            type: 'Date',
        },
        {
            name: 'state',
            baseName: 'state',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1EventSeries.attributeTypeMap;
    }
}
