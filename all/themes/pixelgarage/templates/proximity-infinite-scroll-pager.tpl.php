<?php
/**
 * @file
 * Views infinite scroll pager template.
 */
?>
<ul class="pager pager--infinite-scroll <?php print $automatic_scroll_class ?>">
  <li class="pager__item">
    <div class="pager-plus"><span class="fa fa-plus"></span></div>
    <div class="pager-more"><?php print render($button); ?></div>
  </li>
</ul>
