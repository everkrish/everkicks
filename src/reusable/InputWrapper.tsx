interface InputWrapperProps {
    children: React.ReactNode;
    /** Unique id */
    id: string;
    /** Text input label */
    label: string;
    /** Validation error */
    error?: string;
}

export default function InputWrapper({ children, id, label, error }: InputWrapperProps) {
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <br/>
                {children}
                <br/>
            </div>
            {error && <p id={id + "-error"} aria-label={error} role="alert">{error}</p>}
        </>
    );
}