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

import { IoMesosphereDexV1alpha1ConnectorSpecGithubClientSecretRef } from './ioMesosphereDexV1alpha1ConnectorSpecGithubClientSecretRef';
import { IoMesosphereDexV1alpha1ConnectorSpecGithubOrgs } from './ioMesosphereDexV1alpha1ConnectorSpecGithubOrgs';
import { IoMesosphereDexV1alpha1ConnectorSpecGithubRootCASecretRef } from './ioMesosphereDexV1alpha1ConnectorSpecGithubRootCASecretRef';

export class IoMesosphereDexV1alpha1ConnectorSpecGithub {
    'clientSecretRef': IoMesosphereDexV1alpha1ConnectorSpecGithubClientSecretRef;
    /**
     * Github API host name. Default to \"api.github.com\".
     */
    'hostName'?: string;
    /**
     * Flag which indicates that all user groups and teams should be loaded.
     */
    'loadAllGroups'?: boolean;
    /**
     * Optional organizations and teams, communicated through the \"groups\" scope.   NOTE: This is an EXPERIMENTAL config option and will likely change.   Dex queries the following organizations for group information if the \"groups\" scope is provided. Group claims are formatted as \"(org):(team)\".  For example if a user is part of the \"engineering\" team of the \"coreos\" org, the group claim would include \"coreos:engineering\".   If orgs are specified in the config then user MUST be a member of at least one of the specified orgs to authenticate with dex.   If \'orgs\' is not specified in the config and \'loadAllGroups\' setting set to true then user authenticate with ALL user\'s Github groups. Typical use case for this setup: provide read-only access to everyone and give full permissions if user has \'my-organization:admins-team\' group claim.   Examples:  orgs:  - name: my-organization   # Include all teams as claims.  - name: my-organization-with-teams  # A white list of teams. Only include group claims for these teams.  teams:  - red-team  - blue-team
     */
    'orgs'?: Array<IoMesosphereDexV1alpha1ConnectorSpecGithubOrgs>;
    /**
     * Dex\'s issuer URL + \"/callback\"
     */
    'redirectURI': string;
    'rootCASecretRef'?: IoMesosphereDexV1alpha1ConnectorSpecGithubRootCASecretRef;
    /**
     * Optional choice between \'name\' (default), \'slug\', or \'both\'.   As an example, group claims for member of \'Site Reliability Engineers\' in Acme organization would yield:   - [\'acme:Site Reliability Engineers\'] for \'name\'   - [\'acme:site-reliability-engineers\'] for \'slug\'   - [\'acme:Site Reliability Engineers\',      \'acme:site-reliability-engineers\'] for \'both\'
     */
    'teamNameField'?: string;
    /**
     * Flag which will switch from using the internal GitHub id to the users handle (@mention) as the user id. It is possible for a user to change their own user name but it is very rare for them to do so.
     */
    'useLoginAsID'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'clientSecretRef',
            baseName: 'clientSecretRef',
            type: 'IoMesosphereDexV1alpha1ConnectorSpecGithubClientSecretRef',
        },
        {
            name: 'hostName',
            baseName: 'hostName',
            type: 'string',
        },
        {
            name: 'loadAllGroups',
            baseName: 'loadAllGroups',
            type: 'boolean',
        },
        {
            name: 'orgs',
            baseName: 'orgs',
            type: 'Array<IoMesosphereDexV1alpha1ConnectorSpecGithubOrgs>',
        },
        {
            name: 'redirectURI',
            baseName: 'redirectURI',
            type: 'string',
        },
        {
            name: 'rootCASecretRef',
            baseName: 'rootCASecretRef',
            type: 'IoMesosphereDexV1alpha1ConnectorSpecGithubRootCASecretRef',
        },
        {
            name: 'teamNameField',
            baseName: 'teamNameField',
            type: 'string',
        },
        {
            name: 'useLoginAsID',
            baseName: 'useLoginAsID',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereDexV1alpha1ConnectorSpecGithub.attributeTypeMap;
    }
}