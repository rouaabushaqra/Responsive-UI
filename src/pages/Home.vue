<script setup lang="ts">
import NavbarSection from '../components/sections/NavbarSection.vue'
// import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import WorkSection from '../components/sections/WorkSection.vue'
// import PricingSection from '../components/sections/PricingSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import FooterSection from '../components/sections/FooterSection.vue'
import HomeSection from '../components/sections/HomeSection.vue'
import TrustedSections from '../components/sections/TrustedSections.vue'
</script>

<template>
  <main class="home-page">
    <NavbarSection />
    <HomeSection />
    <TrustedSections />
    <WorkSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
    <!-- <WorkSection />
    <AboutSection />
    <FooterSection /> -->
    <!-- <NavbarSection />
  <HeroSection />
  <ServicesSection />
  <AboutSection />
  <WorkSection />
  <PricingSection />
  <ContactSection />
  <FooterSection /> -->
  </main>
</template>
