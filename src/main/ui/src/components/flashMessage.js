import {useFlashStore} from "@/stores/flash";
import {useEffect} from "react";
import {Alert, Box, Button} from "@mui/material";

export default function FlashMessage() {
    const isOpen = useFlashStore((state) => state.isOpen)
    const message = useFlashStore((state) => state.message)
    const type = useFlashStore((state) => state.type)

    const updateIsOpen = useFlashStore((state) => state.updateIsOpen)

    return (
        <>
            {
                (isOpen && message.length > 0) ?
                    <Alert severity={type} onClose={() => {updateIsOpen(false)}}>
                        {message}
                    </Alert> :
                    <></>
            }
        </>
    )
}