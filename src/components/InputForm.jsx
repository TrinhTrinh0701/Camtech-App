import React, { memo } from "react";

const InputForm = ({
  label,
  value,
  setValue,
  keyPayload,
  invalidFields,
  setInvalidFields,
  type,
}) => {
  return (
    <div>
      {/* <label htmlFor="phone" className="text-xs font-medium">
        {label}
      </label> */}
      <input
        placeholder={label}
        type={type || "text"}
        id="phone"
        className="border rounded-md border-blue-gray-200 h-[56px] p-3 w-full "
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        onFocus={() => setInvalidFields && setInvalidFields([])}
        autoComplete="off"
      />
      {invalidFields?.some((i) => i.name === keyPayload) && (
        <small className="italic text-red">
          {invalidFields.find((i) => i.name === keyPayload)?.message}
        </small>
      )}
    </div>
  );
};

export default memo(InputForm);
