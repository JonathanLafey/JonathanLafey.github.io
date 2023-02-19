<script>
  import TimelineLeft from "./timeline/TimelineLeft.svelte";
  import TimelineRight from "./timeline/TimelineRight.svelte";
</script>

<article class="min-h-screen pt-14" id="experience">
  <h1 class="text-3xl my-8 mx-4 md:mx-12">Experience</h1>

  <section class="md:grid md:grid-cols-2 md:w-1/2 mx-4 md:m-auto">
    <TimelineLeft title="2019 - now">
      <p>
        Since August 2019, I am employeed in <a
          class="underline"
          href="https://www.hyperiosoftware.com/">Hyperio Software</a
        >, a company in Cyprus specializing in SaaS offerings.
        <br />
        Currently I have the role of <u>Tech Lead</u> and responsibility over
        every software and infrastructure in my team's domain. I am also
        handling architecture design, product requirement translation to
        technical specs and overall team's quality.
        <br />
        Our current stack is comprised of <strong>dockerized</strong>
        <strong>Node</strong>
        applications & scripts deployed on <strong>Kubernetes</strong> hosted on
        <strong>Azure</strong>. As for the front-end, we develop UIs that span
        from
        <strong>AngularJS</strong>
        and <strong>Material Design</strong> to <strong>Sveltekit</strong>
        applications and <strong>TailwindCSS</strong>.
      </p>
    </TimelineLeft>

    <TimelineRight />

    <TimelineLeft />

    <TimelineRight title="2016 - 2019">
      <p>
        For 3 years, I was serving as a senior developer and later on, <u
          >Back-End Team Lead</u
        >
        in <a class="underline" href="https://fxprimus.com/">FXPrimus</a>, a
        Limassol based Fintech company.
        <br />
        I joined their IT ranks early on in Cyprus offices, so I had the opportunity
        to work with various tasks, automating office work, ETL pipelines, setting
        up IT processes and of course developing all kinds of portals and applications.
        Over the years I worked extensively with <strong>bash</strong>,
        <strong>PHP</strong>, <strong>Node</strong>, <strong>MySQL</strong>,
        <strong>PostgreSQL</strong>
        and <strong>MongoDB</strong> and other related technologies.
        <br />
        One of my biggest achievements during my lead was developing a new core back-end
        to support the main customer-facing application. This was designed with microservices
        approach leveraging message queues to achieve resiliency, better software
        lifecycles and more flexible scalability.
      </p>
    </TimelineRight>

    <TimelineLeft title="2015 - 2016">
      <p>
        From second half of '15 until the summer of 2016 I was both employeed in <a
          class="underline"
          href="https://www.exeliatech.com/">Exelia</a
        >
        as a full-stack developer, working on desktop and web applications for the
        maritime industry and also working as <u>freelancer</u> responsible for
        every part of an e-shop. From mockups to production.
        <br />
        That year, I was mainly using <strong>C#</strong> and
        <strong>Razor</strong>
        in a
        <strong>.net</strong>
        desktop application persisting data in <strong>SQL server</strong>.
        Also, I was developing a couple SPAs using <strong>AngularJS</strong>,
        <strong>Angular 2</strong>
        and <strong>PHP</strong>.
      </p>
    </TimelineLeft>

    <TimelineRight />

    <TimelineLeft />

    <TimelineRight title="2014 - 2015">
      <p>
        For about a year, I worked in <a
          class="underline"
          href="https://ots.gr/">OTS</a
        >, a greek company mainly involved in the public sector.
        <br />
        One of the coolest projects was an early part of the
        <a class="underline" href="https://ots.gr/portfolio-items/19263/"
          >SWAN Platform</a
        >, a waste management solution for various european countries.
        <br />
        Here I learned the horrors of <strong>UML</strong>,
        <strong>Tomcat</strong>
        and <strong>waterfall model</strong>
        but also the joys of <strong>Java Spring</strong>,
        <strong>MySQL</strong>
        and <strong>AngularJS</strong>.
      </p>
    </TimelineRight>
  </section>
</article>
