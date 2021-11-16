import { StyledInput } from "./styled";

const Input = ({value, onChange}) => (
    <StyledInput
        value={value}
        onChange={onChange}
        placeholder="#000000"
        maxLength={7}
    />
);

export default Input;