'use client'
import { useEffect, useState, useRef } from 'react';

const Counter = ({ end=0, label="k", delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);  // To track if the animation has started after delay
    const increment = end / 20;

    // Setup the intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting);
            });
        }, { threshold: 0.5 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    // Animate the counter with a delay
    useEffect(() => {
        let interval = null;

        if (isVisible && !hasStarted) {
            // Apply the delay only once
            const timeout = setTimeout(() => {
                setHasStarted(true);  // Mark as started
                interval = setInterval(() => {
                    setCount(prevCount => {
                        const nextCount = Math.ceil(prevCount + increment);
                        return nextCount < end ? nextCount : end;
                    });
                }, 100);
            }, delay);  // Delay of 7 seconds

            return () => {
                clearTimeout(timeout);
            };
        } else if (!isVisible) {
            setCount(0);          // Reset count when not visible
            setHasStarted(false); // Allow for restart if it becomes visible again
            clearInterval(interval); // Clear any running intervals
        }

        // Clean up the interval when it's no longer needed
        return () => {
            clearInterval(interval);
        };
    }, [isVisible, hasStarted, end, increment]);

    return (
        <div ref={ref}>
            {count}{label}+
        </div>
    );
};

export default Counter;
