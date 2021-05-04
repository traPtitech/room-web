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
import {
    RequestEventInstantTags,
    RequestEventInstantTagsFromJSON,
    RequestEventInstantTagsFromJSONTyped,
    RequestEventInstantTagsToJSON,
} from './';

/**
 * 部屋を作る
 * @export
 * @interface RequestEventInstant
 */
export interface RequestEventInstant {
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    descirption?: string;
    /**
     * 部屋の共用をするか
     * @type {boolean}
     * @memberof RequestEventInstant
     */
    sharedRoom?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    timeStart?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    timeEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    place?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    groupId?: string;
    /**
     * 編集権を持つユーザー
     * @type {Array<string>}
     * @memberof RequestEventInstant
     */
    admins?: Array<string>;
    /**
     * 
     * @type {Array<RequestEventInstantTags>}
     * @memberof RequestEventInstant
     */
    tags?: Array<RequestEventInstantTags>;
}

export function RequestEventInstantFromJSON(json: any): RequestEventInstant {
    return RequestEventInstantFromJSONTyped(json, false);
}

export function RequestEventInstantFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestEventInstant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'descirption': !exists(json, 'descirption') ? undefined : json['descirption'],
        'sharedRoom': !exists(json, 'sharedRoom') ? undefined : json['sharedRoom'],
        'timeStart': !exists(json, 'timeStart') ? undefined : json['timeStart'],
        'timeEnd': !exists(json, 'timeEnd') ? undefined : json['timeEnd'],
        'place': !exists(json, 'place') ? undefined : json['place'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'admins': !exists(json, 'admins') ? undefined : json['admins'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(RequestEventInstantTagsFromJSON)),
    };
}

export function RequestEventInstantToJSON(value?: RequestEventInstant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'descirption': value.descirption,
        'sharedRoom': value.sharedRoom,
        'timeStart': value.timeStart,
        'timeEnd': value.timeEnd,
        'place': value.place,
        'groupId': value.groupId,
        'admins': value.admins,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(RequestEventInstantTagsToJSON)),
    };
}


