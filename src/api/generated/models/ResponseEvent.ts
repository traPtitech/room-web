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
    ResponseEventTags,
    ResponseEventTagsFromJSON,
    ResponseEventTagsFromJSONTyped,
    ResponseEventTagsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResponseEvent
 */
export interface ResponseEvent {
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    descirption?: string;
    /**
     * 部屋の共用をするか
     * @type {boolean}
     * @memberof ResponseEvent
     */
    sharedRoom?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    timeStart?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    timeEnd?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    place?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    groupName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    roomId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    groupId?: string;
    /**
     * 編集権を持つユーザー
     * @type {Array<string>}
     * @memberof ResponseEvent
     */
    admins?: Array<string>;
    /**
     * 
     * @type {Array<ResponseEventTags>}
     * @memberof ResponseEvent
     */
    tags?: Array<ResponseEventTags>;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseEvent
     */
    updatedAt?: string;
}

export function ResponseEventFromJSON(json: any): ResponseEvent {
    return ResponseEventFromJSONTyped(json, false);
}

export function ResponseEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventId': !exists(json, 'eventId') ? undefined : json['eventId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'descirption': !exists(json, 'descirption') ? undefined : json['descirption'],
        'sharedRoom': !exists(json, 'sharedRoom') ? undefined : json['sharedRoom'],
        'timeStart': !exists(json, 'timeStart') ? undefined : json['timeStart'],
        'timeEnd': !exists(json, 'timeEnd') ? undefined : json['timeEnd'],
        'place': !exists(json, 'place') ? undefined : json['place'],
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'admins': !exists(json, 'admins') ? undefined : json['admins'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(ResponseEventTagsFromJSON)),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
    };
}

export function ResponseEventToJSON(value?: ResponseEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eventId': value.eventId,
        'name': value.name,
        'descirption': value.descirption,
        'sharedRoom': value.sharedRoom,
        'timeStart': value.timeStart,
        'timeEnd': value.timeEnd,
        'place': value.place,
        'groupName': value.groupName,
        'roomId': value.roomId,
        'groupId': value.groupId,
        'admins': value.admins,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResponseEventTagsToJSON)),
        'createdBy': value.createdBy,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}


