<script>
  import TimelineLeft from "./timeline/TimelineLeft.svelte";
  import TimelineRight from "./timeline/TimelineRight.svelte";
</script>

<article
  class="min-h-screen pt-14 md:grid md:grid-cols-2 md:w-1/2 md:m-auto"
  id="experience"
>
  <TimelineLeft title="2019 - now">
    <p>
      Since August 2019, I am employeed in <a
        class="underline"
        href="https://www.hyperiosoftware.com/">Hyperio Software</a
      >, a company in Cyprus specializing in SaaS offerings.
      <br />
      Currently I have the role of <u>Tech Lead</u> and responsibility over every software
      and infrastructure in my team's domain. I am also handling architecture design,
      product requirement translation to technical specs and overall team's quality.
      <br />
      Our current stack is comprised of <strong>dockerized</strong>,
      <strong>Node</strong>
      applications/scripts deployed on <strong>Kubernetes</strong> hosted on
      <strong>Azure</strong>. As for the front-end, we develop UIs that span from
      <strong>AngularJS</strong>
      and <strong>Material Design</strong> to <strong>Sveltekit</strong>
      applications and <strong>TailwindCSS</strong>.
    </p>
  </TimelineLeft>

  <TimelineRight />

  <TimelineLeft />

  <TimelineRight>
    <h1 class="text-xl">2016 - 2019</h1>
    <p>
      For 3 years, I was serving as a senior developer and later on, <u>Back-End Team Lead</u> in FXPrimus, a Limassol based Fintech company.
      <br>
      I joined their IT ranks early on in Cyprus offices, so I had the opportunity to work with various task, automating office work, ETL pipelines, setting up IT processes
      and of course developing all kinds of portals and applications. Over the years I worked extensively with <strong>bash</strong>, <strong>PHP</strong>, <strong>Node</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong> and <strong>MongoDB</strong> and other related technologies.
      <br>
      One of my biggest achievements during my lead was developing a new core back-end to support the main customer-facing application.
      This was designed with microservices approach leveraging message queues to achieve resiliency, better software lifecycles and more flexible scalability.
    </p>
  </TimelineRight>
</article>
