import React from 'react'

export const AboutMe = (): React.ReactElement => {
  return (
    <section id="about">
      <div className="eyebrow">§ 01 — About</div>
      <h2 className="section-title">
        I build the <em>whole product</em>.
      </h2>

      <div className="about">
        <div className="eyebrow" style={{ paddingTop: '8px' }}>
          Bio
        </div>
        <div className="body">
          <p>
            I have spent seventeen years shipping end-to-end products — owning everything from
            cloud infrastructure and backend services to mobile, web, and now the AI layer that
            sits on top. My strength is the rare combination: deep enough in each layer to make
            the right architectural call, broad enough to carry a product from a blank repo to a
            live service customers depend on.
          </p>
          <p>
            As a Dutch citizen and fluent speaker of English, Dutch and Serbian, I have worked
            extensively with <span className="flag">Dutch 🇳🇱</span>,{' '}
            <span className="flag">American 🇺🇸</span> and{' '}
            <span className="flag">British 🇬🇧</span> customers.
          </p>
          <p>
            That breadth was earned the hard way: building cloud infrastructure and the
            observability stack for Liberty Global&apos;s OTT streaming platform, leading
            human–machine interaction work on the Amelia AI framework, architecting batch and
            streaming data platforms at KPN, then leading mobile and web product teams at Fertifa
            and Grndhouse — and today, designing production AI systems for clients like Delphyr.
          </p>
          <p>
            Building with generative AI is no longer just a learning interest — it is my day job.
            You can browse some of my experiments on{' '}
            <a href="https://github.com/dexpetkovic" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            , including{' '}
            <a
              href="https://github.com/dexpetkovic/brAIn-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              agentic usage with MCP servers
            </a>
            .
          </p>
          <p>
            Off-hours: family, learning Dutch, strength training, and riding the kids to school in
            our Urban Arrow <em>bakfiets</em> — so <em>gezellig</em>. 🎉
          </p>

          <div className="about-aside">
            <div className="stat">
              <div className="k">Experience</div>
              <div className="v">17 yrs</div>
              <div className="s">Since 2008, in production</div>
            </div>
            <div className="stat">
              <div className="k">Languages</div>
              <div className="v">4</div>
              <div className="s">EN · NL · SR · DE</div>
            </div>
            <div className="stat">
              <div className="k">Companies</div>
              <div className="v">8</div>
              <div className="s">From Liberty Global to Delphyr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
