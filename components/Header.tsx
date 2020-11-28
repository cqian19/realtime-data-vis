import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className="header">
            <Link href="/">
                <h1 className="header__title">FishCastle</h1>
            </Link>
        </header>
    );
};

export default Header;