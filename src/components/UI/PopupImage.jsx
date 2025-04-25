'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PopupImage({ url }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClick = (e) => {
        e.stopPropagation();

        if (e.target.classList.contains('black-outside-modal')) {
            setIsOpen(false);
        }
    };

    return (
        <div
            className="h-48 w-3/5 bg-gray-300 rounded-xl cursor-pointer relative overflow-hidden "
            onClick={() => setIsOpen(true)}
        >
            <Image
                src={url}
                alt="Thumbnail image"
                fill
                className="object-cover object-top transition-all hover:object-bottom"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 hover:bg-black/20 transition-all"></div>

            {isOpen && (
                <div
                    className="max-w-4xl max-h-[90vh] relative bg-white border border-black p-2 rounded-lg"
                    onClick={handleModalClick}
                >
                    <div className="fixed inset-0 z-50 flex black-outside-modal items-center justify-center p-4 bg-black/50 overflow-hidden">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="fixed top-2 right-2 z-50 bg-white text-primary rounded-full px-4 py-2 font-extrabold"
                            aria-label="Close image popup"
                        >
                            ✕
                        </button>
                        <div className="relative w-[90vw] max-h-[90vh] overflow-auto bg-black/50 border-8 border-white">
                            <Image
                                src={url}
                                alt="Thumbnail image"
                                width={1400}
                                height={5000}
                                className="w-full h-auto object-contain"
                                priority
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
