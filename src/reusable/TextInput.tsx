import { ChangeEventHandler } from "react";

interface TextInputProps {
    /** Unique id */
    id: string;
    /** Text input value */
    value: string;
    /** Text input label */
    label: string;
    /** Validation error */
    error?: string;
    /** On change handler */
    onChange: ChangeEventHandler<HTMLInputElement>;
    /** HTML Input type */
    type?: "text" | "date" | "number" | "phone" | "password";
}

export default function TextInput({ id, value, label, error, onChange, type="text" }: TextInputProps) {
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <br/>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
                <br/>
            </div>
            {error && <div>{error}</div>}
        </>
    );
}