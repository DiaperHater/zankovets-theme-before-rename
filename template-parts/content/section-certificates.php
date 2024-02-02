<?php

$heading = get_sub_field('heading');
?>

<!-- Certificates -->
<section class="py-24 bg-neutral-900">
  <!-- Heading -->
  <div class="wrapper">
    <div class="box">
      <h2 class="heading text-white mb-16 text-center">
        <?= $heading ?>
      </h2>
    </div>
  </div>
  <!-- CertsCarousel -->
  <!-- If not enough Cert posts for Wider Screens Than add second Loop  -->
  <div class="swiper">
    <div class="swiper-wrapper items-center ease-linear">

      <?php
      $cert_posts_ids = get_posts(array(
        'post_type' => 'certificate',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'fields' => 'ids'
      ));
      ?>

      <?php foreach ($cert_posts_ids as $cert_id) {

        $image = get_field('image', $cert_id);
        $image_url = $image['sizes']['medium'];
        $image_alt = $image['alt']; ?>

        <!-- Slide -->
        <div class="swiper-slide max-w-[140px]">
          <!-- CertImage -->
          <img src="<?= $image_url ?>" alt="<?= $image_alt ?>" class="">
        </div>

      <?php } ?>
    </div>


  </div>

</section>