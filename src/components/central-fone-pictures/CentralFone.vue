<template>
  <v-container fluid>
    <svg class="defs-only" xmlns="http://www.w3.org/2000/svg">
      <symbol id="first">
        <defs>
          <linearGradient
              id="green-gradient"
              data-name="green-gradient"
              x1="-283.84"
              y1="44.9"
              x2="1156.16"
              y2="708.4"
              gradientTransform="matrix(1, 0, 0, -1, 299.04, 696.9)"
              gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.09" stop-color="#72bf44"/>
            <stop offset="0.69" stop-color="#20731c"/>
          </linearGradient>
      </defs>
      <title>rects</title>
      <path class="cls-1" d="M0,93.5C332.66,16.9,605.07,58.36,817.5,64,1051.6,70.22,1172,57.5,1440,0V587.5c-210,43-437,44.74-622.5,25C558.86,585,319.33,611.3,0,663Z"/>
      <path class="cls-2" d="M0,93.5c332.66-76.6,605.07,10.36,817.5,16,234.1,6.22,354.5,0,622.5-57.5V561c-210,43-437,71.24-622.5,51.5C558.86,585,319.33,509.31,0,561Z"/>
      </symbol>
    </svg>

    <figure>
      <div>
        <svg viewBox="0 0 1440 680" preserveAspectRatio="none" width="1440" height="680">
          <use xlink:href="#first"/>
        </svg>
      </div>
    </figure>
  </v-container>
</template>

<style>
.cls-1 {
  fill: #94c578;
}

.cls-2 {
  fill: url(#green-gradient);
}
figure {
  width: 100%;
  margin:0!important;
  padding: 0!important;
  min-width: 100%!important;
}
figure > div {
  width: 100%!important;
  min-width: 100%!important;
  margin:0!important;
  padding: 0!important;
  overflow: hidden;
}
</style>
