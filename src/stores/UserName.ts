import { observable } from 'mobx';
import type { UserNameProps } from '../base/types';
import { USERNAME_NOT_APPLICABLE } from '../base/constants';

const userName = observable<UserNameProps>({
    value: USERNAME_NOT_APPLICABLE,
    setValue(value: string) {
        this.value = value;
    }
});

export default userName;