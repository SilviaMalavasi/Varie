// Video play visible //


if($('video').length) {
  const videos = gsap.utils.toArray('video');
  videos.forEach( video => {
                 
  ScrollTrigger.create({
      scrub: true,
      trigger: video,
      start: () => `- ${window.innerHeight*0.3}`,
      end: 'bottom top',
      onToggle: self => self.isActive ? video.play() : video.pause(),
      toggleActions: 'play pause reverse none'
   })

});
};  
