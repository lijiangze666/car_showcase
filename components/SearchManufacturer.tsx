"use client";
import React, {Fragment, useState} from 'react';
import {SearchManufacturerProps} from "@/types";
import {Combobox, Transition} from "@headlessui/react";
import Image from "next/image";
import {manufacturers} from "@/constants";

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');
    const filterManufacturer = query === '' ?
        manufacturers : manufacturers.filter((item) => (
            item.toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))));
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        placeholder="Volkswagen"
                        className="search-manufacturer__input"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                leaveTo="opacity-0" afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {filterManufacturer.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({focus}) =>
                                            `relative search-manufacturer__option ${
                                                focus ? "bg-primary-blue text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({selected, focus}) => (
                                            <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                                                {/* Show an active blue background color if the option is selected */}
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? "text-white" : "text-pribg-primary-purple"}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                )
                            )
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
