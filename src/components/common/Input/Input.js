import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    label,
    onChange,
    register,
    name,
    type,
    max,
    readOnly = false,
    disabled = false,
    maxLength,
    min,
    placeholder,
    required = false,
    value = "",
    pattern,
    errorText = "",
    accept = ".jpg, .png, .pdf",
    multiple = false,
    hintText = "",
    showTextOnly = false,
  } = props;

  const validateNumber = (value) => {
    if (value === "") {
      return "This field is required"; // Handle empty input
    } else if (isNaN(value)) {
      return "Please enter a valid number"; // Check for valid number
    }
    return undefined; // No error if valid number
  };

  
  return (
    <div className={`${style.inputContainer} ${className}`}>
      <span className={`${style.inputLabel} ${required && style.required}`}>
        {label}
      </span>
      {showTextOnly ? (
        <div>{value || "N/A"}</div>
      ) : (
        <>
          <div className={style.inputBox}>
            <input
              ref={ref}
              {...(name === "account_no"
                ? {
                    ...register(name, {
                      required: true,
                     validate: validateNumber,
                    }),
                  }
                : { ...register(name, { required }) })}
              readOnly={readOnly}
              onChange={onChange}
              max={max}
              className={`${style.input} ${style.inputHeight} ${
                !!errorText && style.error
              }  `}
              id={name}
              type={type}
              disabled={disabled}
              maxLength={maxLength}
              min={min}
              placeholder={placeholder}
              required={required}
              //   value={value}
              accept={accept}
              pattern={pattern}
              multiple={multiple}
            />
          </div>
          {(!!errorText || !!hintText) && (
            <div
              className={`${style.hintText} ${
                !!errorText ? style.errorText : null
              }`}
            >
              {errorText || hintText}
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default Input;
