import {create} from 'zustand'

export const useFlashStore = create((set) => ({
    flashMessage: {
        type: 'info',
        message: 'flash message 123',
        isOpen: false
    },
    type: 'info', // info, error, warning, success
    message: 'flash message 123',
    isOpen: false,
    updateIsOpen: (isOpen) => set(() => ({isOpen: isOpen})),
    showFlashMessage: (flashMessage) => set(() => ({
        flashMessage: {
            isOpen: flashMessage.isOpen,
            message: flashMessage.message,
            type: flashMessage.type
        }
    }))
}))