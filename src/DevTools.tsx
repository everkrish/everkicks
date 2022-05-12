import { useState } from "react";
import SelectInput from "src/reusable/SelectInput";
import { User } from "src/types/types";
import "./DevTools.css";
import { useUserContext } from "src/UserContext";


export default function DevTools() {
    const [isOpen, setIsOpen] = useState(true);
    const { user, setUser } = useUserContext();

    return (
        <div className="devtools">
            <button onClick={() => setIsOpen(! isOpen)}>
                { isOpen ? "Close" : "Open" }
            </button>
            <SelectInput
                id="user"
                label="User"
                onChange={(e) => setUser(e.target.value as User)}
                value={user}
                options={[
                    { label: "Customer", value: User.CUSTOMER },
                    { label: "Admin", value: User.ADMIN },
                ]}
            />
        </div>
    );
}