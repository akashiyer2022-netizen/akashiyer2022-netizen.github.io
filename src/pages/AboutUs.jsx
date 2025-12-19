const HERO_BG =
  "https://images.squarespace-cdn.com/content/v1/662071e232ef975602f82279/1713414817714-DQSC6R0P6U3T6M431W03/image-asset.jpeg";
const FOUNDER_IMG =
  "https://images.squarespace-cdn.com/content/v1/662071e232ef975602f82279/cdc4450d-b876-4929-a85a-d3d63c56a37e/IMG_6289.jpg";

function TeamCard({ title, blurb, href }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/80">{blurb}</p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
      >
        Read More <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative">
        <div
          className="relative h-[70vh] min-h-[520px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80">
                About Us
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Education comes through infinite mediums,
              </h1>
              <h2 className="mt-3 text-2xl font-medium text-white/90 md:text-3xl">
                We hope to provide at least a few of those at the highest quality
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10">
          <div className="prose prose-invert max-w-none">
            <p>
              Founded in 2020, The Ursa Majors Group is a beacon of innovation and
              inspiration in the realm of education and beyond. What began as a
              humble endeavor within the Education Division has blossomed into a
              dynamic organization with a multifaceted approach to learning and
              engagement.
            </p>
            <p>
              At our core, we are driven by a singular mission: to empower students
              of all ages with meaningful and enriching learning experiences. With
              a focus on aerospace, physics, and astronomy, our Education Division
              seeks to instill a lifelong love for these disciplines through
              imaginative storytelling, interactive lessons, and hands-on
              exploration.
            </p>
            <p>
              As we continue to expand our horizons, we have established additional
              avenues for learning and growth. Our Projects Division provides
              middle and high school students with the opportunity to pursue their
              passions and explore career interests under the guidance of expert
              mentors. Beyond astronomy, physics, and aerospace, our Projects
              Division encompasses all STEM fields, ensuring that students have
              the opportunity to delve into a wide range of disciplines and
              interests.
            </p>
            <p>
              Through real-world projects and technical experiences, we aim to
              equip students with the skills and confidence to thrive in higher
              education and beyond.
            </p>
            <p>
              In our Podcast Center, we invite listeners to embark on a journey of
              discovery, engaging with industry and academia leaders in STEM
              fields through insightful conversations and thought-provoking
              discussions. Our podcasts serve as a platform for deepening
              understanding, fostering dialogue, and igniting curiosity across a
              diverse range of topics.
            </p>
            <p>
              Complementing our podcast endeavors, our Blogger division keeps our
              community informed and inspired with the latest developments in STEM
              fields. Through engaging content and thoughtfully curated resources,
              we strive to cultivate a vibrant ecosystem of learning and
              collaboration.
            </p>
            <p>
              At The Ursa Majors Group, we believe that education knows no
              boundaries. That’s why we are committed to partnering with non-profit
              organizations worldwide to extend the reach of our educational
              initiatives, particularly to underprivileged communities. Together,
              we are building a brighter future where knowledge is accessible to
              all, and the sky is truly the limit.
            </p>
            <p>
              Join us on this journey of discovery and inspiration. Together,
              let’s reach for the stars.
            </p>
          </div>

          {/* Founder */}
          <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <img
              src={FOUNDER_IMG}
              alt="Rushil Sharan"
              className="h-56 w-56 rounded-full object-cover ring-1 ring-white/15"
              loading="lazy"
            />
            <div>
              <div className="text-lg font-semibold">
                Rushil Sharan, Founder and CEO
              </div>
            </div>
          </div>

          {/* Teams */}
          <section>
            <h2 className="text-2xl font-semibold">Our Teams</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TeamCard
                title="The Governance"
                blurb="Meet the leadership team at Ursa Majors!"
                href="/governance"
              />
              <TeamCard
                title="The Education Team"
                blurb="Meet the teachers from our Education Division!"
                href="/education-team"
              />
              <TeamCard
                title="The Projects Team"
                blurb="Meet the mentors from our Projects Division!"
                href="/projects-team"
              />
              <TeamCard
                title="The Advisors"
                blurb="Meet our advisors, leaders in the industry and academia"
                href="/advisors"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
