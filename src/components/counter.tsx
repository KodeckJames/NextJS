"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const { isLoaded, userId } = useAuth();
    // const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !userId) {
        return null;
    }
    //Once the user is Signed out, the Counter component is removed from the UI

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </>
    )
}
