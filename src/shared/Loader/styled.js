import styled from "styled-components";

export const Message = styled.h1`
    color: #fff;
    font-size: 48px;
    margin-top: 50vh;
`

export const Wrapper = styled.div`
    color: #fff;
    padding: 42px 24px 50px;
    color: #000000d9;
`

export const Progress = styled.div`
    display: inline-block;
    position: relative;
    width: 80%;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #000000d9;
    font-size: 14px;
    line-height: 1.5715;
    font-variant: tabular-nums;
    font-feature-settings: "tnum";
`

export const ProgressOuter = styled.div`
    display: inline-block;
    width: 100%;
    margin-right: calc(-2em - 8px);
    padding-right: calc(2em + 8px);
`

export const ProgressInner = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 100px;
`

export const ProgressBar = styled.div`
    width: ${props => props.progress};
    height: 8px;
    position: relative;
    background-color: crimson;
    border-radius: 100px;
    transition: all .4s cubic-bezier(.08,.82,.17,1) 0s;
`

export const ProgressLabel = styled.span`
    display: inline-block;
    width: 2em;
    margin-left: 8px;
    color: #ccc;
    font-size: 2em;
    line-height: 1;
    white-space: nowrap;
    text-align: left;
    vertical-align: middle;
    word-break: normal;
  `