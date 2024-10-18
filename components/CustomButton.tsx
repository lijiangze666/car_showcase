"use client";
import React from 'react';
import Image from "next/image";
import {CustomButtonProps} from "@/types";
const CustomButton = (customButtonProps: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={customButtonProps.btnType || "button"}
            className={`custom-btn ${customButtonProps.containerStyles}`}
            onClick={customButtonProps.handleClick}
        >
            <span className={`flex-1 ${customButtonProps.textStyles}` }>{customButtonProps.title}</span>
            {customButtonProps.rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={customButtonProps.rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )

            }
        </button>
    );
};

export default CustomButton;
