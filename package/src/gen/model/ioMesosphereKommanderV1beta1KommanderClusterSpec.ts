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

import { IoMesosphereKommanderV1beta1KommanderClusterSpecClusterRef } from './ioMesosphereKommanderV1beta1KommanderClusterSpecClusterRef';
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef';

/**
* KommanderClusterSpec defines the desired state of Cluster
*/
export class IoMesosphereKommanderV1beta1KommanderClusterSpec {
    'clusterRef'?: IoMesosphereKommanderV1beta1KommanderClusterSpecClusterRef;
    'kubeconfigRef'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterRef",
            "baseName": "clusterRef",
            "type": "IoMesosphereKommanderV1beta1KommanderClusterSpecClusterRef"
        },
        {
            "name": "kubeconfigRef",
            "baseName": "kubeconfigRef",
            "type": "IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KommanderClusterSpec.attributeTypeMap;
    }
}
