export const colorsCalculate = () => {
    const primary = '#3282c8';
    console.log(`primary: ${primary}`);

    const pattern = {
        primary1: [4.8, 1.923076923, 1.275],
        primary2: [4.44, 1.853846154, 1.25],
        primary3: [3.46, 1.646153846, 1.185],
        primary4: [2.56, 1.430769231, 1.12],
        primary5: [1.74, 1.215384615, 1.06],
        primary6: [1, 1, 1],
        primary7: [0.64, 0.738461538, 0.805],
        primary8: [0.36, 0.515384615, 0.61],
        primary9: [0.16, 0.315384615, 0.42],
        primary10: [0.08, 0.161538462, 0.23],
    };

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16));

    const rgb = hexToRgb(primary);
    console.log(`primaryRgb: ${rgb}`);

    let colors = [];
    let contrasts = [];
    Object.values(pattern).forEach(color => {
        let colorsArray = [];
        let contrastsArray = [];
        for (let i = 0; i <= 2; i++) {
            const element = JSON.parse((Object.values(rgb)[i] * color[i]).toFixed(0));
            colorsArray.push(element);
            contrastsArray.push(255 - element);
            console.log(contrastsArray);
        };
        const hex = `#${(colorsArray).map(x => x.toString(16).padStart(2, '0')).join('')}`;
        const oppositeHex = `#${(contrastsArray).map(x => x.toString(16).padStart(2, '0')).join('')}`;
        colors.push(hex);
        contrasts.push(oppositeHex);
    });

    return colors;
};