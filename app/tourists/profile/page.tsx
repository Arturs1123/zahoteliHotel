'use client'

import { useState } from "react";
import TouristMyProfile from "./components/MyProfile";
import TouristProfileWithoutAuth from "./components/NoAuth";

const isAuthenticated = true

export default function TouristProfile() {

    return (
        <div>
            {isAuthenticated ? <TouristMyProfile /> : <TouristProfileWithoutAuth />}
        </div>
    )
}