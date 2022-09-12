import { observable } from 'mobx';
import type { UserNameProps } from '../types';
import { USERNAME_NOT_APPLICABLE } from '../constants';

const userName = observable<UserNameProps>({
    value: USERNAME_NOT_APPLICABLE,
    setValue(value: string) {
        this.value = value;
    }
});

export default userName;