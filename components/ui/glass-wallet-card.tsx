"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Repeat,
  Copy,
  Check,
  Eye,
  EyeOff,
  TrendingUp,
  Sparkles,
  Wallet,
  ShieldCheck,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface GlassWalletCardProps extends React.HTMLAttributes<HTMLDivElement> {
  walletName?: string;
  networkName?: string;
  address?: string;
  balanceUSD?: number;
  cryptoBalance?: string;
  cryptoSymbol?: string;
  trendPercentage?: number;
  trendPeriod?: string;
  showActions?: boolean;
  onSend?: () => void;
  onReceive?: () => void;
  onSwap?: () => void;
  onBuy?: () => void;
}

export function GlassWalletCard({
  walletName = "Main Vault",
  networkName = "Ethereum Mainnet",
  address = "0x71C...39aB",
  balanceUSD = 48295.84,
  cryptoBalance = "14.285",
  cryptoSymbol = "ETH",
  trendPercentage = 12.8,
  trendPeriod = "24h",
  showActions = true,
  onSend,
  onReceive,
  onSwap,
  onBuy,
  className,
  ...props
}: GlassWalletCardProps) {
  const [copied, setCopied] = React.useState(false);
  const [showBalance, setShowBalance] = React.useState(true);

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("0x71C8491834928492849284928492839aB");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPositiveTrend = trendPercentage >= 0;

  return (
    <div
      className={cn(
        "relative w-full max-w-[420px] select-none",
        className
      )}
      {...props}
    >
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="absolute -top-6 -left-6 h-44 w-44 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-gradient-to-tl from-cyan-500/25 to-emerald-500/20 blur-3xl pointer-events-none" />

      {/* Main Glass Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
        className="relative overflow-hidden rounded-[28px] border border-white/40 dark:border-white/15 bg-gradient-to-b from-white/75 via-white/50 to-white/30 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-950/80 p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300"
      >
        {/* Shimmer Light Reflection Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-white/5 to-transparent pointer-events-none" />

        {/* Card Header: Network & Wallet ID */}
        <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20">
              <Wallet className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground leading-tight">
                {walletName}
              </h4>
              <p className="text-[11px] font-medium text-muted-foreground flex items-center gap-1 mt-0.5">
                <ShieldCheck className="h-3 w-3 text-emerald-500" />
                {networkName}
              </p>
            </div>
          </div>

          {/* Copy Address Pill */}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="group flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 hover:bg-background/90 px-3 py-1 text-xs font-medium text-foreground/80 shadow-xs backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Copy wallet address"
          >
            <span className="font-mono text-[11px]">{address}</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500 animate-in zoom-in" />
            ) : (
              <Copy className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </button>
        </div>

        {/* Balance Section */}
        <div className="relative z-10 my-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Total Portfolio Balance
            </span>
            <button
              type="button"
              onClick={() => setShowBalance(!showBalance)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md"
              aria-label={showBalance ? "Hide balance" : "Show balance"}
            >
              {showBalance ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <EyeOff className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
              {showBalance
                ? `$${balanceUSD.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : "••••••••••"}
            </h2>
          </div>

          {/* Crypto Equivalent & Trend Indicator */}
          <div className="flex items-center justify-between mt-2 pt-1">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/75">
              <span>
                {showBalance ? `${cryptoBalance} ${cryptoSymbol}` : "••• ETH"}
              </span>
            </div>

            <div
              className={cn(
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold shadow-xs",
                isPositiveTrend
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
              )}
            >
              <TrendingUp
                className={cn(
                  "h-3 w-3",
                  !isPositiveTrend && "rotate-180 text-rose-500"
                )}
              />
              <span>
                {isPositiveTrend ? "+" : ""}
                {trendPercentage}%
              </span>
              <span className="text-[10px] opacity-70 font-normal">
                {trendPeriod}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        {showActions && (
          <div className="relative z-10 mt-6 grid grid-cols-4 gap-2.5 pt-4 border-t border-border/40">
            {/* Send */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onSend}
              className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-white/60 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 border border-white/50 dark:border-white/10 hover:border-primary/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-xs">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-foreground/80 group-hover:text-foreground">
                Send
              </span>
            </motion.button>

            {/* Receive */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onReceive}
              className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-white/60 dark:bg-white/5 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-white/50 dark:border-white/10 hover:border-emerald-500/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200 shadow-xs">
                <ArrowDownLeft className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-foreground/80 group-hover:text-foreground">
                Receive
              </span>
            </motion.button>

            {/* Swap */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onSwap}
              className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-white/60 dark:bg-white/5 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 border border-white/50 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200 shadow-xs">
                <Repeat className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-foreground/80 group-hover:text-foreground">
                Swap
              </span>
            </motion.button>

            {/* Buy / Fund */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onBuy}
              className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-white/60 dark:bg-white/5 hover:bg-amber-500/10 dark:hover:bg-amber-500/20 border border-white/50 dark:border-white/10 hover:border-amber-500/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200 shadow-xs">
                <CreditCard className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-foreground/80 group-hover:text-foreground">
                Buy
              </span>
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function GlassWalletCardDemo() {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center p-6 bg-gradient-to-br from-slate-100 via-indigo-50/40 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-3xl">
      <GlassWalletCard />
    </div>
  );
}

export default GlassWalletCard;
