import {create} from 'zustand'

export const useFlashStore = create((set) => ({
    type: 'info' , // info, error, warning, success
    message: 'test',
    isOpen: false,
    updateIsOpen: (isOpen) => set(() => ({isOpen: isOpen}))
}))