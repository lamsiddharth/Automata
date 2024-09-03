'use client'

import { createContext, useContext, useEffect, useState } from "react"

interface ModalProvider {
    children: React.ReactNode
}

export type ModalData = {

}

type ModalContextType = {
    data: ModalData
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
    setClose: () => void
}