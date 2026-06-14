<script setup lang="ts">
import ServiceCard from '../ui/BaseCard.vue'

const services = [
  {
    title: 'Web Development',
    description:
      'Performant, accessible web apps built with modern frameworks and edge-first infrastructure.',
  },
  {
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps focused on performance, usability, and scalability.',
  },
  {
    title: 'IT Consulting',
    description:
      'Strategic technology guidance to help teams choose the right tools, architecture, and processes.',
  },
  {
    title: 'UI/UX Design',
    description:
      'User-centered experiences designed to increase engagement, accessibility, and customer satisfaction.',
  },
  {
    title: 'AI Solutions',
    description:
      'AI-powered applications, automation workflows, and intelligent systems tailored to business needs.',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Secure, scalable cloud infrastructure and deployment pipelines built for modern applications.',
  },
]
</script>

<template>
  <section id="work" class="bg-slate-50 py-16">
    <div class="container mx-auto px-5">
      <div>
        <span class="text-[15px] font-bold text-blue-600"> What we do </span>

        <h1 class="mt-3 max-w-4xl text-4xl md:text-5xl font-bold text-slate-900">
          Full-stack capabilities, one partner.
        </h1>

        <p class="mt-5 max-w-3xl text-lg text-slate-500">
          From product strategy to deployment — our cross-functional teams ship the work that moves
          your roadmap forward.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
        >
          <template #icon>
            <!-- Web Development -->
            <svg
              v-if="service.title === 'Web Development'"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M8 8L4 12L8 16" stroke="white" stroke-width="2" />
              <path d="M16 8L20 12L16 16" stroke="white" stroke-width="2" />
              <path d="M14 4L10 20" stroke="white" stroke-width="2" />
            </svg>

            <!-- Mobile Development -->
            <svg
              v-else-if="service.title === 'Mobile Development'"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="7" y="2" width="10" height="20" rx="2" stroke="white" stroke-width="2" />
              <circle cx="12" cy="18" r="1" fill="white" />
            </svg>

            <!-- IT Consulting -->
            <svg
              v-else-if="service.title === 'IT Consulting'"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="7" r="3" stroke="white" stroke-width="2" />
              <path
                d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            <!-- UI/UX Design -->
            <svg
              v-else-if="service.title === 'UI/UX Design'"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" stroke-width="2" />
            </svg>

            <!-- AI Solutions -->
            <svg
              v-else-if="service.title === 'AI Solutions'"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" stroke-width="2" />
              <path d="M9 15L12 9L15 15" stroke="white" stroke-width="2" />
            </svg>

            <!-- Cloud Solutions -->
            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 18H17C19.2 18 21 16.2 21 14C21 11.8 19.2 10 17 10C16.7 7.2 14.4 5 11.5 5C8.5 5 6 7.5 6 10.5V11C3.8 11 2 12.8 2 15C2 16.7 3.3 18 5 18H7Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </template>
        </ServiceCard>
      </div>
    </div>
  </section>
</template>
