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
 * Networking describes different networking related options
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking {
    'httpProxy'?: string;
    'httpsProxy'?: string;
    'noProxy'?: Array<string>;
    'podSubnet'?: string;
    'serviceSubnet'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'httpProxy',
            baseName: 'httpProxy',
            type: 'string',
        },
        {
            name: 'httpsProxy',
            baseName: 'httpsProxy',
            type: 'string',
        },
        {
            name: 'noProxy',
            baseName: 'noProxy',
            type: 'Array<string>',
        },
        {
            name: 'podSubnet',
            baseName: 'podSubnet',
            type: 'string',
        },
        {
            name: 'serviceSubnet',
            baseName: 'serviceSubnet',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking.attributeTypeMap;
    }
}
