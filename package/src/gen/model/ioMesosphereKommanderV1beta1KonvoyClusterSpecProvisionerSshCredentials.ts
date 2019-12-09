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
 * SSHCredentials describes the options passed to the provisioner regarding the ssh keys
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerSshCredentials {
    'privateKeyFile'?: string;
    'publicKeyFile': string;
    'user': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'privateKeyFile',
            baseName: 'privateKeyFile',
            type: 'string',
        },
        {
            name: 'publicKeyFile',
            baseName: 'publicKeyFile',
            type: 'string',
        },
        {
            name: 'user',
            baseName: 'user',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerSshCredentials.attributeTypeMap;
    }
}
