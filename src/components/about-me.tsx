import React from 'react'

export const AboutMe = (): React.ReactElement => {
  return (
    <section id="about">
      <div className="eyebrow">§ 01 · About</div>
      <h2 className="section-title">
        I build the <em>whole product</em>.
      </h2>

      <div className="about">
        <div className="eyebrow" style={{ paddingTop: '8px' }}>
          Bio
        </div>
        <div className="body">
          <p>
            I started my career as a system engineer back in 2008, and over the years built up
            deep fullstack engineering experience across React, Node.js, Python, and cloud
            platforms. That hands-on breadth is what I now bring to AI engineering as the founder
            of Elands AI, where we design and deliver intelligent systems for startups and small
            companies.
          </p>
          <p>
            As a Dutch citizen and fluent speaker of English, Dutch and Serbian, I have worked
            extensively with <span className="flag">Dutch 🇳🇱</span>,{' '}
            <span className="flag">American 🇺🇸</span> and{' '}
            <span className="flag">British 🇬🇧</span> customers.
          </p>
          <p>
            Building with generative AI is no longer just a learning interest: it is my day job.
            Through Elands AI, I design and ship LLM-based applications, evaluation
            infrastructure, and real-time AI services for clients. You can browse some of my
            experiments on{' '}
            <a href="https://github.com/dexpetkovic" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            , including{' '}
            <a
              href="https://github.com/dexpetkovic/brAIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              agentic usage with MCP servers
            </a>
            .
          </p>
          <p>
            I spend my free time with family, learning Dutch, exploring emerging technologies and
            taking care of my health via balanced diet and strength training.
          </p>
          <p>
            And as a Dutchman, I ride kids to school in our Urban Arrow <em>bakfiets</em>{' '}
            (cargobike), so fun and <em>gezellig</em> 🎉 (joyful in Dutch).
          </p>

          <div className="about-aside">
            <div className="stat">
              <div className="k">Experience</div>
              <div className="v">Since 2008</div>
              <div className="s">System engineer to AI engineer</div>
            </div>
            <div className="stat">
              <div className="k">Languages</div>
              <div className="v">5</div>
              <div className="s">EN · NL · SR · DE · RU</div>
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
