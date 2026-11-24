"use client"

import * as React from "react"
import { Check } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ASSETS_BASE_URL } from "./variables"

interface AutoCloseDialogProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    message: string
}

export function AutoCloseDialog({ isOpen, onOpenChange, message }: AutoCloseDialogProps) {
    React.useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onOpenChange(false)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isOpen, onOpenChange])

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex flex-col items-center gap-2">
                    <DialogTitle className="flex items-center gap-2">
                        <img src={`${ASSETS_BASE_URL}/tempAssets/success.gif`} alt="check" className="w-52" />
                    </DialogTitle>
                    <p className="text-center">{message}</p>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

AutoCloseDialog.displayName = 'AutoCloseDialog';
