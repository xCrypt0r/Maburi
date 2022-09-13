export type UserName = Promise<string>;

export type ApiCallData = {
    callType: 'findFriend';
    channelCode: 'NM';
    id: string;
};

export type PostOptions = {
    url: string;
    form: ApiCallData;
    encoding?: string | null | undefined
};

export type UserNameProps = {
    value: string;
    setValue: (value: string) => void;
}