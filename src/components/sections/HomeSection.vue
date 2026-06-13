

<template>
  <header class="home-section">
  <h1
  class="
    text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
    2xl:text-[80px]
    leading-tight
    font-bold
    w-full
    md:w-4/5
    lg:w-3/5
    text-center
    mx-auto
    max-w-[800px]
  "
>
  Engineering
  <span class="highlight">digital products</span>
  that move companies forward.
</h1>

    <p class="home-paragraph">
      {{ $t('home.description') }}
    </p>

    <div class="flex flex-col lg:flex-row flex-wrap  gap-5 justify-center mx-5">
     <button
  class="
    w-full md:w-[258px]
    bg-primary-gradient
    hover:bg-primary-gradient-hover
    text-white
    px-6
    py-3
    rounded-lg
    transition-all
    duration-300
  "
>
  {{ $t('home.contact') }}
</button>

  <button
  class="
    w-full md:w-[258px]
    px-6 py-3
    rounded-lg
    text-base
    border-2
    border-slate-900
    text-slate-900
    hover:text-white
    hover:bg-primary-gradient hover:bg-primary-gradient 
    transition-all
    duration-300
    cursor-pointer
  "
>
  {{ $t('home.portfolio') }}
</button>
    </div>
  </header>
</template>

<style lang="css">

.home-section {
  background:
    radial-gradient(ellipse at center,
      rgba(14, 165, 233, 0.12) 0%,
      rgba(14, 165, 233, 0.05) 40%,
      transparent 70%),
    linear-gradient(to right,
      #f8fafc,
      #eef6ff,
      #f8fafc);
      padding: 20px;
}
.primary {
  background: linear-gradient(135deg,
      oklch(0.55 0.21 263),
      oklch(0.72 0.13 210));

      padding: 12px 24px;
      border-radius: 8px;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s ease;
      width: 258px;

}
.primary:hover {
  background: linear-gradient(135deg,
      oklch(0.72 0.13 210),
      oklch(0.55 0.21 263));
}
.secondary {
  background: white;
  padding: 12px 24px;
  border-radius: 8px;
  color: var(--text);
  border: 2px solid var(--text);
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
 width: 258px;
}
.secondary:hover {
   background: linear-gradient(135deg,
      oklch(0.72 0.13 210),
      oklch(0.55 0.21 263));
      color:#fff;
}   

.home-heading {
  font-size: 80px;
  line-height: 1.2;
  font-weight: 700;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}
.home-paragraph {
  font-size: 20px;
  color: grey;
  margin: 20px auto;
  width: 100%;
  max-width: 600px;
  line-height: 1.5;
  text-align: center;
}
</style>