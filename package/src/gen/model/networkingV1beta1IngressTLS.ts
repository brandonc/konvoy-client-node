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
* IngressTLS describes the transport layer security associated with an Ingress.
*/
export class NetworkingV1beta1IngressTLS {
    /**
    * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
    */
    'hosts'?: Array<string>;
    /**
    * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the \"Host\" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
    */
    'secretName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hosts",
            "baseName": "hosts",
            "type": "Array<string>"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressTLS.attributeTypeMap;
    }
}

