<template>
  <svg width="246" height="245" viewBox="0 0 246 245" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="drop-shadow-filter--hover" x="0.415527" y="0.890625" width="244.822" height="243.454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur id="blur-drop-shadow" stdDeviation="15"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
    <animate xlink:href="#blur-drop-shadow" attributeName="stdDeviation" from="4" to="8" dur="0.5s" begin="0s" repeatCount="indefinite"/>
  </svg>
</template>
