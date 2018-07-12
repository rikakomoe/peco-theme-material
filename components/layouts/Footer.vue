<template>
  <div>
    <div class="to-top">
      <md-button class="md-icon-button md-raised">
        <md-icon>expand_less</md-icon>
      </md-button>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #9e9e9e;
    box-sizing: border-box;
    margin-top: 5pc;
    padding: 40px;
    height: 9em;
    background-color: #fff;
    align-items: center;
  }

  .to-top {
    position: relative;
  }

  .md-icon-button {
    position: absolute;
    right: 41px;
    top: -20px;
  }
</style>