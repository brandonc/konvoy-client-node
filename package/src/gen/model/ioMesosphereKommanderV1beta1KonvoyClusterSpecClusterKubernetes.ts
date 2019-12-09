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

import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesAdmissionPlugins } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesAdmissionPlugins';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesCloudProvider } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesCloudProvider';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlane } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlane';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks';

/**
 * Kubernetes controls the options used by kubeadm and at other points during installation
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetes {
    'admissionPlugins'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesAdmissionPlugins;
    'cloudProvider'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesCloudProvider;
    'controlPlane'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlane;
    'networking'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking;
    'preflightChecks'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks;
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'admissionPlugins',
            baseName: 'admissionPlugins',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesAdmissionPlugins',
        },
        {
            name: 'cloudProvider',
            baseName: 'cloudProvider',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesCloudProvider',
        },
        {
            name: 'controlPlane',
            baseName: 'controlPlane',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlane',
        },
        {
            name: 'networking',
            baseName: 'networking',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesNetworking',
        },
        {
            name: 'preflightChecks',
            baseName: 'preflightChecks',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesPreflightChecks',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetes.attributeTypeMap;
    }
}
