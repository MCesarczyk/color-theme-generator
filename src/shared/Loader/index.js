import { useEffect, useState } from "react";
import { Message, Progress, ProgressBar, ProgressInner, ProgressLabel, ProgressOuter, Wrapper } from "./styled";

const Loader = ({ message }) => {
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState('loading');
    
    useEffect(()=>{
        let i = 0;

        setInterval(() => {
            if (i < 100) {
                setProgress((Math.abs((i+=2)/100)));
            } else {
                setState('success');
            }
        }, 50);
    },[]);

    useEffect(()=>{
        console.log(`State: ${state}`);
    },[state]);

    const percentage = `${(progress*100).toFixed(0)}%`;

    return (
    <>
        <Message>
            {message}
        </Message>
        <Wrapper>
            <Progress>
                <ProgressOuter>
                    <ProgressInner>
                        <ProgressBar progress={percentage}/>
                    </ProgressInner>
                </ProgressOuter>
                <ProgressLabel>
                    {percentage}
                </ProgressLabel>
            </Progress>
        </Wrapper>
    </>
)};

export default Loader;