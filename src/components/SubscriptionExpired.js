import { AlertTriangle, MessageCircle } from "lucide-react";

export default function SubscriptionExpired() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/55 backdrop-blur-md">

      <div className="flex min-h-screen items-center justify-center p-4 md:p-8">

        <div className="w-full max-w-6xl rounded-[30px]
          border border-white/10
          bg-slate-900/45
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.55)]
          p-6 sm:p-8 lg:p-12
          text-center
          text-white">

          {/* Warning Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <AlertTriangle className="h-12 w-12 text-yellow-400" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-wide text-white drop-shadow-lg">
            Website Temporarily
          </h1>

          <h2 className="mt-2 text-5xl sm:text-6xl font-black text-red-500 drop-shadow-lg">
            Suspended
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-8 text-gray-100">
            Your{" "}
            <span className="font-bold text-white">
              FREE monthly hosting & maintenance period
            </span>{" "}
            has expired.
            <br className="hidden sm:block" />
            Please renew your subscription to restore full access to your
            website.
          </p>

          {/* Pricing Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Basic */}
            <div className="rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-lg p-8 transition duration-300 hover:scale-105 hover:bg-slate-700/60">
              <h3 className="text-2xl font-bold text-white">
                Basic Plan
              </h3>

              <div className="my-5 border-t border-white/10"></div>

              <p className="text-5xl font-black text-green-400">
                KSh 2,000
              </p>

              <span className="text-gray-300">
                / Month
              </span>
            </div>

            {/* Standard */}
            <div className="rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-lg p-8 transition duration-300 hover:scale-105 hover:bg-slate-700/60">
              <h3 className="text-2xl font-bold text-white">
                Standard Plan
              </h3>

              <div className="my-5 border-t border-white/10"></div>

              <p className="text-5xl font-black text-blue-400">
                KSh 5,000
              </p>

              <span className="text-gray-300">
                / Month
              </span>
            </div>

            {/* Premium */}
            <div className="rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-lg p-8 transition duration-300 hover:scale-105 hover:bg-slate-700/60">
              <h3 className="text-2xl font-bold text-white">
                Premium Plan
              </h3>

              <div className="my-5 border-t border-white/10"></div>

              <p className="text-5xl font-black text-purple-400">
                KSh 7,000
              </p>

              <span className="text-gray-300">
                / Month
              </span>
            </div>

          </div>

          {/* Footer */}
          <p className="mt-10 text-base sm:text-lg text-gray-200 leading-8">
            Please contact your website administrator after payment.
            <br />
            Your website will be restored immediately once your subscription is renewed.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254793878019"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-green-700 hover:scale-105"
          >
            <MessageCircle size={24} />
            Contact Administrator
          </a>

          {/* Notice */}
          <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-sm text-yellow-100 leading-7">
            <strong>Notice:</strong> This website has been temporarily suspended
            because the free monthly hosting subscription has expired.
            Services will automatically resume after the subscription is renewed.
          </div>

        </div>

      </div>

    </div>
  );
}