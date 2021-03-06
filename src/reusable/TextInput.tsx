import { ChangeEventHandler, FocusEventHandler } from "react";
import InputWrapper from "src/reusable/InputWrapper";

interface TextInputProps {
    /** Unique id */
    id: string;
    /** Text input value */
    value: string | number;
    /** Text input label */
    label: string;
    /** Validation error */
    error?: string;
    /** On change handler */
    onChange: ChangeEventHandler<HTMLInputElement>;
    /** Text inputs onBlur handler */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /** HTML Input type */
    type?: "text" | "date" | "number" | "phone" | "password";
    /** For number only: number step */
    step?: string;
}

export default function TextInput({ id, value, label, error, onChange, onBlur, type="text", step }: TextInputProps) {
    const additionalInputProps: any = {};
    if (error) {
        additionalInputProps["aria-invalid"] = true;
        additionalInputProps["aria-describedby"] = id + "-error";
    }
    return (
        <InputWrapper id={id} label={label} error={error}>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                step={step}
                {...additionalInputProps}
            />
        </InputWrapper>
    );
}