async function query(data) {
  const API_TOKEN = "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";
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export default query;
