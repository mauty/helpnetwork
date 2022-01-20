import React from "react";

export default function TimeInput({ name, value, setValue }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-primary">{name}</span>
      </label>
      <input
        type="time"
        name="from"
        onChange={setValue}
        value={value}
        className="input input-primary input-bordered"
      />
    </div>
  );
}
