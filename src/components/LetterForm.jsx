import React, { useState } from 'react'
import MemberData from 'data/memberData'
import MasterButton from 'components/global/MasterButton'
import { v4 as uuidv4 } from "uuid";
import { FormStyle, InputStyle, SectionStyle, SelectStyle } from 'style/InputFormStyle'
import Modal from './global/Modal';

const defaultInput = {
    nickName : "",
    content : "",
    letterId: "",
    createdAt : "",
    writeTo : ""
}

export default function LetterForm({letterList, setLetterList}) {
    const [letter,setLetter] = useState(defaultInput)
    const [letterOwner,setLetterOwner] = useState("")
    const uuid = uuidv4()
    
    const letterInfo = (e) => {
        const {name,value} = e.target
        setLetter({...letter,
            [name]:value,
            letterId: uuid,
            createdAt: new Date().toLocaleString()
        })
    }
    const handleSelect = (e) => {
        setLetterOwner(e.target.value)
    }
    const writeForm = (event) => {
        event.preventDefault()
        const newLetter = [...letterList,{...letter,writeTo : letterOwner}];
        localStorage.setItem('letterList', JSON.stringify(newLetter))
        setLetterList(newLetter)
        setLetter(defaultInput)        
    }

    return (
        <>
            <FormStyle onSubmit={writeForm}>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="">누구에게 보내시나요?</InputStyle>
                    <SelectStyle name="memberList" id="memberList" onChange={handleSelect} defaultValue="" required="required">
                        <option value="" disabled >멤버를 선택해주세요!</option>
                        {MemberData.map((member)=>{
                            return (<option key={member.id} name="writeTo" value={member.name}>{member.name}</option>)
                        })}
                    </SelectStyle>
                </SectionStyle>

                <SectionStyle>
                    <InputStyle as="label" htmlFor="nickName">닉네임</InputStyle>
                    <InputStyle type="text" id="nickName" placeholder="닉네임을 입력해주세요" name = "nickName" value={letter.nickName} onChange={letterInfo} required/>
                </SectionStyle>

                <SectionStyle>
                    <InputStyle as="label" htmlFor="content">내용</InputStyle>
                    <InputStyle type="text" id="content" className='content' placeholder="내용을 입력해주세요" name="content" value={letter.content} required onChange={letterInfo}/>
                </SectionStyle>

                <div>
                    <MasterButton text="팬레터보내기"/>
                </div>
            </FormStyle>
        </>
    )
}
