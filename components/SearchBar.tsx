"use client"
import React, {useState} from 'react';
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import {useRouter} from "next/navigation";

const SearchButton = ({otherClasses}: { otherClasses?: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            width={40}
            height={40}
            className="object-contain"
            alt="magnifying glass"
        />
    </button>
)


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');
    const [modal, setModal] = useState('')
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && modal === '') {
            return alert('Please fill in the search bar');
        }
        updateSearchParams(modal.toLowerCase(), manufacturer.toLowerCase());
    }
    const updateSearchParams = (modal: string, manufacturer: string) => {
        // Get the current URL search params
        const searchParams = new URLSearchParams(window.location.search);

        // Set the new search params
        if (modal) {
            searchParams.set('model', modal);
        } else {
            searchParams.delete('model');
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer')
        }

        // Set the new search params
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname, { scroll: false });
    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden "/>
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" alt="car modal" width={25} height={25}
                       className="absolute w-[20px] h-[20px] ml-4"/>
                <input type="text" name="model" value={modal} placeholder="Tiguan" className="searchbar__input"
                       onChange={(e) => setModal(e.target.value)}/>
                <SearchButton otherClasses="sm:hidden "/>
            </div>
            <SearchButton otherClasses="max-sm:hidden "/>
        </form>
    );
};

export default SearchBar;
