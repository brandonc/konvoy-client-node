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
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector';
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusters } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusters';

/**
 * PlacementSelector defines the fields to select clusters where to apply the project
 */
export class IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement {
    'clusterSelector'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector;
    'clusters'?: Array<IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusters>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'clusterSelector',
            baseName: 'clusterSelector',
            type: 'IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector',
        },
        {
            name: 'clusters',
            baseName: 'clusters',
            type: 'Array<IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusters>',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement.attributeTypeMap;
    }
}
