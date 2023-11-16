import styled from "styled-components";

export const HeaderStyles = styled.div`
        position: relative;
        width:100%;
        height:350px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        &::before{
            position: absolute;
            top: 0;
            content: '';
            background: url(https://i.namu.wiki/i/OIuY4QpaYW50NRfRE6xKSUcGZo37ESC0E8MCxo4HFJ3ZwBswZyTxPvEQsRGcIaK_hyN4ApCnzc0w4xkZzhB0QMtWRJCsBzAkVQqCsTYw961ZglfS0R-evlok9VHg_plaH2Du0JeRBwy4vPtSHe85YQ.webp),linear-gradient(126deg,#a5682b,#a5682b,#ecde61);
            width:100%;
            height:100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            filter:blur(3px);
            z-index:-1;
            transform: scale(1.1);
        }
    `
export const Title = styled.div`
        font-family: 'SUITE-Regular';
        font-weight: bold;
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        text-shadow: -1px 0px #fff, 0px 1px #fff, 1px 0px #fff, 0px -1px #fff;
    `
export const MemberList = styled.div`
        text-align: center;
        border: 1px solid #fff;
        width: fit-content;
        padding: 0.5rem 1rem;
        background:#000000cc;
    `;
