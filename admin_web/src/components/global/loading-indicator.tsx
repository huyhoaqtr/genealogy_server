'use client'
import { useAppSelector } from '@/redux/store'
import React from 'react'


const LoadingIndicatorComponent = () => {
    const { loading } = useAppSelector((state) => state.app)
    return (
        loading && <div className="loading-state">
            <div className="spinner"></div>
        </div>
    )
}

export default LoadingIndicatorComponent