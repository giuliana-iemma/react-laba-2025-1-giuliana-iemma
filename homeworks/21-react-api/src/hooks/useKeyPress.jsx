import { useEffect, useState } from "react";

export function useKeyPress(targetKey){
    const [isPressed, setIsPressed] = useState(false);

    //These will apply to see if the target key is the one being pressed 
    useEffect (() => {
        function handleDown({key}){
            if (key === targetKey) setIsPressed(true);
        }

        function handleUp({key}){
            if(key === targetKey) setIsPressed(false);
        }

        //Apply the functions to the key pressed
        window.addEventListener('keydown', handleDown);
        window.addEventListener('keyup', handleUp);
    }, [targetKey] //Update if the targetKey changes
    );

    return isPressed;
}