import React from "react";

const IntergrationsColumn = ({ integrations, className }) => {
  return (
    <div className={`${className} flex flex-col gap-4 pb-4`}>
      {integrations.map((integration, index) => (
        <div
          key={index}
          className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
          <div className="flex justify-center">
            <img
              src={integration.icon}
              alt={integration.name}
              className="size-24 "
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntergrationsColumn;
