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
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelectorMatchExpressions } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelectorMatchExpressions';

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export class IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    'matchExpressions'?: Array<
        IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelectorMatchExpressions
    >;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
     */
    'matchLabels'?: { [key: string]: string };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'matchExpressions',
            baseName: 'matchExpressions',
            type:
                'Array<IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelectorMatchExpressions>',
        },
        {
            name: 'matchLabels',
            baseName: 'matchLabels',
            type: '{ [key: string]: string; }',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacementClusterSelector.attributeTypeMap;
    }
}
