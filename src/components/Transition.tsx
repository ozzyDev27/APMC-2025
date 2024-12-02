import { useState, useEffect } from "react";

export default function TransitionLayout({ children }: { children: any }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");

    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    const contentClasses = `opacity-0 bg-black transition-opacity duration-500 overflow-auto ${
        transitionStage === "fadeIn" ? "opacity-100" : ""
    }`;

    return (
        <>
            <div
                onTransitionEnd={() => {
                    if (transitionStage === "fadeOut") {
                        setDisplayChildren(children);
                        setTransitionStage("fadeIn");
                    }
                }}
                className={contentClasses}
            >
                {displayChildren}
            </div>
        </>
    );
}
