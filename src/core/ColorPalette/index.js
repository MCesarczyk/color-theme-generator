import { Badge, BadgesList, Label, Wrapper } from "./styled";

const ColorPalette = ({ palette, prefix }) => {
    const matrix = Object.entries(palette);
    const backgrounds = Object.values(Object.fromEntries(matrix.filter(entry => entry.toString().includes('primary'))));
    const colors = Object.values(Object.fromEntries(matrix.filter(entry => entry.toString().includes('complementary'))));

    return (
        <Wrapper>
            <BadgesList>
                {palette && backgrounds.map((value, index) => (
                    <Badge key={value + index} color={colors[index]} background={value}>
                        <Label>
                            {prefix + (index + 1)}{" : "}
                        </Label>
                        {value}
                    </Badge>
                ))}
            </BadgesList>
        </Wrapper>
    )
};

export default ColorPalette;