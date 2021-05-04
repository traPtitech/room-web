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
    RequestTag,
    RequestTagFromJSON,
    RequestTagToJSON,
    ResponseTag,
    ResponseTagFromJSON,
    ResponseTagToJSON,
} from '../models';

export interface PostTagRequest {
    requestTag: RequestTag;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     * タグを全て取得
     * タグを全て取得
     */
    async getTagRaw(): Promise<runtime.ApiResponse<Array<ResponseTag>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ResponseTagFromJSON));
    }

    /**
     * タグを全て取得
     * タグを全て取得
     */
    async getTag(): Promise<Array<ResponseTag>> {
        const response = await this.getTagRaw();
        return await response.value();
    }

    /**
     * すでにある場合は、error
     * タグを作成。
     */
    async postTagRaw(requestParameters: PostTagRequest): Promise<runtime.ApiResponse<ResponseTag>> {
        if (requestParameters.requestTag === null || requestParameters.requestTag === undefined) {
            throw new runtime.RequiredError('requestTag','Required parameter requestParameters.requestTag was null or undefined when calling postTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestTagToJSON(requestParameters.requestTag),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseTagFromJSON(jsonValue));
    }

    /**
     * すでにある場合は、error
     * タグを作成。
     */
    async postTag(requestParameters: PostTagRequest): Promise<ResponseTag> {
        const response = await this.postTagRaw(requestParameters);
        return await response.value();
    }

}
