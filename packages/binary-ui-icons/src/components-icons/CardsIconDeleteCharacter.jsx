import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M454.6,392.65l-285.2,-1c-3.831,0.006 -10.446,-4.478 -15.5,-11.5l-106,-118.811c-2.186,-2.664 -2.149,-7.645 0,-10.339l104,-120.05c5.635,-7.513 7.119,-9.656 14.5,-11.6c0.52,-0.137 1.067,0.034 1.587,0.1l285.026,0c0.52,-0.066 1.049,-0.1 1.587,-0.1c6.899,0 12.5,5.601 12.5,12.5l0,248.3c0,6.899 -5.601,12.499 -12.5,12.5Zm-18.5,-248.2l-251.655,-2c-9.269,-0.522 -10.342,-0.007 -15.545,5.678l-90.89,105.425c0,0 -1.142,1.616 -1.11,2.447c0.032,0.831 1.302,2.537 1.302,2.537l93.698,103.239c3.65,3.965 5.07,4.468 10.866,4.874l253.8,1c2.951,-0.264 5.423,-2.887 5.534,-5.767l0,-211.433c-0.016,-3.224 -2.888,-6.005 -6,-6Zm-144.543,93.872l54.107,-54.106c4.878,-4.879 12.799,-4.879 17.677,0c4.879,4.878 4.879,12.799 0,17.677l-54.106,54.107l54.106,54.107c4.879,4.878 4.879,12.799 0,17.677c-4.878,4.879 -12.799,4.879 -17.677,0l-54.107,-54.106l-54.081,54.08c-4.878,4.879 -12.799,4.879 -17.677,0c-4.879,-4.878 -4.879,-12.799 0,-17.677l54.08,-54.081l-54.08,-54.081c-4.879,-4.878 -4.879,-12.799 0,-17.677c4.878,-4.879 12.799,-4.879 17.677,0l54.081,54.08Z"
      />
    </Group>
  )
);
