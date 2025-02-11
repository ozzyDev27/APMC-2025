import React, { useEffect, useState } from "react";

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const createParticle = () => {
            const id = Math.random().toString(36).substr(2, 9);
            setParticles((prev) => [
                ...prev,
                {
                    id,
                    size: Math.random() * 10 + 5,
                    left: Math.random() * 100,
                    duration: Math.random() * 6 + 4,
                    delay: Math.random() * 2,
                },
            ]);

            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== id));
            }, 12000);
        };
        const interval = setInterval(createParticle, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="particle-container">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.left}vw`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
