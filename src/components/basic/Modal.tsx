/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react'

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}) => {
  return (
    <div className=''>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden={!isOpen}
        className={`fixed bottom-40 right-0 w-1/3 z-50 ${
          isOpen ? '' : 'hidden'
        } max-h-full  overflow-y-auto overflow-x-hidden p-4 `}
      >
        <div className="relative max-h-full w-full max-w-md">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white p-8 shadow">
            <button
              type="button"
              className="absolute right-0 top-0 p-2"
              onClick={()=> onClose(false)}
            >
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
