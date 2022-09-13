import { useEffect, KeyboardEvent } from 'react';
import useStore from '../useStore';
import {
    USERNAME_PLACEHOLDER,
    EMPTY_STRING,
    KEYS
} from '../constants';
import './UserIdInput.css';

export default function UserIdInput() {
    const { userName } = useStore();
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === KEYS.enter) {
            const target = e.target as HTMLInputElement;

            sendUserId(target.value);

            target.value = EMPTY_STRING;
        }
    };
    const sendUserId = (userId: string): void => {
        userId = userId.trim();

        if (userId.length > 0) {
            window.api.send('send-id', userId);
        }
    };

    useEffect((): void => {
        window.api.on('get-name', (payload: any): void => {
            userName.setValue(payload);
        });
    });

    return (
        <div>
            <input
                type="text"
                placeholder={USERNAME_PLACEHOLDER}
                autoFocus
                onKeyDown={onKeyDown}
            />
        </div>
    );
}