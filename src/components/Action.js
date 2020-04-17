import React from 'react';

const Action = (props) => (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
          className="button big-button"
        >
          What should I do?
        </button>
      </div>
    );

export default Action;