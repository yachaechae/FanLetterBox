import React from 'react'
import {  PiUserCircleThin } from "react-icons/pi";
import memberData from "data/memberData"
import { LetterBox, Message, ProfileIcon, ProfileText, Sender } from 'style/LetterListStyle'
import { Link } from 'react-router-dom';

export default function LetterList({selectedId, letterList, setLetterList}) {
    let letterData = []
    if(selectedId){
        const selectedName = memberData.filter(member => member.id === selectedId)[0].name
        const selectedList = letterList.filter(letters => letters.writeTo === selectedName)
        if(selectedList.length === 0){
            return (
                <LetterBox $border="0">
                    <h2>{selectedName}의 편지함이 비어있어요!<br/>지금 바로 작성해주세요!</h2>
                </LetterBox>
            )
        }else{
            letterData = selectedList
        }
    }else{
        letterData = letterList
    }
    return !letterData.length == 0 ? (
        <LetterBox>
            {letterData.map((letter) => {
                return (
                        <ul>
                            <li>
                                <Link to={`/detail/${letter.letterId}`}  state={{ letterData: letter, letterList : letterList}} key = {letter.letterId} >
                                    <Sender >
                                        <ProfileIcon>
                                            <PiUserCircleThin className='icon'size="70" fill='#fff'/>
                                        </ProfileIcon>
                                        <ProfileText>
                                            <div className="textArea">
                                                <h6>{letter.nickName}</h6>
                                                <span>{letter.createdAt}</span>
                                            </div>
                                                <Message><p>{letter.content}</p></Message> 

                                        </ProfileText>
                                    </Sender>
                                </Link>
                            </li>
                        </ul>
                    
                )
            })
        }
        </LetterBox>
    )
    :
    (<>
        <LetterBox $border="0">
            <h2>편지함이 비어있어요!<br/>지금 바로 작성해주세요!</h2>
        </LetterBox>
    </>)
}
