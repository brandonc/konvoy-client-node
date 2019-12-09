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

import { V1SecretReference } from './v1SecretReference';

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export class V1RBDPersistentVolumeSource {
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
     */
    'fsType'?: string;
    /**
     * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'image': string;
    /**
     * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'keyring'?: string;
    /**
     * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'monitors': Array<string>;
    /**
     * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'pool'?: string;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'readOnly'?: boolean;
    'secretRef'?: V1SecretReference;
    /**
     * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'fsType',
            baseName: 'fsType',
            type: 'string',
        },
        {
            name: 'image',
            baseName: 'image',
            type: 'string',
        },
        {
            name: 'keyring',
            baseName: 'keyring',
            type: 'string',
        },
        {
            name: 'monitors',
            baseName: 'monitors',
            type: 'Array<string>',
        },
        {
            name: 'pool',
            baseName: 'pool',
            type: 'string',
        },
        {
            name: 'readOnly',
            baseName: 'readOnly',
            type: 'boolean',
        },
        {
            name: 'secretRef',
            baseName: 'secretRef',
            type: 'V1SecretReference',
        },
        {
            name: 'user',
            baseName: 'user',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1RBDPersistentVolumeSource.attributeTypeMap;
    }
}
