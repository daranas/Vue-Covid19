<template>
  <footer>
    <p>Developed by DaranaSV <span>|</span> Data API by <a href="https://github.com/mathdroid/covid-19-api" target="_blank">mathdroid</a></p>
  </footer>
</template>

<style lang="scss">
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background: #ffffff;
    padding: 15px 0 16px;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    text-align: center;
    p {
      color: #8094ae;
      font-size: 12px;
      margin: 0;
      span {
        opacity: 0.4;
        margin-left: 5px;
        margin-right: 5px;
      }
      a {
        color: #8094ae;
      }
    }
  }
</style>
