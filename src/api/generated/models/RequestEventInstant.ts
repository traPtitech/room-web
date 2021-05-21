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
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    description: string;
    /**
     * 部屋の共用をするか
     * @type {boolean}
     * @memberof RequestEventInstant
     */
    sharedRoom: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    timeStart: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    timeEnd: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    place: string;
    /**
     * 
     * @type {string}
     * @memberof RequestEventInstant
     */
    groupId: string;
    /**
     * 編集権を持つユーザー
     * @type {Array<string>}
     * @memberof RequestEventInstant
     */
    admins: Array<string>;
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
        
        'name': json['name'],
        'description': json['description'],
        'sharedRoom': json['sharedRoom'],
        'timeStart': json['timeStart'],
        'timeEnd': json['timeEnd'],
        'place': json['place'],
        'groupId': json['groupId'],
        'admins': json['admins'],
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
        'description': value.description,
        'sharedRoom': value.sharedRoom,
        'timeStart': value.timeStart,
        'timeEnd': value.timeEnd,
        'place': value.place,
        'groupId': value.groupId,
        'admins': value.admins,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(RequestEventInstantTagsToJSON)),
    };
}


