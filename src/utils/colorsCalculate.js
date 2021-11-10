export const colorsCalculate = () => {
    const primary = '#3282c8';
    console.log(`primary: ${primary}`);

    // const rgbToHex = (r, g, b) => '#' + [r, g, b]
    //     .map(x => x.toString(16).padStart(2, '0')).join('');

    // const hex = rgbToHex(50, 130, 200);

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16));

    const rgb = hexToRgb(primary);
    console.log(`primaryRgb: ${rgb}`);

    return primary;
};