import {useFlashStore} from "@/stores/flash";
import {Alert, Snackbar} from "@mui/material";

export default function FlashMessage() {
    const resetFlashMessage = {
        type: 'info',
        message: 'flash message 123',
        isOpen: false
    }

    const flashMessage = useFlashStore((state) => state.flashMessage)
    const showFlashMessage = useFlashStore((state) => state.showFlashMessage)

    return (
        <>
            {
                flashMessage.isOpen ?
                    <Snackbar
                        open={flashMessage.isOpen}
                        message={flashMessage.message}
                        autoHideDuration={6000}
                        onClose={() => {
                            showFlashMessage(resetFlashMessage)
                        }}>
                        <Alert
                            severity={flashMessage.type}
                            fullWidth
                        >
                            {flashMessage.message}
                        </Alert>
                    </Snackbar>
                    :
                    <></>
            }
        </>
    )
}