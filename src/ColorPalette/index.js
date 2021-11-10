import { Badge, BadgesList, Wrapper } from "./styled";

const ColorPalette = ({ color }) => {
    return (
        <Wrapper>
            <BadgesList>
                <Badge color={color}>{color}</Badge>
            </BadgesList>
        </Wrapper>
    )
};

export default ColorPalette;