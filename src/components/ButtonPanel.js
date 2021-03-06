import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div
    className="flex flex-column"
  >
    <div>
      <Button
        handleClick={clickHandler}
        name="AC"
      />
      <Button
        handleClick={clickHandler}
        name="+/-"
      />
      <Button
        handleClick={clickHandler}
        name="%"
      />
      <Button
        specialClass="operation-btn"
        handleClick={clickHandler}
        name="÷"
      />
    </div>
    <div>
      <Button
        handleClick={clickHandler}
        name="7"
      />
      <Button
        handleClick={clickHandler}
        name="8"
      />
      <Button
        handleClick={clickHandler}
        name="9"
      />
      <Button
        specialClass="operation-btn"
        handleClick={clickHandler}
        name="X"
      />
    </div>
    <div>
      <Button
        handleClick={clickHandler}
        name="4"
      />
      <Button
        handleClick={clickHandler}
        name="5"
      />
      <Button
        handleClick={clickHandler}
        name="6"
      />
      <Button
        specialClass="operation-btn"
        handleClick={clickHandler}
        name="-"
      />
    </div>
    <div>
      <Button
        handleClick={clickHandler}
        name="1"
      />
      <Button
        handleClick={clickHandler}
        name="2"
      />
      <Button
        handleClick={clickHandler}
        name="3"
      />
      <Button
        specialClass="operation-btn"
        handleClick={clickHandler}
        name="+"
      />
    </div>
    <div>
      <Button
        handleClick={clickHandler}
        name="0"
      />
      <Button
        handleClick={clickHandler}
        name="."
      />
      <Button
        specialClass="double-button"
        handleClick={clickHandler}
        name="="
      />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
