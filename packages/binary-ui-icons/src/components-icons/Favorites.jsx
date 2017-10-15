import React from 'react';
import cardsIconHOC from '../hoc';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M200.462,199.004l44.606,-137.283c2.132,-6.561 9.19,-10.157 15.751,-8.025c4.593,1.492 7.733,5.398 8.472,9.858l43.998,135.41l142.903,0.44c6.899,0.021 12.483,5.64 12.462,12.539c-0.013,4.105 -2.008,7.745 -5.075,10.015c-0.573,0.63 -1.22,1.211 -1.938,1.729l-114.172,82.415l46.283,136.295c2.219,6.532 -1.284,13.637 -7.817,15.855c-4.572,1.553 -9.425,0.303 -12.687,-2.828l-115.521,-81.622l-117.944,81.149c-3.299,3.04 -8.129,4.201 -12.649,2.603c-0.645,-0.228 -1.26,-0.504 -1.842,-0.822c-1.714,-0.911 -3.24,-2.237 -4.416,-3.945c-2.737,-3.979 -2.853,-8.989 -0.727,-12.978l46.84,-132.486l-117.155,-83.738c-3.836,-2.11 -6.451,-6.177 -6.488,-10.863c-0.053,-6.899 5.505,-12.543 12.403,-12.597l144.713,-1.121Z"
      />
    </Group>
  )
);
