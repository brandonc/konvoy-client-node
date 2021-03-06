/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntimeContainerd } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntimeContainerd';

/**
 * ContainerRuntime describes the runtime used by the Kubelet
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntime {
    'containerd'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntimeContainerd;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'containerd',
            baseName: 'containerd',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntimeContainerd',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerRuntime.attributeTypeMap;
    }
}
