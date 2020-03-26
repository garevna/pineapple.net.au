<template>
  <v-container fluid>
    <svg class="defs-only" width="1440" height="663" viewBox="0 0 1440 663" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <symbol id="green-fone">
        <path d="M0 93.5021C332.664 16.9046 605.07 58.3589 817.5 64C1051.6 70.2167 1172 57.5016 1440 0V587.5C1230 630.498 1003 632.245 817.5 612.5C558.859 584.97 319.335 611.304 0 663V93.5021Z" fill="#94C578"/>
        <path d="M0 93.5021C332.664 16.9046 605.07 103.86 817.5 109.502C1051.6 115.718 1172 109.502 1440 52V561.002C1230 604 1003 632.245 817.5 612.5C558.859 584.97 319.335 509.306 0 561.002V93.5021Z" fill="url(#paint0_linear)"/>
        <circle cx="452" cy="307.5" r="284" fill="#94C578"/>
        <circle cx="452" cy="307.5" r="219" fill="#64BE50"/>
        <circle cx="452" cy="264" r="138" fill="#3C8D2A"/>
        <path d="M1269 340C1269 434.441 1345.56 511 1440 511V169C1345.56 169 1269 245.559 1269 340Z" fill="#2A8026"/>
        <path d="M1325 340C1325 403.513 1376.49 455 1440 455V225C1376.49 225 1325 276.487 1325 340Z" fill="#1E6C1A"/>
        <path d="M1380 340C1380 373.137 1406.86 400 1440 400V280C1406.86 280 1380 306.863 1380 340Z" fill="#156911"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-6.10404e-06" y1="619" x2="1440" y2="-44.5001" gradientUnits="userSpaceOnUse">
            <stop offset="0.089305" stop-color="#72BF44"/>
            <stop offset="0.694869" stop-color="#20731C"/>
          </linearGradient>
        </defs>
      </symbol>
    </svg>

    <svg class="defs-only" width="360" height="709" viewBox="0 0 360 709" fill="none" xmlns="http://www.w3.org/2000/svg">
      <symbol id="green-fone-small">
        <path d="M369.5 639.775V19C101.5 79.7584 -18.895 93.1936 -253 86.6248V666.191C-67.4989 687.054 159.5 685.208 369.5 639.775Z" fill="#93C377"/>
        <path d="M369 611.704V73C101.215 133.857 -19.0831 140.436 -253 133.857V666.207C-67.6479 687.104 159.169 657.211 369 611.704Z" fill="url(#paint0_linear)"/>
        <path d="M281 143C281 221.977 345.023 286 424 286V0C345.023 0 281 64.0233 281 143Z" fill="#2A8026"/>
        <path d="M327.83 143C327.83 196.113 370.887 239.17 424 239.17V46.8306C370.887 46.8306 327.83 89.8872 327.83 143Z" fill="#1E6C1A"/>
        <circle cx="10" cy="506" r="203" fill="#94C578"/>
        <circle cx="9.99966" cy="506" r="156.539" fill="#64BE50"/>
        <circle cx="11.4299" cy="506" r="98.6408" fill="#3C8D2A"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-253" y1="673.086" x2="475.298" y2="536.129" gradientUnits="userSpaceOnUse">
            <stop offset="0.089305" stop-color="#72BF44"/>
            <stop offset="0.694869" stop-color="#20731C"/>
          </linearGradient>
        </defs>
      </symbol>
    </svg>

    <div style="position: relative; overflow-x: hidden; overflow-y: overlay;">
      <figure class="green-figure d-none d-sm-flex" style="min-height: 640px">
        <div class="d-flex justify-start" style="width: 100%;">
          <svg viewBox="0 0 1440 663"
               preserveAspectRatio="xMidYMid slice"
               width="100%"
               height="100%"
          >
            <use xlink:href="#green-fone"/>
          </svg>
        </div>
      </figure>

      <figure class="green-figure d-flex d-sm-none" style="min-height: 800px;">
        <div class="d-flex justify-start" style="width: 100%;">
          <svg viewBox="0 0 360 709"
               preserveAspectRatio="xMidYMid slice"
               width="100%"
               height="100%"
          >
            <use xlink:href="#green-fone-small"/>
          </svg>
        </div>
      </figure>

      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <slot></slot>
      </div>
    </div>
  </v-container>
</template>

<style>
.green-figure {
  width: 100%!important;
  padding:0!important;
  overflow: hidden;
  /* text-align: center; */
}
/* .green-figure > div {
  display: flex;
  align: center;
  justify: center;
} */
/* svg.defs-only {
    display: block;
    position: absolute;
    height: 0;
    width: 0;
    margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
} */
</style>

<script>
export default {
  name: 'CentralGreen'
}
</script>
