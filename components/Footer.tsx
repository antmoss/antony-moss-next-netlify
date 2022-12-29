import Image from 'next/image';
import React, { useEffect, useState } from "react";
import GoTop from './GoTop';

export default function Footer() {
    return (
        <footer className="p-5 bg-secondary text-secondary footer">
            <div className="container flex items-center justify-between text-xs z-10 relative">
                <p className="font-semi">Copyright &copy; 2023 Antony Moss | All Rights Reserved</p>
                <GoTop />
            </div>
        </footer>
    );
}
