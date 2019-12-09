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
 * Adds and removes POSIX capabilities from running containers.
 */
export class V1Capabilities {
    /**
     * Added capabilities
     */
    'add'?: Array<string>;
    /**
     * Removed capabilities
     */
    'drop'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'add',
            baseName: 'add',
            type: 'Array<string>',
        },
        {
            name: 'drop',
            baseName: 'drop',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return V1Capabilities.attributeTypeMap;
    }
}
