"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
}

interface Job {
  id: string;
  serviceType: string;
  description: string;
  workerPreference: string;
  budget: string;
  location: string;
  dateTime: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  jobs: Job[];
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, phone: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  addJob: (job: Omit<Job, "id" | "status" | "createdAt">) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("raahi_user");
    const savedJobs = localStorage.getItem("raahi_jobs");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedJobs) setJobs(JSON.parse(savedJobs));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("raahi_user", JSON.stringify(user));
    else localStorage.removeItem("raahi_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("raahi_jobs", JSON.stringify(jobs));
  }, [jobs]);

  const login = useCallback((email: string, _password: string) => {
    const savedAccounts = JSON.parse(localStorage.getItem("raahi_accounts") || "[]");
    const account = savedAccounts.find((a: { email: string }) => a.email === email);
    if (account) {
      const userData: User = { id: account.id, name: account.name, email: account.email, phone: account.phone };
      setUser(userData);
      const savedJobs = JSON.parse(localStorage.getItem(`raahi_jobs_${account.id}`) || "[]");
      setJobs(savedJobs);
      return true;
    }
    // Fallback: create user on-the-fly for demo
    const newUser: User = { id: Date.now().toString(), name: email.split("@")[0], email, phone: "" };
    setUser(newUser);
    return true;
  }, []);

  const signup = useCallback((name: string, email: string, phone: string, _password: string) => {
    const savedAccounts = JSON.parse(localStorage.getItem("raahi_accounts") || "[]");
    const exists = savedAccounts.find((a: { email: string }) => a.email === email);
    if (exists) return false;
    const newUser: User = { id: Date.now().toString(), name, email, phone };
    savedAccounts.push({ ...newUser, password: _password });
    localStorage.setItem("raahi_accounts", JSON.stringify(savedAccounts));
    setUser(newUser);
    setJobs([]);
    return true;
  }, []);

  const logout = useCallback(() => {
    if (user) {
      localStorage.setItem(`raahi_jobs_${user.id}`, JSON.stringify(jobs));
    }
    setUser(null);
    setJobs([]);
  }, [user, jobs]);

  const updateProfile = useCallback((data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : null));
  }, []);

  const addJob = useCallback((jobData: Omit<Job, "id" | "status" | "createdAt">) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setJobs((prev) => {
      const updated = [newJob, ...prev];
      if (user) localStorage.setItem(`raahi_jobs_${user.id}`, JSON.stringify(updated));
      return updated;
    });
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, jobs, isAuthenticated: !!user, login, signup, logout, updateProfile, addJob }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
