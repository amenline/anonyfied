module.exports = {
    content: [
        "./storage/framework/views/*.php",
        "./publics/**/*.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
