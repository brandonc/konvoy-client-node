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

import { V1ConfigMapNodeConfigSource } from './v1ConfigMapNodeConfigSource';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export class V1NodeConfigSource {
    'configMap'?: V1ConfigMapNodeConfigSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'configMap',
            baseName: 'configMap',
            type: 'V1ConfigMapNodeConfigSource',
        },
    ];

    static getAttributeTypeMap() {
        return V1NodeConfigSource.attributeTypeMap;
    }
}
