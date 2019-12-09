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


/**
* UserInfo holds the information about the user needed to implement the user.Info interface.
*/
export class V1UserInfo {
    /**
    * Any additional information provided by the authenticator.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * The names of groups this user is a part of.
    */
    'groups'?: Array<string>;
    /**
    * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
    */
    'uid'?: string;
    /**
    * The name that uniquely identifies this user among all active users.
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1UserInfo.attributeTypeMap;
    }
}

