// components/ui/ExperienceTooltip.jsx
import React from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../../helpers/TextStyling';

const ExperienceTooltip = ({ item, visible, style = {} }) => {
  if (!visible || !item) return null;

  return (
    <div
      style={{
        ...tooltipStyle,
        bottom: 'unset',
        left: '-400%',
        top: '-200%',
        zIndex: 900,
        transform: 'scale(0.34)',
        ...style,
      }}
    >
      {renderFormattedTooltip(`§f${item.title}\n§9§o${item.team}\n§7${item.description}`)}
    </div>
  );
};

export default ExperienceTooltip;
