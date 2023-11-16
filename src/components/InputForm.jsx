import React from 'react'
import MemberData from 'data/memberData'
import MasterButton from 'components/MasterButton'
import { FormStyle, InputStyle, SectionStyle, SelectStyle } from 'style/InputFormStyle'

export default function InputForm() {
    return (
        <>
            <FormStyle>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="">누구에게 보내시나요?</InputStyle>
                    <SelectStyle name="memberList" id="memberList">
                        {MemberData.map((member)=>{
                            return (<option key={member.id} value={member.name}>{member.name}</option>)
                        })}
                    </SelectStyle>
                </SectionStyle>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="name">닉네임</InputStyle>
                    <InputStyle type="text" id="name" placeholder="닉네임을 입력해주세요"/>
                </SectionStyle>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="content">내용</InputStyle>
                    <InputStyle type="text" id="content" className='content' placeholder="내용을 입력해주세요"/>
                </SectionStyle>
                <div>
                    <MasterButton text="팬레터보내기"/>
                </div>
            </FormStyle>
        </>
    )
}
