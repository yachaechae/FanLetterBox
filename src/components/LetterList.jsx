import React from 'react'
import {  PiUserCircleThin } from "react-icons/pi";
import fakeData from "data/fakeData"
import memberData from "data/memberData"
import { LetterBox, Message, ProfileIcon, ProfileText, Sender } from 'style/LetterListStyle'

export default function LetterList({selectedId, letterList}) {
    let letterData = []
    if(selectedId){
        const selectedName = memberData.filter(member => member.id === selectedId)[0].name
        const selectedList = letterList.filter(letters => letters.writeTo === selectedName)
        console.log(selectedList)
        if(selectedList.length === 0){
            console.log(`${selectedName}편지함이 비어있어요!`)
            return (
                <LetterBox borde="0">
                    <h2>{selectedName}의 편지함이 비어있어요!<br/>지금 바로 작성해주세요!</h2>
                </LetterBox>
            )
        }else{
            letterData = selectedList
        }
    }else{
        letterData = letterList
    }
    /**
     * 디테일 페이지 ui구현
     * 디테일 페이지 내에서 편지 삭제/수정
     * context 로 리펙토링
     * redux 로 리펙토링
     */
    //\
    
    return (
        <>
        <LetterBox>
            {letterData.map((letter) => {
                return (
                        <ul>
                            <li>
                                <Sender key = {letter.id}>
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
                            </li>
                        </ul>
                    
                )
            })
        }
        </LetterBox>
        </>
    )
}
