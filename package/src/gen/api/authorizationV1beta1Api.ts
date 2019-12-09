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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { V1APIResourceList } from '../model/v1APIResourceList';
import { V1beta1LocalSubjectAccessReview } from '../model/v1beta1LocalSubjectAccessReview';
import { V1beta1SelfSubjectAccessReview } from '../model/v1beta1SelfSubjectAccessReview';
import { V1beta1SelfSubjectRulesReview } from '../model/v1beta1SelfSubjectRulesReview';
import { V1beta1SubjectAccessReview } from '../model/v1beta1SubjectAccessReview';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AuthorizationV1beta1ApiApiKeys {
    BearerToken,
}

export class AuthorizationV1beta1Api {
    protected _basePath = defaultBasePath;
    protected defaultHeaders: any = {};
    protected _useQuerystring: boolean = false;

    protected authentications = {
        default: <Authentication>new VoidAuth(),
        BearerToken: new ApiKeyAuth('header', 'authorization'),
    };

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AuthorizationV1beta1ApiApiKeys, value: string) {
        (this.authentications as any)[AuthorizationV1beta1ApiApiKeys[key]].apiKey = value;
    }

    /**
     * create a LocalSubjectAccessReview
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    public async createNamespacedLocalSubjectAccessReview(
        namespace: string,
        body: V1beta1LocalSubjectAccessReview,
        dryRun?: string,
        fieldManager?: string,
        pretty?: string,
        options: { headers: { [name: string]: string } } = { headers: {} },
    ): Promise<{ response: http.IncomingMessage; body: V1beta1LocalSubjectAccessReview }> {
        const localVarPath =
            this.basePath +
            '/apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews'.replace(
                '{' + 'namespace' + '}',
                encodeURIComponent(String(namespace)),
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new Error(
                'Required parameter namespace was null or undefined when calling createNamespacedLocalSubjectAccessReview.',
            );
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error(
                'Required parameter body was null or undefined when calling createNamespacedLocalSubjectAccessReview.',
            );
        }

        if (dryRun !== undefined) {
            localVarQueryParameters['dryRun'] = ObjectSerializer.serialize(dryRun, 'string');
        }

        if (fieldManager !== undefined) {
            localVarQueryParameters['fieldManager'] = ObjectSerializer.serialize(fieldManager, 'string');
        }

        if (pretty !== undefined) {
            localVarQueryParameters['pretty'] = ObjectSerializer.serialize(pretty, 'string');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, 'V1beta1LocalSubjectAccessReview'),
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions),
        );

        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions),
        );
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V1beta1LocalSubjectAccessReview }>(
                (resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            body = ObjectSerializer.deserialize(body, 'V1beta1LocalSubjectAccessReview');
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                resolve({ response: response, body: body });
                            } else {
                                reject(new HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                },
            );
        });
    }
    /**
     * create a SelfSubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    public async createSelfSubjectAccessReview(
        body: V1beta1SelfSubjectAccessReview,
        dryRun?: string,
        fieldManager?: string,
        pretty?: string,
        options: { headers: { [name: string]: string } } = { headers: {} },
    ): Promise<{ response: http.IncomingMessage; body: V1beta1SelfSubjectAccessReview }> {
        const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error(
                'Required parameter body was null or undefined when calling createSelfSubjectAccessReview.',
            );
        }

        if (dryRun !== undefined) {
            localVarQueryParameters['dryRun'] = ObjectSerializer.serialize(dryRun, 'string');
        }

        if (fieldManager !== undefined) {
            localVarQueryParameters['fieldManager'] = ObjectSerializer.serialize(fieldManager, 'string');
        }

        if (pretty !== undefined) {
            localVarQueryParameters['pretty'] = ObjectSerializer.serialize(pretty, 'string');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, 'V1beta1SelfSubjectAccessReview'),
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions),
        );

        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions),
        );
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V1beta1SelfSubjectAccessReview }>(
                (resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            body = ObjectSerializer.deserialize(body, 'V1beta1SelfSubjectAccessReview');
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                resolve({ response: response, body: body });
                            } else {
                                reject(new HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                },
            );
        });
    }
    /**
     * create a SelfSubjectRulesReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    public async createSelfSubjectRulesReview(
        body: V1beta1SelfSubjectRulesReview,
        dryRun?: string,
        fieldManager?: string,
        pretty?: string,
        options: { headers: { [name: string]: string } } = { headers: {} },
    ): Promise<{ response: http.IncomingMessage; body: V1beta1SelfSubjectRulesReview }> {
        const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/selfsubjectrulesreviews';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error(
                'Required parameter body was null or undefined when calling createSelfSubjectRulesReview.',
            );
        }

        if (dryRun !== undefined) {
            localVarQueryParameters['dryRun'] = ObjectSerializer.serialize(dryRun, 'string');
        }

        if (fieldManager !== undefined) {
            localVarQueryParameters['fieldManager'] = ObjectSerializer.serialize(fieldManager, 'string');
        }

        if (pretty !== undefined) {
            localVarQueryParameters['pretty'] = ObjectSerializer.serialize(pretty, 'string');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, 'V1beta1SelfSubjectRulesReview'),
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions),
        );

        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions),
        );
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V1beta1SelfSubjectRulesReview }>(
                (resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            body = ObjectSerializer.deserialize(body, 'V1beta1SelfSubjectRulesReview');
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                resolve({ response: response, body: body });
                            } else {
                                reject(new HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                },
            );
        });
    }
    /**
     * create a SubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    public async createSubjectAccessReview(
        body: V1beta1SubjectAccessReview,
        dryRun?: string,
        fieldManager?: string,
        pretty?: string,
        options: { headers: { [name: string]: string } } = { headers: {} },
    ): Promise<{ response: http.IncomingMessage; body: V1beta1SubjectAccessReview }> {
        const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/subjectaccessreviews';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error(
                'Required parameter body was null or undefined when calling createSubjectAccessReview.',
            );
        }

        if (dryRun !== undefined) {
            localVarQueryParameters['dryRun'] = ObjectSerializer.serialize(dryRun, 'string');
        }

        if (fieldManager !== undefined) {
            localVarQueryParameters['fieldManager'] = ObjectSerializer.serialize(fieldManager, 'string');
        }

        if (pretty !== undefined) {
            localVarQueryParameters['pretty'] = ObjectSerializer.serialize(pretty, 'string');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, 'V1beta1SubjectAccessReview'),
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions),
        );

        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions),
        );
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V1beta1SubjectAccessReview }>(
                (resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            body = ObjectSerializer.deserialize(body, 'V1beta1SubjectAccessReview');
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                resolve({ response: response, body: body });
                            } else {
                                reject(new HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                },
            );
        });
    }
    /**
     * get available resources
     */
    public async getAPIResources(
        options: { headers: { [name: string]: string } } = { headers: {} },
    ): Promise<{ response: http.IncomingMessage; body: V1APIResourceList }> {
        const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions),
        );

        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions),
        );
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V1APIResourceList }>(
                (resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            body = ObjectSerializer.deserialize(body, 'V1APIResourceList');
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                resolve({ response: response, body: body });
                            } else {
                                reject(new HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                },
            );
        });
    }
}
