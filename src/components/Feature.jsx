import { ShieldCheck, ShoppingCart, Smartphone, Timer } from 'lucide-react';

export function Feature({ icon: Icon, title, body, cta, href = '#apply' }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition hover:border-blue-500/30 hover:shadow-blue-500/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-4 text-blue-200/90">{body}</p>
      {cta && (
        <a href={href} className="inline-flex items-center text-blue-300 hover:text-white">
          {cta}
        </a>
      )}
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Feature
            icon={ShieldCheck}
            title="The Freedom to Pay Without Worries."
            body="Forget annual fees and surprise charges. With Novacard, your credit card truly gives you the freedom to use your money as you want, without hidden costs or handling fees. What you see is what you get."
            cta="I Want My Novacard"
          />
          <Feature
            icon={ShoppingCart}
            title="Real Cashback: Your Money Comes Back to You."
            body="Who doesn't love to save? With Novacard, you earn a 5% cashback on all your supermarket purchases and 0.5% on all other expenses. More than just points, it's money that returns to your pocket for what matters most."
            cta="Start Earning Cashback"
          />
          <Feature
            icon={Smartphone}
            title="Your Card, Your Control. Easy Management from Your App."
            body="Manage your Novacard from the palm of your hand. Block and unblock, check transactions, make transfers, and pay your card, all from our intuitive mobile application. Simple, fast, and secure."
            cta="Download the App and Apply"
          />
        </div>
      </div>
    </section>
  );
}

export function FastLimit() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-300">
                <Timer className="mr-2 h-4 w-4" /> Instant approval preview
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">Your Credit, Without Waiting. From $1,000 to $200,000 MXN.</h3>
              <p className="text-blue-200/90">Forget long processes. With Novacard, you can discover your assigned credit line – from $1,000 to $200,000 MXN – in just 3 minutes. Your financial future is just a few clicks away.</p>
            </div>
            <a href="#apply" className="mt-4 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400/40 transition hover:bg-blue-500 md:mt-0">
              Discover My Limit Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
