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
import { IoMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpecRules } from './ioMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpecRules';

export class IoMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpec {
    'rules'?: Array<IoMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpecRules>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'rules',
            baseName: 'rules',
            type: 'Array<IoMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpecRules>',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderWorkspacesV1alpha1ProjectRoleSpec.attributeTypeMap;
    }
}
