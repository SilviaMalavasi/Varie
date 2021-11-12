	  <?php $the_slug = 'contact-us'; 
	  $args = array('name' => $the_slug,'post_type' => 'post'); 
	  $my_posts = get_posts($args); 
	  $content=apply_filters('the_content', get_post_field('post_content', $my_posts[0]->ID)); 
	  echo $content; 
	  wp_reset_postdata();?>
