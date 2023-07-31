import React, { memo } from "react";

const InputForm = ({ label, value, setValue, keyPayload, type }) => {
  return (
    <div>
      <input
        placeholder={label}
        type={type || "text"}
        id="phone"
        className="border rounded-md border-blue-gray-200 h-[56px] p-3 w-full "
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        autoComplete="off"
      />
    </div>
  );
};

export default memo(InputForm);
