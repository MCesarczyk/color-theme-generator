import { Badge, BadgesList, Wrapper } from "./styled";

const ColorPalette = ({ palette }) => {
    return (
        <Wrapper>
            <BadgesList>
                {palette && palette.map(color => (
                    <Badge color={color}>{color}</Badge>
                ))}
            </BadgesList>
        </Wrapper>
    )
};

export default ColorPalette;