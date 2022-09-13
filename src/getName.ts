import { promisify } from 'util';
import * as request from 'request';
import * as iconv from 'iconv-lite';
import type {
    UserName,
    ApiCallData,
    PostOptions
} from './types';
import {
    USERNAME_NOT_APPLICABLE,
    REGEX_TRUTHY_PREFIX,
    ENCODING_EUCKR,
    EMPTY_STRING,
    DEFAULT_API_CALL_DATA,
    DEFAULT_POST_OPTIONS
} from './constants';

const asyncPost = promisify(request.post);

export default async function getName(id: string): UserName {
    let data: ApiCallData = {
        ...DEFAULT_API_CALL_DATA,
        id: encodeURIComponent(id)
    };
    let options: PostOptions = {
        ...DEFAULT_POST_OPTIONS,
        form: data
    };
    let { body }: request.Response = await asyncPost(options);
    let res = iconv.decode(body, ENCODING_EUCKR);
    let name = REGEX_TRUTHY_PREFIX.test(res) ?
        res.replace(REGEX_TRUTHY_PREFIX, EMPTY_STRING) :
        USERNAME_NOT_APPLICABLE;

    return name;
}