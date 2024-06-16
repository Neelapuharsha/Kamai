import React, { useEffect, useState } from 'react';
import './MagicCursor.css';
import { gsap } from 'gsap';

const MagicCursor = () => {
    const [borderColor, setBorderColor] = useState('#fff'); // initial border color

    useEffect(() => {
        const ball = document.getElementById('ball');
        const cursor = { x: 0, y: 0 };

        gsap.set(ball, { xPercent: -50, yPercent: -50 });

        const mouseMove = (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            gsap.to(ball, { duration: 0.3, x: cursor.x, y: cursor.y });

            // get the background color of the element under the cursor
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (!element) return;

            let bgColor = window.getComputedStyle(element).backgroundColor;

            // Check if bgColor is not valid or transparent
            if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
                // Default to black if no valid background color is found
                bgColor = 'rgb(255, 255, 255)';
            }

            const rgb = bgColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!rgb) return;

            const r = parseInt(rgb[1], 10);
            const g = parseInt(rgb[2], 10);
            const b = parseInt(rgb[3], 10);

            // calculate the negative color
            const negativeR = 255 - r;
            const negativeG = 255 - g;
            const negativeB = 255 - b;

            // set the border color to the negative color
            setBorderColor(`rgb(${negativeR}, ${negativeG}, ${negativeB})`);
        };

        const mouseClick = () => {
            gsap.to(ball, { duration: 0.2, scale: 0.3, borderColor: borderColor });
            gsap.to(ball, { duration: 0.1, scale: 1, borderColor: borderColor, backgroundColor: 'transparent', delay: 0.1 });
        };

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('click', mouseClick);

        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('click', mouseClick);
        };
    }, [borderColor]);

    return (
        <div id="magic-cursor">
            <div id="ball" style={{ borderColor: borderColor }}></div>
        </div>
    );
};

export default MagicCursor;
