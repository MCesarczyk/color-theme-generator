import { Space } from "../Space";
import { Paragraph, Title } from "./styled";

const Headline = ({ title, value }) => (
    <Space>
        <Title>
            {title}
        </Title>
        <Paragraph>
            {value}
        </Paragraph>
    </Space>
);

export default Headline;