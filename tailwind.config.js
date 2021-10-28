const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./*.html", "./*.css"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan,
                orange: colors.orange,
                teal: colors.teal,
            },
            transitionProperty: {
                width: "width",
            },
            keyframes: {
                myanimation: {
                    from: { width: "0px" },
                    to: { width: "100%" },
                },
            },
            animation: {
                myanimation: "myanimation 1s ease-in",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
