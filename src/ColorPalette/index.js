import { Badge, BadgesList, Wrapper } from "./styled";

const ColorPalette = ({ palette }) => {
    const matrix = Object.entries(palette);
    const backgrounds = Object.values(Object.fromEntries(matrix.filter(entry => entry.toString().includes('primary'))));
    const colors = Object.values(Object.fromEntries(matrix.filter(entry => entry.toString().includes('complementary'))));

    return (
        <Wrapper>
            <BadgesList>
                {palette && backgrounds.map((value, index) => (
                    <Badge key={value} color={colors[index]} background={value}>{value}</Badge>
                ))}
            </BadgesList>
        </Wrapper>
    )
};

export default ColorPalette;