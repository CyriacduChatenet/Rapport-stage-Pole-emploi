import './button.css';
import { ButtonProp } from './types/button';

export const Button = ({label} : ButtonProp) => {
    return (
        <button>{label}</button>
    )
}