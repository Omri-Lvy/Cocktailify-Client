const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "320px",
            },
            transitionProperty: {
                navbar: "max-height, padding, border",
                width: "width",
                height: "height",
            },
            maxWidth: {
                xs: "320px",
            },
            minWidth: {
                xs: "320px",
            },
            dropShadow: {
                stroke: "1px 1px 1px rgb(0 0 0 / 1), -1px 1px 1px rgb(0 0 0 / 1), -1px -1px 1px rgb(0 0 0 / 1),1px -1px 1px rgb(0 0 0 / 1)"
            },
            animation: {
                scroll:
                    "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
            transitionDuration: {
                400: "400ms",
            }
        },
    },
    plugins: [addVariablesForColors],
}

function addVariablesForColors({addBase, theme}) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}