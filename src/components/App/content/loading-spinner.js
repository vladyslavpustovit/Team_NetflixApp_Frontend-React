import React from "react";

const LoadingSpinner = ({message}) => {
    return(
        <div className="loading-container h-full flex align-middle justify-center text-3xl p-10">
            <h1>{message}</h1>
        </div>
    )
}

export default LoadingSpinner