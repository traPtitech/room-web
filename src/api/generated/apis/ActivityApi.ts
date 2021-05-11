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


import * as runtime from '../runtime';
import {
    ResponseEvent,
    ResponseEventFromJSON,
    ResponseEventToJSON,
} from '../models';

/**
 * 
 */
export class ActivityApi extends runtime.BaseAPI {

    /**
     * 最近7日間に作成変更削除があったイベントを取得。 削除されたものを含んで返す。 
     */
    async getEventActivitiesRaw(): Promise<runtime.ApiResponse<Array<ResponseEvent>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/activity/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ResponseEventFromJSON));
    }

    /**
     * 最近7日間に作成変更削除があったイベントを取得。 削除されたものを含んで返す。 
     */
    async getEventActivities(): Promise<Array<ResponseEvent>> {
        const response = await this.getEventActivitiesRaw();
        return await response.value();
    }

}