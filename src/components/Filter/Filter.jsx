import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          placeholder="Search contact"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
