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

import { IoMesosphereKommanderV1beta1ProjectSpec } from './ioMesosphereKommanderV1beta1ProjectSpec';
import { IoMesosphereKommanderV1beta1ProjectStatus } from './ioMesosphereKommanderV1beta1ProjectStatus';
import { V1ObjectMeta } from './v1ObjectMeta';

/**
 * Project is a logical top-level container for a set of Kommander resources
 */
export class IoMesosphereKommanderV1beta1Project {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    'apiVersion'?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: IoMesosphereKommanderV1beta1ProjectSpec;
    'status'?: IoMesosphereKommanderV1beta1ProjectStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'apiVersion',
            baseName: 'apiVersion',
            type: 'string',
        },
        {
            name: 'kind',
            baseName: 'kind',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'V1ObjectMeta',
        },
        {
            name: 'spec',
            baseName: 'spec',
            type: 'IoMesosphereKommanderV1beta1ProjectSpec',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'IoMesosphereKommanderV1beta1ProjectStatus',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1Project.attributeTypeMap;
    }
}
