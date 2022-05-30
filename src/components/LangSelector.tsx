import React from 'react';

export default function LangSelector() {
  return (
    <span className="langSelector">
      <i className="fa-solid fa-earth-europe" />
      Choisis ta langue :
      <select>
        <option selected value="FR">
          FR
        </option>
        <option value="EN">EN</option>
        <option value="DE">DE</option>
      </select>
    </span>
  );
}
