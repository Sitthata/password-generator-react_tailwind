import React from "react";

const Strength = ({ strength }) => {

 const strengthLevels = ["None", "Weak", "Medium", "Medium", "Strong"];
    
  return (
    <div className="flex items-center justify-between p-4 my-3 bg-background">
      <p className="text-xl font-bold uppercase text-grey-light">Strength</p>
      <div className="flex items-center gap-1">
        <p className="mx-5 text-2xl font-bold text-white uppercase ">{strengthLevels[strength]}</p>
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
