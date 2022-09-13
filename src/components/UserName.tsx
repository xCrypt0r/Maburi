import { Observer } from 'mobx-react';
import useStore from '../utils/useStore';

export default function UserName() {
    const { userName } = useStore();

    return (
        <Observer>
            {() => (
                <h3>{userName.value}</h3>
            )}
        </Observer>
    );
}