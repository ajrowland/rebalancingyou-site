<template>
  <div class="form form--subscribe">
    <p>Subscribe to receive updates that cover items of interest, and trending topics.</p>
    <form action="https://kitchenstars.us12.list-manage.com/subscribe/post?u=1a935104817ba5bf1a65e8186&amp;id=ba4ae16724" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div>
        <label class="form__label" for="mce-EMAIL">Email Address <span class="form__required">*</span></label>
        <input class="form__field" type="email" value="" name="EMAIL" id="mce-EMAIL" required>
      </div>
      <div>
        <label class="form__label" for="mce-FNAME">First Name </label>
        <input class="form__field" type="text" value="" name="FNAME" id="mce-FNAME">
      </div>
      <div>
        <label class="form__label" for="mce-LNAME">Last Name </label>
        <input class="form__field" type="text" value="" name="LNAME" id="mce-LNAME">
      </div>
      <div id="mce-responses">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1a935104817ba5bf1a65e8186_ba4ae16724" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="form__submit"></div>
    </form>
  </div>
</template>

<style lang="scss">
.form {
  margin: 20px;

  &__required {
    color: $colour-coral;
  }

  &__field,
  &__submit {
    border: 0;
    border-radius: 0;
    padding: 10px;
    background: #eee;
    font-family: "Open Sans";
    font-size: 16px;
    display: block;
  }

  &__label {
    margin: 20px 0 10px 0;
    display: block;
  }

  &__field {
    width: calc(100% - 20px);
    border: 1px solid $colour-grey-light;
  }

  &__submit {
    margin-top: 20px;
    background: $colour-coral;
    color: $colour-white;
    text-transform: uppercase;
  }

  @include mq($from: tablet) {
    width: 50%;

    &__field {
      width: 400px;
    }
  }
}
</style>