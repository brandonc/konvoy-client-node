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

import { IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAws } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAws';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure';

/**
* Machine used by the provisioner to configure a machine
*/
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine {
    'aws'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAws;
    'azure'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure;
    'imageID'?: string;
    'imageName'?: string;
    'imagefsVolumeEnabled'?: boolean;
    'imagefsVolumeSize'?: number;
    'imagefsVolumeType'?: string;
    'rootVolumeIOPS'?: number;
    'rootVolumeSize'?: number;
    'rootVolumeType'?: string;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aws",
            "baseName": "aws",
            "type": "IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAws"
        },
        {
            "name": "azure",
            "baseName": "azure",
            "type": "IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachineAzure"
        },
        {
            "name": "imageID",
            "baseName": "imageID",
            "type": "string"
        },
        {
            "name": "imageName",
            "baseName": "imageName",
            "type": "string"
        },
        {
            "name": "imagefsVolumeEnabled",
            "baseName": "imagefsVolumeEnabled",
            "type": "boolean"
        },
        {
            "name": "imagefsVolumeSize",
            "baseName": "imagefsVolumeSize",
            "type": "number"
        },
        {
            "name": "imagefsVolumeType",
            "baseName": "imagefsVolumeType",
            "type": "string"
        },
        {
            "name": "rootVolumeIOPS",
            "baseName": "rootVolumeIOPS",
            "type": "number"
        },
        {
            "name": "rootVolumeSize",
            "baseName": "rootVolumeSize",
            "type": "number"
        },
        {
            "name": "rootVolumeType",
            "baseName": "rootVolumeType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine.attributeTypeMap;
    }
}

