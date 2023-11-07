"use client";
import ThemeToggle from "./components/ThemeToggle";
import SummarizeForm from "./components/SummarizeForm";
import ResultArea from "./components/ResultArea";
import { useState } from "react";

const Page = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <SummarizeForm
        setResult={setResult}
        isSending={isSending}
        setIsSending={setIsSending}
      />
      <ResultArea result={result} isSending={isSending} />
    </main>
  );
};
export default Page;
