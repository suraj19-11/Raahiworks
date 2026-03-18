"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AuthContainer({ initialMode = "login" }: { initialMode?: "login" | "signup" }) {
  const { login, signup } = useAuth();
  const router = useRouter();
  
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        router.push("/dashboard");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 800);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = signup(name, email, phone, password);
      if (success) {
        router.push("/dashboard");
      } else {
        setError("An account with this email already exists");
      }
      setLoading(false);
    }, 800);
  };

  const toggleMode = () => {
    const newMode = !isLogin;
    setIsLogin(newMode);
    setError("");
    window.history.pushState(null, "", newMode ? "/login" : "/signup");
  };

  const LogoHeader = () => (
    <div className="flex items-center gap-3 mb-8">
      <div 
        className="h-10 w-10 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer shadow-sm"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" alt="Raahi Logo" className="w-full h-full object-cover" />
      </div>
      <span 
        className="text-xl font-bold text-text-primary cursor-pointer hover:text-primary transition-colors"
        onClick={() => router.push("/")}
      >
        Raahi
      </span>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      
      {/* ---------- DESKTOP UI (Sliding) ---------- */}
      <div className="hidden md:block relative w-[1000px] max-w-full h-[650px] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100/50">
        
        {/* Sign Up Pane (Left Pane) */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 px-14 py-10 flex flex-col justify-center transition-all duration-700 ease-in-out ${
            isLogin ? "opacity-0 invisible -translate-x-12" : "opacity-100 visible translate-x-0 z-10"
          }`}
        >
          <LogoHeader />
          <h1 className="text-3xl font-extrabold text-text-primary mb-2">Create Account</h1>
          <p className="text-sm text-text-secondary mb-6">Get started &mdash; it&apos;s free and takes a minute</p>
          
          {error && !isLogin && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Full Name</label>
               <div className="relative">
                 <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
               </div>
             </div>
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Email Address</label>
               <div className="relative">
                 <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
               </div>
             </div>
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Phone Number</label>
               <div className="relative">
                 <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
               </div>
             </div>
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Password</label>
               <div className="relative">
                 <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="input-field !pl-11 !pr-12 py-2.5 bg-gray-50/50" />
                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                 </button>
               </div>
             </div>
             <button type="submit" disabled={loading} className="btn-primary w-full gap-2 py-3 mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
               {loading && !isLogin ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Create Account <ArrowRight size={18} /></>}
             </button>
          </form>
        </div>

        {/* Sign In Pane (Right Pane) */}
        <div 
          className={`absolute top-0 left-1/2 h-full w-1/2 px-14 py-10 flex flex-col justify-center transition-all duration-700 ease-in-out ${
            !isLogin ? "opacity-0 invisible translate-x-12" : "opacity-100 visible translate-x-0 z-10"
          }`}
        >
          <LogoHeader />
          <h1 className="text-3xl font-extrabold text-text-primary mb-2">Sign In</h1>
          <p className="text-sm text-text-secondary mb-6">Enter your credentials to access your account</p>
          
          {error && isLogin && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Email Address</label>
               <div className="relative">
                 <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
               </div>
             </div>
             <div className="space-y-1.5">
               <label className="text-sm font-medium text-text-primary">Password</label>
               <div className="relative">
                 <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                 <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input-field !pl-11 !pr-12 py-2.5 bg-gray-50/50" />
                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                 </button>
               </div>
             </div>
             <div className="flex items-center justify-end">
               <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
             </div>
             <button type="submit" disabled={loading} className="btn-primary w-full gap-2 py-3 mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
               {loading && isLogin ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Sign In <ArrowRight size={18} /></>}
             </button>
          </form>
        </div>

        {/* Overlay Container */}
        <motion.div 
           className="absolute top-0 left-0 w-1/2 h-full z-50 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary shadow-[0_0_40px_rgba(255,107,44,0.3)]"
           initial={false}
           animate={{ x: isLogin ? "0%" : "100%" }}
           transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }}
        >
           <div className="relative w-full h-full flex items-center justify-center text-center p-14 text-white">
              <div className="absolute top-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div 
                    key="signup-promo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-6 relative z-10 w-full"
                  >
                    <div className="h-28 w-28 rounded-[1.25rem] overflow-hidden shadow-2xl mb-4 border border-white/10">
                       <img src="/logo.png" alt="Raahi" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight">Join Raahi Today!</h2>
                    <p className="text-white/90 text-[15px] leading-relaxed max-w-[280px]">
                      Enter your personal details and start your journey with us to find top local professionals.
                    </p>
                    <button 
                      onClick={toggleMode}
                      className="mt-6 px-12 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
                    >
                      Sign Up
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="login-promo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-6 relative z-10 w-full"
                  >
                    <div className="h-28 w-28 rounded-[1.25rem] overflow-hidden shadow-2xl mb-4 border border-white/10">
                       <img src="/logo.png" alt="Raahi" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight">Welcome Back!</h2>
                    <p className="text-white/90 text-[15px] leading-relaxed max-w-[280px]">
                      To keep connected with us please sign in with your personal info.
                    </p>
                    <button 
                      onClick={toggleMode}
                      className="mt-6 px-12 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
                    >
                      Sign In
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </motion.div>
      </div>

      {/* ---------- MOBILE UI (Stack/Toggle) ---------- */}
      <div className="md:hidden w-full max-w-[440px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-6 sm:p-8 border border-gray-100/50">
        <LogoHeader />
        
        {/* Toggle Switch */}
        <div className="flex bg-gray-50 p-1.5 rounded-xl mb-8 relative z-0 border border-gray-100">
          <motion.div 
            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm -z-10 border border-gray-100"
            animate={{ left: isLogin ? "6px" : "calc(50% + 0px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
          <button 
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${isLogin ? "text-primary" : "text-text-secondary hover:text-text-primary"}`}
            onClick={() => { setIsLogin(true); window.history.pushState(null, "", "/login"); setError(""); }}
          >
            Sign In
          </button>
          <button 
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${!isLogin ? "text-primary" : "text-text-secondary hover:text-text-primary"}`}
            onClick={() => { setIsLogin(false); window.history.pushState(null, "", "/signup"); setError(""); }}
          >
            Sign Up
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div 
              key="mobile-login" 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl font-bold text-text-primary mb-1">Sign In</h1>
              <p className="text-sm text-text-secondary mb-6">Enter your credentials to access your account</p>
              {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100 mb-6">{error}</div>}
              <form onSubmit={handleLogin} className="space-y-4">
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Email Address</label>
                   <div className="relative">
                     <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
                   </div>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Password</label>
                   <div className="relative">
                     <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input-field !pl-11 !pr-12 py-2.5 bg-gray-50/50" />
                     <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                     </button>
                   </div>
                 </div>
                 <div className="flex items-center justify-end">
                   <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
                 </div>
                 <button type="submit" disabled={loading} className="btn-primary w-full gap-2 py-3 mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
                   {loading ? <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" /> : <>Sign In <ArrowRight size={18} /></>}
                 </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="mobile-signup" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl font-bold text-text-primary mb-1">Create Account</h1>
              <p className="text-sm text-text-secondary mb-6">Get started &mdash; it&apos;s free and takes a minute</p>
              {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-100 mb-6">{error}</div>}
              <form onSubmit={handleSignup} className="space-y-4">
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Full Name</label>
                   <div className="relative">
                     <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
                   </div>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Email Address</label>
                   <div className="relative">
                     <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
                   </div>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Phone Number</label>
                   <div className="relative">
                     <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="input-field !pl-11 py-2.5 bg-gray-50/50" />
                   </div>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-medium text-text-primary">Password</label>
                   <div className="relative">
                     <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                     <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="input-field !pl-11 !pr-12 py-2.5 bg-gray-50/50" />
                     <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                     </button>
                   </div>
                 </div>
                 <button type="submit" disabled={loading} className="btn-primary w-full gap-2 py-3 mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
                   {loading ? <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" /> : <>Create Account <ArrowRight size={18} /></>}
                 </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  );
}
