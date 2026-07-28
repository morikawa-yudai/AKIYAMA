const reasons = [
  ["01", "自社施工で", "安心価格", "見積もりから施工まで、すべて自社で責任対応。"],
  ["02", "明朗見積もり", "追加費用なし", "工事前に内容と金額を、わかりやすくご説明します。"],
  ["03", "地域密着の", "スピード対応", "さいたま市・上尾市周辺なら、最短即日で現地調査。"],
  ["04", "施工実績", "3,000件以上", "経験豊富な職人が、安全・丁寧に施工します。"],
  ["05", "近隣への配慮も", "徹底します", "騒音・粉じん・挨拶まで、まるごとお任せください。"],
  ["06", "初めての方も", "安心サポート", "手続きや届出も、担当スタッフが伴走します。"],
];

const services = [
  ["木造解体", "戸建て・アパート", "/images/service-wood.webp"],
  ["鉄骨解体", "倉庫・工場・店舗", "/images/service-steel.webp"],
  ["RC解体", "マンション・ビル", "/images/service-rc.webp"],
  ["内装解体", "原状回復・スケルトン", "/images/service-interior.webp"],
  ["外構撤去", "ブロック・庭・物置", "/images/service-exterior.webp"],
  ["空き家解体", "管理・処分のご相談", "/images/service-empty.webp"],
];

const steps = [
  ["01", "お問い合わせ", "まずは電話・メールでお気軽に"],
  ["02", "現地調査", "建物と周辺状況をしっかり確認"],
  ["03", "お見積り", "工事内容と費用を明確にご説明"],
  ["04", "ご契約", "納得いただいてから正式に"],
  ["05", "近隣挨拶", "工事前にスタッフがご挨拶"],
  ["06", "着工", "安全第一で迅速・丁寧に施工"],
  ["07", "完了・お引渡し", "清掃・確認後にお引渡し"],
];

export default function Home() {
  return (
    <main>
      <div className="color-ruler" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="秋山総業 トップへ">
          <span className="brand-mark">
            <i />
            <b>AS</b>
          </span>
          <span>
            <small>あなたのまちの解体屋さん</small>
            <strong>秋山総業株式会社</strong>
          </span>
        </a>
        <nav aria-label="メインメニュー">
          <a href="#about"><span>🏠</span>秋山総業について</a>
          <a href="#flow"><span>🚧</span>ご利用の流れ</a>
          <a href="#price"><span>🧭</span>単価表</a>
          <a href="#works"><span>🏗️</span>事例</a>
        </nav>
        <a className="header-tel" href="tel:0487119090">
          <small>相談・現地調査・お見積り無料</small>
          <b>048-711-9090</b>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-clouds" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">さいたま市・上尾市周辺なら即日対応可能！</p>
          <h1>
            あなたのまちの
            <strong><em>解体屋</em>さん</strong>
          </h1>
          <p className="hero-lead">
            自社施工だからできる<span>安心価格</span>と、
            <br />施工会社と直だからこその<span>対応の速さ</span>。
          </p>
          <div className="hero-badges">
            <span>📍 埼玉県を中心に関東</span>
            <span>🏗️ 工事実績 <b>3,000</b>件以上</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:0487119090">無料で相談する</a>
            <a className="button button-cream" href="#services">できる工事を見る</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-demolition.webp" alt="青空の下で安全に解体工事を進める黄色い重機" />
          <div className="hero-bubble">私たちが心を込めて<br />解体します！</div>
          <img className="hero-mascots" src="/images/mascot-team.webp" alt="秋山総業のスタッフキャラクター" />
        </div>
        <div className="road road-hero" aria-hidden="true">
          <span className="moving-dump toy-sprite toy-1" />
        </div>
      </section>

      <section className="promise" id="about">
        <span className="doodle doodle-a">✦</span>
        <span className="doodle doodle-b">⌁</span>
        <div className="section-heading">
          <p>WHY AKIYAMA?</p>
          <h2>秋山総業が選ばれる<br className="mobile-only" /><strong>6つの理由</strong></h2>
          <i />
        </div>
        <div className="reason-orbit">
          {reasons.map((item, i) => (
            <article className={`reason reason-${i + 1}`} key={item[0]}>
              <span className="reason-no">{item[0]}</span>
              <h3>{item[1]}<br /><strong>{item[2]}</strong></h3>
              <p>{item[3]}</p>
            </article>
          ))}
          <div className="orbit-center" aria-hidden="true">
            <span className="toy-sprite toy-2" />
            <b>まっすぐ、<br />ていねい。</b>
          </div>
        </div>
        <div className="trust-ribbon">
          <div><span>3,000<small>件+</small></span>豊富な施工実績</div>
          <div><span>関東</span>地域密着で迅速対応</div>
          <div><span>自社</span>安心の一貫施工</div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="hill hill-left" aria-hidden="true" />
        <div className="section-heading light">
          <p>WHAT WE CAN DO</p>
          <h2>解体のことなら、<br /><strong>まるごとお任せ</strong></h2>
          <i />
        </div>
        <p className="section-intro">小さな撤去から大きな建物まで。現場に合った最適な方法をご提案します。</p>
        <div className="service-garden">
          {services.map((service, i) => (
            <article className={`service service-${i + 1}`} key={service[0]}>
              <div className="service-image">
                <img src={service[2]} alt={`${service[0]}のイメージ`} />
              </div>
              <div>
                <span>0{i + 1}</span>
                <h3>{service[0]}</h3>
                <p>{service[1]}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="figurine-shelf" aria-hidden="true">
          <span className="toy-sprite toy-3" />
          <span className="toy-sprite toy-4" />
          <span className="toy-sprite toy-5" />
          <span className="toy-sprite toy-6" />
        </div>
      </section>

      <section className="flow" id="flow">
        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>はじめてでも安心。<br /><strong>7つのステップ</strong></h2>
          <i />
        </div>
        <div className="flow-path" aria-label="ご利用の流れ">
          {steps.map((step, i) => (
            <div className={`flow-stop stop-${i + 1}`} key={step[0]}>
              <span>{step[0]}</span>
              <div className="step-icon" aria-hidden="true">{["☎", "🔍", "📝", "🤝", "👋", "🏗", "✨"][i]}</div>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
            </div>
          ))}
          <div className="dotted-path" aria-hidden="true" />
        </div>
        <div className="worker-note">
          <img src="/images/mascot-team.webp" alt="" />
          <p><b>わからないことは、なんでも聞いてください！</b><br />専門スタッフが最初から最後までサポートします。</p>
        </div>
      </section>

      <section className="works" id="works">
        <div className="section-heading light">
          <p>WORKS & VOICE</p>
          <h2>まちをきれいに、<br /><strong>次の未来へ</strong></h2>
          <i />
        </div>
        <div className="case-wrap">
          <article className="case">
            <div className="case-photos">
              <div>
                <span>BEFORE</span>
                <img src="/images/service-wood.webp" alt="木造住宅解体前" />
              </div>
              <b>→</b>
              <div className="after-lot">
                <span>AFTER</span>
                <i>すっきり<br />更地へ</i>
              </div>
            </div>
            <h3>木造住宅解体</h3>
            <p>工期 10日間　／　さいたま市</p>
            <blockquote>「近隣への配慮までしっかりしてくれて、とても安心できました！」</blockquote>
          </article>
          <article className="case case-alt">
            <div className="case-photos">
              <div>
                <span>BEFORE</span>
                <img src="/images/service-empty.webp" alt="空き家解体前" />
              </div>
              <b>→</b>
              <div className="after-lot">
                <span>AFTER</span>
                <i>次の土地<br />活用へ</i>
              </div>
            </div>
            <h3>空き家解体</h3>
            <p>工期 15日間　／　上尾市</p>
            <blockquote>「見積りがわかりやすく、追加費用もなく安心でした！」</blockquote>
          </article>
        </div>
        <div className="road road-works" aria-hidden="true">
          <span className="moving-truck toy-sprite toy-1" />
        </div>
      </section>

      <section className="price" id="price">
        <div className="price-copy">
          <p className="eyebrow">PRICE GUIDE</p>
          <h2>費用の目安も、<br /><strong>わかりやすく。</strong></h2>
          <p>建物の構造・立地・残置物などで費用は変わります。現地調査とお見積りは無料です。</p>
          <a className="text-link" href="tel:0487119090">詳しい料金を相談する →</a>
        </div>
        <div className="price-bubbles">
          <span>木造住宅<small>坪単価の目安</small><b>3.5万円〜</b></span>
          <span>鉄骨造<small>坪単価の目安</small><b>4.5万円〜</b></span>
          <span>RC造<small>坪単価の目安</small><b>6.0万円〜</b></span>
        </div>
        <span className="toy-sprite price-toy toy-2" aria-hidden="true" />
      </section>

      <section className="recruit">
        <div>
          <p>一緒に、まちの未来をつくろう。</p>
          <h2>解体の仕事を、<br />もっと誇れる仕事へ。</h2>
          <ul>
            <li>未経験OK</li><li>資格取得支援あり</li><li>地域密着</li>
          </ul>
          <a className="button button-yellow" href="#contact">採用について聞く</a>
        </div>
        <img src="/images/mascot-team.webp" alt="一緒に働く秋山総業の仲間" />
      </section>

      <section className="contact" id="contact">
        <span className="contact-sun" aria-hidden="true">☀</span>
        <div>
          <p>相談・現地調査・お見積り</p>
          <h2>すべて無料！</h2>
          <span>解体工事のことなら、お気軽にご相談ください。</span>
        </div>
        <a href="tel:0487119090" className="contact-phone">
          <small>お電話でのお問い合わせ</small>
          <b>048-711-9090</b>
          <span>受付時間 8:00〜18:00　年中無休</span>
        </a>
        <a className="contact-mail" href="tel:0487119090">☎ 今すぐ相談する</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><i /><b>AS</b></span>
          <span><small>あなたのまちの解体屋さん</small><strong>秋山総業株式会社</strong></span>
        </a>
        <p>埼玉県を中心に関東エリア対応｜木造・鉄骨・RC・内装・外構・空き家解体</p>
        <small>© AKIYAMA SOGYO Co., Ltd.</small>
      </footer>

      <div className="mobile-contact">
        <a href="tel:0487119090">☎ 電話で無料相談</a>
        <a href="tel:0487119090">◎ 見積り無料</a>
      </div>
    </main>
  );
}
