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

import { IoMesosphereKommanderV1beta1LicenseSpecLicenseRef } from './ioMesosphereKommanderV1beta1LicenseSpecLicenseRef';

/**
 * LicenseSpec defines the desired state of License
 */
export class IoMesosphereKommanderV1beta1LicenseSpec {
    'licenseRef'?: IoMesosphereKommanderV1beta1LicenseSpecLicenseRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'licenseRef',
            baseName: 'licenseRef',
            type: 'IoMesosphereKommanderV1beta1LicenseSpecLicenseRef',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1LicenseSpec.attributeTypeMap;
    }
}
