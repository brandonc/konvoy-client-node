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

import { IoMesosphereKommanderV1beta1KommanderClusterStatusDextfaclientRef } from './ioMesosphereKommanderV1beta1KommanderClusterStatusDextfaclientRef';
import { IoMesosphereKommanderV1beta1KommanderClusterStatusKubefedclusterRef } from './ioMesosphereKommanderV1beta1KommanderClusterStatusKubefedclusterRef';

/**
 * KommanderClusterStatus defines the observed state of Cluster
 */
export class IoMesosphereKommanderV1beta1KommanderClusterStatus {
    'dextfaclientRef'?: IoMesosphereKommanderV1beta1KommanderClusterStatusDextfaclientRef;
    'kubefedclusterRef'?: IoMesosphereKommanderV1beta1KommanderClusterStatusKubefedclusterRef;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Provisioning, Provisioned, Deleting, Failed, etc.
     */
    'phase'?: string;
    /**
     * ServiceEndpoints will be the addresses assigned to the Kubernetes exposed services
     */
    'serviceEndpoints'?: { [key: string]: string };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'dextfaclientRef',
            baseName: 'dextfaclientRef',
            type: 'IoMesosphereKommanderV1beta1KommanderClusterStatusDextfaclientRef',
        },
        {
            name: 'kubefedclusterRef',
            baseName: 'kubefedclusterRef',
            type: 'IoMesosphereKommanderV1beta1KommanderClusterStatusKubefedclusterRef',
        },
        {
            name: 'phase',
            baseName: 'phase',
            type: 'string',
        },
        {
            name: 'serviceEndpoints',
            baseName: 'serviceEndpoints',
            type: '{ [key: string]: string; }',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KommanderClusterStatus.attributeTypeMap;
    }
}
