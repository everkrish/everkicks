import { ChangeEventHandler, FocusEventHandler } from "react";

interface TextInputProps {
    /** Unique id */
    id: string;
    /** Text input value */
    value: string;
    /** Text input label */
    label: string;
    /** Select options */
    options: { value: string, label: string }[]
    /** Validation error */
    error?: string;
    /** On change handler */
    onChange: ChangeEventHandler<HTMLSelectElement>;
    /** On blur handler */
    onBlur?: FocusEventHandler<HTMLSelectElement>;
}

export default function SelectInput({ id, value, label, options, error, onChange, onBlur }: TextInputProps) {
    const additionalInputProps: any = {};
    if (error) {
        additionalInputProps["aria-invalid"] = true;
        additionalInputProps["aria-describedby"] = id + "-error";
    }
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <br/>
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...additionalInputProps}
                >
                    { options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>) }
                </select>
                <br/>
            </div>
            {error && <p id={id + "-error"} role="alert">{error}</p>}
        </>
    );
}