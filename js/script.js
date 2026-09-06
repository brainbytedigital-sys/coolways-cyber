// Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => {
        if(el !== item){
          el.classList.remove('open');
          el.querySelector('.faq-q').setAttribute('aria-expanded','false');
          el.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
        ans.style.maxHeight = null;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // Contact form -> route to WhatsApp with prefilled details (no backend in this demo)
  function handleFormSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const business = document.getElementById('business').value;
    const pkg = document.getElementById('package').value;
    const message = document.getElementById('message').value;
    const text = `Hello, my name is ${name} (${phone}). Business: ${business || 'N/A'}. Package: ${pkg}. Details: ${message || 'N/A'}`;
    window.open(`https://wa.me/254795523227?text=${encodeURIComponent(text)}`, '_blank');
    return false;
  }
