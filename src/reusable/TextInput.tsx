import { ChangeEventHandler } from "react";

interface TextInputProps {
    id: string;
    value: string;
    label: string;
    error?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
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