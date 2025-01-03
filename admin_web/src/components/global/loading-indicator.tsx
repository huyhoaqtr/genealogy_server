'use client'
import { useAppSelector } from '@/redux/store'
import React, { useEffect } from 'react'

const LoadingIndicatorComponent = () => {
    const { loading } = useAppSelector((state) => state.app)

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [loading])

    return (
        loading && (
            <div className="loading-state">
                <div className="spinner"></div>
            </div>
        )
    )
}

export default LoadingIndicatorComponent
