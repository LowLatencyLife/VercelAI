'use client';
import { useChat } from 'ai/react';

export default function ChatWindow() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return (
    <div className="w-full max-w-2xl">
      <div className="h-[500px] overflow-y-auto border p-4">
        {messages.map(m => (
          <div key={m.id}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
        <input value={input} onChange={handleInputChange} className="flex-1 border p-2"/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}