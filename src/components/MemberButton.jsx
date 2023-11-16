import React, { useEffect, useState } from 'react'
import { ButtonStyles } from 'style/MemberBtnStyle'


const defaultColor = {"bgColor" : "#fff", "fontColor" : "#000"}

export default function MemberButton({name,colorCode,id, selectName,setSelectName,emoji}) {

    const activeBtn = () => {
		if (selectName === id) {
			setSelectName("");
		} else {
			setSelectName(id);
		}
	}
	
	const bgColor = selectName === id ? colorCode : defaultColor.bgColor;
	const fontColor = selectName === id ? '#fff' : defaultColor.fontColor;
	const addEmoji = selectName === id ? (emoji || '') : '';
	const paddingRight = selectName === id ? '2.5rem' : '1rem';
  	return (
		<>
    	<ButtonStyles bgColor={bgColor} fontColor={fontColor} colorCode={colorCode} addEmoji={`"${addEmoji}"`} paddingRight={paddingRight} onClick={activeBtn} id={id}>{name}</ButtonStyles>
		</>
  	)
}
