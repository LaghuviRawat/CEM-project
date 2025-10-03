// --- CEM-frontend/src/pages/AI.jsx ---

import React, { useState } from 'react';

const AI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('Ask the AI a question about your events!');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('Thinking...');

    try {
      // ⚠️ IMPORTANT: This URL MUST point to your secure backend endpoint!
      const res = await fetch('/api/ai-query', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error('Backend API error');

      const data = await res.json();
      setResponse(data.aiResponse); // Assuming your backend returns { aiResponse: '...' }

    } catch (error) {
      console.error("OpenAI request failed:", error);
      setResponse('Error: Failed to connect to AI service. Check your backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>AI Event Assistant</h1>
      <p style={{ marginBottom: '30px', color: '#6c757d' }}>
        Ask a question about events, scheduling, or content.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., What are the tech events this month?"
          disabled={loading}
          required
          style={{ flexGrow: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button type="submit" disabled={loading} style={{ 
            padding: '12px 20px', 
            backgroundColor: loading ? '#6c757d' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer' 
        }}>
          {loading ? 'Asking...' : 'Ask AI'}
        </button>
      </form>

      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        minHeight: '150px', 
        backgroundColor: '#f8f9fa' 
      }}>
        <p style={{ fontWeight: 'bold' }}>AI Response:</p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
      </div>
    </div>
  );
};

export default AI;