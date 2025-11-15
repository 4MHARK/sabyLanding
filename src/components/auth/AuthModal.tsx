import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
} from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  RefreshCw,
  X,
} from "lucide-react";
import { useRouter } from "next/router";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuthModal } from "../../contexts/AuthModalContext";

const MASKED_EMAIL = "j***@saby.com";

const socialButtons = [
  {
    name: "Google",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.5 12.23c0-.78-.07-1.53-.2-2.26H12v4.27h5.84c-.25 1.37-1 2.53-2.15 3.3v2.75h3.47c2.03-1.87 3.34-4.63 3.34-8.06Z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.47-.98 7.29-2.71l-3.47-2.75c-.96.64-2.2 1.02-3.82 1.02-2.94 0-5.43-1.99-6.32-4.67H2.05v2.9A11 11 0 0 0 12 23Z"
        />
        <path
          fill="#FBBC05"
          d="M5.68 13.89c-.22-.64-.35-1.33-.35-2.04s.13-1.4.35-2.04V6.91H2.05A11 11 0 0 0 1 11.85c0 1.78.43 3.45 1.05 4.94l3.63-2.9Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.58c1.62 0 3.07.56 4.21 1.67l3.15-3.15C17.47 1.73 14.97.75 12 .75A11 11 0 0 0 2.05 6.91l3.63 2.9C6.57 6.57 9.06 4.58 12 4.58Z"
        />
      </svg>
    ),
  },
  {
    name: "Apple",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          d="M18.71 3.43c-.99 1.18-2.61 1.32-3.18 1.35-.68.07-1.77-.96-3.23-.94-1.65.02-3.14.96-3.98 2.43-1.7 2.93-.43 7.24 1.22 9.63.81 1.18 1.76 2.51 3.07 2.46 1.23-.05 1.69-.8 3.17-.8 1.47 0 1.89.8 3.19.78 1.32-.02 2.16-1.2 2.97-2.39.92-1.36 1.3-2.67 1.32-2.74-.03-.01-2.55-.98-2.58-3.85-.02-2.41 1.98-3.55 2.07-3.61-1.13-1.65-2.9-1.88-3.07-1.9Z"
          fill="currentColor"
        />
        <path
          d="M15.51 1.25c-.83.39-1.52 1.03-1.99 1.83-.48.82-.7 1.7-.69 2.6"
          stroke="#111"
          strokeWidth="0.5"
        />
      </svg>
    ),
  },
];

const LoginView: React.FC<{
  isDark: boolean;
  onForgot: () => void;
  onSuccess: () => void;
}> = ({ isDark, onForgot, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
      router.push("/");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="modal-email"
          className={`flex items-center gap-2 text-sm font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}>
          <Mail className="w-4 h-4" />
          Email address
        </label>
        <input
          id="modal-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
            isDark
              ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500/40"
              : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500/40"
          }`}
          placeholder="jamie@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="modal-password"
          className={`flex items-center gap-2 text-sm font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}>
          <Lock className="w-4 h-4" />
          Password
        </label>
        <div className="relative mt-2">
          <input
            id="modal-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
              isDark
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500/40"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500/40"
            }`}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${
              isDark
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-500 hover:text-gray-700"
            } transition-colors`}>
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          <span className={isDark ? "text-gray-300" : "text-gray-600"}>
            Remember me
          </span>
        </label>
        <button
          type="button"
          onClick={onForgot}
          className="text-blue-500 hover:text-blue-400 font-medium">
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Sign in securely
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

const ForgotPasswordView: React.FC<{
  isDark: boolean;
  onOtp: () => void;
}> = ({ isDark, onOtp }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onOtp();
    }, 1500);
  };

  return (
    <>
      <p className={isDark ? "text-gray-300" : "text-gray-600"}>
        Enter the email associated with your workspace. We’ll send a one-time
        reset link and verification code.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="forgot-email"
            className={`flex items-center gap-2 text-sm font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
            <Mail className="w-4 h-4" />
            Email address
          </label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
              isDark
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500/40"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500/40"
            }`}
            placeholder="jamie@example.com"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Send recovery link
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </>
  );
};

const OtpView: React.FC<{
  isDark: boolean;
  onSuccess: () => void;
}> = ({ isDark, onSuccess }) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some((digit) => digit === "")) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onSuccess();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className={isDark ? "text-gray-300" : "text-gray-600"}>
        We sent a six-digit code to{" "}
        <span className="font-semibold">{MASKED_EMAIL}</span>. Enter it below to
        continue.
      </p>
      <div className="flex justify-center gap-3">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`w-12 h-14 text-center text-2xl font-semibold rounded-2xl border focus:outline-none focus:ring-2 transition-all ${
              isDark
                ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/40"
                : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500/40"
            }`}
            autoFocus={index === 0}
          />
        ))}
      </div>
      <button
        type="submit"
        disabled={code.some((digit) => digit === "") || isVerifying}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
        {isVerifying ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Verify code
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className={isDark ? "text-gray-400" : "text-gray-500"}>
          Code not received?
        </span>
        <button
          type="button"
          className="flex items-center gap-1 text-blue-500 hover:text-blue-400 font-semibold">
          <RefreshCw className="w-4 h-4" />
          Resend in 45s
        </button>
      </div>
    </form>
  );
};

const AuthModal: React.FC = () => {
  const { isOpen, closeModal, view, setView } = useAuthModal();
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div
        className={`relative w-full max-w-6xl grid lg:grid-cols-2 gap-8 p-6 sm:p-10 rounded-[32px] border ${
          isDark ? "border-gray-800 bg-gray-950/90" : "border-white bg-white"
        } shadow-2xl shadow-blue-500/10 animate-[fadeIn_0.4s_ease]`}>
        <button
          onClick={closeModal}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition ${
            isDark
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/30 text-blue-600 text-sm font-medium w-fit">
            <ShieldCheck className="w-4 h-4" />
            Enterprise-grade security
          </div>
          <div className="space-y-4">
            <h2
              className={`text-4xl sm:text-5xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              Welcome back to your command center
            </h2>
            <p className={isDark ? "text-gray-300" : "text-gray-600"}>
              Sign in to orchestrate your data, automate workflows, and stay on
              top of every signal.
            </p>
          </div>
          <div
            className={`rounded-3xl border ${
              isDark
                ? "border-gray-800 bg-gray-900/40"
                : "border-white bg-white"
            } shadow-lg shadow-blue-500/5 backdrop-blur-md p-8 space-y-8`}>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                  Active sessions
                </p>
                <p className="text-3xl font-semibold text-blue-500">3,482</p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                  Security score
                </p>
                <p className="text-3xl font-semibold text-emerald-400">99.4%</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                S
              </div>
              <div>
                <p
                  className={`font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Saby Identity
                </p>
                <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                  Single sign-on enabled
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`rounded-3xl border ${
            isDark ? "border-gray-800 bg-gray-900/70" : "border-white bg-white"
          } shadow-xl shadow-blue-500/10 backdrop-blur-md p-8 space-y-8`}>
          <div className="space-y-2 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h3
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              {view === "login" && "Sign in to Saby"}
              {view === "forgot" && "Reset your password"}
              {view === "otp" && "Enter verification code"}
            </h3>
          </div>

          {view === "login" && (
            <Fragment>
              <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                Continue with your workspace identity or email credentials.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {socialButtons.map((button) => (
                  <button
                    key={button.name}
                    className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      isDark
                        ? "border-gray-800 hover:border-gray-700 bg-gray-800/60 text-gray-200"
                        : "border-gray-200 hover:border-gray-300 bg-white text-gray-700"
                    }`}>
                    {button.icon}
                    {button.name}
                  </button>
                ))}
              </div>
              <div className="relative text-center">
                <div className="absolute inset-x-0 top-1/2 border-t border-gray-200 dark:border-gray-800" />
                <span
                  className={`relative px-4 text-xs uppercase tracking-[0.2em] ${
                    isDark
                      ? "bg-gray-900 text-gray-500"
                      : "bg-white text-gray-400"
                  }`}>
                  Or continue with email
                </span>
              </div>
              <LoginView
                isDark={isDark}
                onForgot={() => setView("forgot")}
                onSuccess={() => closeModal()}
              />
              <p className="text-sm text-center">
                <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                  New here?{" "}
                </span>
                <button className="text-blue-500 hover:text-blue-400 font-semibold">
                  Create an account
                </button>
              </p>
            </Fragment>
          )}

          {view === "forgot" && (
            <ForgotPasswordView isDark={isDark} onOtp={() => setView("otp")} />
          )}

          {view === "otp" && (
            <OtpView
              isDark={isDark}
              onSuccess={() => {
                closeModal();
              }}
            />
          )}

          {view !== "login" && (
            <button
              onClick={() => setView("login")}
              className={`w-full text-sm font-medium ${
                isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              ← Back to sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
