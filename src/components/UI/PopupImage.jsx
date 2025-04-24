'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PopupImage({ url }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="h-48 w-3/5 bg-gray-300 rounded-xl cursor-pointer relative overflow-hidden"
            onClick={() => setIsOpen(true)}
        >
            <Image
                src={url}
                alt="Thumbnail image"
                fill
                className="object-cover"
            />

            {isOpen && (
                <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/30 z-50">
                    <div
                        className="max-w-4xl max-h-[90vh] relative bg-white border border-black p-2 rounded-lg"
                        onClick={handleModalClick}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 z-10 bg-white rounded-full p-1"
                            aria-label="Close image popup"
                        >
                            ✕
                        </button>
                        <div className="relative w-full h-full min-h-[300px]">
                            <img
                                src={url}
                                alt="landing page"
                                className="absolute top-0 left-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
