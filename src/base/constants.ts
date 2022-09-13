const NETMARBLE_API_URL = 'https://nbill.netmarble.net/Cash/AutoPaymentPremium/AutoPaymentAdapter.aspx' as const;

export const USERNAME_PLACEHOLDER = 'id를 입력하세요' as const;
export const USERNAME_NOT_APPLICABLE = 'N/A' as const;
export const REGEX_TRUTHY_PREFIX = /^true\//;
export const ENCODING_EUCKR = 'euc-kr' as const;
export const EMPTY_STRING = '' as const;
export const LOGO_ALTERNATIVE_TEXT = 'logo' as const;

export const KEYS = {
    enter: 'Enter'
} as const;

export const DEFAULT_API_CALL_DATA = {
    callType: 'findFriend',
    channelCode: 'NM'
} as const;

export const DEFAULT_POST_OPTIONS = {
    url: NETMARBLE_API_URL,
    encoding: null
} as const;