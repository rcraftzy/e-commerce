/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // #982f1a
    // #cb251e
    // #db7115
    // #de9700 #DE9800
    // #e8b400
    // #efc100
    // #e1ead6 #F1EAD6
    // #7ea626
    // #de9700 #6F4D2B
    // #E8B400 #513420
    extend: {
      colors: {
        'burnt-copper': '#982f1a',
        'fire-red': '#cb251e',
        'intense-orange': '#db7115',
        'golden-yellow': '#de9700',
        'bright-yellow': '#DE9800',
        'light-gold': '#e8b400',
        'vibrant-yellow': '#efc100',
        'soft-white': '#e1ead6',
        'light-ivory': '#F1EAD6',
        'moss-green': '#7ea626',
        'dark-brown': '#6F4D2B',
        'light-gold-2': '#E8B400',
        'chocolate-brown': '#513420'
      },
      fontFamily: {
        tahoma: ["Tahoma", "sans-serif"],
      },
    }
  },
  plugins: [],
}

