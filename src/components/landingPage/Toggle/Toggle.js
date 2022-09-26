/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { HiPlus, HiMinus } from 'react-icons/hi';
import styles from '../../../assets/scss/LandingPage.module.scss';

const Toggle = ({ toggle }) => {
  // const { toggle } = props;

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <li>
      <div className={styles['curbside-header']}>
        <div className="flex-unit d-flex">
          <div className={styles['header-icon']}><img src={toggle.icons} alt={toggle.icons} /></div>
          <h4>{toggle.title}</h4>
        </div>
        <div id={toggle.id} className={styles['show-btn']}>
          <button
            type="button"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? (
              <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                <HiMinus />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                <HiPlus />
              </IconContext.Provider>
            ) }
          </button>
        </div>
      </div>
      <p {...getCollapseProps()}>
        {toggle.paragraph}
        {' '}
        🙈
      </p>
    </li>
  );
};

Toggle.propTypes = {
  toggle: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Toggle;
