//
//
//  𝗖 𝗢 𝗟 𝗢 𝗥
//  v 0.1.0
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
declare module 'open-color' {
    type Color = string;

    interface OpenColor {
        white: Color
        black: Color

        gray: Color[]
        red: Color[]
        purple: Color[]
        blue: Color[]
        green: Color[]
        yellow: Color[]
    }

    const OpenColor: OpenColor;
    export default OpenColor;
}