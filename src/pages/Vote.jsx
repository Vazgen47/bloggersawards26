import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Vote() {
  const [params] = useSearchParams();

  const name = params.get("name");
  const image = params.get("image");

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 📩 SEND CODE (backend call)
  const sendCode = async () => {
    if (!email) return setMessage("Enter email first");

    setLoading(true);

    await fetch("http://localhost:3001/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);
    setStep(2);
    setMessage("Code sent to your email 📩");
  };

  // ✅ VERIFY CODE
  const confirmVote = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:3001/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setStep(3);
      setMessage("🎉 You voted successfully!");
    } else {
      setMessage("❌ Wrong code");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-md">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-10"
        >
          Vote System
        </motion.h1>

        {/* Candidate */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <img
            src={image}
            className="w-28 h-28 mx-auto rounded-full object-cover border border-white/10"
          />
          <h2 className="mt-3 text-xl font-semibold">{name}</h2>
          <p className="text-white/40 text-sm">Voting Candidate</p>
        </motion.div>

        {/* STEPS */}
        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              className="mt-6 flex flex-col gap-3"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
            >
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-2xl bg-white/10 border border-white/10 text-white outline-none"
              />

              <button
                onClick={sendCode}
                disabled={loading}
                className="py-3 rounded-2xl bg-white text-black font-bold hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send Code"}
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              className="mt-6 flex flex-col gap-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <input
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="p-4 rounded-2xl bg-white/10 border border-white/10 text-white outline-none"
              />

              <button
                onClick={confirmVote}
                disabled={loading}
                className="py-3 rounded-2xl bg-white text-black font-bold hover:scale-105 transition"
              >
                {loading ? "Checking..." : "Confirm Vote"}
              </button>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              className="mt-10 text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-3xl text-green-400 font-bold">
                🎉 Vote Confirmed
              </h3>
              <p className="text-white/40 mt-2">
                Thank you for voting!
              </p>
            </motion.div>
          )}

        </AnimatePresence>

        {/* MESSAGE */}
        {message && (
          <p className="mt-5 text-center text-white/50">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}