"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from "@/components/index";

const DynamicNavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 w-full z-10 transition-all duration-300 ease-in-out ${
            isScrolled ? 'bg-white bg-opacity-40 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/logo.svg" alt="Car Hub logo" width={118} height={18} className="object-contain" />
                </Link>
                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles={`rounded-full min-w-[130px] ${
                        isScrolled ? 'text-white bg-primary-blue' : 'text-primary-blue bg-white'
                    }`}
                />
            </nav>
        </header>
    );
};

export default DynamicNavBar;
