import React from 'react';
import { GoTrashcan } from "react-icons/go";

const Option = (props) => (
      <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>        
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
          className="button small-button--link mx-s"
        >
          <GoTrashcan />
        </button>
      </div>
    );

export default Option;