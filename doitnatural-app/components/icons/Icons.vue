<template>
  <svg class="icons">
    <defs>
      <symbol id="user" viewBox="0 0 24 24">
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="list" viewBox="0 0 24 24">
        <path d="M8 6H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 18H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6H3.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 12H3.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 18H3.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="book-open" viewBox="0 0 24 24">
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="shopping-cart" viewBox="0 0 24 24">
        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="unlock" viewBox="0 0 24 24">
        <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 11V7.00003C6.99876 5.76008 7.45828 4.5639 8.28938 3.6437C9.12047 2.7235 10.2638 2.14493 11.4975 2.02032C12.7312 1.89571 13.9671 2.23393 14.9655 2.96934C15.9638 3.70475 16.6533 4.78488 16.9 6.00003" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="menu-burger" viewBox="0 0 24 24">
        <path d="M3 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 18H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="cross" viewBox="0 0 32 32">
        <path d="M24 8L8 24" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 8L24 24" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="logout" viewBox="0 0 24 24">
        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 17L21 12L16 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 12H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="eye" viewBox="0 0 24 24">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="eye-off" viewBox="0 0 24 24">
        <path d="M13.5765 14.12C13.3136 14.4147 12.9967 14.6512 12.6445 14.8151C12.2923 14.9791 11.9121 15.0673 11.5266 15.0744C11.1412 15.0815 10.7582 15.0074 10.4007 14.8565C10.0432 14.7056 9.7185 14.481 9.44587 14.1962C9.17324 13.9113 8.95832 13.5719 8.81392 13.1984C8.66953 12.8248 8.59861 12.4247 8.60541 12.0219C8.61222 11.6191 8.69659 11.2218 8.85351 10.8538C9.01043 10.4858 9.23668 10.1546 9.51875 9.88M17.2323 17.94C15.5963 19.243 13.6043 19.9649 11.5476 20C4.84855 20 1.02051 12 1.02051 12C2.21092 9.68189 3.862 7.65661 5.86298 6.06L17.2323 17.94ZM9.53789 4.24C10.1966 4.07888 10.8711 3.99834 11.5476 4C18.2467 4 22.0747 12 22.0747 12C21.4938 13.1356 20.801 14.2047 20.0076 15.19L9.53789 4.24Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.02051 1L22.0747 23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="add-user" viewBox="0 0 24 24">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 8V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23 11H17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <symbol id="green-check-icon" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="32" fill="#4C9B78" />
        <path
          d="M45.6533 21.76L26.88 40.5333L18.3467 32"
          stroke="white"
          stroke-width="5.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#4C9B78"
        />
      </symbol>

      <symbol id="double-cheveron-left" viewBox="0 0 24 24" fill="none">
        <path d="M11 7L6 12L11 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 7L13 12L18 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </symbol>

      <svg id="cheveron-left" viewBox="0 0 24 24" fill="none">
        <path d="M11 7L6 12L11 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <svg id="double-cheveron-right" viewBox="0 0 24 24" fill="none">
        <path d="M13 17L18 12L13 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 17L11 12L6 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <svg id="cheveron-right" viewBox="0 0 24 24" fill="none">
        <path d="M13 17L18 12L13 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <symbol id="bookmark" viewBox="0 0 24 24">
        <path
          d="M13.6742 16C13.5006 16 13.3314 15.9246 13.215 15.7867L8.00025 9.60386L2.7855 15.7867C2.62295 15.9795 2.35721 16.05 2.12045 15.9636C1.88363 15.8771 1.72607 15.6518 1.72607 15.3997V0.600446C1.72607 0.268856 1.99493 0 2.32652 0H13.674C14.0055 0 14.2744 0.268856 14.2744 0.600446V15.3996C14.2744 15.6517 14.1169 15.877 13.8801 15.9635C13.8127 15.9881 13.7431 16 13.6742 16ZM8.00025 8.07205C8.17721 8.07205 8.34515 8.15011 8.45923 8.28538L13.0736 13.7563V1.20089H2.92697V13.7563L7.54127 8.28538C7.65535 8.15011 7.82329 8.07205 8.00025 8.07205Z" fill="#0F8B8D"
        />
      </symbol>
    </defs>
  </svg>
</template>

<style>
.icons {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>