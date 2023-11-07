import React from "react";
import { Audio } from "react-loader-spinner";

const ResultArea = ({ result, isSending }) => {
  if (isSending)
    return (
      <div className="flex p-[5%] justify-center">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="gray"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );

  return (
    <div className="p-[5%] space-y-8">
      {result.length ? (
        <>
          <h1 className="text-4xl font-bold">Summarized text</h1>
          <p className="max-w-[75ch]">{result}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultArea;
