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
            <span className={`flex-1`}>{customButtonProps.title}</span>
        </button>
    );
};

export default CustomButton;
