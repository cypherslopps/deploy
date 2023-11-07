import { createContext, useContext, useState } from "react";
import { 
    Modal,
    Offset 
} from "../components";

const OffscreenContext = createContext({
    type: "",
    setType: () => {},
    isOpen: false,
    data: null,
    setData: () => {},
    toggleOffscreen: () => {},
    openOffscreen: () => {},
    closeOffscreen: () => {}
});

export const OffscreenProvider = ({ children }) => {
    // Offscreen Types: "cart-modal" | "user-form-modal" | "offset"
    const [type, updateType] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);

    const setType = (type) => updateType(type);
    const toggleOffscreen = () => setIsOpen(props => !props);
    const openOffscreen = () => setIsOpen(true); 
    const closeOffscreen = () => setIsOpen(false);
    
    return (
        <>
            <OffscreenContext.Provider value={{
                type,
                isOpen,
                setType,
                toggleOffscreen,
                openOffscreen,
                closeOffscreen,
                data,
                setData
            }}>
                {children}
            </OffscreenContext.Provider>
            
            {/* Offscreen Components */}
            {isOpen ? (
                type.includes("modal") ? (
                    <Modal 
                        type={type} 
                        isOpen={isOpen}
                        closeModal={closeOffscreen}
                        data={data}
                    />
                ) : type === "offset" ? (
                    <Offset
                        isOpen={isOpen}
                        type={type}
                        closeOffset={closeOffscreen}
                    />
                ) : null
            ) : null}
        </>
    )
}

export const useOffscreen = () => {
    const offscreenContext = useContext(OffscreenContext);

    if(!offscreenContext) 
        throw new Error("Context must be in the OffscreenProvider");

    return offscreenContext;
}   