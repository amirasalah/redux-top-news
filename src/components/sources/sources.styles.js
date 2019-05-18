import styled from 'styled-components';

export const SourcesWrapper = styled.section`
    width:1070px;
    margin: 0 auto;
`
export const FiltersWrapper = styled.div`
    display:flex;
    margin: 20px 0;
    background: #EBE9F0;
    padding: 30px;
    border: 5px solid #C9356B;

`
export const SingleFilter = styled.div`
    flex-basis: 1;
    margin-right:20px;
    font-size: 26px;

`
export const SourceItem = styled.div`
    flex-basis: 1;
    border: 5px solid #C9356B;
    background: #EBE9F0;
    font-size: 26px;
    margin:20px 0;
    padding: 30px;
    color: #130C5C;
    transition: all 500ms ease-in-out;
    &:hover{
        cursor:pointer;
        border: 5px solid #130C5C;
    }
`