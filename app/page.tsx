"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ChevronRight, TrendingUp, Shield, Clock, Settings, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useParallax } from "@/hooks/use-parallax"
import { useEffect } from "react"

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation()
  useParallax()

  // Initialize counter animations on first render
  useEffect(() => {
    const counters = document.querySelectorAll("[data-counter]")
    counters.forEach((counter) => {
      const element = counter as HTMLElement
      const target = Number.parseFloat(element.getAttribute("data-counter") || "0")
      element.textContent = target.toString()
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center">
              <span className="text-gold-500 font-bold">H</span>
            </div>
            <h1 className="text-xl font-bold text-navy-800">Hachi</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li className="hidden md:block">
                <a href="#features" className="text-slate-700 hover:text-navy-600 transition">
                  特徴
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#results" className="text-slate-700 hover:text-navy-600 transition">
                  実績
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#testimonials" className="text-slate-700 hover:text-navy-600 transition">
                  お客様の声
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#faq" className="text-slate-700 hover:text-navy-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">お問い合わせ</Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ファーストビュー */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"
            data-parallax="0.2"
          ></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium text-sm mb-2">
                ナンピンEAで損失を経験した方へ
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-red-400">ナンピンEAで大損した経験</span>はありませんか？
              </h2>
              <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed">
                <span className="font-semibold text-white">単ポジEA【Hachi】</span>は、
                <span className="underline decoration-gold-400 decoration-2 underline-offset-4">
                  ナンピン・マーチンを一切使わない
                </span>
                安全設計の自動売買システムです
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  今すぐHachiをチェック <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 rounded-lg"
                >
                  実績を見る
                </Button>
              </div>
              <div className="pt-6 flex items-center gap-4 text-slate-300">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-slate-300 border-2 border-navy-800 flex items-center justify-center text-navy-800 font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p>
                  すでに
                  <span className="text-gold-400 font-semibold" data-counter="327">
                    327
                  </span>
                  人が利用中
                </p>
              </div>
            </div>
            <div className="relative scroll-hidden" data-scroll="scale-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-navy-700 p-6 rounded-xl shadow-2xl border border-navy-600">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-gold-500" />
                    <h3 className="text-xl font-semibold">Hachiの実績</h3>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    検証済み
                  </span>
                </div>
                <div className="bg-navy-800 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">運用期間</span>
                    <span className="font-medium">9ヶ月</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">総利益</span>
                    <span className="text-green-400 font-bold text-xl" data-counter="47.3">
                      +47.3%
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">最大ドローダウン</span>
                    <span className="text-red-400 font-medium">-8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">勝率</span>
                    <span className="font-medium" data-counter="68.5">
                      68.5%
                    </span>
                  </div>
                </div>
                <div className="relative h-48 bg-navy-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-3/4 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2">
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                      <path
                        d="M0,30 L0,20 C5,19 10,22 15,18 C20,14 25,10 30,15 C35,20 40,18 45,15 C50,12 55,14 60,16 C65,18 70,20 75,18 C80,16 85,12 90,14 C95,16 100,20 100,25 L100,30 Z"
                        fill="url(#profit-gradient)"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="profit-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                      <path
                        d="M0,20 C5,19 10,22 15,18 C20,14 25,10 30,15 C35,20 40,18 45,15 C50,12 55,14 60,16 C65,18 70,20 75,18 C80,16 85,12 90,14 C95,16 100,20 100,25"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="0.5"
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-2 left-2 bg-navy-900/50 backdrop-blur-sm px-2 py-1 rounded text-xs">
                    Myfxbook検証済み
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="#results"
                    className="text-gold-400 hover:text-gold-300 text-sm flex items-center justify-center gap-1"
                  >
                    詳細な実績を見る <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* 特徴セクション */}
      <section id="features" className="py-20 bg-slate-50 relative">
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"
          data-parallax="0.1"
        ></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-navy-500/10 text-navy-600 font-medium text-sm mb-4">
              Hachiの特徴
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              なぜ<span className="text-gold-600">単ポジEA【Hachi】</span>は<br className="md:hidden" />
              <span className="relative">
                <span className="relative z-10">安心して運用できるのか</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-200 opacity-50 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              ナンピン・マーチンを使わない"1ポジション運用"で、
              <br className="hidden md:block" />
              資金を守りながら着実に利益を積み上げる安全設計
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-gold-500" />,
                title: "リスク極小の単ポジ運用",
                description:
                  "ナンピン・マーチンを一切使わない1ポジション運用で、含み損が膨らむリスクを排除。資金を守りながら安定した利益を追求します。",
              },
              {
                icon: <Clock className="h-10 w-10 text-gold-500" />,
                title: "日をまたがない決済",
                description:
                  "ポジションは日をまたがず自動で決済されるため、寝ている間の急変動に怯える必要がありません。精神的ストレスから解放されます。",
              },
              {
                icon: <Settings className="h-10 w-10 text-gold-500" />,
                title: "カスタマイズ可能な損切り",
                description:
                  "自分で損切り幅を設定できるため、リスク許容度に合わせた運用が可能。感情に流されず、計画的な資産運用を実現します。",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-gold-500" />,
                title: "アノマリー活用戦略",
                description:
                  "市場の特性（アノマリー）を活用した戦略で安定性を確保。長期的に優位性のあるトレードを自動で実行します。",
              },
              {
                icon: <Award className="h-10 w-10 text-gold-500" />,
                title: "実証済みの実績",
                description:
                  "9ヶ月で約40〜50％の実績をMyfxbookで公開中。バックテストだけでなく、実際の運用実績で信頼性を証明しています。",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-gold-500" />,
                title: "簡単導入・国内MT4対応",
                description:
                  "国内MT4口座に対応しており、初心者でも簡単に導入可能。専門的な知識がなくても、すぐに運用を始められます。",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-slate-200 scroll-hidden"
                data-scroll="slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 bg-navy-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 比較セクション */}
      <section className="py-20 bg-white relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-50 to-transparent opacity-30"
          data-parallax="0.15"
        ></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 font-medium text-sm mb-4">
              ナンピンEAとの違い
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              <span className="relative">
                <span className="relative z-10">ナンピンEAの危険性</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 opacity-50 -z-10"></span>
              </span>
              と<br className="md:hidden" />
              Hachiの安全設計
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              多くのトレーダーが経験する「ナンピンEAの罠」から
              <br className="hidden md:block" />
              あなたの大切な資産を守るHachiの仕組み
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-hidden-right" data-scroll="slide-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">従来のナンピンEA</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">✖</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">損失が雪だるま式に拡大</span>
                      ：相場が逆行すると、ナンピンを繰り返して含み損が膨らみ続けます
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">✖</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">資金が吹き飛ぶリスク</span>
                      ：大きな相場変動で一気に証拠金維持率が下がり、強制ロスカットの危険性があります
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">✖</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">精神的ストレス</span>
                      ：含み損を抱えたまま長期間ポジションを持ち続けるため、精神的負担が大きいです
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">✖</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">リスク管理の難しさ</span>
                      ：ナンピン回数が増えるほどリスクが増大し、コントロールが困難になります
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-medium text-red-700">多くのトレーダーが経験する現実</p>
                  </div>
                  <p className="text-sm text-red-700">「利益が出ていたのに、突然の相場変動で資金がほぼゼロに…」</p>
                </div>
              </div>
            </div>

            <div className="relative scroll-hidden-left" data-scroll="slide-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">単ポジEA【Hachi】</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">リスクが明確</span>
                      ：1ポジションのみの運用で、あらかじめ設定した損切り幅以上の損失は発生しません
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">資金を守る設計</span>
                      ：ナンピン・マーチンを使わないため、含み損が雪だるま式に膨らむことがありません
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">ストレスフリー</span>
                      ：ポジションは日をまたがず自動決済されるため、精神的な負担がありません
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <p className="text-slate-700">
                      <span className="font-semibold">安定した実績</span>
                      ：アノマリーを活用した戦略で、9ヶ月で約40〜50％の実績を達成しています
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-medium text-green-700">Hachiユーザーの声</p>
                  </div>
                  <p className="text-sm text-green-700">
                    「相場を気にせず日常生活に集中できるようになりました。資産も着実に増えています」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section id="results" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"
            data-parallax="0.2"
          ></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium text-sm mb-4">
              実証済みの実績
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="relative">
                <span className="relative z-10">9ヶ月で+47.3%の安定運用</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-500/30 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Myfxbookで公開中の実績データ。
              <br className="hidden md:block" />
              バックテストではなく、実際の運用結果です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="bg-navy-700/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-navy-600 scroll-hidden-right"
              data-scroll="slide-right"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Hachiの運用実績</h3>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Myfxbook検証済み
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">運用期間</span>
                    <span className="font-medium">9ヶ月（2023年7月〜2024年3月）</span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold-500 w-0 transition-all duration-1000"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">総利益</span>
                    <span className="text-green-400 font-bold text-2xl" data-counter="47.3">
                      +47.3%
                    </span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 w-0 transition-all duration-1000"
                      style={{ width: "47.3%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">月平均利益</span>
                    <span className="text-green-400 font-medium" data-counter="5.3">
                      +5.3%
                    </span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 w-0 transition-all duration-1000"
                      style={{ width: "53%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">最大ドローダウン</span>
                    <span className="text-red-400 font-medium" data-counter="8.2">
                      -8.2%
                    </span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-0 transition-all duration-1000" style={{ width: "8.2%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">勝率</span>
                    <span className="font-medium" data-counter="68.5">
                      68.5%
                    </span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold-500 w-0 transition-all duration-1000"
                      style={{ width: "68.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">プロフィットファクター</span>
                    <span className="font-medium" data-counter="1.87">
                      1.87
                    </span>
                  </div>
                  <div className="h-2 bg-navy-600 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 w-0 transition-all duration-1000" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 scroll-hidden-left" data-scroll="slide-left">
              <div className="bg-navy-700/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-navy-600">
                <h3 className="text-xl font-bold mb-4">月別パフォーマンス</h3>
                <div className="space-y-3">
                  {[
                    { month: "2023年7月", profit: "+5.8%" },
                    { month: "2023年8月", profit: "+4.9%" },
                    { month: "2023年9月", profit: "+6.2%" },
                    { month: "2023年10月", profit: "+3.7%" },
                    { month: "2023年11月", profit: "+5.5%" },
                    { month: "2023年12月", profit: "+6.1%" },
                    { month: "2024年1月", profit: "+4.8%" },
                    { month: "2024年2月", profit: "+5.3%" },
                    { month: "2024年3月", profit: "+5.0%" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.month}</span>
                      <span className="text-green-400 font-medium">{item.profit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-700/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-navy-600">
                <h3 className="text-xl font-bold mb-4">Hachiの特徴的な数値</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="bg-navy-600/50 p-4 rounded-lg scroll-hidden-scale"
                    data-scroll="scale-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="text-gold-400 text-sm mb-1">平均利益</div>
                    <div className="text-2xl font-bold" data-counter="12.3">
                      +12.3 pips
                    </div>
                  </div>
                  <div
                    className="bg-navy-600/50 p-4 rounded-lg scroll-hidden-scale"
                    data-scroll="scale-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="text-gold-400 text-sm mb-1">平均損失</div>
                    <div className="text-2xl font-bold" data-counter="7.8">
                      -7.8 pips
                    </div>
                  </div>
                  <div
                    className="bg-navy-600/50 p-4 rounded-lg scroll-hidden-scale"
                    data-scroll="scale-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="text-gold-400 text-sm mb-1">取引回数</div>
                    <div className="text-2xl font-bold" data-counter="427">
                      427回
                    </div>
                  </div>
                  <div
                    className="bg-navy-600/50 p-4 rounded-lg scroll-hidden-scale"
                    data-scroll="scale-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="text-gold-400 text-sm mb-1">平均保有時間</div>
                    <div className="text-2xl font-bold" data-counter="3.2">
                      3.2時間
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center scroll-hidden" data-scroll="bounce-in">
            <Button className="bg-gold-500 hover:bg-gold-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Myfxbookで詳細を確認する
            </Button>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="testimonials" className="py-20 bg-slate-50 relative">
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"
          data-parallax="0.1"
        ></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-navy-500/10 text-navy-600 font-medium text-sm mb-4">
              お客様の声
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              <span className="relative">
                <span className="relative z-10">実際に使っている方々の感想</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-200 opacity-50 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hachiを導入して資産運用に成功している
              <br className="hidden md:block" />
              実際のユーザーからの声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "田中 誠一",
                role: "会社員（42歳）",
                comment:
                  "以前はナンピンEAで大きな損失を経験しました。Hachiに切り替えてからは、含み損に悩まされることなく、安定した利益を得られています。何より精神的な安心感が違います。",
                rating: 5,
              },
              {
                name: "佐藤 美香",
                role: "主婦（38歳）",
                comment:
                  "投資初心者の私でも簡単に始められました。日中は家事や育児で忙しいですが、Hachiなら設定後は放置でOK。少額から始めて8ヶ月で当初の資金が1.4倍になりました！",
                rating: 5,
              },
              {
                name: "鈴木 健太",
                role: "自営業（45歳）",
                comment:
                  "複数のEAを試してきましたが、Hachiの安定感は群を抜いています。特に相場が荒れる時でも大きな損失がないのが魅力です。長期運用の柱として活用しています。",
                rating: 4,
              },
              {
                name: "山田 裕子",
                role: "会社員（35歳）",
                comment:
                  "兼業トレーダーとして夜間や週末に取引していましたが、常に相場を気にする生活にストレスを感じていました。Hachiのおかげで時間的な自由を取り戻せました。",
                rating: 5,
              },
              {
                name: "伊藤 大輔",
                role: "エンジニア（29歳）",
                comment:
                  "テクニカル分析が得意でしたが、感情的になって損失を出すことも多かったです。Hachiは感情に左右されない取引を実現してくれて、結果的に利益が増えました。",
                rating: 4,
              },
              {
                name: "小林 正和",
                role: "定年退職者（63歳）",
                comment:
                  "老後資金の運用として始めました。大きなリスクは取れない年齢なので、Hachiの安全設計は私にぴったりです。毎月の安定した利益が年金の補助になっています。",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-slate-200 scroll-hidden"
                data-scroll="rotate-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-gold-500" : "text-slate-300"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-slate-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className="py-20 bg-white relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-50 to-transparent opacity-30"
          data-parallax="0.15"
        ></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-navy-500/10 text-navy-600 font-medium text-sm mb-4">
              よくある質問
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              <span className="relative">
                <span className="relative z-10">気になることはありませんか？</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-200 opacity-50 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hachiについてよくいただく質問をまとめました
              <br className="hidden md:block" />
              ご不明な点があればお気軽にお問い合わせください
            </p>
          </div>

          <div className="max-w-3xl mx-auto scroll-hidden" data-scroll="slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "ナンピンEAとの具体的な違いは何ですか？",
                  answer:
                    "最大の違いは「1ポジション運用」です。ナンピンEAは相場が逆行すると追加ポジションを持ち、含み損が膨らみ続けるリスクがあります。Hachiは常に1ポジションのみで運用するため、あらかじめ設定した損切り幅以上の損失は発生しません。また、ポジションを日をまたいで持ち越さないため、精神的なストレスも軽減されます。",
                },
                {
                  question: "初心者でも使えますか？",
                  answer:
                    "はい、FX初心者の方でも安心してご利用いただけます。Hachiは国内MT4口座に対応しており、導入方法も簡単です。また、リスク管理が明確なため、投資初心者の方にも安心してご利用いただけます。導入時のサポートも充実していますので、ご安心ください。",
                },
                {
                  question: "必要な資金はいくらからですか？",
                  answer:
                    "最低5万円からの運用が可能です。ただし、安定した運用のためには10万円以上の資金をおすすめしています。Hachiは資金効率を重視した設計になっているため、少額からでも着実に資産を増やしていくことができます。",
                },
                {
                  question: "どのくらいの利益が期待できますか？",
                  answer:
                    "過去9ヶ月の実績では、月平均約5.3%の利益となっています。年間では約40〜50%の利益が期待できます。ただし、相場状況によって変動する可能性がありますので、あくまで参考値としてご理解ください。Myfxbookで実績を公開していますので、詳細はそちらでご確認いただけます。",
                },
                {
                  question: "どのFX業者で使えますか？",
                  answer:
                    "国内のMT4対応FX業者であれば基本的に利用可能です。特に、LIGHT FX、GEMFOREX、XMなどでの動作確認を行っています。ご不明な点があれば、お気軽にお問い合わせください。",
                },
                {
                  question: "バックテストではなく実績データはありますか？",
                  answer:
                    "はい、Myfxbookで実際の運用実績を公開しています。バックテストだけでなく、リアルマネーでの運用結果をご確認いただけますので、信頼性の高いデータとなっています。9ヶ月で約47.3%の利益を達成しています。",
                },
                {
                  question: "サポートはありますか？",
                  answer:
                    "はい、導入時のセットアップサポートから運用中のご質問対応まで、充実したサポート体制を整えています。専用のLINEグループやメールサポートを通じて、迅速に対応いたします。初心者の方でも安心してご利用いただけるよう、丁寧にサポートいたします。",
                },
                {
                  question: "返金保証はありますか？",
                  answer:
                    "はい、30日間の返金保証をご用意しています。万が一ご満足いただけない場合は、購入から30日以内であれば全額返金いたします。安心してお試しいただけるよう、返金保証制度を設けています。",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-lg overflow-hidden scroll-hidden"
                  data-scroll="slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 text-left font-medium text-navy-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-slate-600 bg-slate-50/50">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center scroll-hidden" data-scroll="bounce-in">
            <p className="text-slate-600 mb-4">まだ質問がありますか？</p>
            <Button variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white">
              お問い合わせはこちら
            </Button>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"
            data-parallax="0.2"
          ></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 scroll-hidden" data-scroll="slide-up">
              <span className="text-gold-400">ナンピンの罠</span>から解放され、
              <br />
              <span className="relative">
                <span className="relative z-10">安心して資産を増やしませんか？</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-500/30 -z-10"></span>
              </span>
            </h2>
            <p
              className="text-xl text-slate-300 mb-8 leading-relaxed scroll-hidden"
              data-scroll="slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              単ポジEA【Hachi】は、ナンピン・マーチンを使わない
              <br className="hidden md:block" />
              安全設計の自動売買システムです。
              <br />
              9ヶ月で+47.3%の実績。精神的ストレスから解放されながら
              <br className="hidden md:block" />
              着実に資産を増やしていきましょう。
            </p>
            <div
              className="bg-navy-700/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-navy-600 mb-10 scroll-hidden"
              data-scroll="scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-gold-400 mb-2" data-counter="9">
                    9ヶ月
                  </div>
                  <p className="text-slate-300">運用実績</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold-400 mb-2" data-counter="47.3">
                    +47.3%
                  </div>
                  <p className="text-slate-300">総利益</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold-400 mb-2" data-counter="327">
                    327人
                  </div>
                  <p className="text-slate-300">利用者数</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center scroll-hidden"
              data-scroll="bounce-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-gold-500 hover:bg-gold-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                今すぐHachiを手に入れる <ChevronRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 rounded-lg"
              >
                詳細を問い合わせる
              </Button>
            </div>
            <p
              className="mt-6 text-slate-400 text-sm scroll-hidden"
              data-scroll="slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              ※30日間の返金保証付き。安心してお試しいただけます。
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-navy-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center">
                  <span className="text-gold-500 font-bold">H</span>
                </div>
                <h3 className="text-xl font-bold text-white">Hachi</h3>
              </div>
              <p className="mb-4">
                ナンピン・マーチンを使わない安全設計の
                <br />
                FX自動売買システム
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    特徴
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover:text-white transition">
                    実績
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    お客様の声
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
              <p className="mb-2">ご質問やご不明点があれば、お気軽にお問い合わせください。</p>
              <a href="mailto:info@hachi-ea.com" className="text-gold-400 hover:text-gold-300 transition">
                info@hachi-ea.com
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Hachi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
