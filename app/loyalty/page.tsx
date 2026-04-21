"use client";

import { motion } from "framer-motion";
import { Gift, Crown, Calendar, ArrowRight, Sparkles, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockLoyaltyAccount } from "@/lib/mock-data";
import Link from "next/link";

const tiers = [
  {
    name: "Bronze",
    points: "0 - 199",
    benefits: [
      "Earn 1 point per ₹100 spent",
      "Birthday month 10% discount",
      "Priority booking",
    ],
    icon: Star,
  },
  {
    name: "Silver",
    points: "200 - 499",
    benefits: [
      "Earn 1.2 points per ₹100 spent",
      "Birthday month 15% discount",
      "Priority booking",
      "Free hair treatment annually",
    ],
    icon: Crown,
  },
  {
    name: "Gold",
    points: "500+",
    benefits: [
      "Earn 1.5 points per ₹100 spent",
      "Birthday month 20% discount",
      "VIP priority booking",
      "Quarterly complimentary service",
      "Exclusive event invitations",
    ],
    icon: Crown,
  },
];

export default function LoyaltyPage() {
  const account = mockLoyaltyAccount;
  const progressPercentage = ((account.points % 200) / 200) * 100;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-px bg-gold"
            />
            <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
              Rewards Programme
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight"
          >
            Latre
            <br />
            <span className="text-gold italic">Rewards</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-lg mt-6 max-w-xl"
          >            Earn points with every visit and unlock exclusive benefits. The more you visit, the more you earn.
          </motion.p>        </div>      </section>

      {/* Account Card */}      <section className="py-12 -mt-16"
      >        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12"
        >          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >            <Card className="bg-white border-gold/20 shadow-xl"
            >              <CardHeader className="pb-6"
            >                <div className="flex items-center justify-between"
              >                  <div>                    <p className="text-muted">Welcome back,</p>                    <CardTitle className="font-heading text-3xl text-dark mt-1">                      {account.clientName}                    </CardTitle>                  </div>                  <Badge className="bg-gold/10 text-gold border-gold/30 px-4 py-1.5 font-subheading text-xs uppercase tracking-[0.15em]"
                  >                    <Crown className="w-4 h-4 mr-2" />                    {account.tier} Member                  </Badge>                </div>              </CardHeader>              <CardContent className="space-y-8"
            >                <div className="flex items-center justify-between"
              >                  <div>                    <p className="font-heading text-6xl font-semibold text-dark">{account.points}</p>                    <p className="text-muted mt-1 font-subheading text-xs uppercase tracking-[0.2em]">Available Points</p>                  </div>                  <div className="text-right">                    <p className="font-heading text-3xl text-gold">₹{account.totalSpend.toLocaleString()}</p>                    <p className="text-muted mt-1 font-subheading text-xs uppercase tracking-[0.2em]">Total Spend</p>                  </div>                </div>                <div className="space-y-3"
              >                  <div className="flex justify-between text-sm"
                  >                    <span className="text-muted">Progress to {account.tier === "Gold" ? "Platinum" : "Gold"}</span>                    <span className="text-gold font-medium">{account.pointsToNextTier} points needed</span>                  </div>                  <div className="h-3 bg-gold/10 overflow-hidden"
                  >                    <div
                      className="h-full bg-gold transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    />                  </div>                </div>                <div className="pt-6 border-t border-gold/10"
                >                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center w-full py-4 bg-gold text-dark font-medium hover:bg-gold-light transition-colors font-subheading text-sm tracking-[0.2em] uppercase rounded-sm"
                  >                    Book Now to Earn Points                    <ArrowRight className="ml-2 w-4 h-4" />                  </Link>                </div>              </CardContent>            </Card>          </motion.div>        </div>      </section>

      {/* Tiers Section */}      <section className="section-padding"
      >        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
        >          <div className="text-center mb-16"
          >            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-4xl font-semibold text-dark"
            >              Membership <span className="text-gold italic">Tiers</span>            </motion.h2>            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted mt-4 max-w-2xl mx-auto"
            >              Progress through our tiers to unlock more rewards and exclusive benefits.            </motion.p>          </div>          <div className="grid md:grid-cols-3 gap-8"
          >            {tiers.map((tier, index) => (              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >                <Card
                  className={`h-full border-gold/20 transition-all duration-500 hover:shadow-xl ${
                    account.tier === tier.name
                      ? "ring-2 ring-gold bg-gold/5 border-gold/30"
                      : "bg-white hover:border-gold/30"
                  }`}
                >                  <CardHeader>                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-4"
                    >                      <tier.icon className="w-7 h-7 text-gold" />                    </div>                    <CardTitle className="font-heading text-2xl text-dark">                      {tier.name}                    </CardTitle>                    <p className="text-muted mt-1">{tier.points} points</p>                  </CardHeader>                  <CardContent>                    <ul className="space-y-4"
                    >                      {tier.benefits.map((benefit) => (                        <li key={benefit} className="flex items-start text-sm"
                        >                          <div className="w-6 h-6 bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0"
                          >                            <Gift className="w-3 h-3 text-gold" />                          </div>                          <span className="text-muted">{benefit}</span>                        </li>                      ))}                    </ul>                  </CardContent>                </Card>              </motion.div>            ))}          </div>        </div>      </section>

      {/* How It Works */}      <section className="py-24 bg-dark relative overflow-hidden"
      >        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12"
        >          <div className="text-center mb-16"
          >            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-4xl font-semibold text-white"
            >              How It <span className="text-gold italic">Works</span>            </motion.h2>          </div>          <div className="grid sm:grid-cols-3 gap-8"
          >            {[              {                step: "01",
                title: "Book & Visit",
                description: "Schedule your appointment and enjoy our premium services.",
                icon: Sparkles,
              },
              {
                step: "02",
                title: "Earn Points",
                description: "Earn points automatically with every ₹100 spent.",
                icon: Gift,
              },
              {
                step: "03",
                title: "Redeem Rewards",
                description: "Use points for discounts, free services, and exclusive perks.",
                icon: Crown,
              },
            ].map((item, index) => (              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >                <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6"
                >                  <item.icon className="w-6 h-6 text-gold" />                </div>                <span className="font-heading text-xl text-gold">{item.step}</span>                <h3 className="font-heading text-xl font-semibold text-white mt-2 mb-3">                  {item.title}                </h3>                <p className="text-white/60 text-sm">{item.description}</p>              </motion.div>            ))}          </div>        </div>      </section>

      {/* Recent Activity */}      <section className="py-20"
      >        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12"
        >          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl font-semibold text-dark mb-8"
          >            Recent Activity          </motion.h2>          <div className="space-y-4"
          >            {account.recentTransactions.map((transaction, index) => (              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between bg-white border border-gold/10 p-5 hover:border-gold/20 transition-colors"
              >                <div className="flex items-center"
              >                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mr-4"
                  >                    <Calendar className="w-5 h-5 text-gold" />                  </div>                  <div>                    <p className="text-dark font-medium">                      {transaction.description}                    </p>                    <p className="text-muted text-sm">{transaction.date}</p>                  </div>                </div>                <span
                  className={`font-heading text-lg font-semibold ${
                    transaction.points > 0 ? "text-green-600" : "text-gold"
                  }`}
                >                  {transaction.points > 0 ? "+" : ""}                  {transaction.points}                </span>              </motion.div>            ))}          </div>        </div>      </section>    </div>
  );
}
