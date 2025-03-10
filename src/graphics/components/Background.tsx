import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

export const Background: React.FC = () => {

	return (
		<StyledBackground>
			<StyledVideo autoPlay muted loop>
				<source src="/bundles/squid-waukee-layouts/images/backgrounds/Background.webm" type="video/mp4" />
			</StyledVideo>
		</StyledBackground>
	);
}

const StyledBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
`;

const StyledVideo = styled.video`
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: fill;
	vertical-align: top;
`;