import styled, { keyframes, css } from "styled-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FittedText } from "./FittedText";

interface NameplateProps {
	show: boolean;
	name: string;
	pronouns: string;
	tag: string;
	animationLength?: number;
}

export const Nameplate: React.FC<NameplateProps> = ({ show, name, pronouns, tag, animationLength }) => {

	const [ visible, setVisible ] = useState<boolean>(false);
	const [ active, setActive ] = useState<boolean>(false);
	
	let onAnimEnd = useCallback((animName: string) => {
		if(animName === ShowNameplate.getName()) {
			if(!show) {
				setActive(true);
				return;
			}
		}
		else if(animName === HideNameplate.getName()) {
			setVisible(false);
		}

		setActive(false);
	}, [show]);

	useEffect(() => {
		if(show && !visible) {
			setVisible(true);
			setActive(true);
		}

		if(!show && visible) {
			setActive(true);
		}
	}, [show, visible]);

	const pronounsSplit = useMemo(() => {
		if(!pronouns) return [];

		let split = pronouns.split('/');

		split = split.map((item, index) => {
			return (index === split.length - 1) ? item : item + '/';
		})

		return split;

	}, [pronouns]);

	return (
		<NameplateBox
		$show={show}
		$visible={visible}
		$active={active} 
		$animLength={animationLength || 1000}
		onAnimationEnd={(event) => { onAnimEnd(event.animationName); }}>
			<Name>
				<FittedText text={name} font="Saira" align="center" maxWidth={580}  />
			</Name>
			<Tag>
				<FittedText text={tag} font="Saira" align="left" maxWidth={500}  />
			</Tag>
			{pronouns !== "" && (
			<Pronouns>
			{
				pronounsSplit.map((item, index) => {
					return <PronounsText key={index}>
						<FittedText text={item} font="Saira" align="center" maxWidth={75}  />
					</PronounsText>;
				})
			}
			</Pronouns>
			)}
		</NameplateBox>
	);
}

const ShowNameplate = keyframes`
	0% {
		opacity: 1;
		clip-path: polygon(
			50% -40%,
			50% -40%,
			50% 140%,
			50% 140%
		);
	}

	100% {
		opacity: 1;
		clip-path: polygon(
			-40% -40%,
			140% -40%,
			140% 140%,
			-40% 140%
		)
	}
`;

const HideNameplate = keyframes`
	0% {
		opacity: 1;
		clip-path: polygon(
			-40% -40%,
			140% -40%,
			140% 140%,
			-40% 140%
		)
	}

	100% {
		opacity: 1;
		clip-path: polygon(
			50% -40%,
			50% -40%,
			50% 140%,
			50% 140%
		);
	}
`;

const NameplateBox = styled.div<{ $show: boolean, $visible: boolean, $active: boolean, $animLength: number }>`
	position: relative;
	display: flex;
	flex-direction: column;

	padding: 10px;
	height: 160px;
	width: 600px;

	align-items: center;
	justify-content: space-evenly;
	text-align: center;

	background-image: url('/bundles/squid-waukee-layouts/images/Chi_Banner.png');
	background-size: contain;
	background-repeat: no-repeat;
	color: var(--commentary-text);

	${({$visible}) => $visible ? css`opacity: 1;` : css`opacity: 0;` };

	${(props) => {
		if(props.$active) {
			return css`animation: ${props.$animLength}ms linear 0s ${props.$show ? ShowNameplate : HideNameplate} forwards;`	
		}
		else {
			return css`animation: none;`
		}
	}}
`;

const Name = styled.div`
	position: relative;
	width: 100%;
	font-size: 3rem;
`;

const Pronouns = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;

	padding: 5px;

	bottom: -50px;
	right: -80px;
	
	justify-content: center;
	align-items: center;

	width: 167px;
	height: 135px;
	background-image: url('/bundles/squid-waukee-layouts/images/Splatter.png');
	background-size: contain;
	background-repeat: no-repeat;
	color: var(--commentary-pronouns);
	font-size: 1.6rem;
`;

const Tag = styled.div`
	position: relative;
	width: 100%;
	text-align: left;
	font-size: 2.25rem;
	height: 2.25rem;
	color: var(--commentary-tag);
`;

const PronounsText = styled.div`
`;