import { useState } from "react";
import SelectInput from "src/reusable/SelectInput";
import "./DevTools.css";

export enum userType {
    CUSTOMER = "customer",
    ADMIN = "admin"
}

export interface DevToolsProps {
    user: userType;
    setUser: (user: userType) => void;
}

export default function DevTools({ user, setUser }: DevToolsProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="devtools">
            <button onClick={() => setIsOpen(! isOpen)}>
                { isOpen ? "Close" : "Open" }
            </button>
            <SelectInput
                id="user"
                label="User"
                onChange={(e) => setUser(e.target.value as userType)}
                value={user}
                options={[
                    { label: "Customer", value: userType.CUSTOMER },
                    { label: "Admin", value: userType.ADMIN },
                ]}
            />
        </div>
    );
}