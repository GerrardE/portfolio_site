import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms';

const FeatureItem = ({ headerText, paraText, iconClassName }) => {
  return (
    <div className="feature-item">
      <Icon className={iconClassName} />
      <h3>{headerText}</h3>
      <p className="text-muted">{paraText}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  headerText: PropTypes.string.isRequired,
  paraText: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
}

export default FeatureItem;
