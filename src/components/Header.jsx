import MemberButton from 'components/MemberButton'
import React, { useState } from 'react'
import MemberData from 'data/memberData'
import { HeaderStyles, MemberList, Title } from 'style/HeaderStyle'

export default function Header() {

    const [selectName,setSelectName] = useState("")
    
    return (
        <HeaderStyles>
            <Title>DAY6</Title>
            <MemberList>
                {MemberData.map((member)=>{
                    return <MemberButton key={member.id} name={member.name} id={member.id} colorCode={member.colorCode} selectName={selectName} setSelectName={setSelectName} emoji={member.emoji}/>  
                })}
            </MemberList>
        </HeaderStyles>
    )
}
