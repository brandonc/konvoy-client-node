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

import { IoMesosphereKommanderV1beta1ProjectSpecPlacement } from './ioMesosphereKommanderV1beta1ProjectSpecPlacement';
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecRoleRef } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecRoleRef';
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef';

/**
* VirtualGroupRoleBindingSpec defines the desired state of VirtualGroupRoleBinding
*/
export class IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpec {
    'placement'?: IoMesosphereKommanderV1beta1ProjectSpecPlacement;
    'roleRef'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecRoleRef;
    'virtualGroupRef'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "placement",
            "baseName": "placement",
            "type": "IoMesosphereKommanderV1beta1ProjectSpecPlacement"
        },
        {
            "name": "roleRef",
            "baseName": "roleRef",
            "type": "IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecRoleRef"
        },
        {
            "name": "virtualGroupRef",
            "baseName": "virtualGroupRef",
            "type": "IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpec.attributeTypeMap;
    }
}

