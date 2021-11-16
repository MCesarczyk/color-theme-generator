export const colorsCalculate = (primary) => {
    const pattern = {
        1: [4.8, 1.923076923, 1.275],
        2: [4.44, 1.853846154, 1.25],
        3: [3.46, 1.646153846, 1.185],
        4: [2.56, 1.430769231, 1.12],
        5: [1.74, 1.215384615, 1.06],
        6: [1, 1, 1],
        7: [0.64, 0.738461538, 0.805],
        8: [0.36, 0.515384615, 0.61],
        9: [0.16, 0.315384615, 0.42],
        10: [0.08, 0.161538462, 0.23],
    };

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16));

    const paletteBuilder = (color) => {
        const rgb = hexToRgb(color);

        let colors = [];
        let colorsRgb = [];
        let complementarities = [];
        Object.values(pattern).forEach((color, index) => {
            let colorsArray = [];
            let contrastsArray = [];
            for (let i = 0; i <= 2; i++) {
                const element = JSON.parse((Object.values(rgb)[i] * color[i]).toFixed(0));
                    colorsArray.push(element <= 255 ? element : 255);
                contrastsArray.push(255 - element);
            };
            const hex = `#${(colorsArray).map(x => x.toString(16).padStart(2, '0')).join('')}`;
            const complementaryHex = `#${(contrastsArray).map(x => x.toString(16).padStart(2, '0')).join('')}`;

            const id = Object.keys(pattern)[index];
            colors.push({ name: `--ant-primary-${id}`, color: hex });
            colorsRgb.push({ name: `--ant-primary-${id}`, color: colorsArray });
            complementarities.push({ name: `--ant-complementary-${id}`, color: complementaryHex });
        });
        colors = colors.reduce((obj, cur) => ({ ...obj, [cur.name]: cur.color }), {});
        complementarities = complementarities.reduce((obj, cur) => ({ ...obj, [cur.name]: cur.color }), {});

        console.log(colorsRgb);

        return {
            ...colors,
            ...complementarities
        };
    };

    const palette = paletteBuilder(primary);

    return palette;
};