<?php
/**
 * @file
 * Bootstrap 12 template for Display Suite.
 */
?>


<<?php print $layout_wrapper; print $layout_attributes; ?> class="<?php print $classes; ?>">
  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>
  <div class="row">
    <?php if (!empty($bg_image)): ?>
      <<?php print $central_wrapper; ?> class="col-sm-12 <?php print $img_placement; ?>" style="background-image: url(<?php print $bg_image; ?>)">
    <?php endif; ?>
    <?php if (empty($bg_image)): ?>
      <<?php print $central_wrapper; ?> class="col-sm-12 <?php print $central_classes; ?>">
    <?php endif; ?>
      <?php print $central; ?>
    </<?php print $central_wrapper; ?>>
  </div>
</<?php print $layout_wrapper ?>>


<!-- Needed to activate display suite support on forms -->
<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
