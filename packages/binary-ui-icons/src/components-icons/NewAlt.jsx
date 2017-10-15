import React from 'react';
import cardsIconHOC from '../hoc';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M254,65.51c0.666,-0.007 1.333,-0.01 2,-0.01c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-104.138 84.741,-188.884 188.5,-190.49l0,25.002c-89.96,1.602 -163.5,75.148 -163.5,165.488c0,91.342 74.158,165.5 165.5,165.5c91.342,0 165.5,-74.158 165.5,-165.5c0,-91.342 -74.158,-165.5 -165.5,-165.5c-0.668,0 -1.334,0.004 -2,0.012l0,-25.002Z"
      />
      <Shape
        d="M268.676,272.679l0,67.137c0,6.891 -5.595,12.486 -12.486,12.486c-6.891,0 -12.486,-5.595 -12.486,-12.486l0,-67.137l-67.439,0c-6.892,0 -12.488,-5.596 -12.488,-12.488c0,-6.892 5.596,-12.488 12.488,-12.488l67.439,0l0,-67.137c0,-6.891 5.595,-12.486 12.486,-12.486c6.891,0 12.486,5.595 12.486,12.486l0,67.137l67.059,0c6.892,0.001 12.488,5.596 12.488,12.488c0,6.892 -5.596,12.488 -12.488,12.488l-67.059,0Z"
      />
    </Group>
  )
);
