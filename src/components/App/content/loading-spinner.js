import React from "react";

const LoadingSpinner = ({size = 48, color = 'rgb(168, 2, 10)', message}) => {
    return(
        <div className="absolute inset-0 flex z-1 bg-neutral-600 transition-opacity opacity-60 items-center justify-center">
            <div className="loading-container flex align-middle justify-center text-3xl p-10">
                <div style={{ width: size, height: size }}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <style>
                            {`.spinner_9y7u{animation:spinner_fUkk 2.4s linear infinite;animation-delay:-2.4s}
                .spinner_DF2s{animation-delay:-1.6s}
                .spinner_q27e{animation-delay:-.8s}
                .custom-spinner{fill: ${color}}
                @keyframes spinner_fUkk{8.33%{x:13px;y:1px}25%{x:13px;y:1px}33.3%{x:13px;y:13px}50%{x:13px;y:13px}58.33%{x:1px;y:13px}75%{x:1px;y:13px}83.33%{x:1px;y:1px}`}
                        </style>
                        <rect className="custom-spinner spinner_9y7u" x="1" y="1" rx="1" width="10" height="10" />
                        <rect className="custom-spinner spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="10" height="10" />
                        <rect className="custom-spinner spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="10" height="10" />
                    </svg>
                    {message && <p className='text-xl'>{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner