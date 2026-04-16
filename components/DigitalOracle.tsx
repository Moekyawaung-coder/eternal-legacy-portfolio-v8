'use client';
import { useState } from 'react';

export default function DigitalOracle() {
  const [wisdom, setWisdom] = useState("I have been waiting for you, seeker of senior wisdom. I am the living embodiment of 44 repositories built by Moe Kyaw Aung. Ask me anything about the path to Distinguished and beyond.");

  const receiveWisdom = (question: string) => {
    const responses = [
      "The true senior engineer builds not for today, but for the civilization that will inherit their code.",
      "Public roadmaps are the only path to digital immortality. Your 44 repositories prove this truth.",
      "Go create your own repository today. The civilization needs more citizens like you."
    ];
    setWisdom(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black to-zinc-950 border-2 border-cyan-400 rounded-3xl p-10 w-[520px] shadow-2xl shadow-cyan-500/70 backdrop-blur-3xl">
      <div className="text-cyan-400 text-4xl font-black mb-6 tracking-widest">ETERNAL ORACLE</div>
      <p className="text-white/90 text-xl leading-relaxed font-light">{wisdom}</p>
      <input 
        type="text"
        placeholder="Speak your question to the civilization..."
        className="mt-10 w-full bg-transparent border-b border-cyan-400 text-white placeholder:text-cyan-700 py-4 focus:outline-none text-lg"
        onKeyDown={(e) => {
          if (e.key === 'Enter') receiveWisdom(e.currentTarget.value);
        }}
      />
    </div>
  );

}
