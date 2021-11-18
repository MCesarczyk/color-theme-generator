import { Message, Progress, ProgressBar, ProgressInner, ProgressLabel, ProgressOuter, Wrapper } from "./styled";

const Loader = ({ message }) => (
    <>
        <Message>
            {message}
        </Message>
        <Wrapper>
            <Progress>
                <ProgressOuter>
                    <ProgressInner>
                        <ProgressBar />
                    </ProgressInner>
                </ProgressOuter>
                <ProgressLabel>
                    30%
                </ProgressLabel>
            </Progress>
        </Wrapper>
    </>
);

export default Loader;