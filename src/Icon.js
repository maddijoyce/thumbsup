import * as React from 'react';
import glam from 'glamorous';
import { keyframes } from 'glamor';
import { faUpload } from '@fortawesome/pro-light-svg-icons/faUpload';

export const spins = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(365deg)' },
});

export const icons = {
  Upload: faUpload,
};

export const IconSvg = glam.svg(({ spin, size }) => ({
  animation: spin ? `${spins} 2s infinite linear` : '',
  height: size || 25,
  width: size || 25,
}));

const Icon = ({ style, icon, colour, size, spin }) => (
  <IconSvg
    spin={spin}
    size={size}
    style={style}
    viewBox={icon ? `0 0 ${icons[icon].icon[0]} ${icons[icon].icon[1]}` : '0 0 0 0'}>
    <path d={icon && icons[icon].icon[4]} fill={colour || '#FFFFFF'} />
  </IconSvg>
);

export default Icon;