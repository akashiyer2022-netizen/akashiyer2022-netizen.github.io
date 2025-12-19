import Container from "../components/Container";
import Rule from "../components/Rule";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";

const FOUNDER_IMG =
  "https://images.squarespace-cdn.com/content/v1/662071e232ef975602f82279/cdc4450d-b876-4929-a85a-d3d63c56a37e/IMG_6289.jpg";

export default function AboutUs() {
  return (
    <div className="bg-paper text-ink">
      {/* Masthead */}
      <div className="py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.22em] text-ink/70">
              About Us
            </div>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.02]">
              Education comes through infinite mediums,
            </h1>
            <p className="mt-4 text-lg md:text-xl text-ink/75 leading-relaxed">
              We hope to provide at least a few of those at the highest quality
            </p>
          </div>
        </Container>
      </div>

      <Rule />

      {/* Editorial body */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[280px_1fr]">
            <SectionHeading
              kicker="Mission"
              title="Who we are"
              className="md:sticky md:top-24 h-fit"
            />

            <div className="prose prose-neutral max-w-none prose-p:text-ink/80 prose-a:text-ink prose-a:decoration-rule hover:prose-a:decoration-ink">
              <p>
                Founded in 2020, The Ursa Majors Group is a beacon of innovation
                and inspiration in the realm of education and beyond. What began
                as a humble endeavor within the Education Division has blossomed
                into a dynamic organization with a multifaceted approach to
                learning and engagement.
              </p>
              <p>
                At our core, we are driven by a singular mission: to empower
                students of all ages with meaningful and enriching learning
                experiences. With a focus on aerospace, physics, and astronomy,
                our Education Division seeks to instill a lifelong love for these
                disciplines through imaginative storytelling, interactive
                lessons, and hands-on exploration.
              </p>
              <p>
                As we continue to expand our horizons, we have established
                additional avenues for learning and growth. Our Projects Division
                provides middle and high school students with the opportunity to
                pursue their passions and explore career interests under the
                guidance of expert mentors. Beyond astronomy, physics, and
                aerospace, our Projects Division encompasses all STEM fields,
                ensuring that students have the opportunity to delve into a wide
                range of disciplines and interests.
              </p>
              <p>
                Through real-world projects and technical experiences, we aim to
                equip students with the skills and confidence to thrive in higher
                education and beyond.
              </p>
              <p>
                In our Podcast Center, we invite listeners to embark on a journey
                of discovery, engaging with industry and academia leaders in STEM
                fields through insightful conversations and thought-provoking
                discussions.
              </p>
              <p>
                Complementing our podcast endeavors, our Blogger division keeps
                our community informed and inspired with the latest developments
                in STEM fields.
              </p>
              <p>
                At The Ursa Majors Group, we believe that education knows no
                boundaries. That’s why we are committed to partnering with
                non-profit organizations worldwide to extend the reach of our
                educational initiatives, particularly to underprivileged
                communities.
              </p>
              <p>
                Join us on this journey of discovery and inspiration. Together,
                let’s reach for the stars.
              </p>

              <Rule className="my-10" />

              <div className="flex items-center gap-6">
                <img
                  src={FOUNDER_IMG}
                  alt="Rushil Sharan"
                  className="h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm text-ink/70">Founder and CEO</div>
                  <div className="text-lg font-semibold tracking-tightest">
                    Rushil Sharan
                  </div>
                </div>
              </div>

              <Rule className="my-10" />

              <SectionHeading kicker="Teams" title="Our Teams" />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <FeatureCard
                  title="The Governance"
                  blurb="Meet the leadership team at Ursa Majors!"
                  to="/governance"
                />
                <FeatureCard
                  title="The Education Team"
                  blurb="Meet the teachers from our Education Division!"
                  to="/education-team"
                />
                <FeatureCard
                  title="The Projects Team"
                  blurb="Meet the mentors from our Projects Division!"
                  to="/projects-team"
                />
                <FeatureCard
                  title="The Advisors"
                  blurb="Meet our advisors, leaders in the industry and academia"
                  to="/advisors"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
