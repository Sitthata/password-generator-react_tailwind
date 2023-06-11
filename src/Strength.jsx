import React from "react";

const Strength = ({ strength }) => {
  return (
    <div className="flex justify-between p-4 my-2 bg-background">
      <p className="text-xl font-bold uppercase text-grey-light">Strength</p>
      <div className="flex gap-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-7 mr-1 border border-white ${
              index < strength ? "bg-primary" : "bg-background"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Strength;
