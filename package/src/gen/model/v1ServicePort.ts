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
 * ServicePort contains information on service\'s port.
 */
export class V1ServicePort {
    /**
     * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the \'name\' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
     */
    'name'?: string;
    /**
     * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
     */
    'nodePort'?: number;
    /**
     * The port that will be exposed by this service.
     */
    'port': number;
    /**
     * The IP protocol for this port. Supports \"TCP\", \"UDP\", and \"SCTP\". Default is TCP.
     */
    'protocol'?: string;
    /**
     * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod\'s container ports. If this is not specified, the value of the \'port\' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the \'port\' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
     */
    'targetPort'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'nodePort',
            baseName: 'nodePort',
            type: 'number',
        },
        {
            name: 'port',
            baseName: 'port',
            type: 'number',
        },
        {
            name: 'protocol',
            baseName: 'protocol',
            type: 'string',
        },
        {
            name: 'targetPort',
            baseName: 'targetPort',
            type: 'object',
        },
    ];

    static getAttributeTypeMap() {
        return V1ServicePort.attributeTypeMap;
    }
}
