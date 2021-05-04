/* tslint:disable */
/* eslint-disable */
/**
 * traP knoQ
 * This is a sample knoQ server. 
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResponseUser
 */
export interface ResponseUser {
    /**
     * 
     * @type {string}
     * @memberof ResponseUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUser
     */
    icon?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResponseUser
     */
    privileged?: boolean;
    /**
     * ユーザーアカウント状態 0: 停止 1: 有効 2: 一時停止
     * @type {number}
     * @memberof ResponseUser
     */
    state?: number;
}

export function ResponseUserFromJSON(json: any): ResponseUser {
    return ResponseUserFromJSONTyped(json, false);
}

export function ResponseUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function ResponseUserToJSON(value?: ResponseUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'displayName': value.displayName,
        'icon': value.icon,
        'privileged': value.privileged,
        'state': value.state,
    };
}


