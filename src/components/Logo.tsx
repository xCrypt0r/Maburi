import { LOGO_ALTERNATIVE_TEXT } from '../constants';

export default function Logo() {
    return (
        <div>
            <img
                src="logo.png"
                alt={LOGO_ALTERNATIVE_TEXT}
            />
        </div>
    );
}