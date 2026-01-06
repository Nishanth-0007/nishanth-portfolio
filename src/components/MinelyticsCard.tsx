// components/MinelyticsCard.tsx
"use client";
import { motion } from "framer-motion";
import { Activity, Thermometer, ShieldCheck } from "lucide-react";

export default function MinelyticsCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl shadow-2xl shadow-emerald-500/10"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-emerald-400">Minelytics AI</h3>
        <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/20">
          LSTM & CNN Deployed
        </span>
      </div>
      
      <p className="text-slate-400 text-sm mb-6">
        Carbon emission tracking for coal mining using synthetic data and soil classification[cite: 17, 23].
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* Metric 1 */}
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 text-slate-300 mb-1">
            <Activity size={16} className="text-emerald-500" />
            <span className="text-xs">MAPE Error</span>
          </div>
          <p className="text-xl font-mono font-bold text-white">6.89%</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 text-slate-300 mb-1">
            <ShieldCheck size={16} className="text-blue-500" />
            <span className="text-xs">CNN Accuracy</span>
          </div>
          <p className="text-xl font-mono font-bold text-white">95.19%</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Soil Classification (Alluvial, Black, Clay, Laterite, Red) [cite: 21]</span>
          <span>Processing...</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "95%" }}
            transition={{ duration: 1.5 }}
            className="bg-emerald-500 h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}