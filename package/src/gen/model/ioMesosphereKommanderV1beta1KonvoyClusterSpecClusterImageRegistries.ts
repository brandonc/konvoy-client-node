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
* ImageRegistry describes the docker image registries that are automatically configured to be used by the ContainerRuntime
*/
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterImageRegistries {
    'auth'?: string;
    'identityToken'?: string;
    'password'?: string;
    'server'?: string;
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string"
        },
        {
            "name": "identityToken",
            "baseName": "identityToken",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "server",
            "baseName": "server",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterImageRegistries.attributeTypeMap;
    }
}

