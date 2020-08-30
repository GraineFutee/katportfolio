import React, { useState } from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import DropDownArticle from "./DropDownArticle";

export default function Articles() {
  const [visibleArticle, setVisibleArticle] = useState("");

  return (
    <>
      <SectionHeader title="Articles" id="artciles" />
      <SectionBody>
        <DropDownArticle
          title="Googled anyone today? What is there for everyone to see?"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              The right to be forgotten became a household concept when GDPR
              entered into force (already being a right following art. 8 of the
              ECHR, the right to a private life). Simplified (as I am sure you
              already know) it entails a right to have personal data – whether
              it is discrediting/sensitive, or just general information -
              removed from e.g. search engines (and other information carrying
              entities as well for that matter).
            </p>
            <p>
              So what of the actual reach of this right to erase information
              about yourself on the internet today? The right to be forgotten is
              not absolute. Two key limits to the right is the whereabouts of
              the person (IP address of the person searching) & the
              interpretation of “legitimate interest”.
            </p>
            <p>
              Let´s start with the legitimate interest – the quick and dirty:
            </p>
            <p>
              Importantly, there is no obligation to erase data if there is
              “legitimate interest” for continued processing. (Also, data can be
              kept with consent of the subject – but since we are talking about
              the right to be forgotten, this is not particularly relevant…)
              This includes that the right to be forgotten does not apply when a
              nation disapplies GDPR to uphold freedom of speech – including for
              ensuring a free press. But what does this mean in practice – when
              do we, as subjects, not have a right to have information about us
              erased? Where that boundary goes will be determined on a
              principle-by-principle and case-by-case basis, to be better
              defined with time and experience.
            </p>
            <p>
              A sore example is the database Mr Koll in Sweden, where you easily
              can find information such as whether somebody has been party to
              criminal proceedings. The information is collected from public
              sources (which in Sweden are, due to strong principles of
              transparency, very far-reaching in their nature), and can
              therefore be protected through having a “utgivarbevis” – meaning
              that you cannot have your data erased. One thing that makes this
              problematic is the way in which the information is presented –
              what can effectively be a summary of (unfounded) allegations is
              packaged in a way that encourages browsing and general nosiness.
              Importantly – the information is not only open for everybody – it
              is very-very easy to access (just a few taps on your computer).
              The amount of personal integrity offered here is hence
              little-to­-none in many people’s eyes.
            </p>
            <p>
              There has always been a struggle between the right to information,
              right to freedom of speech and the right to privacy. Having
              intimate or not-so-positive information easily accessible for
              anyone to find (and in many cases without relevant context) can
              have severe consequences. It can mean that every time you apply
              for a job you get declined by default. It can mean that your kids
              will not get invited to parties. It can mean that you can’t rent
              an apartment. Hurting you – and if this means that some people are
              shut out of society it will also risk hurting society as a whole
              (for instance if you feel labeled a criminal regardless of whether
              you have already served you time or if you in fact where freed of
              all charges you might, in particular if you are young, turn to a
              criminal lifestyle or suffer from bad mental health).{" "}
            </p>
            <p>
              Personally, I am against the existence of sites like Mr Koll where
              potentially sensitive private information is within reach for
              anybody at a tap with their fingers. The right to be forgotten
              should in this case be enforced since I cannot see the legitimate
              interest in this general public disclosure of e.g. the number of
              stairs to my door – and what door on that floor that is my door.
              Give me some privacy please!{" "}
            </p>
            <p>
              For more information on these topics, please visit the Swedish
              Data Inspection; www.datainspektionen.se
            </p>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title={
            'Can you escape responsibility for slander by "only" sharing other people\'s posts on Social Media?'
          }
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              In Sweden there is right now a high-profile litigation case for
              slander, where a male media profile demands damages from a female
              media profile - based on the latter's allegations of rape on
              Social Media Channels.
            </p>
            <p>
              The allegation is that the male media profile should have raped
              the female media profile several years ago. The male media profile
              was during that period tried in court, and freed of all charges.
              After years of quiet - during the MeToo wave – the female media
              profile accused the male profile for rape on her Instagram and in
              other Social Media forums. The allegations got extensive media
              buzz, and other profiles helped spread these allegations through
              their own (well-visited) Social Media Channels. Everything with
              the male media profile's full name disclosed.
            </p>
            <p>
              The male media profile has stated that, if he wins the now ongoing
              litigation towards the female media profile that has publicly
              called him a rapist, he will most likely take it one step further
              and also press charges against the other celebrities that decided
              to take action and share posts from the female profile, thereby
              fuelling the accusation that he is a rapist.
            </p>
            <p>
              Perhaps you can already sense where my opinion recides in this
              matter? Two wrongs never make a right. All the horrible truths
              behind MeToo scandals do not give any of us the right to make
              public claims that someone is a criminal, a rapist or
              what-have-you, by sharing what somebody else is stating as if it
              was the unchallenged truth.
            </p>
            <p>
              The right to a private life is a fundamental human right. The
              right to be considered innocent until proven guilty is also a
              fundamental constitutional right. Spreading news about somebody’s
              (bad) persona in public risks having detrimental effects not only
              on that person but also on that person's closest – their wife,
              their children, their husband etc. It could mean them losing their
              job, being alienated from social life, having their car and house
              vandalized, and even them losing their will to live.
            </p>
            <p>
              Hence, what we state, what we post, what we say, what we write
              comes with consequences and, in particular if we are so-called
              “influencers” and our words will reach many and/or have an impact
              on many – there is no substitute from taking responsibility and
              assess if and how the information we communicate about another
              person, if it has a valid foundation, and how it risks to impact
              that person's life.
            </p>
            <p>Just saying.</p>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title="Are Lawyers the Devil´s Advocates?"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              <b>
                Or, why does a lawyer defend a situation that you might find
                crazy wrong?
              </b>
            </p>
            <p>
              The lawyer has as its expertise to understand and apply laws,
              regulations, rulings and decisions by the Courts and Authorities.
              Therefore the lawyer will play a role in many situations,
              relationships and human interactions. Any time monies are shifting
              hands, and any time a partnership is initiated, continued or
              ended, the lawyer may be needed. Even when a child is born, a
              loving couple moves in together, or a young talent paints a
              painting, posts content on SoMe or writes a new song. there can be
              issues or conflicts that will require lawyers. I.e. the law is all
              around us.
            </p>
            <p>
              This fact will become particularly clear any time a conflict, big
              or small, direct or indirect, occurs. Lawyers are often caught in
              the middle of animated debates stemming e.g. from a scandal, a
              political decision, financial developments, or even criminal
              activities. This will, from time to time, raise questions as
              regards the lawyers´ morals and judgment.
            </p>
            <p>
              So let's shine some light on a somewhat sensitive question. One of
              the fundamental questions discussed during law school. In short,
              there are two different approaches for the lawyer when working
              with the legal issues.
            </p>
            <p>De Lege Lata and De Lege Ferenda.</p>
            <p>
              <b>De lege lata – what the law is</b>
            </p>
            <p>
              The “objective approach” to the law. The lawyer will in these
              cases act objectively, applying or explaining the currently
              applicable laws that we are all bound by. When a lawyer takes this
              de lege lata approach, it does not necessarily mean that the
              lawyer agrees with the way the law is shaped. It only means that
              he acts on the basis of what the law is, without him taking any
              personal stand on whether the regulation and the consequences are
              good or bad.
            </p>
            <p>
              <b>De lege ferenda – what the law should be</b>
            </p>
            <p>
              The “subjective approach” to the law. A lawyer will in such cases
              discuss or present what he or she deems to be the best (or at
              least less bad) law and regulation, and consequences of that law.
              Here, the lawyer will not present what the actual rules are in
              reality, but will instead make an assessment of how the optimal
              regulation should be shaped. In these cases the lawyer may apply
              his or her personal values and experiences. The lawyer can also
              make de lege ferenda argumentation from what would be best for a
              particular Client, sector or other stakeholder.
            </p>
            <p>
              <b>Why does it matter?</b>
            </p>
            <p>
              Understanding whether a lawyer is looking at the law as it is vs.
              as it "should" be will hopefully make it easier to discern whether
              a lawyer is expressing support of a law and its consequences, or
              whether the lawyer is simply trying to objectively apply the
              current law (even if the lawyer finds it outright stupid or
              detrimental).
            </p>
            <p>
              To protect fundamental human rights, we need the rule of law. We
              should all be able to trust that the current laws will be applied
              correctly and in a professional manner. But we also need to have a
              continuous debate around whether the consequences of the current
              laws are what we want them to be. Both sides have very important
              roles to play in a proper democratic society.
            </p>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title="Lingo – around incentive programs. How to talk-the-talk (or just follow it) Part I"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              Key for you being offered – or want to offer – an incentive
              program is to properly understand both what is being said and what
              is put on the paper you are asked to sign. All professions have
              their own jargon. And we all know that it can be a bit awkward to
              ask “what do you mean by that”.
            </p>
            <p>
              For one; ask what it (really) takes for you to ever get a return
              from the program you’re in. What are the targets/requirements, and
              what happens if you leave your job early? And for you offering the
              program – think about the attractiveness of the program and what
              behavior you want to drive. Do the terms (both overall and
              specific KPIs (jargon explained below 😉)) really do the trick, or
              is there a risk that they drive the wrong behaviors and/or miss
              important areas? One common mistake is to only focus on easier
              metrics such as short-term financial results, and not properly
              look at long-term issues – sustainability is an area that is often
              left behind (LÄNK). Nonetheless, doing it right is – in my opinion
              – a fantastic and sustainable way of creating a co-creative and
              supportive environment within a company. If you share you get
              more.
            </p>
            <p>
              So here is a short list of words commonly used in relation to
              incentive programs. Hopefully it gives you some insight into the
              structures and key issues that need to be addressed in relation to
              the programs (and some comfort as regards what is being discussed)
              😊
            </p>
            <ol>
              <li>
                <b>LTIP</b>– Long Term Incentive Program. LTIP:s are programs
                where the award (often shares or options) is given to e.g. an
                employee over a longer period – typically 3-5 years. The value
                is often tied to the development of the company in some form.
                This can be made simple – e.g. shares in the company that vest
                over time, and automatically follow the company’s overall value
                development. But companies can also apply a more complex
                structure, where a number of KPIs will be tracked and weighed
                together to determine the size of the award at the end of a, or
                several, measurement period(s).
              </li>
              <li>
                <b>STIP</b>– Short-Term Incentive Program. Same as LTIP but kept
                short - often a one-year period, and typically cash-settled.
              </li>
              <li>
                <b>KPI</b>– Key Performance Indicator. Specific metrics that can
                be either qualitive; for example positive peer-to-peer reviews
                or quantitative; for example positive share price development.
              </li>
              <li>
                <b>Option</b>. There are many kinds of options, but the core
                meaning of an option is a right to either buy (call option) or
                sell (put option) a particular security at predetermined price
                and terms at a future date.
              </li>
              <li>
                <b>Warrant</b>. A right to subscribe for a share directly from
                the company. In many respects the same as a call option, but
                creates a new share when exercised.
              </li>
              <li>
                <b>Vesting</b>. To earn shares/options over time. Typically,
                vesting means that you will only get to keep your shares/options
                if you “earn them” by remaining employed by the company during a
                “vesting period”. Vesting is often linear (if the vesting period
                is 4 years and you stay for 1, you get to keep 25% of the
                shares/options), but there are many creative alternatives.
              </li>
              <li>
                <b>Bad leaver</b>. This is the scary one. Many programs state
                that if you leave the company (and become a “leaver”) on
                unfriendly terms, you risk losing all of your awards – sometimes
                even if they have vested. What makes you/the employee be seen as
                a bad-leaver will be defined by the one setting the program, but
                a common denominator is where you quit your employment and join
                a competitor.
              </li>
              <li>
                <b>Good leaver</b>. When you leave without being a bad leaver.
                Typically a persons who leave due to retirement, illness etc.
                (and sometimes also non-competitive departures). Such good
                leavers often get to keep their instruments, although sometimes
                they will need to sell them for their full market value.
              </li>
            </ol>
            <p>
              So, do not let the lingo mesmerize you – it’s just wordings. And,
              it’s important that you who are concerned feel that you grasp the
              meanings and consequences – so don’t be afraid to ask questions!
              Hopefully the above is to some help, and stay tuned – part II of
              this short tutorial will come in a week.
            </p>
            <p>
              (…and for all of the Swedes out there – the English terms are
              typically used in the Swedish language as well.){" "}
            </p>
          </div>
        </DropDownArticle>

        <DropDownArticle
          title="Sweat equity - how to make the most of it"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              Owners of start-ups often ask me for advice on if and how to pay
              senior experts in so called sweat equity. So here is my short and
              sweet on the topic that I hope can be off some general guidance.
            </p>
            <p>
              There are many challenges for start-ups and scale-ups. One being
              liquidity. Another being attracting top talent and senior
              experience needed when growing the business, since offering a
              competitive renumeration package will be expensive. Sweat equity
              can provide a solution for both of these issues.
            </p>
            <p>
              But firstly - what is sweat equity? It is when a person (or
              company) is paid for its services in equity – typically shares or
              options – instead of being paid in cash.
            </p>
            <p>
              The use of sweat equity comes with some clear advantages, but also
              with some challenges. Here is a summary of some key aspects to be
              aware of when considering handing out or receiving sweat equity as
              compensation for services.
            </p>
            <p>
              <b>The good:</b>
            </p>
            <ol>
              <li>
                It will not affect the liquidity of the company. Instead, a
                share of the ownership is given. This can be instrumental for
                many start-ups who do not have the spare cash to compete with
                more established companies as regards engaging top competence.
              </li>
              <li>
                It will typically establish a more long-term
                commitment/incentive for the person receiving sweat equity,
                since the recipient stands to gain from the company growing in
                value. I.e. skin in the game for the expert that gets the
                long-term investment - really getting the opportunity to
                participate in a company’s success that he/she is expected to
                help create in a significant way.
              </li>
              <li>
                Lower risk/overall costs than having specific expert competence
                on the payrolle also since; if given to an external expert, no
                social security charges will be incurred and no long term
                obligations of paying a fixed salary etc will occur. While the
                same principle of lower risk goes for cash payments to an
                external consultant, as mentioned sweat equity helps minimize
                impact on the company’s liquidity.
              </li>
            </ol>
            <p>The issues that need a think-through:</p>
            <ol>
              <li>
                VAT. Typically VAT will need to be added on the invoiced amount
                and needs to be paid to the tax authorities in cash by the
                expert. It can therefore be helpful if a cash portion is paid to
                cover at least the VAT part, as VAT is to be paid even if the
                expert has not gotten any cash only equity.
              </li>
              <li>
                Corporate tax. The expert may need to pay corporate tax on the
                value of the sweat equity. Also for this reason, it may be
                preferable to receive a portion of the compensation in cash to
                bridge this dry income issue.
              </li>
              <li>
                For the expert there is no liquidity. When accepting sweat
                equity, the possibility to realize the holdings is often highly
                limited since it is typically a privately held company that is
                the issuer, and also transferability of the shares is often
                restricted through a shareholders’ agreement. If you as an
                expert absolutely need liquidity now, over long-term value e.g.
                for paying your own salary, perhaps sweat equity is not right
                for you.
              </li>
              <li>
                The cap-table. Having the right list of experts on the cap table
                can often strengthen the company. But if too many small chunks
                of sweat equity are handed out, this can make the cap table
                somewhat messy (which is not favourable in an exit process etc).
                Therefore, consider saving sweat equity for those experts that
                can bring key competence or those that bring a strong network.
              </li>
              <li>
                Company valuation. My recommendation is simple – stick to your
                standard valuation principles. If you e.g. have done a
                fundraising recently, use that as basis for your valuation
                unless there are valid reasons to adjust it. While dilution of
                current shareholders can be an issue, unless the sweat equity
                would amount to a significant part of the company it can still
                in many cases be an attractive solution.
              </li>
              <li>
                Performance & valuation of the work provided. Once the work has
                started and/or the equity has been transferred it can sometimes
                become apparent that the parties have different expectations as
                regards what is to be performed. Make sure to have reasonable
                expectations as regards time and commitment and make sure to
                agree on what is to be delivered already early in the process.
                Do it in a clear and sufficiently detailed manner, and in
                writing. (As regards the value of the performance, senior
                experts typically have established rates and it will hence be
                less of a challenge for most.)
              </li>
              <li>
                Restrictions. Shareholders’ agreements may provide for
                non-compete undertakings and other restrictions for the
                shareholders. It may however be difficult to get a third party
                expert to agree to these – prepare to be flexible, and see what
                works in each case.
              </li>
              <li>
                And a general; Be sure that you, when offering (or receiving)
                sweat equity, consider the overall terms and have a sit-down to
                go through the mutual commitments in advance so that there are
                no disagreements or surprises when it comes to e.g. quantum or
                conditions when the equity has been issued and the expert is
                already on the cap table/or the VAT is due. Also make sure to
                agree on the timing of the valuation – if it is a long-term
                project the valuation can have shifted when you are ready to
                invoice.
              </li>
            </ol>
            <p>
              <b>Conclusion?</b>
            </p>
            <p>
              If you share you get more. Alignment of interests is a positive,
              and if used in the right way with clear terms for both parties
              then sweat equity can be a key facilitator for getting the right
              team to create success and long-term value.
            </p>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title="Can, and should, you trademark your hashtags?"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <ol>
              <li>
                <p>
                  <b>Can, and should, you trademark your hashtags?</b>
                </p>
                <p>
                  …And what if someone else beats you to it, are you in risk of
                  infringing on a trademarked hashtag?
                </p>
                <p>
                  First of all; yes you can. According both US and EU
                  authorities you can trademark your hashtags.{" "}
                </p>
                <p>
                  Secondly; more and more companies do it - there has been a
                  steep increase in the number of trademark applications for
                  hashtags the last 5 years.
                </p>
                <p>
                  To give you some examples of hashtags that have been
                  registered as trademarks:
                </p>
                <p>#publicimpact</p>
                <p>#4publicimpact</p>
                <p>#smilewithacoke</p>
                <p>
                  The rules will differ somewhat with the jurisdictions, but as
                  an outset, the requirements for getting a hashtag
                  trademark-protection are the same as for getting trademark
                  protection in general (slogans etc). [1] This means that a
                  mark including the hash symbol (#) or the term HASHTAG can be
                  trademarked if:
                </p>
                <ol>
                  <li>
                    it functions as an identifier of the source of the
                    applicant’s goods or services,
                  </li>
                  <li>
                    it is not merely descriptive or generic for the goods or
                    services, and
                  </li>
                  <li>
                    the # or the term HASHTAG is not only used to reference or
                    organize keywords or topics of information to facilitate
                    searching a topic.
                  </li>
                </ol>
                <p>
                  Also, the position of the hashtag will be relevant, and
                  hashtags focusing on numbers can be more challenging to get
                  registered.
                </p>
              </li>
              <li>
                <p>
                  <b>Now then, what does the protection mean?</b>
                </p>
                <p>
                  A trademark protects against use where there is a “likelihood
                  of confusion” between the holder’s goods or services and those
                  of the (other) person using the trademark – in this case the
                  hashtag. Note that the use of hashtags can also be
                  infringement of a trademarked slogan or brand that does not
                  include a hashtag, if the confusion criteria is still met.
                  Also, while such infringements presumably are most likely to
                  occur in social media, also other kinds of infringements are
                  prohibited – so don´t go putting someone else’s trademarked
                  hashtag slogan on a sign along the freeway and think you are
                  safe.
                </p>
                <p>
                  Also, when you are analysing your and your competitor’s social
                  media marketing be mindful of the trend for courts to assume a
                  certain degree of sophistication from the consumers about how
                  hashtags function when they test the confusion criteria. This
                  can mean that the likelihood for confusion is deemed to be
                  somewhat lower than if the user was “unsophisticated”. But
                  remember that its always a case-by-case test so there are no
                  binary answers beforehand for you to rely on – only good
                  judgement 😊.
                </p>
              </li>
              <li>
                <p>
                  <b>Do you risk infringing someone’s protected hashtag?</b>
                </p>
                <p>
                  So, before you hit the post button in you marketing, ask
                  yourself if there is a risk for the target audience being
                  confused by your use of a hashtag and the trademark holder’s
                  use of the same? Where the answer should be “yes”, you need to
                  be careful before using the hashtag.
                </p>
                <p>
                  A good example of infringement is the case of Boston
                  Consulting Group getting an injunction against them for using
                  the hashtag #publicimpact in its Twitter communication. There
                  was deemed to be a likelihood for confusion with the Boston
                  Consultancy Group’s use and the hashtag as an already
                  protected trademark by The Centre for Public Impact.[2]{" "}
                </p>
              </li>
              <li>
                <p>
                  <b>Conclusion</b>
                </p>
                <p>
                  No binary check-list can to be applied – instead make a
                  holistic analysis in relation to your marketing strategy. And
                  don´t forget – keep an eye on what the competitors in your
                  industry are up to! Being last-in-line is seldom the best
                  position for any marketing and communication brand strategy.
                </p>
                <p>So, ask yourself:</p>
                <ol>
                  <li>
                    Is there a hashtag/slogan your brand uses – or that you plan
                    to use –in your marketing and communication?
                  </li>
                  <li>
                    Is the hashtag a general descriptive wording or is it
                    distinguishing your brand/product in some way?
                  </li>
                  <li>How is it used in social media today?</li>
                  <li>
                    Is there already today a risk for confusion between your
                    brand and a competitor? How do you differentiate in your
                    SoMe communication?
                  </li>
                  <li>
                    Do you see a risk that your competitors would like hijack
                    the use of the hashtag in the future?
                  </li>
                </ol>
                <p>
                  And a pro-tip is to, in particular, consider whether there are
                  any hashtags stating your sustainability profile that you want
                  to protect/control and that it can be used to distinguish you
                  and your offerings? Given the trends in this area it could be
                  a shame if a competitor will possess the golden wording… 😉
                </p>
              </li>
            </ol>
            <a
              className="button is-rounded is-dark is-small"
              href="https://tmep.uspto.gov/RDMS/TMEP/print?version=Jan2015&href=ch1200_d1ff5e_1b5ad_3bc.html"
            >
              [1]
            </a>
            &nbsp;&nbsp;
            <a
              className="button is-rounded is-dark is-small"
              href="https://www.leagle.com/decision/infdco20160314957"
            >
              [2]
            </a>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title="What legal structure should you choose when you want to start your do-good project?"
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              Should you start your own non-profit organization or a company?
            </p>
            <p>
              Everything is communication they say. When you want to create a
              start-up and show the world that you intend to be a good-doer that
              is sustainable and conscious, there is a statement to be made
              already in the legal form you choose. And to get that choice right
              at the start sure is to be preferred.
            </p>
            <p>The main 2 choices are:</p>
            <ol>
              <li>A non-profit association (Sw: ideell förening)</li>
              <li>A limited liability company (Sw: aktiebolag)</li>
            </ol>
            <p>
              So, what message will you send by starting a non-profit
              organization compared to starting an ordinary company that intends
              to do good and be sustainable?
            </p>
            <p>
              Firstly; the objective of your enterprise is up to you and your
              co-founders (as long as it will be within laws and regulatory
              requirements). But the 2 legal structures mentioned above have
              important differences. Legal ones. So let’s do the quick run-down.
            </p>
            <ol>
              <li>
                <p>
                  <b>The limited liability Company (LLC)</b>
                </p>
                <p>
                  In Sweden we typically do business through a limited liability
                  company.
                </p>
                <p>
                  <b>A company</b> can have a do-good purpose and a
                  sustainability profile, but according to Swedish law, it will
                  as an outset have a for-profit motive. This will be a legal
                  obligation for the company’s board and management to pursue,
                  unless the shareholders decide to explicitly state in the
                  articles of association that the company shall have a
                  non-profit motive. The articles must be registered with the
                  Swedish Companies Registration Office and will be public
                  information for everybody to see.
                </p>
              </li>
              <li>
                <p>
                  <b>The non-profit association </b>
                </p>
                <p>
                  As a starting point, <b>the non-profit association</b> is
                  something of the opposite of the LLC. To call yourself a
                  non-profit you must have an overarching non-profit motive and
                  type of operation. However, as a general rule you may also
                  have profit making operations - but only if the profits are
                  reinvested in the association. Focus and the bulk of
                  operations should hence be non-profit work.
                </p>
                <p>
                  So, the legal structure will have effects and communicate
                  different profit purposes.
                </p>
              </li>
              <li>
                <p>
                  <b>Same for both</b>
                </p>
                <p>
                  Good to know is also that both types of structure are legal
                  persons that can act, enter business relationships, sell, buy,
                  offer etc. on their own account. (It will not be the
                  founders/owners who are responsible for its obligations but
                  the company itself, as can be the case with other structures.)
                </p>
              </li>
              <li>
                <p>
                  <b>
                    What message do you send with the choice of legal structure?
                  </b>
                </p>
                <p>
                  There is a communication aspect to this legal set-up that is
                  good to understand, i.e. the why legislators have decided that
                  there is a profit motive to be presumed in the LLC? This is
                  because different types of legal structures should be used to
                  fit different purposes and carry this information. When you –
                  as an external party from the organization at hand - is
                  dealing with it, you should be able to assume certain things
                  based on the structure alone. For instance, as a potential
                  investor, partner or when taking an employment – you should be
                  able to directly make the right assumption about whether the
                  company intends to grow its value and make a profit for its
                  owners or not.{" "}
                </p>
                <p>
                  Structuring your business as a company hence communicates to
                  the world that you intend to make a profit/build value into
                  the company unless you actively change this in your articles
                  of association. And a non-profit association tells the world
                  that you intend for any profits that are made to go back into
                  the organization/to other do-good purposes (and not go to the
                  owners etc.).{" "}
                </p>
              </li>
            </ol>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title="What does it mean for YOU to say YES to joining an Advisory Board? And for you who is searching..."
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>The popularity of Advisory Boards is still on the rise.</p>
            <p>
              But what does it actually mean for you to join an advisory board,
              and how does it differ from joining a traditional board of
              directors in a company?
            </p>
            <p>
              And from the owner/founder perspective - do you need both, and who
              goes where?
            </p>
            <p>
              I get the question from many high-in-demand business persons, as
              well as from founders, so let’s make a short overview.
            </p>
            <p>
              There is a CLEAR difference between saying yes to an advisory and
              a formal board position:
            </p>
            <ul>
              <li>
                The advisory board is not a legal concept regulated by law.[1]
              </li>
              <li>
                The formal board of directors is on the other hand a legal
                concept and comes with significant LEGAL OBLIGATIONS, but also
                POWERS over the company.
              </li>
            </ul>
            <p>
              And both the advisory board and the formal board of directors can
              fill important roles for a start-up. Even able to provide
              synergistic effects for each other and the management. They will
              be key players when building the company's good governance
              structure. Let's not forget - good governance is fun and
              meaningful, and gives the business strength and a solid foundation
              beyond what it could muster up otherwise.
            </p>
            <p>
              <b>The advisory board</b> is a nice to have. More like a mentor
              and support system, a well composed advisory board can provide
              guidance and open doors leading to greater success for any
              company. The function is what the company chooses it to be, most
              typically to support and advise in specific areas.
            </p>
            <p>
              Perfect for start-ups needing guidance when they have a lean
              organization that does not yet have all necessary competences, or
              that has not yet by itself built up its network or track-record.
              The position is as a rule an honorary assignment that is not
              remunerated. Often it will be persons with more senior experience
              in the business area that the company is focusing on. Since there
              are no direct legal obligations, the company's founders/owners can
              be more relaxed when asking someone to join. And the persons being
              asked can be more generous as regards saying yes compared with a
              formal board position. Check out the Forbes check-list style
              article, made by and for founders seeking to establish a
              meaningful advisory board.
            </p>
            <a href="https://www.forbes.com/sites/theyec/2018/09/17/11-ways-to-find-and-build-your-perfect-advisory-board/#57e5b3f44621">
              https://www.forbes.com/sites/theyec/2018/09/17/11-ways-to-find-and-build-your-perfect-advisory-board/#57e5b3f44621
            </a>
            <p>
              The advisory board can furthermore be a perfect test venue also
              for finding out who shows the right competence and engagement for
              being nominated for a proper board position.
            </p>
            <p>
              <b>A formal board of directors’ position</b> on the other hand is
              a so-called fiduciary assignment that means that you as a director
              accepts significant legal obligations. This includes that you must
              be sure to have sufficient in-depth knowledge of company’s
              business and finances as well as about what decisions and
              supervision the law requires of you. You hence take a
              responsibility for the company being sound, and answer to the
              shareholders. You will also appoint the CEO, you need to stay on
              top of the company’s liquidity, and the board is responsible for
              ensuring the overall implementation of regulatory requirements.
              While you can delegate tasks you cannot delegate the ultimate
              responsibility.
            </p>
            <p>
              <b>Summary:</b> If you are contemplating to say yes to a formal
              board position you should ask yourself if you know the company
              well enough and if you have the time and commitment needed so that
              you are ready for the obligations that a board postion brings. For
              an advisory board position, you should in particular see what the
              company/founders expect from you and if you feel that you can and
              want to deliver on that.
            </p>
            <p>
              To be appointed, or to appoint someone, to an advisory or a formal
              board postion, is an important decision for the company. And for
              you being asked, it should always be seen as an honour and a
              recognition.
            </p>
            <br />
            <br />
            <p>
              [1] There are however some jurisdictions (such as Germany) where
              the advisory board is a more formalized corporate body and which
              is often given certain decision-making rights.{" "}
            </p>
          </div>
        </DropDownArticle>
        <DropDownArticle
          title={
            '"Be Sustainable and Value driven"​ they say. But how do you – as a Company – do it in practice? Here´s some help'
          }
          visibleArticle={visibleArticle}
          setVisibleArticle={setVisibleArticle}
        >
          <div className="content has-text-left">
            <p>
              <b>
                Research shows the importance of Sustainable Branding and its
                significant effect on Brand Equity and Company Success. It is
                also clear that the branding must have an authentic base in the
                operations of the business - i.e. not only going for a
                "greenwashing" approach.
              </b>
            </p>
            <p>
              <b>
                Sustainable marketing has significant positive effects - and it
                is key to understand that such effects go far further than the
                issue of consumer attitude-behaviour gap in relation to
                sustainability issues. In other words, significant market shares
                can be gained from going beyond only responding to the level of
                sustainability that data on customer behaviour show as in demand
                right now. A very good overview can be found in the 8 page
                article "Sustainable Branding" by Grubor and Jaksa
              </b>{" "}
              (free download on SSRN).
            </p>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3282459"
              className="box mx-2"
            >
              <p>
                <b>Sustainable Branding</b>
              </p>
              <p>
                The relationship between brands and consumers has evolved
                significantly over time. Companies that own successful brands
                have the power to modify the existing system of values [...]
              </p>
            </a>
            <p>
              Also, here are some helpful key steps on how sustainability goals
              can be made practical and measurable for a company. They are taken
              from the workshop on the topic “How to create value by caring for
              soft values” Thomas Kanestad and I held in fantastic New York on
              SACCNY's Sustainology Conference this autumn, discussing the
              present and the future of sustainable businesses, food-tech and
              the interaction between Swedish and New York based businesses.
            </p>
            <p>
              <b>First; what should be done and for whom?</b>
            </p>
            <p>
              The Customer is of course key in any business considerations -
              information on transparent and authentic sustainability work and
              communication must reach the customer if the aim is to attract and
              build loyalty with those who want the Sustainable life style.
            </p>
            <p>
              But, on top of that, employee branding can be as important when
              setting the sustainability communication. That millennials are
              said to be hard to attract and retain for any company is old news
              by now. The question is how a company can ensure that sustainable
              values are intertwined with the core business and that this vision
              and work is more than green-washing.
            </p>
            <p>
              Key Performance Indicators are a perfect – but tricky – way to
              transform talk into reality. It both makes the company values
              concrete and actionable, and it makes for good material to use in
              the (transparent) communication towards customers and employees.
              Showing that the Company means business.
            </p>
            <p>
              <b>
                So, what are KPI:s and how do you decide which to apply in your
                business?
              </b>
            </p>
            <p>
              KPI:s are metrics – quantifiable – and Sustainability is as an
              outset values – quality. Here is a check-list to help you make the
              transition between sustainability metrics and financial metrics, a
              way that will make the goals you set relate to overall challenges
              and financial situation.{" "}
            </p>
            <p>
              <b>When identifying the right KPI:s for your business;</b>
            </p>
            <ol>
              <li>
                What are the general areas that you should cover? E.g.
                environment, equality etc.
              </li>
              <li>
                What are key areas for your business and business model? I.e. if
                you are in the car industry it can be enviroment, if you are a
                venture capital firm it can be governance and active ownership
                in Sustainability issues in your portfolio companies.
              </li>
              <li>
                Whose perspective should the KPI:s address? This is important!
                Are you looking to different stakeholders, and if so could there
                be conflicting interests? Ask the hard questions. For instance,
                could the customer want one thing, the owner another based on
                how it affects the results, and the employees a third because
                they see to how the work environment will be affected? Don´t
                close your eyes - instead, seek to clearly list all stakeholders
                and what goals they, as a group, would want the company to work
                towards.
              </li>
              <li>
                Consumer demands/media pressure? What will your activities and
                stated goals look from the outside? Is there a risk that they
                would be misunderstood - if so, you must be sure to have a
                communication strategy that is one step ahead.
              </li>
              <li>
                Government/politicians? Are there regulatory requirements on the
                horizon? Then this could be a reason to prioritize actions that
                would otherwise not be high on your KPI list.
              </li>
              <li>
                Current owners/future investors? Is there an exit strategy for
                the Company or does it plan to seek new funding? Then the
                anticipated preferences of a future owner (which could include
                the general public in an IPO process) should be included, so
                that the future deal does not have unnecessary friction based on
                lack of fundamental KPIs within the Sustainability area. Act now
                so you don´t have to panic later.
              </li>
              <li>
                Board of directors/management/employees? Is there a management
                incentive program in place? If so, the KPIs concerning
                Sustainability areas that the individual
                manager/director/employee can affect should be included in that
                person's incentive program to ensure that they are incentivised
                to act for sustainability - and not only for financial numbers
                (although the two will often go more hand-in-hand than most will
                appreciate).
              </li>
              <li>
                What are you looking to achieve and why? The million dollar
                question. Don´t be too general. A KPI is a specific metric.
              </li>
              <li>
                What are the risks of excluding a specific area? Keep your eyes
                open for the risk of bad publicity, new regulation etc.
              </li>
              <li>
                What is the competition doing? There can be both first mover
                advantages and second mover advantages, in particular if there
                are significant costs related to the sustainable KPI/goal such
                as when R&D teams need to be engaged to a larger extent.
              </li>
              <li>
                How many KPI:s should your company have? There is a clear risk
                with having to many KPI:s - you lose the clarity of what should
                be done and follow-up on. Then the KPI:s will not help you but
                will instead only become a re-written policy code for
                Sustainability.
              </li>
              <li>
                Do they work with or against each other? It is important that
                the KPI:s match with each other as well as with your overall
                business settings. Don´t decide on something that, when looking
                at the entire business, just won't work.
              </li>
              <li>
                Internal order of priority – and why? Sustainability is a big
                and shifting area. Communicate to your employees what is to be
                your focus in both short and long term. Then they will be able
                to engage in the concrete goals - see that the company really
                wants to implement its Value driven Brand in the everyday work
                and feel that they themselves can make a change. It will be
                meaningful to go to work!
              </li>
            </ol>
            <p>
              <b>
                To give some more classic examples of how the KPI can be
                designed
              </b>
            </p>
            <ul>
              <li>
                Hard values - CO2 emissions - Employee turn-over or sick leave -
                Food waste
              </li>
              <li>
                Soft values - Positive customer survey responses - Positive
                (social) media coverage - Quality ratings
              </li>
            </ul>
            <p>
              <small>
                The more concrete the better, but that should not mean that the
                soft values are overlooked – opinions and perceptions matter in
                business!
              </small>
            </p>
            <p>
              <b>
                It can be helpful to, as a check, for each KPI/action point:
              </b>
            </p>
            <ol>
              <li>Think of both the short-term and long-term perspective</li>
              <li>
                Ensure that all relevant costs and savings are considered, i.e.
                also the more hidden ones that may be affecting the results
              </li>
              <li>
                Consider the potentially high implementation costs or research
                and development costs vs long term goodwill and consumer
                happiness
              </li>
              <li>Ensure that the different KPI targets work together</li>
              <li>
                Are your KPI:s conflicting? Too costly? Subject to unrealistic
                timelines?
              </li>
              <li>
                Assess what the main revenue increases connected with the KPI
                actions are
              </li>
            </ol>
            <p>
              <b>
                More typical examples of some characteristic KPI:s within
                sustainability are:
              </b>
            </p>
            <ol>
              <li>
                <p>
                  <b>Environmental</b> - Reduce food waste - Reduce number of
                  plastic bags sold - CO2 emission monitoring
                </p>
              </li>
              <li>
                <p>
                  <b>Health</b> - Reduce sugar and saturated fats within food
                  products - Increase the physical activities of employees -
                  Reduce self assessed stress for employees
                </p>
              </li>
              <li>
                <p>
                  <b>Organisation & Structure</b> - Reporting – e.g.
                  sustainability reporting as a recurring topic addressed by the
                  board/management team - GRC Framework – e.g. documented
                  policies for the company’s processes and framework to manage
                  GRC and sustainability
                </p>
              </li>
              <li>
                <p>
                  <b>Corporate Responsability</b> - Business ethics – e.g.
                  quality of written guidelines for dealing with business
                  partners and public officials
                </p>
              </li>
              <li>
                <p>
                  <b>Governance</b> - Code of Conduct – e.g. recurring training
                  session, surveys and auditing of compliance with adopted code
                  of conduct - Whistle blowing system – e.g. quality of whistle
                  blowing system and monitoring of reported cases
                </p>
              </li>
              <li>
                <p>
                  <b>Community initiatives</b>- Active participation in local
                  charities - Events for the local community - Awareness
                  campaigns
                </p>
              </li>
              <li>
                <p>
                  <b>Research & Development</b> - Increase budget/resources
                  devoted to sustainability - Invest in new technology focusing
                  on sustainability{" "}
                </p>
              </li>
            </ol>
            <p>
              Hope this gets you and your colleagues thinking - and let's work
              together to encourage others to define their sustainability values
              through KPI:s or other concrete and measurable methods, so we get
              as many and as well thought through actions as possible. And use
              the KPI:s as a clear way to communicate your values within the
              organization.
            </p>
          </div>
        </DropDownArticle>
      </SectionBody>
    </>
  );
}
