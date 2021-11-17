import { StyledInput } from "./styled";

const Input = ({value, onChange}) => (
    <StyledInput
        type="color"
        value={value}
        onChange={onChange}
    />
);

export default Input;