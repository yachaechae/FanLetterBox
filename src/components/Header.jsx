import MemberButton from 'components/MemberButton'
import React, { useState } from 'react'
import MemberData from 'data/memberData'
import { HeaderStyles, MemberList, Title } from 'style/HeaderStyle'

const defaultButtonStyle = {
    "$bgColor" : "#fff",
    "$fontColor" : "#000",
    "$paddingRight": "1rem"
}

export default function Header() {

    const [selectedId,setSelectedId] = useState("")
    const activeBtn = (id) => {
		if (selectedId === id) {
			setSelectedId("");
		} else {
			setSelectedId(id);
		}
	}
    
    return (
        <HeaderStyles>
            <Title>DAY6</Title>
            <MemberList>
                {MemberData.map((member)=>{
                    return <MemberButton 
                    key={member.id} 
                    name={member.name} 
                    id={member.id} 
                    activeBtn={activeBtn}
                    buttonStyle = {member.id === selectedId ? {
                        "$bgColor" : member.colorCode,
                        "$fontColor" : "#fff",
                        "$addEmoji" : `"${member.emoji}"`,
                        "$paddingRight": "2.5rem"
                    } : {...defaultButtonStyle, $colorCode : member.colorCode}}
                    />  
                })}
            </MemberList>
        </HeaderStyles>
    )
}
